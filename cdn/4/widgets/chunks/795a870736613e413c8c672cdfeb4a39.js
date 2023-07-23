"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3261,6928],{68748:(e,t,r)=>{r.d(t,{aX:()=>A});var a=r(51366),n=r(70375),s=r(13802),i=r(89542),o=r(90819),l=r(25266),d=r(35925),u=r(39536),p=(r(91957),r(66341)),c=r(53736),h=r(84238),f=r(39154);async function y(e,t,r){const a="string"==typeof e?(0,f.mN)(e):e,n=t[0].spatialReference,s=(0,c.Ji)(t[0]),i={...r,query:{...a.query,f:"json",sr:n.wkid??JSON.stringify(n),geometries:JSON.stringify((l=t,{geometryType:(0,c.Ji)(l[0]),geometries:l.map((e=>e.toJSON()))}))}},{data:o}=await(0,p.default)(a.path+"/simplify",i);var l;return function(e,t,r){const a=(0,c.q9)(t);return e.map((e=>{const t=a.fromJSON(e);return t.spatialReference=r,t}))}(o.geometries,s,n)}const m=s.Z.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function b(e){return"polyline"===e[0].type}function F(e,t,r){if(t){const t=function(e,t){if(!(e instanceof o.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m.error(e),new n.Z(e)}const r=(0,l.x3)(e),a=[];for(const e of r){const r=[];a.push(r),r.push([e[0][0],e[0][1]]);for(let a=0;a<e.length-1;a++){const n=e[a][0],s=e[a][1],i=e[a+1][0],o=e[a+1][1],l=Math.sqrt((i-n)*(i-n)+(o-s)*(o-s)),d=(o-s)/l,u=(i-n)/l,p=l/t;if(p>1){for(let e=1;e<=p-1;e++){const a=e*t,i=u*a+n,o=d*a+s;r.push([i,o])}const e=(l+Math.floor(p-1)*t)/2,a=u*e+n,i=d*e+s;r.push([a,i])}r.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:a,spatialReference:e.spatialReference}):new o.Z({paths:a,spatialReference:e.spatialReference})}(e,1e6);e=(0,u.Sx)(t,!0)}return r&&(e=(0,l.Sy)(e,r)),e}function w(e,t,r){if(Array.isArray(e)){const a=e[0];if(a>t){const r=(0,l.XZ)(a,t);e[0]=a+r*(-2*t)}else if(a<r){const t=(0,l.XZ)(a,r);e[0]=a+t*(-2*r)}}else{const a=e.x;if(a>t){const r=(0,l.XZ)(a,t);e=e.clone().offset(r*(-2*t),0)}else if(a<r){const t=(0,l.XZ)(a,r);e=e.clone().offset(t*(-2*r),0)}}return e}function I(e,t){let r=-1;for(let a=0;a<t.cutIndexes.length;a++){const n=t.cutIndexes[a],s=t.geometries[a],i=(0,l.x3)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const a=t[e][0];r=a>r?a:r}r=Number(r.toFixed(9));const a=-360*(0,l.XZ)(r,180);for(let r=0;r<t.length;r++){const t=s.getPoint(e,r);s.setPoint(e,r,t.clone().offset(a,0))}return!0}}))}if(n===r){if(g(e))for(const t of(0,l.x3)(s))e[n]=e[n].addRing(t);else if(b(e))for(const t of(0,l.x3)(s))e[n]=e[n].addPath(t)}else r=n,e[n]=s}return e}async function A(e,t,r){if(!Array.isArray(e))return A([e],t);t&&"string"!=typeof t&&m.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??a.Z.geometryServiceUrl;let s,f,g,b,Z,v,S,R,x=0;const E=[],O=[];for(const t of e)if(null!=t)if(s||(s=t.spatialReference,f=(0,d.C5)(s),g=s.isWebMercator,v=g?102100:4326,b=l.UZ[v].maxX,Z=l.UZ[v].minX,S=l.UZ[v].plus180Line,R=l.UZ[v].minus180Line),f)if("mesh"===t.type)O.push(t);else if("point"===t.type)O.push(w(t.clone(),b,Z));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>w(e,b,Z))),O.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,f);O.push(e.rings?new i.Z(e):e)}else if(t.extent){const e=t.extent,r=(0,l.XZ)(e.xmin,Z)*(2*b);let a=0===r?t.clone():(0,l.Sy)(t.clone(),r);e.offset(r,0),e.intersects(S)&&e.xmax!==b?(x=e.xmax>x?e.xmax:x,a=F(a,g),E.push(a),O.push("cut")):e.intersects(R)&&e.xmin!==Z?(x=e.xmax*(2*b)>x?e.xmax*(2*b):x,a=F(a,g,360),E.push(a),O.push("cut")):O.push(a)}else O.push(t.clone());else O.push(t);else O.push(t);let $=(0,l.XZ)(x,b),j=-90;const L=$,U=new o.Z;for(;$>0;){const e=360*$-180;U.addPath([[e,j],[e,-1*j]]),j*=-1,$--}if(E.length>0&&L>0){const t=I(E,await async function(e,t,r,a){const n=(0,h.en)(e),s=t[0].spatialReference,i={...a,query:{...n.query,f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},o=await(0,p.default)(n.path+"/cut",i),{cutIndexes:l,geometries:d=[]}=o.data;return{cutIndexes:l,geometries:d.map((e=>{const t=(0,c.im)(e);return t.spatialReference=s,t}))}}(n,E,U,r)),a=[],s=[];for(let r=0;r<O.length;r++){const n=O[r];if("cut"!==n)s.push(n);else{const n=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&n.rings.length>=i.rings.length?(a.push(n),s.push("simplify")):s.push(g?(0,u.$)(n):n)}}if(!a.length)return s;const i=await y(n,a,r),o=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?o.push(t):o.push(g?(0,u.$)(i.shift()):i.shift())}return o}const k=[];for(let e=0;e<O.length;e++){const t=O[e];if("cut"!==t)k.push(t);else{const e=E.shift();k.push(!0===g?(0,u.$)(e):e)}}return k}},25266:(e,t,r)=>{r.d(t,{Sy:()=>l,UZ:()=>i,XZ:()=>o,x3:()=>d});var a=r(90819),n=r(14685),s=r(53736);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new a.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new a.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new a.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=d(e);for(const e of r)for(const r of e)r[0]+=t;return e}function d(e){return(0,s.oU)(e)?e.rings:e.paths}},23261:(e,t,r)=>{r.r(t),r.d(t,{applyEdits:()=>F,isFeatureIdentifierArrayWithGlobalId:()=>b,isFeatureIdentifierArrayWithObjectId:()=>m,isFeatureIdentifierWithGlobalId:()=>g,isFeatureIdentifierWithObjectId:()=>y,uploadAssets:()=>R});var a=r(80085),n=r(6865),s=r(70375),i=r(67134),o=r(13802),l=r(33926),d=r(39154),u=r(68748),p=r(15801),c=r(13449),h=r(54957);function f(e){return e&&null!=e.applyEdits}function y(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function m(e){return e.every(y)}function g(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function b(e){return e.every(g)}async function F(e,t,r,a={}){let d;if((0,p.lQ)(e)&&e.url)d=(0,p.jF)(e.url,e.layerId,"original-and-current-features"===a.returnServiceEditsOption);else{d=(0,l.hh)(),d.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:d.promise};e.emit("apply-edits",t)}try{const{results:l,edits:u}=await async function(e,t,r,a){if(await e.load(),!f(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,h.ln)(e))throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await async function(e,t,r){const a=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(!t||!a&&!i)throw new s.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const d=(0,h.S1)(e);if(!d.data.isVersioned&&r?.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!d.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!d.editing.supportsGlobalId&&r?.globalIdUsed)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!d.editing.supportsGlobalId&&i)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new s.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const u={...r};if(null!=u.rollbackOnFailureEnabled||d.editing.supportsRollbackOnFailure||(u.rollbackOnFailureEnabled=!0),u.rollbackOnFailureEnabled||"original-and-current-features"!==u.returnServiceEditsOption||(!1===u.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),u.rollbackOnFailureEnabled=!0),!d.editing.supportsReturnServiceEditsInSourceSpatialReference&&u.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(u.returnServiceEditsInSourceSR&&"original-and-current-features"!==u.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p={...t};if(p.addFeatures=t&&n.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():p.addFeatures||[],p.updateFeatures=t&&n.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():p.updateFeatures||[],p.deleteFeatures=t&&n.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():p.deleteFeatures||[],p.addFeatures.length&&!d.operations.supportsAdd)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(p.updateFeatures.length&&!d.operations.supportsUpdate)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(p.deleteFeatures.length&&!d.operations.supportsDelete)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");p.addAttachments=p.addAttachments||[],p.updateAttachments=p.updateAttachments||[],p.deleteAttachments=p.deleteAttachments||[],p.addFeatures=p.addFeatures.map(v),p.updateFeatures=p.updateFeatures.map(v),p.addAssetFeatures=[];const f=r?.globalIdUsed||l;return p.addFeatures.forEach((t=>function(e,t,r){w(e,t,r),I(e,t)}(t,e,f))),p.updateFeatures.forEach((t=>function(e,t,r){w(e,t,r),I(e,t);const a=(0,h.S1)(t);if("geometry"in e&&null!=e.geometry&&!a?.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,f))),p.deleteFeatures.forEach((t=>function(e,t,r){w(e,t,r)}(t,e,f))),p.addAttachments.forEach((t=>A(t,e))),p.updateAttachments.forEach((t=>A(t,e))),l&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,a=(0,c.S0)("model/gltf-binary",r.supportedFormats)??(0,c.Ow)("glb",r.supportedFormats);if(!a||!r.editFormats.includes(a))throw new s.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:n}=e;for(const t of e.addFeatures??[])S(t)&&n.push(t);for(const t of e.updateFeatures??[])S(t)&&n.push(t)}(p,e),{edits:await Z(p),options:u}}(e,r,a);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,a),p=e=>e.filter((e=>!e.error)).map(i.d9),y={edits:u,addedFeatures:p(l.addFeatureResults),updatedFeatures:p(l.updateFeatureResults),deletedFeatures:p(l.deleteFeatureResults),addedAttachments:p(l.addAttachmentResults),updatedAttachments:p(l.updateAttachmentResults),deletedAttachments:p(l.deleteAttachmentResults),exceededTransferLimit:!1};return l.editedFeatureResults?.length&&(y.editedFeatures=l.editedFeatureResults),d.resolve(y),l}catch(e){throw d.reject(e),e}}function w(e,t,r){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function I(e,t){if("geometry"in e&&"mesh"===e.geometry?.type){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new s.Z(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function A(e,t){const{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name||a.name))throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof a.data){const e=(0,d.sJ)(a.data);if(e&&!e.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function Z(e){const t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map((e=>e.geometry)),n=await(0,u.aX)(a),s=t.length,i=r.length;return n.slice(0,s).forEach(((e,r)=>t[r].geometry=e)),n.slice(s,s+i).forEach(((e,t)=>r[t].geometry=e)),e}function v(e){const t=new a.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function S(e){return"mesh"===e?.geometry?.type}function R(e,t,r,a){if(!f(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}},15801:(e,t,r)=>{r.d(t,{jF:()=>d,lQ:()=>c,o1:()=>h});var a=r(36663),n=r(31355),s=r(67134),i=r(33926),o=(r(13802),r(7283),r(70375),r(39994),r(40266));const l=new n.Z.EventEmitter;function d(e,t,r=!1){const a=(0,i.hh)();return r=null==t||r,l.emit("apply-edits",{serviceUrl:e,layerId:t,mayReceiveServiceEdits:r,result:a.promise}),a}const u="esri.layers.mixins.EditBusLayer",p=Symbol(u);function c(e){return null!=e&&"object"==typeof e&&p in e}const h=e=>{var t;let r=class extends e{constructor(...e){super(...e),this[t]=!0,this.when().then((()=>{this.own([l.on("apply-edits",(e=>{const{serviceUrl:t,layerId:r,mayReceiveServiceEdits:a,result:n}=e,i=t===this.url,o=null!=r&&null!=this.layerId&&r===this.layerId;if(!i||!o&&!a)return;const l=n.then((e=>{if(o&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,s.d9)(e)),e;const t=e.editedFeatures?.find((({layerId:e})=>e===this.layerId));if(t){const{adds:r,updates:a,deletes:n}=t.editedFeatures,i={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:r?r.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],deletedFeatures:n?n.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],updatedFeatures:a?a.map((({current:{attributes:e}})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],editedFeatures:(0,s.d9)(e.editedFeatures),exceededTransferLimit:!1};return this.emit("edits",i),i}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,s.d9)(e.editedFeatures),exceededTransferLimit:!1}}));this.emit("apply-edits",{result:l})}))])}),(()=>{}))}};return t=p,r=(0,a._)([(0,o.j)(u)],r),r}},13449:(e,t,r)=>{r.d(t,{$6:()=>u,Ow:()=>s,S0:()=>n,d1:()=>i});const a=[["binary","application/octet-stream","bin",""]];function n(e,t){return l(function(e,t){return o(t).find((t=>d(t)===e))}(e,t))}function s(e,t){return l(function(e,t){const r=e.toLowerCase();return o(t).find((e=>function(e){return e?.[2].split(",")??[]}(e).some((e=>r.endsWith(e)))))}(e,t))}function i(e,t){return d(function(e,t){return o(t).find((t=>l(t)===e))}(e,t))}function o(e){return[...a,...e]}function l(e){return e?.[0]}function d(e){return e?.[1]}function u(e){return e.tables?.find((e=>"assetMaps"===e.role))}},84238:(e,t,r)=>{r.d(t,{cv:()=>o,en:()=>i,lA:()=>s}),r(51366),r(88256);var a=r(67134),n=r(39154);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,n.mN)(e):(0,a.d9)(e)}function o(e,t,r){const a={};for(const n in e){if("declaredClass"===n)continue;const s=e[n];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){a[n]=[];for(let e=0;e<s.length;e++)a[n][e]=o(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r&&r[n]);a[n]=t?e:JSON.stringify(e)}else a[n]=t?s:JSON.stringify(s);else a[n]=s}return a}r(99522)}}]);