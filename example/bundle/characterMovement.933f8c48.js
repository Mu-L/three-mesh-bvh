var t=globalThis,e={},r={},i=t.parcelRequire4485;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in r){var i=r[t];delete r[t];var n={id:t,exports:{}};return e[t]=n,i.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequire4485=i),(0,i.register)("jAT47",function(t,e){Object.defineProperty(t.exports,"StaticGeometryGenerator",{get:()=>w,set:void 0,enumerable:!0,configurable:!0});var r=i("ilwiq");let n=new r.Vector3,o=new r.Vector3,s=new r.Vector3,a=new r.Vector4,l=new r.Vector3,u=new r.Vector3,m=new r.Vector4,f=new r.Vector4,c=new r.Matrix4,h=new r.Matrix4;function p(t,e){if(!t&&!e)return;let r=t.count===e.count,i=t.normalized===e.normalized,n=t.array.constructor===e.array.constructor,o=t.itemSize===e.itemSize;if(!r||!i||!n||!o)throw Error()}function d(t,e=null){let i=t.array.constructor,n=t.normalized,o=t.itemSize,s=null===e?t.count:e;return new r.BufferAttribute(new i(o*s),o,n)}function b(t,e,r=0){if(t.isInterleavedBufferAttribute){let i=t.itemSize;for(let n=0,o=t.count;n<o;n++){let o=n+r;e.setX(o,t.getX(n)),i>=2&&e.setY(o,t.getY(n)),i>=3&&e.setZ(o,t.getZ(n)),i>=4&&e.setW(o,t.getW(n))}}else{let i=e.array,n=i.constructor,o=i.BYTES_PER_ELEMENT*t.itemSize*r;new n(i.buffer,o,t.array.length).set(t.array)}}function g(t,e,r){let i=t.skeleton,n=t.geometry,o=i.bones,s=i.boneInverses;m.fromBufferAttribute(n.attributes.skinIndex,e),f.fromBufferAttribute(n.attributes.skinWeight,e),c.elements.fill(0);for(let t=0;t<4;t++){let e=f.getComponent(t);if(0!==e){let r=m.getComponent(t);h.multiplyMatrices(o[r].matrixWorld,s[r]),function(t,e,r){let i=t.elements,n=e.elements;for(let t=0,e=n.length;t<e;t++)i[t]+=n[t]*r}(c,h,e)}}return c.multiply(t.bindMatrix).premultiply(t.bindMatrixInverse),r.transformDirection(c),r}function x(t,e,r,i,n){l.set(0,0,0);for(let o=0,s=t.length;o<s;o++){let s=e[o],a=t[o];0!==s&&(u.fromBufferAttribute(a,i),r?l.addScaledVector(u,s):l.addScaledVector(u.sub(n),s))}n.add(l)}class y{constructor(t){this.matrixWorld=new r.Matrix4,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=t,this.update()}update(){let t=this.mesh,e=t.geometry,r=t.skeleton,i=(e.index?e.index.count:e.attributes.position.count)/3;if(this.matrixWorld.copy(t.matrixWorld),this.geometryHash=e.attributes.position.version,this.primitiveCount=i,r){r.boneTexture||r.computeBoneTexture(),r.update();let t=r.boneMatrices;this.boneMatrices&&this.boneMatrices.length===t.length?this.boneMatrices.set(t):this.boneMatrices=t.slice()}else this.boneMatrices=null}didChange(){let t=this.mesh,e=t.geometry,r=(e.index?e.index.count:e.attributes.position.count)/3;return!(this.matrixWorld.equals(t.matrixWorld)&&this.geometryHash===e.attributes.position.version&&function(t,e){if(null===t||null===e)return t===e;if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}(t.skeleton&&t.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===r)}}class w{constructor(t){Array.isArray(t)||(t=[t]);let e=[];t.forEach(t=>{t.traverseVisible(t=>{t.isMesh&&e.push(t)})}),this.meshes=e,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=Array(e.length).fill().map(()=>new r.BufferGeometry),this._diffMap=new WeakMap}getMaterials(){let t=[];return this.meshes.forEach(e=>{Array.isArray(e.material)?t.push(...e.material):t.push(e.material)}),t}generate(t=new r.BufferGeometry){let e=[],{meshes:i,useGroups:n,_intermediateGeometry:o,_diffMap:s}=this;for(let t=0,r=i.length;t<r;t++){let r=i[t],n=o[t],a=s.get(r);!a||a.didChange(r)?(this._convertToStaticGeometry(r,n),e.push(!1),a?a.update():s.set(r,new y(r))):e.push(!0)}if(0===o.length){t.setIndex(null);let e=t.attributes;for(let r in e)t.deleteAttribute(r);for(let e in this.attributes)t.setAttribute(this.attributes[e],new r.BufferAttribute(new Float32Array(0),4,!1))}else!function(t,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},i=new r.BufferGeometry){let n=null!==t[0].index,{useGroups:o=!1,updateIndex:s=!1,skipAttributes:a=[]}=e,l=new Set(Object.keys(t[0].attributes)),u={},m=0;i.clearGroups();for(let e=0;e<t.length;++e){let r=t[e],s=0;if(n!==(null!==r.index))throw Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(let t in r.attributes){if(!l.has(t))throw Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+t+'" attribute exists among all geometries, or in none of them.');void 0===u[t]&&(u[t]=[]),u[t].push(r.attributes[t]),s++}if(s!==l.size)throw Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(o){let t;if(n)t=r.index.count;else if(void 0!==r.attributes.position)t=r.attributes.position.count;else throw Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");i.addGroup(m,t,e),m+=t}}if(n){let e=!1;if(!i.index){let n=0;for(let e=0;e<t.length;++e)n+=t[e].index.count;i.setIndex(new r.BufferAttribute(new Uint32Array(n),1,!1)),e=!0}if(s||e){let e=i.index,r=0,n=0;for(let i=0;i<t.length;++i){let o=t[i],s=o.index;if(!0!==a[i])for(let t=0;t<s.count;++t)e.setX(r,s.getX(t)+n),r++;n+=o.attributes.position.count}}}for(let t in u){let e=u[t];if(!(t in i.attributes)){let r=0;for(let t in e)r+=e[t].count;i.setAttribute(t,d(u[t][0],r))}let r=i.attributes[t],n=0;for(let t=0,i=e.length;t<i;t++){let i=e[t];!0!==a[t]&&b(i,r,n),n+=i.count}}}(o,{useGroups:n,skipAttributes:e},t);for(let e in t.attributes)t.attributes[e].needsUpdate=!0;return t}_convertToStaticGeometry(t,e=new r.BufferGeometry){let i=t.geometry,l=this.applyWorldTransforms,u=this.attributes.includes("normal"),m=this.attributes.includes("tangent"),f=i.attributes,c=e.attributes;!e.index&&i.index&&(e.index=i.index.clone()),c.position||e.setAttribute("position",d(f.position)),u&&!c.normal&&f.normal&&e.setAttribute("normal",d(f.normal)),m&&!c.tangent&&f.tangent&&e.setAttribute("tangent",d(f.tangent)),p(i.index,e.index),p(f.position,c.position),u&&p(f.normal,c.normal),m&&p(f.tangent,c.tangent);let h=f.position,y=u?f.normal:null,w=m?f.tangent:null,A=i.morphAttributes.position,M=i.morphAttributes.normal,v=i.morphAttributes.tangent,G=i.morphTargetsRelative,B=t.morphTargetInfluences,S=new r.Matrix3;S.getNormalMatrix(t.matrixWorld),i.index&&e.index.array.set(i.index.array);for(let e=0,r=f.position.count;e<r;e++)n.fromBufferAttribute(h,e),y&&o.fromBufferAttribute(y,e),w&&(a.fromBufferAttribute(w,e),s.fromBufferAttribute(w,e)),B&&(A&&x(A,B,G,e,n),M&&x(M,B,G,e,o),v&&x(v,B,G,e,s)),t.isSkinnedMesh&&(t.applyBoneTransform(e,n),y&&g(t,e,o),w&&g(t,e,s)),l&&n.applyMatrix4(t.matrixWorld),c.position.setXYZ(e,n.x,n.y,n.z),y&&(l&&o.applyNormalMatrix(S),c.normal.setXYZ(e,o.x,o.y,o.z)),w&&(l&&s.transformDirection(t.matrixWorld),c.tangent.setXYZW(e,s.x,s.y,s.z,a.w));for(let t in this.attributes){let r=this.attributes[t];"position"!==r&&"tangent"!==r&&"normal"!==r&&r in f&&(c[r]||e.setAttribute(r,d(f[r])),p(f[r],c[r]),b(f[r],c[r]))}return 0>t.matrixWorld.determinant()&&function(t){let{index:e,attributes:r}=t;if(e)for(let t=0,r=e.count;t<r;t+=3){let r=e.getX(t),i=e.getX(t+2);e.setX(t,i),e.setX(t+2,r)}else for(let t in r){let e=r[t],i=e.itemSize;for(let t=0,r=e.count;t<r;t+=3)for(let r=0;r<i;r++){let i=e.getComponent(t,r),n=e.getComponent(t+2,r);e.setComponent(t,r,n),e.setComponent(t+2,r,i)}}}(e),e}}});
//# sourceMappingURL=characterMovement.933f8c48.js.map
