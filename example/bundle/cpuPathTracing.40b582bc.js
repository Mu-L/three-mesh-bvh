let e,t,r,o,a,i,n,l,s,d,c,h,m,u,p,f,g,y,w,M;function b(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var x=globalThis,S={},B={},v=x.parcelRequire4485;null==v&&((v=function(e){if(e in S)return S[e].exports;if(e in B){var t=B[e];delete B[e];var r={id:e,exports:{}};return S[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){B[e]=t},x.parcelRequire4485=v);var C=v.register;C("27Lyk",function(e,t){b(e.exports,"register",()=>r,e=>r=e);var r,o=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)o.set(t[r],{baseUrl:e,path:t[r+1]})}}),C("RPVlj",function(e,t){b(e.exports,"FullScreenQuad",()=>i);var r=v("ilwiq");let o=new r.OrthographicCamera(-1,1,1,-1,0,1),a=new r.BufferGeometry;a.setAttribute("position",new r.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new r.Float32BufferAttribute([0,2,0,0,2,0],2));class i{constructor(e){this._mesh=new r.Mesh(a,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}}),C("4h5hN",function(e,t){b(e.exports,"acceleratedRaycast",()=>s),b(e.exports,"computeBoundsTree",()=>d),b(e.exports,"disposeBoundsTree",()=>c);var r=v("ilwiq"),o=v("b4YKL"),a=v("ff8ed");let i=new r.Ray,n=new r.Matrix4,l=r.Mesh.prototype.raycast;function s(e,t){if(this.geometry.boundsTree){if(void 0===this.material)return;n.copy(this.matrixWorld).invert(),i.copy(e.ray).applyMatrix4(n);let r=this.geometry.boundsTree;if(!0===e.firstHitOnly){let a=(0,o.convertRaycastIntersect)(r.raycastFirst(i,this.material),this,e);a&&t.push(a)}else{let a=r.raycast(i,this.material);for(let r=0,i=a.length;r<i;r++){let i=(0,o.convertRaycastIntersect)(a[r],this,e);i&&t.push(i)}}}else l.call(this,e,t)}function d(e){return this.boundsTree=new a.MeshBVH(this,e),this.boundsTree}function c(){this.boundsTree=null}}),C("b4YKL",function(e,t){b(e.exports,"convertRaycastIntersect",()=>r);function r(e,t,r){return null===e?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(r.ray.origin),e.object=t,e.distance<r.near||e.distance>r.far)?null:e}}),C("8todg",function(e,t){b(e.exports,"GenerateMeshBVHWorker",()=>i);var r=v("ilwiq"),o=v("ff8ed"),a=v("77YCt");class i extends a.WorkerBase{constructor(){super(new Worker(v("bSef7"))),this.name="GenerateMeshBVHWorker"}runTask(e,t,a={}){return new Promise((i,n)=>{if(t.getAttribute("position").isInterleavedBufferAttribute||t.index&&t.index.isInterleavedBufferAttribute)throw Error("GenerateMeshBVHWorker: InterleavedBufferAttribute are not supported for the geometry attributes.");e.onerror=e=>{n(Error(`GenerateMeshBVHWorker: ${e.message}`))},e.onmessage=l=>{let{data:s}=l;if(s.error)n(Error(s.error)),e.onmessage=null;else if(s.serialized){let{serialized:n,position:l}=s,d=(0,o.MeshBVH).deserialize(n,t,{setIndex:!1}),c=Object.assign({setBoundingBox:!0},a);if(t.attributes.position.array=l,t.index)t.index.array=n.index;else{let e=new r.BufferAttribute(n.index,1,!1);t.setIndex(e)}c.setBoundingBox&&(t.boundingBox=d.getBoundingBox(new r.Box3)),i(d),e.onmessage=null}else a.onProgress&&a.onProgress(s.progress)};let l=t.index?t.index.array:null,s=t.attributes.position.array,d=[s];l&&d.push(l),e.postMessage({index:l,position:s,options:{...a,onProgress:null,includedProgressCallback:!!a.onProgress,groups:[...t.groups]}},d.map(e=>e.buffer).filter(e=>"undefined"==typeof SharedArrayBuffer||!(e instanceof SharedArrayBuffer)))})}}}),C("77YCt",function(e,t){b(e.exports,"WorkerBase",()=>r);class r{constructor(e){this.name="WorkerBase",this.running=!1,this.worker=e,this.worker.onerror=e=>{if(e.message)throw Error(`${this.name}: Could not create Web Worker with error "${e.message}"`);throw Error(`${this.name}: Could not create Web Worker.`)}}runTask(){}generate(...e){if(this.running)throw Error("GenerateMeshBVHWorker: Already running job.");if(null===this.worker)throw Error("GenerateMeshBVHWorker: Worker has been disposed.");this.running=!0;let t=this.runTask(this.worker,...e);return t.finally(()=>{this.running=!1}),t}dispose(){this.worker.terminate(),this.worker=null}}}),C("bSef7",function(e,t){var r=v("7ryUf");let o=new URL("generateMeshBVH.worker.17f4c1c5.js",import.meta.url);e.exports=r(o.toString(),o.origin,!0)}),C("7ryUf",function(e,t){e.exports=function(e,t,r){if(t===self.location.origin)return e;var o=r?"import "+JSON.stringify(e)+";":"importScripts("+JSON.stringify(e)+");";return URL.createObjectURL(new Blob([o],{type:"application/javascript"}))}}),v("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["bTAAs","cpuPathTracing.40b582bc.js","6J6WW","generateMeshBVH.worker.17f4c1c5.js","acVmZ","generateMeshBVH.worker.aad48e6e.js","gr8Yf","asyncGenerate.22609466.js","j19h5","asyncGenerate.e8b1599c.js","30Pwg","asyncGenerate.77ce35af.js","2tzBs","characterMovement.89c1b67b.js","6UuCC","characterMovement.5fc59dbe.js","6mMEU","characterMovement.fc8349f1.js","i0zVc","clippedEdges.dcf40b33.js"]'));var z=v("ilwiq"),V=v("5Rd1x"),T=v("7lx9d"),k=v("7ePFa"),A=v("RPVlj"),I=v("kp7Te"),z=v("ilwiq");const W=new z.Vector3,F=new z.Vector3,P=new z.Vector3,R=[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]];function G(e,t){var r;return(r=Math.pow((1-t)/(1+t),2))+(1-r)*Math.pow(1-e,5)}function H(e,t,r){return r.addVectors(e,t).normalize()}function j(e,t,r){return e.dot(t)>0==e.dot(r)>0}var z=v("ilwiq");const L=new z.Vector3,U=new z.Vector3,E=new z.Vector3,D=new z.Vector3,q=new z.Vector3(0,0,1),N=Math.PI;function O(e,t){let r=Math.tan(e);return(-1+Math.sqrt(1+t*t*(r*r)))/2}function $(e,t){let r=t*t,o=e.z;return 0===o?0:r/(Math.PI*Math.pow(o,4)*Math.pow(r+Math.pow(Math.tan(Math.acos(e.z)),2),2))}var z=v("ilwiq");const _=new z.Vector3,Y=new z.Vector3,J=new z.Color,X=new z.Color(16777215);function Z(e,t,r,o){let a=t.filteredSurfaceRoughness;!function(e,t,r,o,a,i){let n=L.set(t*e.x,r*e.y,e.z).normalize(),l=n.z<.9999?U.crossVectors(n,q).normalize():U.set(1,0,0),s=E.crossVectors(l,n),d=1/(1+n.z),c=Math.sqrt(o),h=a<d?a/d*N:N+(a-d)/(1-d)*N,m=c*Math.cos(h),u=c*Math.sin(h)*(a<d?1:n.z);l.multiplyScalar(m),s.multiplyScalar(u);let p=D.addVectors(l,s).addScaledVector(n,Math.sqrt(Math.max(0,1-m*m-u*u)));p.x*=t,p.y*=r,p.z=Math.max(0,p.z),p.normalize(),i.copy(p)}(e,a,a,Math.random(),Math.random(),Y),o.copy(e).reflect(Y).multiplyScalar(-1)}function K(e,t,r,o){let{ior:a,metalness:i,transmission:n}=r,{frontFace:l}=o,s=l?1/a:a,d=Math.min(e.z,1),c=Math.sqrt(1-d*d),h=G(d,s);s*c>1&&(h=1);let m=0,u=0,p=0;t.z<0?p=function(e,t,r,o){let{ior:a}=r,{frontFace:i}=o,n=i?1/a:a,l=Math.min(e.z,1),s=Math.sqrt(1-l*l),d=G(l,n);return n*s>1?0:1/(1-d)}(e,0,r,o):(m=function(e,t,r,o){let a=o.filteredSurfaceRoughness;return H(t,e,Y),function(e,t,r){let o=Math.acos(e.z),a=$(t,r);return 1/(1+O(o,r))*a*Math.max(0,e.dot(t))/e.z}(t,Y,a)/(4*t.dot(Y))}(e,t,0,o),u=t.z/Math.PI);let f=(0,z.MathUtils).lerp(h,1,i),g=.5+.5*i;return m*n*f+p*n*(1-f)+m*(1-n)*g+u*(1-n)*(1-g)}function Q(e,t,r,o,a){t.z<0?function(e,t,r,o,a){let{metalness:i,transmission:n}=r;a.copy(r.color).multiplyScalar(1-i).multiplyScalar(n)}(0,0,r,0,a):(!function(e,t,r,o,a){let{metalness:i,transmission:n}=r;a.copy(r.color).multiplyScalar((1-i)*t.z/Math.PI/Math.PI).multiplyScalar(1-n)}(0,t,r,0,a),a.multiplyScalar(1-r.transmission),function(e,t,r,o,a){let{metalness:i,ior:n}=r,{frontFace:l}=o,s=o.filteredSurfaceRoughness;H(e,t,Y);let d=l?1/n:n,c=function(e,t,r){let o=Math.acos(e.z),a=Math.acos(t.z);return 1/(1+O(o,r)+O(a,r))}(t,e,s),h=$(Y,s),m=G(t.dot(Y),d),u=Math.min(e.z,1);d*Math.sqrt(1-u*u)>1&&(m=1),a.lerpColors(X,r.color,i).multiplyScalar(c*h/(4*Math.abs(t.z*e.z))).multiplyScalar((0,z.MathUtils).lerp(m,1,i)).multiplyScalar(t.z)}(e,t,r,o,J),a.add(J))}var ee=v("jiuw3"),et=v("4h5hN"),er=v("Mleu6"),eo=v("8todg");z.Mesh.prototype.raycast=et.acceleratedRaycast,z.BufferGeometry.prototype.computeBoundsTree=et.computeBoundsTree,z.BufferGeometry.prototype.disposeBoundsTree=et.disposeBoundsTree;const ea=new z.Triangle,ei=new z.Vector3,en=new z.Vector3,el=new z.Vector3,es=new z.Vector3,ed=new z.Spherical,ec=new z.Matrix4,eh=new z.Matrix4,em=new z.Vector3,eu=new z.Color,ep=new z.Vector3,ef={},eg={model:"Dragon",resolution:{resolutionScale:.5,smoothImageScaling:!1,stretchImage:!0},pathTracing:{pause:!1,displayScanLine:!1,antialiasing:!0,bounces:10,filterGlossyFactor:.5,smoothNormals:!0,directLightSampling:!0},material:{color:"#0099ff",emissive:"#000000",emissiveIntensity:1,roughness:.1,metalness:0,ior:1.8,transmission:0},floor:{enable:!0,color:"#7f7f7f",roughness:.1,metalness:.1,width:10,height:10},light:{enable:!0,position:"Diagonal",intensity:30,color:"#ffffff",width:1,height:1},environment:{skyMode:"sky",skyIntensity:.025}};function ey(e,t=!0){let r=[],o=[];for(let a=0,i=e.length;a<i;a++){let i=e[a],n=e[a].geometry,l=t?n.clone():t;i.updateMatrixWorld(),l.applyMatrix4(i.matrixWorld);let s=l.attributes.position.count,d=new Uint8Array(s).fill(a);l.setAttribute("materialIndex",new z.BufferAttribute(d,1,!1)),r.push(l),o.push(i.material)}return{geometry:k.mergeBufferGeometries(r,!1),materials:o}}function ew(){var e,o;t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix();let a=window.devicePixelRatio,i=eg.resolution.resolutionScale;eg.resolution.stretchImage?(m.style.width=`${window.innerWidth}px`,m.style.height=`${window.innerHeight}px`,r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(a*i)):(m.style.width=`${window.innerWidth*i}px`,m.style.height=`${window.innerHeight*i}px`,r.setSize(Math.floor(window.innerWidth*i),Math.floor(window.innerHeight*i)),r.setPixelRatio(a)),e=Math.floor(window.innerWidth*a*i),o=Math.floor(window.innerHeight*a*i),n&&n.image.width===e&&n.image.height===o||(n&&n.dispose(),n=new z.DataTexture(new Float32Array(e*o*4),e,o,z.RGBAFormat,z.FloatType),eM()),r.domElement.style.imageRendering=eg.resolution.smoothImageScaling?"auto":"pixelated"}function eM(){n.image.data.fill(0),n.needsUpdate=!0,l=0,s=function*(){let{width:e,height:r,data:o}=n.image,a=parseInt(eg.pathTracing.bounces),i=parseFloat(eg.environment.skyIntensity),s=eg.environment.skyMode,d=eg.pathTracing.smoothNormals,m=new z.Color,u=new z.Color,b=new z.Vector3,x=new z.Vector3,S=new z.Vector2,B=Array(a).fill().map(()=>new z.Ray),v=new z.Vector3(0,0,1).transformDirection(w.matrixWorld),C=w.scale.x,V=w.scale.y,T=new z.Raycaster;T.firstHitOnly=!0;let k=new z.Ray,A={pdf:0,color:new z.Color,direction:new z.Vector3},I=performance.now();for(p=performance.now(),f=0,c=100,h.style.visibility=eg.pathTracing.displayScanLine?"visible":"hidden",g.material.side=z.DoubleSide,y.forEach(e=>{e.side=z.DoubleSide});;){let n=0,h=0;if(eg.pathTracing.antialiasing){let t=l%R.length;[n,h]=R[t],n=n/16/e,h=h/16/r}for(let p=r-1;p>=0;p--)for(let R=0;R<e;R++){S.set(n+R/(e-1),h+p/(r-1)),T.setFromCamera({x:2*S.x-1,y:2*S.y-1},t),ep.set(0,0,-1).transformDirection(t.matrixWorld),k.direction.copy(T.ray.direction),k.origin.copy(T.ray.origin).addScaledVector(T.ray.direction,t.near/T.ray.direction.dot(ep)),m.set(0),function(e,t){let r=e,o=0,n=0;u.set(16777215);for(let e=0;e<a;e++){let a=null;T.ray.copy(r);let c=[g];if(eg.light.enable&&c.push(w),eg.floor.enable&&c.push(M),a=T.intersectObjects(c,!0)[0]){if(a.object===w){if(0===e){let e=w.material.color;t.r=Math.min(e.r,1),t.g=Math.min(e.g,1),t.b=Math.min(e.b,1)}else if(0>r.direction.dot(v)){let e=o/(o+-(a.distance*a.distance/(C*V*r.direction.dot(v))));t.r+=e*u.r*w.material.color.r,t.g+=e*u.g*w.material.color.g,t.b+=e*u.b*w.material.color.b}break}{var l;!function(e,t,r){let o=e.object,a=o.geometry.attributes.position,i=o.geometry.attributes.normal,n=o.geometry.attributes.materialIndex,l=e.face,s=e.face.normal;if(d){let t=e.point;ea.a.fromBufferAttribute(a,l.a),ea.b.fromBufferAttribute(a,l.b),ea.c.fromBufferAttribute(a,l.c),ei.fromBufferAttribute(i,l.a),en.fromBufferAttribute(i,l.b),el.fromBufferAttribute(i,l.c),ea.getBarycoord(t,es),x.setScalar(0).addScaledVector(ei,es.x).addScaledVector(en,es.y).addScaledVector(el,es.z).normalize()}else x.copy(s);s.transformDirection(o.matrixWorld),x.transformDirection(o.matrixWorld);let c=0>s.dot(t.direction);c||(x.multiplyScalar(-1),s.multiplyScalar(-1));let h=o.material;n&&(h=y[n.getX(l.a)]),e.material=h,e.normal=x,e.geometryNormal=s,e.frontFace=c,e.filteredSurfaceRoughness=Math.min(Math.max(1e-6,h.roughness,r*eg.pathTracing.filterGlossyFactor*5),1)}(a,r,n);let{material:i}=a,s=B[e];if(Math.abs((l=a.normal).x)>.5?W.set(0,1,0):W.set(1,0,0),F.crossVectors(l,W).normalize(),P.crossVectors(l,F).normalize(),ec.makeBasis(P,F,l),eh.copy(ec).invert(),eg.light.enable&&(ep.set(Math.random()-.5,Math.random()-.5,0).applyMatrix4(w.matrixWorld),s.origin.copy(a.point).addScaledVector(a.geometryNormal,1e-7),s.direction.subVectors(ep,s.origin).normalize(),0>s.direction.dot(v)&&j(s.direction,a.normal,a.geometryNormal))){let e=C*V,o=-(s.origin.distanceToSquared(ep)/(e*s.direction.dot(v)));T.ray.copy(s);let n=T.intersectObjects(c,!0)[0];if(n&&n.object===w){em.copy(r.direction).applyMatrix4(eh).multiplyScalar(-1).normalize(),ep.copy(s.direction).applyMatrix4(eh).normalize(),em.normalize(),Q(em,ep,i,a,eu);let e=o/(K(em,ep,i,a)+o);t.r+=w.material.color.r*u.r*eu.r*e/o,t.g+=w.material.color.g*u.g*eu.g*e/o,t.b+=w.material.color.b*u.b*eu.b*e/o}}em.copy(r.direction).applyMatrix4(eh).multiplyScalar(-1).normalize(),function(e,t,r,o){let a=o.direction,{ior:i,metalness:n,transmission:l}=r,{frontFace:s}=t,d=s?1/i:i,c=Math.min(e.z,1),h=Math.sqrt(1-c*c),m=G(c,d);(d*h>1&&(m=1),Math.random()<l)?Math.random()<(0,z.MathUtils).lerp(m,1,n)?Z(e,t,r,a):function(e,t,r,o){var a,i;let n;let{roughness:l,ior:s}=r,{frontFace:d}=t;_.copy(e).multiplyScalar(-1),a=new z.Vector3(0,0,1),i=d?1/s:s,n=Math.min(-_.dot(a),1),W.copy(_).addScaledVector(a,n).multiplyScalar(i),o.copy(a).multiplyScalar(-Math.sqrt(Math.abs(1-W.lengthSq()))).add(W),_.randomDirection().multiplyScalar(l),o.add(_)}(e,t,r,a):Math.random()<.5+.5*n?Z(e,t,r,a):(a.randomDirection(),a.z+=1,a.normalize()),o.pdf=K(e,a,r,t),Q(e,a,r,t,o.color)}(em,a,i,A),b.addVectors(em,A.direction).normalize(),n+=Math.sin(Math.acos(b.z)),s.direction.copy(A.direction).applyMatrix4(ec).normalize();let h=0>s.direction.dot(a.geometryNormal);s.origin.copy(a.point).addScaledVector(a.geometryNormal,h?-.0000001:1e-7);let{emissive:m,emissiveIntensity:p}=i;if(t.r+=p*m.r*u.r,t.g+=p*m.g*u.g,t.b+=p*m.b*u.b,A.pdf<=0||!j(s.direction,a.normal,a.geometryNormal))break;A.color.multiplyScalar(1/A.pdf),u.multiply(A.color),r=s,o=A.pdf}}else{(function(e,t){if("checkerboard"===s){ed.setFromVector3(e);let r=Math.PI/10,o=Math.floor(ed.theta/r)%2==0,a=Math.floor(ed.phi/r)%2==0;t.set(o===a?0:16777215).multiplyScalar(1.5),t.multiplyScalar(i)}else if("sun"===s){ei.setScalar(1).normalize();let r=Math.max(0,e.dot(ei)+1)/2;if(r*=r,t.r=z.MathUtils.lerp(.01,.5,r),t.g=z.MathUtils.lerp(.01,.7,r),t.b=z.MathUtils.lerp(.01,1,r),r>.95){let e=(r-.95)/.05;e*=e,t.r=z.MathUtils.lerp(.5,10,e),t.g=z.MathUtils.lerp(.7,10,e),t.b=z.MathUtils.lerp(1,10,e)}t.multiplyScalar(i)}else{let r=(e.y+.5)/2;t.r=z.MathUtils.lerp(1,.5,r),t.g=z.MathUtils.lerp(1,.7,r),t.b=z.MathUtils.lerp(1,1,r),t.multiplyScalar(i)}})(r.direction,eu),eu.multiply(u),t.add(eu);break}}}(k,m);let H=(p*e+R)*4,L=o[H+0],U=o[H+1],E=o[H+2];o[H+0]+=(m.r-L)/(l+1),o[H+1]+=(m.g-U)/(l+1),o[H+2]+=(m.b-E)/(l+1),o[H+3]=1;let D=performance.now()-I;D>16&&(f+=D,c=100*p/r,yield,I=performance.now())}l++}}(),d=0,h.style.visibility="hidden",c=100,w.scale.set(eg.light.width,eg.light.height,1),w.material.color.set(eg.light.color).multiplyScalar(eg.light.intensity),w.visible=eg.light.enable,M.scale.set(eg.floor.width,eg.floor.height,1),M.material.color.set(eg.floor.color),M.material.roughness=Math.pow(eg.floor.roughness,2),M.material.metalness=eg.floor.metalness,M.visible=eg.floor.enable}function eb(e){let t=.001*(e=e||0),r=Math.floor(t/60),o=((t-=60*r)<10?"0":"")+t.toFixed(3);return`${(r<10?"0":"")+r}m ${o}s`}(function(){(r=new z.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(0,1),r.outputEncoding=z.sRGBEncoding,(m=document.createElement("div")).style.position="absolute",m.style.inset="0",m.style.margin="auto",m.style.zIndex="-1",document.body.appendChild(m),m.appendChild(r.domElement),(h=document.createElement("div")).style.width="100%",h.style.position="absolute",h.style.borderBottom="1px solid #e91e63",h.style.visibility="hidden",m.appendChild(h),u=document.getElementById("output"),(i=new A.FullScreenQuad(new z.MeshBasicMaterial)).material.transparent=!0,e=new z.Scene,(t=new z.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50)).position.set(-2.5,1.5,2.5),t.far=100,t.updateProjectionMatrix(),o=new z.HemisphereLight(16777215,6710886,1),e.add(o),(w=new z.Mesh(new z.PlaneBufferGeometry(1,1,1,1),new z.MeshBasicMaterial({side:z.DoubleSide}))).position.set(2,2,2),w.lookAt(0,0,0),e.add(w),(M=new z.Mesh(new z.PlaneBufferGeometry(1,1,1,1),new z.MeshStandardMaterial({side:z.DoubleSide}))).rotation.x=-Math.PI/2,M.scale.setScalar(1),M.material.ior=1.6,M.material.transmission=0,e.add(M),new V.OrbitControls(t,r.domElement).addEventListener("change",eM),window.addEventListener("resize",ew,!1),ew(),ef.Sphere=null;{let{geometry:t,materials:r}=ey([new z.Mesh(new z.SphereGeometry(1,100,50),new z.MeshStandardMaterial)],!0),o=new z.Mesh(t,new z.MeshStandardMaterial);e.add(o),t.computeBoundsTree({strategy:er.SAH,maxLeafTris:1}),ef.Sphere={mesh:o,materials:r,floorHeight:-1}}ef["Cornell Box"]=null;{let t=new z.PlaneBufferGeometry(1,1,1,1),r=new z.Mesh(t,new z.MeshStandardMaterial({color:60928,side:z.DoubleSide}));r.rotation.y=Math.PI/2,r.position.x=-2,r.scale.setScalar(4),r.updateMatrixWorld(!0);let o=new z.Mesh(t,new z.MeshStandardMaterial({color:15597568}));o.rotation.y=Math.PI/2,o.position.x=2,o.scale.setScalar(4),o.updateMatrixWorld(!0);let a=new z.Mesh(t,new z.MeshStandardMaterial({color:15658734}));a.position.z=-2,a.scale.setScalar(4),a.updateMatrixWorld(!0);let i=new z.Mesh(t.clone(),new z.MeshStandardMaterial({color:15658734}));i.rotation.x=Math.PI/2,i.position.y=2,i.scale.setScalar(4),i.updateMatrixWorld(!0);let n=new z.Mesh(new z.BoxGeometry(1,2,1),new z.MeshStandardMaterial({side:z.DoubleSide}));n.position.y=-1,n.position.x=-.6,n.position.z=-.25,n.rotation.y=Math.PI/4;let l=new z.Mesh(new z.BoxGeometry(1,1,1),new z.MeshStandardMaterial({side:z.DoubleSide}));l.position.y=-1.5,l.position.x=.75,l.position.z=.5,l.rotation.y=-Math.PI/8;let{geometry:s,materials:d}=ey([n,l,r,o,a,i],!0),c=new z.Mesh(s,new z.MeshStandardMaterial);e.add(c),s.computeBoundsTree({strategy:er.SAH,maxLeafTris:1}),ef["Cornell Box"]={mesh:c,materials:d,floorHeight:-2}}ef.Dragon=null,new(0,T.GLTFLoader)().load("../models/DragonAttenuation.glb",t=>{let r;t.scene.traverse(e=>{e.isMesh&&"Dragon"===e.name&&(r=e)}),r.material=new z.MeshStandardMaterial,r.geometry.center().scale(.25,.25,.25).rotateX(Math.PI/2),r.position.set(0,0,0),r.scale.set(1,1,1),r.quaternion.identity();let{geometry:o,materials:a}=ey([r],!0),i=new z.Mesh(o,new z.MeshStandardMaterial),n=new eo.GenerateMeshBVHWorker;n.generate(o,{maxLeafTris:1,strategy:er.SAH}).then(t=>{ef.Dragon={mesh:i,materials:a,floorHeight:r.geometry.boundingBox.min.y},o.boundsTree=t,n.dispose(),e.add(i)})}),ef.Engine=null,new(0,T.GLTFLoader)().setMeshoptDecoder(I.MeshoptDecoder).load("../models/internal_combustion_engine/model.gltf",t=>{let r=t.scene.children[0],o=r.geometry,a=new z.BufferGeometry,i=o.attributes.position,n=o.attributes.normal,l=new z.BufferAttribute(new Float32Array(3*i.count),3,!1),s=new z.BufferAttribute(new Float32Array(3*n.count),3,!1),d=new z.Vector3;for(let e=0,t=i.count;e<t;e++)d.fromBufferAttribute(i,e),l.setXYZ(e,d.x,d.y,d.z),d.fromBufferAttribute(n,e),d.multiplyScalar(1/127),s.setXYZ(e,d.x,d.y,d.z);r.scale.multiplyScalar(5),r.updateMatrixWorld(),a.setAttribute("position",l),a.setAttribute("normal",s),a.setAttribute("materialIndex",new z.BufferAttribute(new Uint8Array(l.count),1,!1)),a.setIndex(o.index),a.applyMatrix4(r.matrixWorld).center(),a.computeBoundingBox();let c=new z.Mesh(a,new z.MeshStandardMaterial),h=new eo.GenerateMeshBVHWorker;h.generate(a,{maxLeafTris:1,strategy:er.CENTER}).then(t=>{ef.Engine={mesh:c,materials:[new z.MeshStandardMaterial],floorHeight:a.boundingBox.min.y},a.boundsTree=t,h.dispose(),e.add(c)})}),l=0,a=new z.Clock;let n=new ee.GUI;n.add(eg,"model",Object.keys(ef)).onChange(eM);let s=n.addFolder("resolution");s.add(eg.resolution,"resolutionScale",.1,1,.01).onChange(ew),s.add(eg.resolution,"smoothImageScaling").onChange(ew),s.add(eg.resolution,"stretchImage").onChange(ew),s.open();let d=n.addFolder("path tracing");d.add(eg.pathTracing,"pause"),d.add(eg.pathTracing,"displayScanLine").onChange(e=>{h.style.visibility=e?"visible":"hidden"}),d.add(eg.pathTracing,"antialiasing").onChange(eM),d.add(eg.pathTracing,"directLightSampling").onChange(eM),d.add(eg.pathTracing,"smoothNormals").onChange(eM),d.add(eg.pathTracing,"bounces",1,50,1).onChange(eM),d.add(eg.pathTracing,"filterGlossyFactor",0,1,.001).onChange(eM),d.open();let c=n.addFolder("model");c.addColor(eg.material,"color").onChange(eM),c.addColor(eg.material,"emissive").onChange(eM),c.add(eg.material,"emissiveIntensity",0,5,.001).onChange(eM),c.add(eg.material,"roughness",0,1,.001).onChange(eM),c.add(eg.material,"metalness",0,1,.001).onChange(eM),c.add(eg.material,"transmission",0,1,.001).onChange(eM),c.add(eg.material,"ior",1,2.5,.001).onChange(eM),c.open();let p=n.addFolder("floor");p.add(eg.floor,"enable").onChange(eM),p.addColor(eg.floor,"color").onChange(eM),p.add(eg.floor,"roughness",0,1,.001).onChange(eM),p.add(eg.floor,"metalness",0,1,.001).onChange(eM),p.add(eg.floor,"width",3,20,.001).onChange(eM),p.add(eg.floor,"height",3,20,.001).onChange(eM);let f=n.addFolder("light");f.add(eg.light,"enable").onChange(eM),f.addColor(eg.light,"color").onChange(eM),f.add(eg.light,"intensity",0,100,.001).onChange(eM),f.add(eg.light,"width",0,5,.001).onChange(eM),f.add(eg.light,"height",0,5,.001).onChange(eM),f.add(eg.light,"position",["Diagonal","Above","Below"]).onChange(eM);let g=n.addFolder("environment");g.add(eg.environment,"skyMode",["sky","sun","checkerboard"]).onChange(eM),g.add(eg.environment,"skyIntensity",0,5,.001).onChange(eM),ew()})(),function o(){for(let e in requestAnimationFrame(o),ef)ef[e]&&(ef[e].mesh.visible=!1);if(ef[eg.model]){let e=ef[eg.model];e.mesh.visible=!0,g=e.mesh,y=e.materials,M.position.y=e.floorHeight,y.forEach(e=>{void 0===e.ior&&(e.ior=1),void 0===e.transmission&&(e.transmission=0)});let t=y[0];switch(t.color.set(eg.material.color).convertSRGBToLinear(),t.emissive.set(eg.material.emissive).convertSRGBToLinear(),t.emissiveIntensity=parseFloat(eg.material.emissiveIntensity),t.ior=parseFloat(eg.material.ior),t.metalness=parseFloat(eg.material.metalness),t.transmission=parseFloat(eg.material.transmission),t.roughness=Math.pow(parseFloat(eg.material.roughness),2),eg.light.position){case"Below":w.rotation.set(-Math.PI/2,0,0),w.position.set(0,e.floorHeight+.001,0);break;case"Above":w.rotation.set(Math.PI/2,0,0),w.position.set(0,1.999,0);break;default:w.position.set(2,2,2),w.lookAt(0,0,0)}}else g=null,y=null,M.position.y=0;let m=0;d>150&&(m=Math.min((d-150)/150,1)),h.style.bottom=`${c}%`,eg.resolution.stretchImage?h.style.borderBottomWidth=`${Math.ceil(1/eg.resolution.resolutionScale)}px`:h.style.borderBottomWidth="1px",r.render(e,t),r.autoClear=!1,i.material.map=n,i.material.opacity=m,i.render(r),r.autoClear=!0,g&&!eg.pathTracing.pause&&s.next(),n.needsUpdate=!0,r.compile(i._mesh),d<300&&(d+=1e3*a.getDelta()),u.innerText=`completed samples : ${l}
computation time  : ${eb(f)}
elapsed time      : ${eb(performance.now()-p)}`}();
//# sourceMappingURL=cpuPathTracing.40b582bc.js.map
