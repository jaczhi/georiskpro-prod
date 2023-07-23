"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4277],{98786:(e,t,r)=>{r.d(t,{B:()=>c});var n=r(71760),i=r(39154),o=r(12173),s=r(41610),l=r(65943),a=r(81977),u=r(51876),p=r(16641);function c(e){const t=e?.origins??[void 0];return(r,o)=>{const c=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const o=(0,s.Oe)(t,r);return{type:String,read:(e,t,r)=>{const n=(0,p.r)(e,t,r);return o.type===String?n:"function"==typeof o.type?new o.type({url:n}):void 0},write:{writer(t,s,a,c){if(!c||!c.resources)return"string"==typeof t?void(s[a]=(0,p.t)(t,c)):void(s[a]=t.write({},c));const g=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),h=(0,p.t)(g,{...c,verifyItemRelativeUrls:c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},p.M.NO),b=o.type!==String&&(!(0,n.l)(this)||c&&c.origin&&this.originIdOf(r)>(0,l.M9)(c.origin)),v={object:this,propertyName:r,value:t,targetUrl:h,dest:s,targetPropertyName:a,context:c,params:e};c&&c.portalItem&&h&&!(0,i.YP)(h)?b?function(e){const{context:t,targetUrl:r,params:n,value:o,dest:s,targetPropertyName:l}=e;if(!t.portalItem)return;const a=t.portalItem.resourceFromPath(r),p=f(o,r,t),c=(0,u.B)(p),g=(0,i.Ml)(a.path),h=n?.compress??!1;c===g?(t.resources&&d({...e,resource:a,content:p,compress:h,updates:t.resources.toUpdate}),s[l]=r):y(e)}(v):function({context:e,targetUrl:t,dest:r,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[n]=t)}(v):c&&c.portalItem&&(null==h||null!=(0,p.i)(h)||(0,i.jc)(h)||b)?y(v):s[a]=h}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=p.a;return{read:e,write:t}}}}(e,r,o);for(const e of t){const t=(0,a.CJ)(r,e,o);for(const e in c)t[e]=c[e]}}}function y(e){const{targetUrl:t,params:n,value:s,context:l,dest:a,targetPropertyName:c}=e;if(!l.portalItem)return;const y=(0,p.p)(t),g=y?.filename??(0,o.D)(),h=n?.prefix??y?.prefix,b=f(s,t,l),v=(0,i.v_)(h,g),m=`${v}.${(0,u.B)(b)}`,I=l.portalItem.resourceFromPath(m);(0,i.jc)(t)&&l.resources&&l.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,66341))).default,{data:n}=await t(e,{responseType:"blob"});return n}(t).then((e=>{I.path=`${v}.${(0,u.B)(e)}`,a[c]=I.itemRelativeUrl})).catch((()=>{})));const j=n?.compress??!1;l.resources&&d({...e,resource:I,content:b,compress:j,updates:l.resources.toAdd}),a[c]=I.itemRelativeUrl}function d({object:e,propertyName:t,updates:r,resource:n,content:i,compress:o}){r.push({resource:n,content:i,compress:o,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function f(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},71760:(e,t,r)=>{function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>n})},12173:(e,t,r)=>{r.d(t,{D:()=>i,z:()=>o});const n="randomUUID"in crypto;function i(){if(n)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function o(){return`{${i()}}`}},64277:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n=r(36663),i=r(97992);function o(e,t){return s(e)===s(t)}function s(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}const l={json:{write:{writer:function(e,t){null!=e&&null!=e.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var a=r(74396),u=r(41151),p=r(82064),c=r(61681),y=r(81977),d=(r(7283),r(7753),r(39994),r(40266)),f=r(98786),g=r(67666),h=r(74710);let b=class extends((0,p.eC)((0,u.J)(a.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,c._W)(this.position,e.position)&&(0,c._W)(this.elevationInfo,e.elevationInfo)&&o(this.feature,e.feature)}};(0,n._)([(0,y.Cb)({type:g.Z,json:{write:{isRequired:!0}}})],b.prototype,"position",void 0),(0,n._)([(0,y.Cb)({type:h.Z}),(0,f.B)()],b.prototype,"elevationInfo",void 0),(0,n._)([(0,y.Cb)(l)],b.prototype,"feature",void 0),b=(0,n._)([(0,d.j)("esri.analysis.LineOfSightAnalysisObserver")],b);const v=b;let m=class extends((0,p.eC)(u.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,c._W)(this.position,e.position)&&(0,c._W)(this.elevationInfo,e.elevationInfo)&&o(this.feature,e.feature)}};(0,n._)([(0,y.Cb)({type:g.Z}),(0,f.B)()],m.prototype,"position",void 0),(0,n._)([(0,y.Cb)({type:h.Z}),(0,f.B)()],m.prototype,"elevationInfo",void 0),(0,n._)([(0,y.Cb)(l)],m.prototype,"feature",void 0),m=(0,n._)([(0,d.j)("esri.analysis.LineOfSightAnalysisTarget")],m);const I=m;var j=r(6865),w=r(58811),_=r(76868),x=r(92376),C=r(37116);function O(e,t){return function(e,t){return null!=t&&t.mode?t.mode:function(e){return e?R:U}(e).mode}(null!=e&&e.hasZ,t)}r(91478);const R={mode:"absolute-height",offset:0},U={mode:"on-the-ground",offset:null},P=j.Z.ofType(I);let S=class extends i.Z{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,_.YP)((()=>this._computeExtent()),(e=>{null!=e&&null!=e.pending||this._set("extent",null!=e?e.extent:null)}),_.tX))}get targets(){return this._get("targets")||new P}set targets(e){this._set("targets",(0,w.Z)(e,this.targets,P))}get spatialReference(){return null!=this.observer&&null!=this.observer.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[(0,c.yw)(this.observer,(e=>e.position))]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==this.observer||null==this.observer.position||null==e)return null;const t=e=>"absolute-height"===O(e.position,e.elevationInfo),r=this.observer.position,n=(0,C.al)(r.x,r.y,r.z,r.x,r.y,r.z);for(const t of this.targets)if(null!=t.position){const r=(0,x.projectOrLoad)(t.position,e);if(null!=r.pending)return{pending:r.pending,extent:null};if(null!=r.geometry){const{x:e,y:t,z:i}=r.geometry;(0,C.pp)(n,[e,t,i])}}const i=(0,C.HH)(n,e);return t(this.observer)&&this.targets.every(t)||(i.zmin=void 0,i.zmax=void 0),{pending:null,extent:i}}clear(){this.observer=null,this.targets.removeAll()}};(0,n._)([(0,y.Cb)({type:["line-of-sight"]})],S.prototype,"type",void 0),(0,n._)([(0,y.Cb)({type:v,json:{read:!0,write:!0}})],S.prototype,"observer",void 0),(0,n._)([(0,y.Cb)({cast:w.R,type:P,nonNullable:!0,json:{read:!0,write:!0}})],S.prototype,"targets",null),(0,n._)([(0,y.Cb)({value:null,readOnly:!0})],S.prototype,"extent",void 0),(0,n._)([(0,y.Cb)({readOnly:!0})],S.prototype,"spatialReference",null),(0,n._)([(0,y.Cb)({readOnly:!0})],S.prototype,"requiredPropertiesForEditing",null),S=(0,n._)([(0,d.j)("esri.analysis.LineOfSightAnalysis")],S);const z=S;var N=r(15842),Z=r(38481),L=r(43330);const F=j.Z.ofType(I);let B=class extends((0,L.q)((0,N.R)(Z.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new z,this.opacity=1}initialize(){this.addHandles((0,_.YP)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),_.tX))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return(0,c.yw)(this.analysis,(e=>e.observer))}set observer(e){(0,c.yw)(this.analysis,(t=>t.observer=e))}get targets(){return null!=this.analysis?this.analysis.targets:new j.Z}set targets(e){(0,w.Z)(e,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new z)}};(0,n._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),(0,n._)([(0,y.Cb)({type:["LineOfSightLayer"]})],B.prototype,"operationalLayerType",void 0),(0,n._)([(0,y.Cb)({type:v,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],B.prototype,"observer",null),(0,n._)([(0,y.Cb)({type:F,json:{read:!0,write:{ignoreOrigin:!0}}})],B.prototype,"targets",null),(0,n._)([(0,y.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],B.prototype,"analysis",void 0),(0,n._)([(0,y.Cb)({readOnly:!0})],B.prototype,"fullExtent",null),(0,n._)([(0,y.Cb)({readOnly:!0})],B.prototype,"spatialReference",null),(0,n._)([(0,y.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],B.prototype,"opacity",void 0),(0,n._)([(0,y.Cb)({type:["show","hide"]})],B.prototype,"listMode",void 0),B=(0,n._)([(0,d.j)("esri.layers.LineOfSightLayer")],B);const E=B},51876:(e,t,r)=>{r.d(t,{B:()=>i});var n=r(39154);function i(e){return o[function(e){return e instanceof Blob?e.type:function(e){const t=(0,n.Ml)(e);return a[t]||s}(e.url)}(e)]||l}const o={},s="text/plain",l=o[s],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in a)o[a[e]]=e}}]);