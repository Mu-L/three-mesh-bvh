let e,t,r,n,i,s,a,o,l;function d(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var p=globalThis,c={},u={},h=p.parcelRequire4485;null==h&&((h=function(e){if(e in c)return c[e].exports;if(e in u){var t=u[e];delete u[e];var r={id:e,exports:{}};return c[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){u[e]=t},p.parcelRequire4485=h);var f=h.register;f("hBOJ2",function(e,t){d(e.exports,"default",()=>r);var r=function(){var e=0,t=document.createElement("div");function n(e){return t.appendChild(e.dom),e}function i(r){for(var n=0;n<t.children.length;n++)t.children[n].style.display=n===r?"block":"none";e=r}t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(r){r.preventDefault(),i(++e%t.children.length)},!1);var s=(performance||Date).now(),a=s,o=0,l=n(new r.Panel("FPS","#0ff","#002")),d=n(new r.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=n(new r.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:n,showPanel:i,begin:function(){s=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(d.update(e-s,200),e>a+1e3&&(l.update(1e3*o/(e-a),100),a=e,o=0,p)){var t=performance.memory;p.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){s=this.end()},domElement:t,setMode:i}};r.Panel=function(e,t,r){var n=1/0,i=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,d=3*a,p=2*a,c=3*a,u=15*a,h=74*a,f=30*a,m=document.createElement("canvas");m.width=o,m.height=l,m.style.cssText="width:80px;height:48px";var y=m.getContext("2d");return y.font="bold "+9*a+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=r,y.fillRect(0,0,o,l),y.fillStyle=t,y.fillText(e,d,p),y.fillRect(c,u,h,f),y.fillStyle=r,y.globalAlpha=.9,y.fillRect(c,u,h,f),{dom:m,update:function(l,g){n=Math.min(n,l),i=Math.max(i,l),y.fillStyle=r,y.globalAlpha=1,y.fillRect(0,0,o,u),y.fillStyle=t,y.fillText(s(l)+" "+e+" ("+s(n)+"-"+s(i)+")",d,p),y.drawImage(m,c+a,u,h-a,f,c,u,h-a,f),y.fillRect(c+h-a,u,a,f),y.fillStyle=r,y.globalAlpha=.9,y.fillRect(c+h-a,u,a,s((1-l/g)*f))}}}}),f("4h5hN",function(e,t){d(e.exports,"acceleratedRaycast",()=>l),d(e.exports,"computeBoundsTree",()=>p),d(e.exports,"disposeBoundsTree",()=>c);var r=h("ilwiq"),n=h("b4YKL"),i=h("ff8ed");let s=new r.Ray,a=new r.Matrix4,o=r.Mesh.prototype.raycast;function l(e,t){if(this.geometry.boundsTree){if(void 0===this.material)return;a.copy(this.matrixWorld).invert(),s.copy(e.ray).applyMatrix4(a);let r=this.geometry.boundsTree;if(!0===e.firstHitOnly){let i=(0,n.convertRaycastIntersect)(r.raycastFirst(s,this.material),this,e);i&&t.push(i)}else{let i=r.raycast(s,this.material);for(let r=0,s=i.length;r<s;r++){let s=(0,n.convertRaycastIntersect)(i[r],this,e);s&&t.push(s)}}}else o.call(this,e,t)}function p(e){return this.boundsTree=new i.MeshBVH(this,e),this.boundsTree}function c(){this.boundsTree=null}}),f("b4YKL",function(e,t){d(e.exports,"convertRaycastIntersect",()=>r);function r(e,t,r){return null===e?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(r.ray.origin),e.object=t,e.distance<r.near||e.distance>r.far)?null:e}}),f("5ca9G",function(e,t){d(e.exports,"MeshBVHHelper",()=>o);var r=h("ilwiq"),n=h("aw71y"),i=h("ff8ed");let s=new r.Box3;class a extends r.Object3D{get isMesh(){return!this.displayEdges}get isLineSegments(){return this.displayEdges}get isLine(){return this.displayEdges}constructor(e,t,n=10,i=0){super(),this.material=t,this.geometry=new r.BufferGeometry,this.name="MeshBVHRootHelper",this.depth=n,this.displayParents=!1,this.bvh=e,this.displayEdges=!0,this._group=i}raycast(){}update(){let e=this.geometry,t=this.bvh,i=this._group;if(e.dispose(),this.visible=!1,t){let a,o;let l=this.depth-1,d=this.displayParents,p=0;t.traverse((e,t)=>{if(e>=l||t)return p++,!0;d&&p++},i);let c=0,u=new Float32Array(24*p);t.traverse((e,t,r)=>{let i=e>=l||t;if(i||d){(0,n.arrayToBox)(0,r,s);let{min:e,max:t}=s;for(let r=-1;r<=1;r+=2){let n=r<0?e.x:t.x;for(let r=-1;r<=1;r+=2){let i=r<0?e.y:t.y;for(let r=-1;r<=1;r+=2){let s=r<0?e.z:t.z;u[c+0]=n,u[c+1]=i,u[c+2]=s,c+=3}}}return i}},i),o=new Uint8Array(this.displayEdges?[0,4,1,5,2,6,3,7,0,2,1,3,4,6,5,7,0,1,2,3,4,5,6,7]:[0,1,2,2,1,3,4,6,5,6,7,5,1,4,5,0,4,1,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7]),a=u.length>65535?new Uint32Array(o.length*p):new Uint16Array(o.length*p);let h=o.length;for(let e=0;e<p;e++){let t=8*e,r=e*h;for(let e=0;e<h;e++)a[r+e]=t+o[e]}e.setIndex(new r.BufferAttribute(a,1,!1)),e.setAttribute("position",new r.BufferAttribute(u,3,!1)),this.visible=!0}}}class o extends r.Group{get color(){return this.edgeMaterial.color}get opacity(){return this.edgeMaterial.opacity}set opacity(e){this.edgeMaterial.opacity=e,this.meshMaterial.opacity=e}constructor(e=null,t=null,n=10){e instanceof i.MeshBVH&&(n=t||10,t=e,e=null),"number"==typeof t&&(n=t,t=null),super(),this.name="MeshBVHHelper",this.depth=n,this.mesh=e,this.bvh=t,this.displayParents=!1,this.displayEdges=!0,this._roots=[];let s=new r.LineBasicMaterial({color:65416,transparent:!0,opacity:.3,depthWrite:!1}),a=new r.MeshBasicMaterial({color:65416,transparent:!0,opacity:.3,depthWrite:!1});a.color=s.color,this.edgeMaterial=s,this.meshMaterial=a,this.update()}update(){let e=this.bvh||this.mesh.geometry.boundsTree,t=e?e._roots.length:0;for(;this._roots.length>t;){let e=this._roots.pop();e.geometry.dispose(),this.remove(e)}for(let r=0;r<t;r++){let{depth:t,edgeMaterial:n,meshMaterial:i,displayParents:s,displayEdges:o}=this;if(r>=this._roots.length){let i=new a(e,n,t,r);this.add(i),this._roots.push(i)}let l=this._roots[r];l.bvh=e,l.depth=t,l.displayParents=s,l.displayEdges=o,l.material=o?n:i,l.update()}}updateMatrixWorld(...e){let t=this.mesh,r=this.parent;null!==t&&(t.updateWorldMatrix(!0,!1),r?this.matrix.copy(r.matrixWorld).invert().multiply(t.matrixWorld):this.matrix.copy(t.matrixWorld),this.matrix.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(...e)}copy(e){this.depth=e.depth,this.mesh=e.mesh,this.bvh=e.bvh,this.opacity=e.opacity,this.color.copy(e.color)}clone(){return new o(this.mesh,this.bvh,this.depth)}dispose(){this.edgeMaterial.dispose(),this.meshMaterial.dispose();let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].geometry.dispose()}}});var m=h("hBOJ2"),y=h("ilwiq"),g=h("5Rd1x"),y=h("ilwiq");const w=new y.Color;class x extends y.Loader{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,r,n){let i=this,s=new y.FileLoader(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(r){try{t(i.parse(r))}catch(t){n?n(t):console.error(t),i.manager.itemError(e)}},r,n)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){let t;function r(e){let t;let r="",n=0,i=/^ply([\s\S]*)end_header(\r\n|\r|\n)/.exec(e);null!==i&&(r=i[1],n=new Blob([i[0]]).size);let s={comments:[],elements:[],headerLength:n,objInfo:""},a=r.split(/\r\n|\r|\n/);for(let e=0;e<a.length;e++){let r=a[e];if(""===(r=r.trim()))continue;let n=r.split(/\s+/),i=n.shift();switch(r=n.join(" "),i){case"format":s.format=n[0],s.version=n[1];break;case"comment":s.comments.push(r);break;case"element":void 0!==t&&s.elements.push(t),(t={}).name=n[0],t.count=parseInt(n[1]),t.properties=[];break;case"property":t.properties.push(function(e,t){let r={type:e[0]};return"list"===r.type?(r.name=e[3],r.countType=e[1],r.itemType=e[2]):r.name=e[1],r.name in t&&(r.name=t[r.name]),r}(n,d.propertyNameMapping));break;case"obj_info":s.objInfo=r;break;default:console.log("unhandled",i,n)}}return void 0!==t&&s.elements.push(t),s}function n(e,t){switch(t){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(e);case"float":case"double":case"float32":case"float64":return parseFloat(e)}}function i(){let e={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]};for(let t of Object.keys(d.customPropertyMapping))e[t]=[];return e}function s(e){let t=e.map(e=>e.name);function r(e){for(let r=0,n=e.length;r<n;r++){let n=e[r];if(t.includes(n))return n}return null}return{attrX:r(["x","px","posx"])||"x",attrY:r(["y","py","posy"])||"y",attrZ:r(["z","pz","posz"])||"z",attrNX:r(["nx","normalx"]),attrNY:r(["ny","normaly"]),attrNZ:r(["nz","normalz"]),attrS:r(["s","u","texture_u","tx"]),attrT:r(["t","v","texture_v","ty"]),attrR:r(["red","diffuse_red","r","diffuse_r"]),attrG:r(["green","diffuse_green","g","diffuse_g"]),attrB:r(["blue","diffuse_blue","b","diffuse_b"])}}function a(e,t){let r;let a=i(),d="";null!==(r=/end_header\s([\s\S]*)$/.exec(e))&&(d=r[1]);let p=d.split(/\r\n|\r|\n/),c=0,u=0,h=t.elements[c],f=s(h.properties);for(let e=0;e<p.length;e++){let r=p[e];if(""===(r=r.trim()))continue;u>=h.count&&(c++,u=0,f=s((h=t.elements[c]).properties));let i=function(e,t){let r=t.split(/\s+/),i={};for(let t=0;t<e.length;t++)if("list"===e[t].type){let s=[],a=n(r.shift(),e[t].countType);for(let i=0;i<a;i++)s.push(n(r.shift(),e[t].itemType));i[e[t].name]=s}else i[e[t].name]=n(r.shift(),e[t].type);return i}(h.properties,r);l(a,h.name,i,f),u++}return o(a)}function o(e){let t=new y.BufferGeometry;for(let r of(e.indices.length>0&&t.setIndex(e.indices),t.setAttribute("position",new y.Float32BufferAttribute(e.vertices,3)),e.normals.length>0&&t.setAttribute("normal",new y.Float32BufferAttribute(e.normals,3)),e.uvs.length>0&&t.setAttribute("uv",new y.Float32BufferAttribute(e.uvs,2)),e.colors.length>0&&t.setAttribute("color",new y.Float32BufferAttribute(e.colors,3)),e.faceVertexUvs.length>0&&(t=t.toNonIndexed()).setAttribute("uv",new y.Float32BufferAttribute(e.faceVertexUvs,2)),Object.keys(d.customPropertyMapping)))e[r].length>0&&t.setAttribute(r,new y.Float32BufferAttribute(e[r],d.customPropertyMapping[r].length));return t.computeBoundingSphere(),t}function l(e,t,r,n){if("vertex"===t)for(let t of(e.vertices.push(r[n.attrX],r[n.attrY],r[n.attrZ]),null!==n.attrNX&&null!==n.attrNY&&null!==n.attrNZ&&e.normals.push(r[n.attrNX],r[n.attrNY],r[n.attrNZ]),null!==n.attrS&&null!==n.attrT&&e.uvs.push(r[n.attrS],r[n.attrT]),null!==n.attrR&&null!==n.attrG&&null!==n.attrB&&(w.setRGB(r[n.attrR]/255,r[n.attrG]/255,r[n.attrB]/255).convertSRGBToLinear(),e.colors.push(w.r,w.g,w.b)),Object.keys(d.customPropertyMapping)))for(let n of d.customPropertyMapping[t])e[t].push(r[n]);else if("face"===t){let t=r.vertex_indices||r.vertex_index,n=r.texcoord;3===t.length?(e.indices.push(t[0],t[1],t[2]),n&&6===n.length&&(e.faceVertexUvs.push(n[0],n[1]),e.faceVertexUvs.push(n[2],n[3]),e.faceVertexUvs.push(n[4],n[5]))):4===t.length&&(e.indices.push(t[0],t[1],t[3]),e.indices.push(t[1],t[2],t[3]))}}let d=this;if(e instanceof ArrayBuffer){let n=new Uint8Array(e),d=r(function(e){let t=0,r=!0,n="",i=[];do{let s=String.fromCharCode(e[t++]);"\n"!==s&&"\r"!==s?n+=s:("end_header"===n&&(r=!1),""!==n&&(i.push(n),n=""))}while(r&&t<e.length)return i.join("\r")+"\r"}(n));t="ascii"===d.format?a(new TextDecoder().decode(n),d):function(e,t){let r=i(),n="binary_little_endian"===t.format,a=new DataView(e,t.headerLength),d,p=0;for(let e=0;e<t.elements.length;e++){let i=t.elements[e],o=i.properties,c=s(o);!function(e,t,r){function n(e,t,r){switch(t){case"int8":case"char":return{read:t=>e.getInt8(t),size:1};case"uint8":case"uchar":return{read:t=>e.getUint8(t),size:1};case"int16":case"short":return{read:t=>e.getInt16(t,r),size:2};case"uint16":case"ushort":return{read:t=>e.getUint16(t,r),size:2};case"int32":case"int":return{read:t=>e.getInt32(t,r),size:4};case"uint32":case"uint":return{read:t=>e.getUint32(t,r),size:4};case"float32":case"float":return{read:t=>e.getFloat32(t,r),size:4};case"float64":case"double":return{read:t=>e.getFloat64(t,r),size:8}}}for(let i=0,s=e.length;i<s;i++){let s=e[i];"list"===s.type?(s.countReader=n(t,s.countType,r),s.valueReader=n(t,s.itemType,r)):s.valueReader=n(t,s.type,r)}}(o,a,n);for(let e=0;e<i.count;e++){d=function(e,t){let r={},n=0;for(let i=0;i<t.length;i++){let s=t[i],a=s.valueReader;if("list"===s.type){let t=[],i=s.countReader.read(e+n);n+=s.countReader.size;for(let r=0;r<i;r++)t.push(a.read(e+n)),n+=a.size;r[s.name]=t}else r[s.name]=a.read(e+n),n+=a.size}return[r,n]}(p,o),p+=d[1];let e=d[0];l(r,i.name,e,c)}}return o(r)}(e,d)}else t=a(e,r(e));return t}}var v=h("jiuw3"),b=h("4h5hN"),M=h("Mleu6"),T=h("5ca9G");y.Mesh.prototype.raycast=b.acceleratedRaycast,y.BufferGeometry.prototype.computeBoundsTree=b.computeBoundsTree,y.BufferGeometry.prototype.disposeBoundsTree=b.disposeBoundsTree;let B=new y.Vector2;const R=new y.Raycaster,E={displayHelper:!1,helperDepth:10,displayParents:!1,strategy:M.CENTER,pointSize:.005,raycastThreshold:.005,useBVH:!0};window.addEventListener("pointermove",e=>{if(!i)return;B.x=e.clientX/window.innerWidth*2-1,B.y=-(e.clientY/window.innerHeight*2)+1,R.setFromCamera(B,r);let t=window.performance.now();if(E.useBVH){l.visible=!1;let e=new y.Matrix4;e.copy(i.matrixWorld).invert(),R.ray.applyMatrix4(e);let t=R.params.Points.threshold/((i.scale.x+i.scale.y+i.scale.z)/3),r=t*t,{ray:n}=R,s=1/0;i.geometry.boundsTree.shapecast({boundsTraverseOrder:e=>e.distanceToPoint(n.origin),intersectsBounds:(e,r,i)=>i>s?M.NOT_INTERSECTED:(e.expandByScalar(t),n.intersectsBox(e)?M.INTERSECTED:M.NOT_INTERSECTED),intersectsTriangle:e=>{if(n.distanceSqToPoint(e.a)<r){let t=n.origin.distanceTo(e.a);t<s&&(s=t,l.position.copy(e.a).applyMatrix4(i.matrixWorld),l.visible=!0)}}})}else{let e=R.intersectObject(a,!0)[0];e?(l.position.copy(e.point),l.visible=!0):l.visible=!1}let n=window.performance.now()-t;o.innerText=`${n.toFixed(2)}ms`},!1),function(){o=document.getElementById("output"),(n=new y.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(1251612,1),document.body.appendChild(n.domElement),t=new y.Scene,(r=new y.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50)).position.set(3,3,3),r.far=100,r.updateProjectionMatrix(),new g.OrbitControls(r,n.domElement),e=new m.default,document.body.appendChild(e.dom),window.addEventListener("resize",function(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)},!1),new x().load("../models/point_cloud_porsche_911_1.7M_vertices/scene.ply",e=>{e.center();let r=new y.PointsMaterial({size:E.pointSize,vertexColors:!0});(a=new y.Points(e,r)).matrixAutoUpdate=!1,t.add(a);let n=[],o=e.clone(),l=o.attributes.position.count;for(let e=0;e<l;e++)n.push(e,e,e);o.setIndex(n);let d=new y.MeshBasicMaterial({color:16711680});i=new y.Mesh(o,d),console.time("computeBoundsTree"),i.geometry.computeBoundsTree({mode:E.mode}),console.timeEnd("computeBoundsTree"),s=new T.MeshBVHHelper(i,E.depth),t.add(s)});let d=new y.SphereGeometry(.01,32,32),p=new y.MeshBasicMaterial({color:16776960,opacity:.9,transparent:!0});(l=new y.Mesh(d,p)).visible=!1,t.add(l);let c=new v.GUI,u=c.addFolder("helper");u.add(E,"displayHelper"),u.add(E,"displayParents").onChange(e=>{s.displayParents=e,s.update()}),u.add(E,"helperDepth",1,20,1).name("depth").onChange(e=>{s.depth=parseInt(e),s.update()}),u.open();let h=c.addFolder("points");h.add(E,"useBVH"),h.add(E,"strategy",{CENTER:M.CENTER,AVERAGE:M.AVERAGE,SAH:M.SAH}).onChange(e=>{console.time("computeBoundsTree"),i.geometry.computeBoundsTree({strategy:parseInt(e)}),console.timeEnd("computeBoundsTree"),s.update()}),h.add(E,"pointSize",.001,.01,.001),h.add(E,"raycastThreshold",.001,.01,.001),h.open()}(),function i(){requestAnimationFrame(i),a&&(a.material.size=E.pointSize,s.visible=E.displayHelper,R.params.Points.threshold=E.raycastThreshold),e.begin(),n.render(t,r),e.end()}();
//# sourceMappingURL=pointCloudIntersection.812fc1d5.js.map
