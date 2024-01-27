import { Box3, BufferAttribute } from 'three';
import { MeshBVH } from '../core/MeshBVH.js';
import { WorkerBase } from '../WorkerBase.js';

const DEFAULT_WORKER_COUNT = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : 4;
export class ParallelMeshBVHWorker extends WorkerBase {

	constructor() {

		const worker = new Worker( new URL( './generateAsync.worker.js', import.meta.url ), { type: 'module' } );
		super( worker );

		this.name = ParallelMeshBVHWorker;
		this.workerCount = Math.max( DEFAULT_WORKER_COUNT, 4 );

	}


	runTask( worker, geometry, options = {} ) {

		return new Promise( ( resolve, reject ) => {

			worker.onerror = e => {

				reject( new Error( `ParallelMeshBVHWorker: ${ e.message }` ) );

			};

			worker.onmessage = e => {

				const { data } = e;

				if ( data.error ) {

					reject( new Error( data.error ) );
					worker.onmessage = null;

				} else if ( data.serialized ) {

					const { serialized, position } = data;
					const bvh = MeshBVH.deserialize( serialized, geometry, { setIndex: false } );
					const boundsOptions = {
						setBoundingBox: true,
						...options,
					};

					// we need to replace the arrays because they're neutered entirely by the
					// webworker transfer.
					geometry.attributes.position.array = position;
					if ( geometry.index ) {

						geometry.index.array = serialized.index;

					} else {

						const newIndex = new BufferAttribute( serialized.index, 1, false );
						geometry.setIndex( newIndex );

					}

					if ( boundsOptions.setBoundingBox ) {

						geometry.boundingBox = bvh.getBoundingBox( new Box3() );

					}

					resolve( bvh );
					worker.onmessage = null;

				} else if ( options.onProgress ) {

					options.onProgress( data.progress );

				}

			};

			const index = geometry.index ? geometry.index.array : null;
			const position = geometry.attributes.position.array;

			if ( position.isInterleavedBufferAttribute || index && index.isInterleavedBufferAttribute ) {

				throw new Error( 'ParallelMeshBVHWorker: InterleavedBufferAttribute are not supported for the geometry attributes.' );

			}

			const transferable = [ position ];
			if ( index ) {

				transferable.push( index );

			}

			worker.postMessage( {

				operation: 'INIT',
				index,
				position,
				options: {
					...options,
					onProgress: null,
					includedProgressCallback: Boolean( options.onProgress ),
					groups: [ ... geometry.groups ],
				},

			}, transferable.map( arr => arr.buffer ).filter( v => ( typeof SharedArrayBuffer === 'undefined' ) || ! ( v instanceof SharedArrayBuffer ) ) );

		} );

	}

}
