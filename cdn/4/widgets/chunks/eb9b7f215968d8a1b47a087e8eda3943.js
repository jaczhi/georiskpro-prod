"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7495,9593],{27281:(e,t,a)=>{a.d(t,{Hg:()=>y,V7:()=>m,uD:()=>p});var n=a(74396),i=a(6865),r=a(95620);const o=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function s(e){return e instanceof n.Z}function l(e){return e instanceof i.Z?Object.keys(e.items):s(e)?(0,r.vw)(e).keys():e?Object.keys(e):[]}function d(e,t){return e instanceof i.Z?e.items[t]:e[t]}function u(e){return e?e.declaredClass:null}function c(e,t){const a=e.diff;if(a&&"function"==typeof a)return a(e,t);const n=l(e),i=l(t);if(0===n.length&&0===i.length)return;if(!n.length||!i.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const r=i.filter((e=>!n.includes(e))),p=n.filter((e=>!i.includes(e))),m=n.filter((a=>i.includes(a)&&d(e,a)!==d(t,a))).concat(r,p).sort(),y=u(e);if(y&&o.includes(y)&&m.length)return{type:"complete",oldValue:e,newValue:t};let f;const T=s(e)&&s(t);for(const n of m){const i=d(e,n),r=d(t,n);let o;if((T||"function"!=typeof i&&"function"!=typeof r)&&i!==r&&(null!=i||null!=r)){if(a&&a[n]&&"function"==typeof a[n])o=a[n]?.(i,r);else if(i instanceof Date&&r instanceof Date){if(i.getTime()===r.getTime())continue;o={type:"complete",oldValue:i,newValue:r}}else o="object"==typeof i&&"object"==typeof r&&u(i)===u(r)?c(i,r):{type:"complete",oldValue:i,newValue:r};null!=o&&(null!=f?f.diff[n]=o:f={type:"partial",diff:{[n]:o}})}}return f}function p(e,t){if(null==e)return!1;const a=t.split(".");let n=e;for(const e of a){if("complete"===n.type)return!0;if("partial"!==n.type)return!1;{const t=n.diff[e];if(!t)return!1;n=t}}return!0}function m(e,t){for(const a of t)if(p(e,a))return!0;return!1}function y(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:c(e,t)}},61957:(e,t,a)=>{a.d(t,{O3:()=>b,lG:()=>C,my:()=>w,q9:()=>l});var n=a(70375),i=a(59958),r=a(15540),o=a(17095);const s={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function l(e){return s[e]}function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function c(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let a=0;a<e.length;a++){const n=e[a],i=e[(a+1)%e.length];t+=n[0]*i[1]-i[0]*n[1]}return t<=0}function m(e){const t=e[0],a=e[e.length-1];return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]||e.push(t),e}function y(e,t,a){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,a){return S(e,t.coordinates,a),e}(e,t,a);case"MultiLineString":return function(e,t,a){for(const n of t.coordinates)S(e,n,a);return e}(e,t,a);case"MultiPolygon":return function(e,t,a){for(const n of t.coordinates){f(e,n[0],a);for(let t=1;t<n.length;t++)T(e,n[t],a)}return e}(e,t,a);case"Point":return function(e,t,a){return h(e,t.coordinates,a),e}(e,t,a);case"Polygon":return function(e,t,a){const n=t.coordinates;f(e,n[0],a);for(let t=1;t<n.length;t++)T(e,n[t],a);return e}(e,t,a)}}function f(e,t,a){const n=m(t);!function(e){return!p(e)}(n)?S(e,n,a):g(e,n,a)}function T(e,t,a){const n=m(t);!function(e){return p(e)}(n)?S(e,n,a):g(e,n,a)}function S(e,t,a){for(const n of t)h(e,n,a);e.lengths.push(t.length)}function g(e,t,a){for(let n=t.length-1;n>=0;n--)h(e,t[n],a);e.lengths.push(t.length)}function h(e,t,a){const[n,i,r]=t;e.coords.push(n,i),a.hasZ&&e.coords.push(r||0)}function A(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function b(e){if(!e)throw new n.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new n.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const a="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,i=new RegExp(".*(CRS84H?|4326)$","i");if(!a||!i.test(a))throw new n.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function w(e,t={}){const a=[],n=new Set,i=new Set;let r,s=!1,p=null,m=!1,{geometryType:y=null}=t,f=!1;for(const t of d(e)){const{geometry:e,properties:d,id:T}=t;if((!e||(y||(y=l(e.type)),l(e.type)===y))&&(s||(s=c(u(e))),m||(m=null!=T,m&&(r=typeof T,d&&(p=Object.keys(d).filter((e=>d[e]===T))))),d&&p&&m&&null!=T&&(p.length>1?p=p.filter((e=>d[e]===T)):1===p.length&&(p=d[p[0]]===T?p:[])),!f&&d)){let e=!0;for(const t in d){if(n.has(t))continue;const r=d[t];if(null==r){e=!1,i.add(t);continue}const s=A(r);if("unknown"===s){i.add(t);continue}i.delete(t),n.add(t);const l=(0,o.q6)(t);l&&a.push({name:l,alias:t,type:s})}f=e}}const T=(0,o.q6)(1===p?.length&&p[0]||null)??void 0;if(T)for(const e of a)if(e.name===T&&(0,o.H7)(e)){e.type="esriFieldTypeOID";break}return{fields:a,geometryType:y,hasZ:s,objectIdFieldName:T,objectIdFieldType:r,unknownFields:Array.from(i)}}function C(e,t){return Array.from(function*(e,t={}){const{geometryType:a,objectIdField:n}=t;for(const o of e){const{geometry:e,properties:s,id:d}=o;if(e&&l(e.type)!==a)continue;const u=s||{};let c;n&&(c=u[n],null==d||c||(u[n]=c=d));const p=new i.u_(e?y(new r.Z,e,t):null,u,null,c??void 0);yield p}}(d(e),t))}},40400:(e,t,a)=>{a.d(t,{Dm:()=>u,Hq:()=>c,MS:()=>p,bU:()=>s});var n=a(39994),i=a(67134),r=a(10287),o=a(86094);function s(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let d=1;function u(e,t){if((0,n.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let a=`this.${t} = null;`;for(const t in e)a+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const n=new Function(`\n      return class AttributesClass$${d++} {\n        constructor() {\n          ${a};\n        }\n      }\n    `)();return()=>new n}catch(a){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}},53237:(e,t,a)=>{a.d(t,{$9:()=>S,G4:()=>A,Lu:()=>T,WW:()=>v,d:()=>C,eS:()=>w,gp:()=>b,j:()=>h,w9:()=>g,yN:()=>k}),a(91957);var n=a(66341),i=a(70375),r=a(13802),o=a(35925),s=a(39536),l=a(12065),d=a(61619),u=a(61957),c=a(40400),p=a(28790),m=a(86349),y=a(14685);const f=r.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),T="http://www.opengis.net/def/crs/",S=`${T}OGC/1.3/CRS84`;async function g(e,t,a={},r=5){const{links:o}=e,s=G(o,"items","application/geo+json")||G(o,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(null==s)throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:l}=await(0,n.default)(s.href,{signal:a.signal,query:{limit:r,...a.customParameters,token:a.apiKey},headers:{accept:"application/geo+json"}});await(0,u.O3)(l);const d=(0,u.my)(l,{geometryType:t.geometryType}),y=t.fields||d.fields||[],T=null!=t.hasZ?t.hasZ:d.hasZ,S=d.geometryType,g=t.objectIdField||d.objectIdFieldName||"OBJECTID";let h=t.timeInfo;const A=y.find((({name:e})=>e===g));if(A)A.editable=!1,A.nullable=!1;else{if(!d.objectIdFieldType)throw new i.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");y.unshift({name:g,alias:g,type:"number"===d.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(g!==d.objectIdFieldName){const e=y.find((({name:e})=>e===d.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}y===d.fields&&d.unknownFields.length>0&&f.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:d.unknownFields}});for(const e of y){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new i.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(!m.v.jsonValues.includes(e.type))throw new i.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(h){const e=new p.Z(y);if(h.startTimeField){const t=e.get(h.startTimeField);t?(h.startTimeField=t.name,t.type="esriFieldTypeDate"):h.startTimeField=null}if(h.endTimeField){const t=e.get(h.endTimeField);t?(h.endTimeField=t.name,t.type="esriFieldTypeDate"):h.endTimeField=null}if(h.trackIdField){const t=e.get(h.trackIdField);t?h.trackIdField=t.name:(h.trackIdField=null,f.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:h}}))}h.startTimeField||h.endTimeField||(f.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:h}}),h=null)}return{drawingInfo:S?(0,c.bU)(S):null,extent:j(e),geometryType:S,fields:y,hasZ:!!T,objectIdField:g,timeInfo:h}}async function h(e,t={}){const{links:a}=e,r=G(a,"data","application/json")||G(a,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(null==r)throw new i.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:s,signal:l}=t,{data:d}=await(0,n.default)(r.href,{signal:l,headers:{accept:"application/json"},query:{...s,token:o}});return d}async function A(e,t={}){const{links:a}=e,r=G(a,"conformance","application/json")||G(a,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(null==r)throw new i.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:s,signal:l}=t,{data:d}=await(0,n.default)(r.href,{signal:l,headers:{accept:"application/json"},query:{...s,token:o}});return d}async function b(e,t={}){const{apiKey:a,customParameters:i,signal:r}=t,{data:o}=await(0,n.default)(e,{signal:r,headers:{accept:"application/json"},query:{...i,token:a}});return o}async function w(e,t={}){const a="application/vnd.oai.openapi+json;version=3.0",i=G(e.links,"service-desc",a);if(null==i)return f.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:r,customParameters:o,signal:s}=t,{data:l}=await(0,n.default)(i.href,{signal:s,headers:{accept:a},query:{...o,token:r}});return l}function C(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),a=t?.groups;if(!a)return null;const{authority:n,code:i}=a;switch(n.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return y.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return y.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(i,10);return Number.isNaN(e)?null:e}default:return null}}async function k(e,t,a){const n=await v(e,t,a);return(0,l.cn)(n)}async function v(e,t,a){const{collection:r,layerDefinition:c,maxRecordCount:p,queryParameters:{apiKey:m,customParameters:f},spatialReference:T,supportedCrs:S}=e,{links:g}=r,h=G(g,"items","application/geo+json")||G(g,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(null==h)throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:A,num:b,start:w,timeExtent:C,where:k}=t;if(t.objectIds)throw new i.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const v=y.Z.fromJSON(T),F=t.outSpatialReference??v,j=F.isWGS84?null:M(F,S),I=E(A,S),P=function(e){if(null==e)return null;const{start:t,end:a}=e;return`${null!=t?t.toISOString():".."}/${null!=a?a.toISOString():".."}`}(C),Z=null!=(N=k)&&N&&"1=1"!==N?N:null,V=b??(null!=w&&void 0!==w?10:p),{data:_}=await(0,n.default)(h.href,{...a,query:{...f,...I,crs:j,datetime:P,query:Z,limit:V,startindex:w,token:m},headers:{accept:"application/geo+json"}});var N;let x=!1;_.links&&(x=!!_.links.find((e=>"next"===e.rel))),!x&&Number.isInteger(_.numberMatched)&&Number.isInteger(_.numberReturned)&&(x=_.numberReturned<_.numberMatched);const{fields:D,geometryType:O,hasZ:U,objectIdField:L}=c,B=(0,u.lG)(_,{geometryType:O,hasZ:U,objectIdField:L});if(!j&&F.isWebMercator)for(const e of B)if(null!=e.geometry&&null!=O){const t=(0,l.di)(e.geometry,O,U,!1);t.spatialReference=y.Z.WGS84,e.geometry=(0,l.GH)((0,s.iV)(t,F))}for(const e of B)e.objectId=e.attributes[L];const R=j||!j&&F.isWebMercator?F.toJSON():o.Zn,q=new d.Z;return q.exceededTransferLimit=x,q.features=B,q.fields=D,q.geometryType=O,q.hasZ=U,q.objectIdFieldName=L,q.spatialReference=R,q}function M(e,t){const{isWebMercator:a,wkid:n}=e;if(!n)return null;const i=a?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return i?`${T}${i}`:null}function F(e){if(null==e)return"";const{xmin:t,ymin:a,xmax:n,ymax:i}=e;return`${t},${a},${n},${i}`}function E(e,t){if(!function(e){return null!=e&&"extent"===e.type}(e))return null;const{spatialReference:a}=e;if(!a||a.isWGS84)return{bbox:F(e)};const n=M(a,t);return null!=n?{bbox:F(e),"bbox-crs":n}:a.isWebMercator?{bbox:F((0,s.iV)(e,y.Z.WGS84))}:null}function j(e){const t=e.extent?.spatial;if(!t)return null;const a=t.bbox[0],n=4===a.length,i=a[0],r=a[1],o=n?void 0:a[2];return{xmin:i,ymin:r,xmax:n?a[2]:a[3],ymax:n?a[3]:a[4],zmin:o,zmax:n?void 0:a[5],spatialReference:y.Z.WGS84.toJSON()}}function G(e,t,a){return e.find((e=>e.rel===t&&e.type===a))||e.find((e=>e.rel===t&&!e.type))}},12512:(e,t,a)=>{a.d(t,{Z:()=>T});var n,i=a(36663),r=a(25709),o=a(82064),s=a(81977),l=a(7283),d=(a(7753),a(39994),a(79438)),u=a(34248),c=a(40266),p=a(60248),m=a(86349);const y=new r.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let f=n=class extends o.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let a=null;try{a=t?JSON.parse(t):null}catch(e){}return a?.value??null}readValueType(e,{description:t}){let a=null;try{a=t?JSON.parse(t):null}catch(e){}return a?y.fromJSON(a.fieldValueType):null}clone(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],f.prototype,"alias",void 0),(0,i._)([(0,s.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],f.prototype,"defaultValue",void 0),(0,i._)([(0,s.Cb)()],f.prototype,"description",void 0),(0,i._)([(0,u.r)("description")],f.prototype,"readDescription",null),(0,i._)([(0,s.Cb)({types:p.V5,json:{read:{reader:p.im},write:!0}})],f.prototype,"domain",void 0),(0,i._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],f.prototype,"editable",void 0),(0,i._)([(0,s.Cb)({type:l.z8,json:{write:!0}})],f.prototype,"length",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,i._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],f.prototype,"nullable",void 0),(0,i._)([(0,d.J)(m.v)],f.prototype,"type",void 0),(0,i._)([(0,s.Cb)()],f.prototype,"valueType",void 0),(0,i._)([(0,u.r)("valueType",["description"])],f.prototype,"readValueType",null),(0,i._)([(0,s.Cb)({type:Boolean,json:{read:!1}})],f.prototype,"visible",void 0),f=n=(0,i._)([(0,c.j)("esri.layers.support.Field")],f);const T=f},60248:(e,t,a)=>{a.d(t,{im:()=>k,V5:()=>C}),a(39994);var n,i=a(36663),r=a(67134),o=a(81977),s=(a(7283),a(79438)),l=a(40266),d=a(82064);a(7753);let u=n=class extends d.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new n({name:this.name,code:this.code})}};(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],u.prototype,"name",void 0),(0,i._)([(0,o.Cb)({type:[String,Number],json:{write:!0}})],u.prototype,"code",void 0),u=n=(0,i._)([(0,l.j)("esri.layers.support.CodedValue")],u);const c=new(a(25709).X)({inherited:"inherited",codedValue:"coded-value",range:"range"});let p=class extends d.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,i._)([(0,s.J)(c)],p.prototype,"type",void 0),p=(0,i._)([(0,l.j)("esri.layers.support.Domain")],p);const m=p;var y;let f=y=class extends m{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const a=String(e);this.codedValues.some((e=>(String(e.code)===a&&(t=e.name),!!t)))}return t}clone(){return new y({codedValues:(0,r.d9)(this.codedValues),name:this.name})}};(0,i._)([(0,o.Cb)({type:[u],json:{write:!0}})],f.prototype,"codedValues",void 0),(0,i._)([(0,s.J)({codedValue:"coded-value"})],f.prototype,"type",void 0),f=y=(0,i._)([(0,l.j)("esri.layers.support.CodedValueDomain")],f);const T=f;var S;a(13802),a(70375);let g=S=class extends m{constructor(e){super(e),this.type="inherited"}clone(){return new S}};(0,i._)([(0,s.J)({inherited:"inherited"})],g.prototype,"type",void 0),g=S=(0,i._)([(0,l.j)("esri.layers.support.InheritedDomain")],g);const h=g;var A;let b=A=class extends m{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new A({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,i._)([(0,o.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,a){t[a]=[this.minValue||0,e]}}}})],b.prototype,"maxValue",void 0),(0,i._)([(0,o.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,a){t[a]=[e,this.maxValue||0]}}}})],b.prototype,"minValue",void 0),(0,i._)([(0,s.J)({range:"range"})],b.prototype,"type",void 0),b=A=(0,i._)([(0,l.j)("esri.layers.support.RangeDomain")],b);const w=b,C={key:"type",base:m,typeMap:{range:b,"coded-value":T,inherited:h}};function k(e){if(!e||!e.type)return null;switch(e.type){case"range":return w.fromJSON(e);case"codedValue":return T.fromJSON(e);case"inherited":return h.fromJSON(e)}return null}},86349:(e,t,a)=>{a.d(t,{v:()=>n});const n=new(a(25709).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},86094:(e,t,a)=>{a.d(t,{ET:()=>r,I4:()=>i,eG:()=>l,lF:()=>o,lj:()=>u,qP:()=>s,wW:()=>d});const n=[252,146,31,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:n,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},r={type:"esriSLS",style:"esriSLSSolid",width:.75,color:n},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},s={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},9593:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(36663),i=a(41151),r=a(82064),o=a(81977),s=(a(7283),a(7753),a(39994),a(34248)),l=a(40266),d=a(39835),u=a(25302);let c=class extends((0,i.J)(r.wq)){constructor(e){super(e),this.legacy=null,this.timeZone="system"}readLegacy(e,t){const{timeZone:a,respectsDaylightSaving:n}=t;return{timeZone:a,respectsDaylightSaving:n}}readTimeZone(e,t){return"timeZoneIANA"in t?t.timeZoneIANA:(0,u.G)(t)}writeTimeZone(e,t){t.timeZoneIANA=e}equals(e){return null!=e&&null!=this.timeZone&&null!=e.timeZone&&this.timeZone===e.timeZone}};(0,n._)([(0,o.Cb)()],c.prototype,"legacy",void 0),(0,n._)([(0,s.r)("legacy",["timeZone"])],c.prototype,"readLegacy",null),(0,n._)([(0,o.Cb)({type:String,nonNullable:!0})],c.prototype,"timeZone",void 0),(0,n._)([(0,s.r)("timeZone",["timeZone","timeZoneIANA","respectsDaylightSaving"])],c.prototype,"readTimeZone",null),(0,n._)([(0,d.c)("timeZone")],c.prototype,"writeTimeZone",null),c=(0,n._)([(0,l.j)("esri.time.TimeReference")],c);const p=c},25302:(e,t,a)=>{a.d(t,{G:()=>r});const n=new Map([["AUS Central Standard Time","Australia/Darwin"],["AUS Eastern Standard Time","Australia/Sydney"],["Afghanistan Standard Time","Asia/Kabul"],["Alaskan Standard Time","America/Anchorage"],["Aleutian Standard Time","America/Adak"],["Altai Standard Time","Asia/Barnaul"],["Arab Standard Time","Asia/Riyadh"],["Arabian Standard Time","Asia/Dubai"],["Arabic Standard Time","Asia/Baghdad"],["Argentina Standard Time","America/Buenos_Aires"],["Astrakhan Standard Time","Europe/Astrakhan"],["Atlantic Standard Time","America/Halifax"],["Aus Central W. Standard Time","Australia/Eucla"],["Azerbaijan Standard Time","Asia/Baku"],["Azores Standard Time","Atlantic/Azores"],["Bahia Standard Time","America/Bahia"],["Bangladesh Standard Time","Asia/Dhaka"],["Belarus Standard Time","Europe/Minsk"],["Bougainville Standard Time","Pacific/Bougainville"],["Canada Central Standard Time","America/Regina"],["Cape Verde Standard Time","Atlantic/Cape_Verde"],["Caucasus Standard Time","Asia/Yerevan"],["Cen. Australia Standard Time","Australia/Adelaide"],["Central America Standard Time","America/Guatemala"],["Central Asia Standard Time","Asia/Almaty"],["Central Brazilian Standard Time","America/Cuiaba"],["Central Europe Standard Time","Europe/Budapest"],["Central European Standard Time","Europe/Warsaw"],["Central Pacific Standard Time","Pacific/Guadalcanal"],["Central Standard Time","America/Chicago"],["Central Standard Time (Mexico)","America/Mexico_City"],["Chatham Islands Standard Time","Pacific/Chatham"],["China Standard Time","Asia/Shanghai"],["Cuba Standard Time","America/Havana"],["Dateline Standard Time","Etc/GMT+12"],["E. Africa Standard Time","Africa/Nairobi"],["E. Australia Standard Time","Australia/Brisbane"],["E. Europe Standard Time","Europe/Chisinau"],["E. South America Standard Time","America/Sao_Paulo"],["Easter Island Standard Time","Pacific/Easter"],["Eastern Standard Time","America/New_York"],["Eastern Standard Time (Mexico)","America/Cancun"],["Egypt Standard Time","Africa/Cairo"],["Ekaterinburg Standard Time","Asia/Yekaterinburg"],["FLE Standard Time","Europe/Kiev"],["Fiji Standard Time","Pacific/Fiji"],["GMT Standard Time","Europe/London"],["GTB Standard Time","Europe/Bucharest"],["Georgian Standard Time","Asia/Tbilisi"],["Greenland Standard Time","America/Godthab"],["Greenwich Standard Time","Atlantic/Reykjavik"],["Haiti Standard Time","America/Port-au-Prince"],["Hawaiian Standard Time","Pacific/Honolulu"],["India Standard Time","Asia/Calcutta"],["Iran Standard Time","Asia/Tehran"],["Israel Standard Time","Asia/Jerusalem"],["Jordan Standard Time","Asia/Amman"],["Kaliningrad Standard Time","Europe/Kaliningrad"],["Korea Standard Time","Asia/Seoul"],["Libya Standard Time","Africa/Tripoli"],["Line Islands Standard Time","Pacific/Kiritimati"],["Lord Howe Standard Time","Australia/Lord_Howe"],["Magadan Standard Time","Asia/Magadan"],["Magallanes Standard Time","America/Punta_Arenas"],["Marquesas Standard Time","Pacific/Marquesas"],["Mauritius Standard Time","Indian/Mauritius"],["Middle East Standard Time","Asia/Beirut"],["Montevideo Standard Time","America/Montevideo"],["Morocco Standard Time","Africa/Casablanca"],["Mountain Standard Time","America/Denver"],["Mountain Standard Time (Mexico)","America/Mazatlan"],["Myanmar Standard Time","Asia/Rangoon"],["N. Central Asia Standard Time","Asia/Novosibirsk"],["Namibia Standard Time","Africa/Windhoek"],["Nepal Standard Time","Asia/Katmandu"],["New Zealand Standard Time","Pacific/Auckland"],["Newfoundland Standard Time","America/St_Johns"],["Norfolk Standard Time","Pacific/Norfolk"],["North Asia East Standard Time","Asia/Irkutsk"],["North Asia Standard Time","Asia/Krasnoyarsk"],["North Korea Standard Time","Asia/Pyongyang"],["Omsk Standard Time","Asia/Omsk"],["Pacific SA Standard Time","America/Santiago"],["Pacific Standard Time","America/Los_Angeles"],["Pacific Standard Time (Mexico)","America/Tijuana"],["Pakistan Standard Time","Asia/Karachi"],["Paraguay Standard Time","America/Asuncion"],["Qyzylorda Standard Time","Asia/Qyzylorda"],["Romance Standard Time","Europe/Paris"],["Russia Time Zone 10","Asia/Srednekolymsk"],["Russia Time Zone 11","Asia/Kamchatka"],["Russia Time Zone 3","Europe/Samara"],["Russian Standard Time","Europe/Moscow"],["SA Eastern Standard Time","America/Cayenne"],["SA Pacific Standard Time","America/Bogota"],["SA Western Standard Time","America/La_Paz"],["SE Asia Standard Time","Asia/Bangkok"],["Saint Pierre Standard Time","America/Miquelon"],["Sakhalin Standard Time","Asia/Sakhalin"],["Samoa Standard Time","Pacific/Apia"],["Sao Tome Standard Time","Africa/Sao_Tome"],["Saratov Standard Time","Europe/Saratov"],["Singapore Standard Time","Asia/Singapore"],["South Africa Standard Time","Africa/Johannesburg"],["South Sudan Standard Time","Africa/Juba"],["Sri Lanka Standard Time","Asia/Colombo"],["Sudan Standard Time","Africa/Khartoum"],["Syria Standard Time","Asia/Damascus"],["Taipei Standard Time","Asia/Taipei"],["Tasmania Standard Time","Australia/Hobart"],["Tocantins Standard Time","America/Araguaina"],["Tokyo Standard Time","Asia/Tokyo"],["Tomsk Standard Time","Asia/Tomsk"],["Tonga Standard Time","Pacific/Tongatapu"],["Transbaikal Standard Time","Asia/Chita"],["Turkey Standard Time","Europe/Istanbul"],["Turks And Caicos Standard Time","America/Grand_Turk"],["US Eastern Standard Time","America/Indianapolis"],["US Mountain Standard Time","America/Phoenix"],["UTC","Etc/GMT"],["UTC+01","Etc/GMT-1"],["UTC+02","Etc/GMT-2"],["UTC+03","Etc/GMT-3"],["UTC+04","Etc/GMT-4"],["UTC+05","Etc/GMT-5"],["UTC+06","Etc/GMT-6"],["UTC+07","Etc/GMT-7"],["UTC+08","Etc/GMT-8"],["UTC+09","Etc/GMT-9"],["UTC+10","Etc/GMT-10"],["UTC+11","Etc/GMT-11"],["UTC+12","Etc/GMT-12"],["UTC+13","Etc/GMT-13"],["UTC+14","Etc/GMT-14"],["UTC-01","Etc/GMT+1"],["UTC-02","Etc/GMT+2"],["UTC-03","Etc/GMT+3"],["UTC-04","Etc/GMT+4"],["UTC-05","Etc/GMT+5"],["UTC-06","Etc/GMT+6"],["UTC-07","Etc/GMT+7"],["UTC-08","Etc/GMT+8"],["UTC-09","Etc/GMT+9"],["UTC-10","Etc/GMT+10"],["UTC-11","Etc/GMT+11"],["UTC-12","Etc/GMT+12"],["Ulaanbaatar Standard Time","Asia/Ulaanbaatar"],["Venezuela Standard Time","America/Caracas"],["Vladivostok Standard Time","Asia/Vladivostok"],["Volgograd Standard Time","Europe/Volgograd"],["W. Australia Standard Time","Australia/Perth"],["W. Central Africa Standard Time","Africa/Lagos"],["W. Europe Standard Time","Europe/Berlin"],["W. Mongolia Standard Time","Asia/Hovd"],["West Asia Standard Time","Asia/Tashkent"],["West Bank Standard Time","Asia/Hebron"],["West Pacific Standard Time","Pacific/Port_Moresby"],["Yakutsk Standard Time","Asia/Yakutsk"],["Yukon Standard Time","America/Whitehorse"]]);var i=a(17126);function r(e,t="system"){if(!e||!n.has(e.timeZone))return t;const a=n.get(e.timeZone);return e.timeZone.startsWith("UTC")||e.respectsDaylightSaving?a:function(e){const t=i.ou.local().setZone(e),a=Math.min(t.set({month:1,day:1}).offset,t.set({month:5}).offset);return 0===a?"Etc/UTC":`Etc/GMT${i.Qf.instance(-a).formatOffset(0,"narrow")}`}(a)}}}]);