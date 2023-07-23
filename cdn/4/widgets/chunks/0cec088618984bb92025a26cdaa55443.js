"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3760],{39100:(e,t,r)=>{function a(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function s(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>i,a:()=>n,b:()=>s,c:()=>a});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:s,create:a,createView:n,fromValues:function(e,t,r,a,s,n,i,o,u,l,d,p,c,h,y,f){return[e,t,r,a,s,n,i,o,u,l,d,p,c,h,y,f]}},Symbol.toStringTag,{value:"Module"}))},86717:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>i,c:()=>s,d:()=>d,e:()=>u,n:()=>p,s:()=>l,t:()=>n});var a=r(45150);function s(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,s=3,n=s){if(e.length/s!==Math.ceil(t.length/n))return a.c.error("source and destination buffers need to have the same number of elements"),e;const i=e.length/s,o=r[0],u=r[1],l=r[2],d=r[4],p=r[5],c=r[6],h=r[8],y=r[9],f=r[10],m=r[12],g=r[13],b=r[14];let F=0,w=0;for(let r=0;r<i;r++){const r=t[F],a=t[F+1],i=t[F+2];e[w]=o*r+d*a+h*i+m,e[w+1]=u*r+p*a+y*i+g,e[w+2]=l*r+c*a+f*i+b,F+=n,w+=s}return e}function i(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,s=3,n=s){if(e.length/s!==Math.ceil(t.length/n))return void a.c.error("source and destination buffers need to have the same number of elements");const i=e.length/s,o=r[0],u=r[1],l=r[2],d=r[3],p=r[4],c=r[5],h=r[6],y=r[7],f=r[8];let m=0,g=0;for(let r=0;r<i;r++){const r=t[m],a=t[m+1],i=t[m+2];e[g]=o*r+d*a+h*i,e[g+1]=u*r+p*a+y*i,e[g+2]=l*r+c*a+f*i,m+=n,g+=s}}function u(e,t,r){l(e.typedBuffer,t,r,e.typedBufferStride)}function l(e,t,r,a=3){const s=Math.min(e.length/a,t.count),n=t.typedBuffer,i=t.typedBufferStride;let o=0,u=0;for(let t=0;t<s;t++)e[u]=r*n[o],e[u+1]=r*n[o+1],e[u+2]=r*n[o+2],o+=i,u+=a}function d(e,t){p(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function p(e,t,r=3,a=r){const s=Math.min(e.length/r,t.length/a);let n=0,i=0;for(let o=0;o<s;o++){const s=t[n],o=t[n+1],u=t[n+2],l=s*s+o*o+u*u;if(l>0){const t=1/Math.sqrt(l);e[i]=t*s,e[i+1]=t*o,e[i+2]=t*u}n+=a,i+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:p,normalizeView:d,scale:l,scaleView:u,shiftRight:function(e,t,r){const a=Math.min(e.count,t.count),s=e.typedBuffer,n=e.typedBufferStride,i=t.typedBuffer,o=t.typedBufferStride;let u=0,l=0;for(let e=0;e<a;e++)s[l]=i[u]>>r,s[l+1]=i[u+1]>>r,s[l+2]=i[u+2]>>r,u+=o,l+=n},transformMat3:o,transformMat3View:i,transformMat4:n,transformMat4View:s},Symbol.toStringTag,{value:"Module"}))},12173:(e,t,r)=>{r.d(t,{D:()=>s,z:()=>n});const a="randomUUID"in crypto;function s(){if(a)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function n(){return`{${s()}}`}},2718:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(36663),s=r(41151),n=r(82064),i=r(81977),o=(r(7283),r(7753),r(39994),r(79438)),u=r(40266),l=r(8909),d=r(67666);let p=class extends((0,s.J)(n.wq)){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,l.c)()}getOriginPoint(e){const[t,r,a]=this.origin;return new d.Z({x:t,y:r,z:a,spatialReference:e})}setOriginFormPoint({x:e,y:t,z:r}){this.origin=(0,l.f)(e,t,r??0)}};(0,a._)([(0,o.J)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],p.prototype,"type",void 0),(0,a._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"origin",void 0),p=(0,a._)([(0,u.j)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],p);const c=p},45150:(e,t,r)=>{r.d(t,{c:()=>a});const a=r(13802).Z.getLogger("esri.views.3d.support.buffer.math")},57450:(e,t,r)=>{r.d(t,{CP:()=>o,JG:()=>y,LL:()=>u,NZ:()=>l,fV:()=>f,vj:()=>g,yT:()=>F,zE:()=>b});var a=r(66341),s=r(7753),n=r(33926),i=r(13449);class o{constructor(e,t,r){this.assetName=e,this.assetMimeType=t,this.parts=r}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,s.fS)(this.parts,e.parts,((e,t)=>e.equals(t)))}isOnService(e){return this.parts.every((t=>t.isOnService(e)))}makeHash(){let e="";for(const t of this.parts)e+=t.partHash;return e}async toBlob(e){const{parts:t}=this;if(1===t.length)return t[0].toBlob(e);const r=await Promise.all(t.map((t=>t.toBlob(e))));return(0,n.k_)(e),new Blob(r)}}class u{constructor(e,t){this.partUrl=e,this.partHash=t}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith(`${e.path}/assets/`)}async toBlob(e){const{data:t}=await(0,a.default)(this.partUrl,{responseType:"blob"});return(0,n.k_)(e),t}}function l(e){return function(e){return!!e&&(Array.isArray(e)?e.some(h):h(e))}(e?.source)}function d(e){return!!Array.isArray(e)&&e.every((e=>e instanceof o))}const p=/^(model\/gltf\+json)|(model\/gltf-binary)$/,c=/\.(gltf|glb)/i;function h(e){if(e instanceof File){const{type:t,name:r}=e;return p.test(t)||c.test(r)}return p.test(e.assetMimeType)||c.test(e.assetName)}function y(e,t){if(!e)return!1;const{source:r}=e;return function(e,t){return Array.isArray(e)?e.every((e=>m(e,t))):m(e,t)}(r,t)}function f(e,t){if(e===t)return!0;const{source:r}=e,{source:a}=t;if(r===a)return!0;if(d(r)&&d(a)){if(r.length!==a.length)return!1;const e=(e,t)=>e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0,t=[...r].sort(e),s=[...a].sort(e);for(let e=0;e<t.length;++e)if(!t[e].equals(s[e]))return!1;return!0}return!1}function m(e,t){return e instanceof o&&e.isOnService(t)}function g(e,t){return e instanceof File?(0,i.Ow)(e.name,t)??(0,i.S0)(e.type,t):(0,i.S0)(e.assetMimeType,t)??(0,i.Ow)(e.assetName,t)}function b(e){return Array.isArray(e)?e:[e]}function F(e){return!!e.original}},10287:(e,t,r)=>{r.d(t,{g:()=>a});const a={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},23261:(e,t,r)=>{r.r(t),r.d(t,{applyEdits:()=>F,isFeatureIdentifierArrayWithGlobalId:()=>b,isFeatureIdentifierArrayWithObjectId:()=>m,isFeatureIdentifierWithGlobalId:()=>g,isFeatureIdentifierWithObjectId:()=>f,uploadAssets:()=>E});var a=r(80085),s=r(6865),n=r(70375),i=r(67134),o=r(13802),u=r(33926),l=r(39154),d=r(68748),p=r(15801),c=r(13449),h=r(54957);function y(e){return e&&null!=e.applyEdits}function f(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function m(e){return e.every(f)}function g(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function b(e){return e.every(g)}async function F(e,t,r,a={}){let l;if((0,p.lQ)(e)&&e.url)l=(0,p.jF)(e.url,e.layerId,"original-and-current-features"===a.returnServiceEditsOption);else{l=(0,u.hh)(),l.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:l.promise};e.emit("apply-edits",t)}try{const{results:u,edits:d}=await async function(e,t,r,a){if(await e.load(),!y(t))throw new n.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,h.ln)(e))throw new n.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:u}=await async function(e,t,r){const a=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=null!=e.infoFor3D;if(!t||!a&&!i)throw new n.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const l=(0,h.S1)(e);if(!l.data.isVersioned&&r?.gdbVersion)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!l.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!l.editing.supportsGlobalId&&r?.globalIdUsed)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!l.editing.supportsGlobalId&&i)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new n.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const d={...r};if(null!=d.rollbackOnFailureEnabled||l.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||"original-and-current-features"!==d.returnServiceEditsOption||(!1===d.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),d.rollbackOnFailureEnabled=!0),!l.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&"original-and-current-features"!==d.returnServiceEditsOption)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p={...t};if(p.addFeatures=t&&s.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():p.addFeatures||[],p.updateFeatures=t&&s.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():p.updateFeatures||[],p.deleteFeatures=t&&s.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():p.deleteFeatures||[],p.addFeatures.length&&!l.operations.supportsAdd)throw new n.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(p.updateFeatures.length&&!l.operations.supportsUpdate)throw new n.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(p.deleteFeatures.length&&!l.operations.supportsDelete)throw new n.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");p.addAttachments=p.addAttachments||[],p.updateAttachments=p.updateAttachments||[],p.deleteAttachments=p.deleteAttachments||[],p.addFeatures=p.addFeatures.map(I),p.updateFeatures=p.updateFeatures.map(I),p.addAssetFeatures=[];const y=r?.globalIdUsed||u;return p.addFeatures.forEach((t=>function(e,t,r){w(e,t,r),S(e,t)}(t,e,y))),p.updateFeatures.forEach((t=>function(e,t,r){w(e,t,r),S(e,t);const a=(0,h.S1)(t);if("geometry"in e&&null!=e.geometry&&!a?.editing.supportsGeometryUpdate)throw new n.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,y))),p.deleteFeatures.forEach((t=>function(e,t,r){w(e,t,r)}(t,e,y))),p.addAttachments.forEach((t=>A(t,e))),p.updateAttachments.forEach((t=>A(t,e))),u&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,a=(0,c.S0)("model/gltf-binary",r.supportedFormats)??(0,c.Ow)("glb",r.supportedFormats);if(!a||!r.editFormats.includes(a))throw new n.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const t of e.addFeatures??[])v(t)&&s.push(t);for(const t of e.updateFeatures??[])v(t)&&s.push(t)}(p,e),{edits:await R(p),options:d}}(e,r,a);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,u)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,a),p=e=>e.filter((e=>!e.error)).map(i.d9),f={edits:d,addedFeatures:p(u.addFeatureResults),updatedFeatures:p(u.updateFeatureResults),deletedFeatures:p(u.deleteFeatureResults),addedAttachments:p(u.addAttachmentResults),updatedAttachments:p(u.updateAttachmentResults),deletedAttachments:p(u.deleteAttachmentResults),exceededTransferLimit:!1};return u.editedFeatureResults?.length&&(f.editedFeatures=u.editedFeatureResults),l.resolve(f),u}catch(e){throw l.reject(e),e}}function w(e,t,r){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new n.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new n.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function S(e,t){if("geometry"in e&&"mesh"===e.geometry?.type){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new n.Z(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function A(e,t){const{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name||a.name))throw new n.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof a.data){const e=(0,l.sJ)(a.data);if(e&&!e.isBase64)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function R(e){const t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map((e=>e.geometry)),s=await(0,d.aX)(a),n=t.length,i=r.length;return s.slice(0,n).forEach(((e,r)=>t[r].geometry=e)),s.slice(n,n+i).forEach(((e,t)=>r[t].geometry=e)),e}function I(e){const t=new a.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function v(e){return"mesh"===e?.geometry?.type}function E(e,t,r,a){if(!y(t))throw new n.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}},3760:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var a=r(36663),s=(r(91957),r(80085)),n=r(88256),i=r(66341),o=r(37956),u=r(7753),l=r(70375),d=r(39994),p=r(25709),c=r(68309),h=r(13802),y=r(86745),f=r(33926),m=r(17321),g=r(39154),b=r(12173),F=r(81977),w=(r(7283),r(40266)),S=r(91772),A=r(92376),R=r(53736),I=r(24455),v=r(39100),E=r(2718),O=r(86717);function _(e){const{vertexSpace:t}=e;if(t.isRelative)return e.clone();const{anchor:r}=e,a=r.clone(),s=(0,I.f)(q,[-a.x,-a.y,-a.z]),n=new E.Z({origin:[a.x,a.y,a.z]}),i=e.cloneWithVertexSpace(n),{position:o}=i.vertexAttributes;return i.vertexAttributes.position=(0,O.t)(new Float64Array(o.length),o,s),i.vertexAttributesChanged(),i}const q=(0,v.c)();var x=r(57450),T=r(23261),Z=r(40400),M=r(44269),$=r(20692),N=r(13449),C=r(96027),U=r(66565),k=r(14626),B=r(14685);const j=new p.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),J=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),D=new p.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let P=class extends c.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,f.Ds)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(e){const t=null!=e?e.signal:null,r=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(r,t)),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:r,infoFor3D:a,gdbVersion:s,spatialReference:n,fieldsIndex:i}=this.layer,o=(0,d.Z)("featurelayer-pbf")&&e?.query.supportsFormatPBF&&null==a,u=e?.operations?.supportsQueryAttachments??!1;return new M.Z({url:t.path,pbfSupported:o,fieldsIndex:i,infoFor3D:a,dynamicDataSource:r,gdbVersion:s,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+r+"/addAttachment",s=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,s.query);try{const e=await(0,i.default)(a,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}async updateAttachment(e,t,r){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(r,n.query);try{const e=await(0,i.default)(s,{body:o});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}async applyEdits(e,t){await this.load();const{layer:r}=this,a=r.infoFor3D,s=null!=a,o=s||(t?.globalIdUsed??!1),l=s?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,d=e.addFeatures?.map((e=>this._getFeatureJSON(e,a)))??[],p=(await Promise.all(d)).filter(u.pC),c=e.updateFeatures?.map((e=>this._getFeatureJSON(e,a)))??[],h=(await Promise.all(c)).filter(u.pC),y=this._getFeatureIds(e.deleteFeatures,o);(0,U.P)(p,h,r.spatialReference);const f=await this._getAttachmentEditsJSON(e),m=r.capabilities.editing.supportsAsyncApplyEdits&&s,g={gdbVersion:t?.gdbVersion||r.gdbVersion,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:o,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,sessionId:t?.sessionId,async:m};t?.returnServiceEditsOption?(g.edits=JSON.stringify([{id:r.layerId,adds:p,updates:h,deletes:y,attachments:f,assetMaps:l}]),g.returnServiceEditsOption=j.toJSON(t?.returnServiceEditsOption),g.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(g.adds=p.length?JSON.stringify(p):null,g.updates=h.length?JSON.stringify(h):null,g.deletes=y.length?o?JSON.stringify(y):y.join(","):null,g.attachments=f&&JSON.stringify(f),g.assetMaps=null!=l?JSON.stringify(l):void 0);const b=this._getLayerRequestOptions({method:"post",query:g}),F=t?.returnServiceEditsOption?r.url:r.parsedUrl.path,w=m?await this._asyncApplyEdits(F+"/applyEdits",b):await(0,i.default)(F+"/applyEdits",b);if(!r.capabilities.operations?.supportsEditing&&r.effectiveCapabilities?.operations?.supportsEditing){const e=n.id?.findCredential(r.url);await(e?.refreshToken())}return this._createEditsResult(w)}async deleteAttachments(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await(0,i.default)(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:s}=await(0,i.default)(`${a}/${r}`,t),{id:n,extent:u,fullExtent:l,timeExtent:d}=s,p=u||l;return{id:n,fullExtent:p&&S.Z.fromJSON(p),timeExtent:d&&o.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){await this.load();const r=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,$.M8)(this.layer.url))return"unavailable";const e=(0,g.v_)(this.layer.url,"status"),t=await(0,i.default)(e,{query:{f:"json"}});return D.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:a}=await r.e(507).then(r.bind(r,90507));return a(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const r=(await(0,i.default)(e,t)).data.statusUrl;for(;;){const e=(await(0,i.default)(r,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,i.default)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new l.Z("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new l.Z("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await(0,f.e4)(L)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:r}=await(0,i.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,d.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=r}this.sourceJSON=await this._patchServiceJSON(e,t);const r=e.type;if(!J.has(r))throw new l.Z("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}async _patchServiceJSON(e,t){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,Z.bU)(e.geometryType).renderer;(0,y.RB)("drawingInfo.renderer",t,e)}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:r}=await(0,i.default)(this.layer.url,this._getLayerRequestOptions({signal:t}));r.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference})}catch(e){(0,f.r9)(e)}return e}async _getFeatureJSON(e,t){const{geometry:r}=e,a={...e.attributes};if(null!=t&&"mesh"===r?.type){const{transformFieldRoles:e}=t,{origin:s,spatialReference:n,transform:i}=r,o=this.layer.spatialReference;await(0,A.initializeProjection)(n,o);const u=(0,A.project)(s,o);if(a[e.originX]=u.x,a[e.originY]=u.y,a[e.originZ]=u.z??0,null!=i){const{translation:t,scale:s,rotation:u}=i,{vertexSpace:l}=r,d=l.isGeoreferenced?1:(0,m.r6)(n)/(0,m.r6)(o);a[e.translationX]=t[0]*d,a[e.translationY]=-t[2]*d,a[e.translationZ]=t[1]*d,a[e.scaleX]=s[0],a[e.scaleY]=s[2],a[e.scaleZ]=s[1],a[e.rotationX]=u[0],a[e.rotationY]=u[2],a[e.rotationZ]=u[1],a[e.rotationDeg]=u[3]}return{geometry:null,attributes:a}}return null==r?{attributes:a}:"mesh"===r.type||"extent"===r.type?null:{geometry:r.toJSON(),attributes:a}}async _getAttachmentEditsJSON(e){const t=await Promise.all((e.addAttachments??[]).map((e=>this._getAttachmentEditJSON(e)))),r=await Promise.all((e.updateAttachments??[]).map((e=>this._getAttachmentEditJSON(e)))),a=e.deleteAttachments??[];return t.length||r.length||a.length?{adds:t,updates:r,deletes:[...a]}:null}async _getAttachmentEditJSON(e){const{feature:t,attachment:r}=e,{globalId:a,name:s,contentType:n,data:i,uploadId:o}=r,u={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),o)u.uploadId=o;else if(i){const e=await(0,g.IR)(i);e&&(u.contentType=e.mediaType,u.data=e.data),i instanceof File&&(u.name=i.name)}return s&&(u.name=s),n&&(u.contentType=n),u}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length)return null;const r=await this._filterRedundantAssetMaps(t);if(!t?.length)return null;const a=new Array,s=new Map;for(const e of r){const{geometry:t}=e,{vertexSpace:r}=t;if(r.isRelative)a.push(t);else{const r=_(t);s.set(r,t),e.geometry=r,a.push(r)}}await this.uploadAssets(a);for(const[e,t]of s)t.addExternalSources(e.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(r),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,r=this.layer.globalIdField,a=this.layer.parsedUrl;for(const s of e){const e=s.geometry,{metadata:n}=e,i=n.getExternalSourcesOnService(a),o=s.getAttribute(r);if(0===i.length){h.Z.getLogger(this).error(`Skipping feature ${o}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:u}=i.find(x.yT)??i[0],{vertexSpace:l}=e,d=l.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const e of u)1===e.parts.length?t.push({globalId:(0,b.z)(),parentGlobalId:o,assetName:e.assetName,assetHash:e.parts[0].partHash,flags:d}):h.Z.getLogger(this).error(`Skipping asset ${e.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_getFeatureIds(e,t){if(!e||0===e.length)return[];if(t&&(0,T.isFeatureIdentifierArrayWithGlobalId)(e))return e.map((e=>e.globalId));if((0,T.isFeatureIdentifierArrayWithObjectId)(e))return e.map((e=>e.objectId));const{layer:r}=this,a=t?r.globalIdField:r.objectIdField;return a?e.map((e=>e.getAttribute(a))):[]}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,a=[];let s=null;if(Array.isArray(t))for(const e of t)a.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===r&&(s={addResults:e.addResults??[],updateResults:e.updateResults??[],deleteResults:e.deleteResults??[],attachments:e.attachments,editMoment:e.editMoment});else s=t;const n=s?.assetMaps;if(n){for(const e of n.addResults)e.success||h.Z.getLogger(this).error(`Failed to map asset to feature with globalId ${e.globalId}.`);for(const e of n.updateResults)e.success||h.Z.getLogger(this).error(`Failed to map asset to feature with globalId ${e.globalId}.`)}const i=s?.attachments,o={addFeatureResults:s?.addResults?.map(this._createFeatureEditResult,this)??[],updateFeatureResults:s?.updateResults?.map(this._createFeatureEditResult,this)??[],deleteFeatureResults:s?.deleteResults?.map(this._createFeatureEditResult,this)??[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]};if(s?.editMoment&&(o.editMoment=s.editMoment),a.length>0){o.editedFeatureResults=[];for(const e of a){const{editedFeatures:t}=e,r=t?.spatialReference?new B.Z(t.spatialReference):null;o.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:t?.adds?.map((e=>this._createEditedFeature(e,r)))||[],updates:t?.updates?.map((e=>({original:this._createEditedFeature(e[0],r),current:this._createEditedFeature(e[1],r)})))||[],deletes:t?.deletes?.map((e=>this._createEditedFeature(e,r)))||[],spatialReference:r}})}}return o}_createEditedFeature(e,t){return new s.Z({attributes:e.attributes,geometry:(0,R.im)({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new l.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new l.Z("feature-layer-source:attachment-failure",r,{code:a})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const e in t){const a=t[e];null!=a&&(r.set?r.set(e,a):r.append(e,a))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:a}=this.layer;return{...e,query:{gdbVersion:r,layer:a?JSON.stringify({source:a}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:r,infoFor3D:a,parsedUrl:s}=t;if(null==a||null==r)return e;const n=(0,N.$6)(a);if(null==n)return e;const i=(0,g.v_)(s.path,`../${n.id}`),o=new Array,l=new Array;for(const t of e)t.geometry.metadata.getExternalSourcesOnService(s).length>0?l.push(t):o.push(t);const d=l.map((e=>e.getAttribute(r))).filter(u.pC);if(0===d.length)return e;const{assetMapFieldRoles:{parentGlobalId:p,assetHash:c}}=a,h=new k.Z;h.where=`${p} IN (${d.map((e=>`'${e}'`))})`,h.outFields=[c,p],h.returnGeometry=!1;const y=await(0,C.e)(i,h),{features:f}=y;return 0===f.length?e:[...o,...l.filter((e=>{const t=e.getAttribute(r);if(!t)return!0;const{metadata:a}=e.geometry,n=f.filter((e=>e.getAttribute(p)===t));if(0===n.length)return!0;const i=n.map((e=>e.getAttribute(c)));return a.getExternalSourcesOnService(s).flatMap((({source:e})=>e.flatMap((e=>e.parts.map((e=>e.partHash)))))).some((e=>i.every((t=>e!==t))))}))]}};(0,a._)([(0,F.Cb)()],P.prototype,"type",void 0),(0,a._)([(0,F.Cb)({constructOnly:!0})],P.prototype,"layer",void 0),(0,a._)([(0,F.Cb)({readOnly:!0})],P.prototype,"queryTask",null),P=(0,a._)([(0,w.j)("esri.layers.graphics.sources.FeatureLayerSource")],P);const L=1e3,G=P},40400:(e,t,r)=>{r.d(t,{Dm:()=>d,Hq:()=>p,MS:()=>c,bU:()=>o});var a=r(39994),s=r(67134),n=r(10287),i=r(86094);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.I4:"esriGeometryPolyline"===e?i.ET:i.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,a.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const a=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new a}catch(r){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:n.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}}}]);