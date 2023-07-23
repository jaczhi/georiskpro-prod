"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[994,7470,9593],{53280:(e,t,i)=>{i.d(t,{p:()=>d,r:()=>u});var r=i(36663),a=i(74396),s=i(44584),n=i(81977),o=i(40266),l=i(81589);const d=e=>{let t=class extends e{constructor(){super(...arguments),this._handles=new s.Z,this._updatingHandles=new l.t}destroy(){this.destroyed||(this._handles.destroy(),this._updatingHandles.destroy())}get handles(){return this._handles}get updatingHandles(){return this._updatingHandles}};return(0,r._)([(0,n.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,r._)([(0,n.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,r._)([(0,o.j)("esri.core.HandleOwner")],t),t};let u=class extends(d(a.Z)){};u=(0,r._)([(0,o.j)("esri.core.HandleOwner")],u)},27281:(e,t,i)=>{i.d(t,{Hg:()=>m,V7:()=>y,uD:()=>c});var r=i(74396),a=i(6865),s=i(95620);const n=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function o(e){return e instanceof r.Z}function l(e){return e instanceof a.Z?Object.keys(e.items):o(e)?(0,s.vw)(e).keys():e?Object.keys(e):[]}function d(e,t){return e instanceof a.Z?e.items[t]:e[t]}function u(e){return e?e.declaredClass:null}function p(e,t){const i=e.diff;if(i&&"function"==typeof i)return i(e,t);const r=l(e),a=l(t);if(0===r.length&&0===a.length)return;if(!r.length||!a.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const s=a.filter((e=>!r.includes(e))),c=r.filter((e=>!a.includes(e))),y=r.filter((i=>a.includes(i)&&d(e,i)!==d(t,i))).concat(s,c).sort(),m=u(e);if(m&&n.includes(m)&&y.length)return{type:"complete",oldValue:e,newValue:t};let h;const S=o(e)&&o(t);for(const r of y){const a=d(e,r),s=d(t,r);let n;if((S||"function"!=typeof a&&"function"!=typeof s)&&a!==s&&(null!=a||null!=s)){if(i&&i[r]&&"function"==typeof i[r])n=i[r]?.(a,s);else if(a instanceof Date&&s instanceof Date){if(a.getTime()===s.getTime())continue;n={type:"complete",oldValue:a,newValue:s}}else n="object"==typeof a&&"object"==typeof s&&u(a)===u(s)?p(a,s):{type:"complete",oldValue:a,newValue:s};null!=n&&(null!=h?h.diff[r]=n:h={type:"partial",diff:{[r]:n}})}}return h}function c(e,t){if(null==e)return!1;const i=t.split(".");let r=e;for(const e of i){if("complete"===r.type)return!0;if("partial"!==r.type)return!1;{const t=r.diff[e];if(!t)return!1;r=t}}return!0}function y(e,t){for(const i of t)if(c(e,i))return!0;return!1}function m(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:p(e,t)}},81589:(e,t,i)=>{i.d(t,{t:()=>p});var r=i(36663),a=i(74396),s=i(44584),n=i(23148),o=i(76868),l=i(17262),d=i(81977),u=i(40266);let p=class extends a.Z{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new s.Z,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,i={}){return this._installWatch(e,t,i,o.YP)}addWhen(e,t,i={}){return this._installWatch(e,t,i,o.gx)}addOnCollectionChange(e,t,{initial:i=!1,final:r=!1}={}){const a=++this._handleId;return this._handles.add([(0,o.on)(e,"after-changes",this._createSyncUpdatingCallback(),o.Z_),(0,o.on)(e,"change",t,{onListenerAdd:i?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:r?e=>t({added:[],removed:e.toArray()}):void 0})],a),(0,n.kB)((()=>this._handles.remove(a)))}addPromise(e){if(null==e)return e;const t=++this._handleId;this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(c)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0);const i=()=>this._handles.remove(t);return e.then(i,i),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,i={},r){const a=++this._handleId;i.sync||this._installSyncUpdatingWatch(e,a);const s=r(e,t,i);return this._handles.add(s,a),(0,n.kB)((()=>this._handles.remove(a)))}_installSyncUpdatingWatch(e,t){const i=this._createSyncUpdatingCallback(),r=(0,o.YP)(e,i,{sync:!0,equals:()=>!1});return this._handles.add(r,t),r}_createSyncUpdatingCallback(){return()=>{this._handles.remove(c),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this._handles.add((0,l.Os)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(c))})),c)}}};(0,r._)([(0,d.Cb)({readOnly:!0})],p.prototype,"updating",void 0),p=(0,r._)([(0,u.j)("esri.core.support.WatchUpdatingTracking")],p);const c=-42},89849:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var r=i(36663),a=(i(91957),i(70375)),s=i(33926),n=i(39154),o=i(81977),l=(i(7283),i(7753),i(39994)),d=i(34248),u=i(40266),p=i(12926),c=i(68309),y=i(47109),m=i(51211),h=i(91772);let S=class extends c.Z{constructor(e){super(e),this.type="csv",this.refresh=(0,s.Ds)((async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return m.Z.fromJSON(i)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const i=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:i.count,extent:h.Z.fromJSON(i.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await(0,y.bA)("CSVSourceWorker",{strategy:(0,l.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:i,fields:r,latitudeField:a,longitudeField:s,spatialReference:n,timeInfo:o}=this.loadOptions,d=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:i,fields:r?.map((e=>e.toJSON())),latitudeField:a,longitudeField:s,spatialReference:n?.toJSON(),timeInfo:o?.toJSON()}},{signal:e});this.locationInfo=d.locationInfo,this.sourceJSON=d.layerDefinition,this.delimiter=d.delimiter}};(0,r._)([(0,o.Cb)()],S.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"loadOptions",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"customParameters",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"locationInfo",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"sourceJSON",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"delimiter",void 0),S=(0,r._)([(0,u.j)("esri.layers.graphics.sources.CSVSource")],S);var T=i(40400),g=i(14626),f=i(16641),A=i(14685);function v(e,t){throw new a.Z(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let C=class extends p.default{constructor(...e){super(...e),this.geometryType="point",this.capabilities=(0,T.MS)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=A.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(s.r9).then((async()=>this.initLayerProperties(await this.createGraphicsSource(t))));return this.addResolvingPromise(i),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=(0,n.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new S({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(g.Z.from(e)||this.createQuery()))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(g.Z.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(g.Z.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(g.Z.from(e)||this.createQuery())))}read(e,t){super.read(e,t),t&&"service"===t.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new a.Z("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return v(this,"csv-layer:save")}async saveAs(e,t){return v(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,r._)([(0,o.Cb)({readOnly:!0,json:{read:!1,write:!1}})],C.prototype,"capabilities",void 0),(0,r._)([(0,o.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],C.prototype,"delimiter",void 0),(0,r._)([(0,o.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],C.prototype,"editingEnabled",void 0),(0,r._)([(0,o.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],C.prototype,"fields",void 0),(0,r._)([(0,o.Cb)({type:Boolean,readOnly:!0})],C.prototype,"isTable",null),(0,r._)([(0,d.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],C.prototype,"readWebMapLabelsVisible",null),(0,r._)([(0,o.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],C.prototype,"latitudeField",void 0),(0,r._)([(0,o.Cb)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,r._)([(0,o.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],C.prototype,"locationType",void 0),(0,r._)([(0,o.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],C.prototype,"longitudeField",void 0),(0,r._)([(0,o.Cb)({type:["CSV"]})],C.prototype,"operationalLayerType",void 0),(0,r._)([(0,o.Cb)()],C.prototype,"outFields",void 0),(0,r._)([(0,o.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],C.prototype,"path",void 0),(0,r._)([(0,o.Cb)({json:{read:!1},cast:null,type:S,readOnly:!0})],C.prototype,"source",void 0),(0,r._)([(0,o.Cb)({json:{read:!1},value:"csv",readOnly:!0})],C.prototype,"type",void 0),(0,r._)([(0,o.Cb)({json:{read:f.r,write:{isRequired:!0,ignoreOrigin:!0,writer:f.w}}})],C.prototype,"url",null),C=(0,r._)([(0,u.j)("esri.layers.CSVLayer")],C);const _=C},10287:(e,t,i)=>{i.d(t,{g:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40400:(e,t,i)=>{i.d(t,{Dm:()=>u,Hq:()=>p,MS:()=>c,bU:()=>o});var r=i(39994),a=i(67134),s=i(10287),n=i(86094);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let d=1;function u(e,t){if((0,r.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const r=new Function(`\n      return class AttributesClass$${d++} {\n        constructor() {\n          ${i};\n        }\n      }\n    `)();return()=>new r}catch(i){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,a.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:s.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}},91223:(e,t,i)=>{i.d(t,{V:()=>n});var r=i(36663),a=i(81977),s=(i(7283),i(7753),i(39994),i(40266));const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,r._)([(0,a.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,r._)([(0,s.j)("esri.layers.mixins.APIKeyMixin")],t),t}},87232:(e,t,i)=>{i.d(t,{Y:()=>l});var r=i(36663),a=i(13802),s=i(81977),n=(i(7283),i(7753),i(39994),i(40266)),o=i(20692);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,o.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,o.Nm)(e,a.Z.getLogger(this)))}};return(0,r._)([(0,s.Cb)()],t.prototype,"title",null),(0,r._)([(0,s.Cb)({type:String})],t.prototype,"url",null),t=(0,r._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},12512:(e,t,i)=>{i.d(t,{Z:()=>S});var r,a=i(36663),s=i(25709),n=i(82064),o=i(81977),l=i(7283),d=(i(7753),i(39994),i(79438)),u=i(34248),p=i(40266),c=i(60248),y=i(86349);const m=new s.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let h=r=class extends n.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let i=null;try{i=t?JSON.parse(t):null}catch(e){}return i?.value??null}readValueType(e,{description:t}){let i=null;try{i=t?JSON.parse(t):null}catch(e){}return i?m.fromJSON(i.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,a._)([(0,o.Cb)({type:String,json:{write:!0}})],h.prototype,"alias",void 0),(0,a._)([(0,o.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],h.prototype,"defaultValue",void 0),(0,a._)([(0,o.Cb)()],h.prototype,"description",void 0),(0,a._)([(0,u.r)("description")],h.prototype,"readDescription",null),(0,a._)([(0,o.Cb)({types:c.V5,json:{read:{reader:c.im},write:!0}})],h.prototype,"domain",void 0),(0,a._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],h.prototype,"editable",void 0),(0,a._)([(0,o.Cb)({type:l.z8,json:{write:!0}})],h.prototype,"length",void 0),(0,a._)([(0,o.Cb)({type:String,json:{write:!0}})],h.prototype,"name",void 0),(0,a._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],h.prototype,"nullable",void 0),(0,a._)([(0,d.J)(y.v)],h.prototype,"type",void 0),(0,a._)([(0,o.Cb)()],h.prototype,"valueType",void 0),(0,a._)([(0,u.r)("valueType",["description"])],h.prototype,"readValueType",null),(0,a._)([(0,o.Cb)({type:Boolean,json:{read:!1}})],h.prototype,"visible",void 0),h=r=(0,a._)([(0,p.j)("esri.layers.support.Field")],h);const S=h},28790:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(17095);function a(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function s(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}class n{constructor(e=[]){if(this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!e)return;this.fields=e;const t=[];for(const n of e){const e=n?.name,d=l(n?.name);if(e&&d){const l=o(e);this._fieldsMap.set(e,n),this._fieldsMap.set(l,n),this._normalizedFieldsMap.set(d,n),t.push(l),"date"===(i=n).type||"esriFieldTypeDate"===i.type||"date-only"===i.type||"esriFieldTypeDateOnly"===i.type||"timestamp-offset"===i.type||"esriFieldTypeTimestampOffset"===i.type?(this.dateFields.push(n),this._dateFieldsSet.add(n)):(0,r.H7)(n)&&(this._numericFieldsSet.add(n),this.numericFields.push(n)),a(n)||s(n)||(n.editable=null==n.editable||!!n.editable,n.nullable=null==n.nullable||!!n.nullable)}}var i;t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)a(e)||s(e)||e.nullable||void 0!==(0,r.os)(e)||this._requiredFields.push(e)}return this._requiredFields}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(o(e))??this._normalizedFieldsMap.get(l(e)),t&&this._fieldsMap.set(e,t),t)}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name??void 0}}function o(e){return e.trim().toLowerCase()}function l(e){return(0,r.q6)(e)?.toLowerCase()??""}},94081:(e,t,i)=>{i.d(t,{Z:()=>u});var r,a=i(36663),s=i(6865),n=i(82064),o=i(81977),l=(i(7283),i(7753),i(39994),i(40266));let d=r=class extends n.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new s.Z}clone(){return new r({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,a._)([(0,o.Cb)({type:String,json:{write:!0}})],d.prototype,"floorField",void 0),(0,a._)([(0,o.Cb)({json:{read:!1,write:!1}})],d.prototype,"viewAllMode",void 0),(0,a._)([(0,o.Cb)({json:{read:!1,write:!1}})],d.prototype,"viewAllLevelIds",void 0),d=r=(0,a._)([(0,l.j)("esri.layers.support.LayerFloorInfo")],d);const u=d},60248:(e,t,i)=>{i.d(t,{im:()=>b,V5:()=>_}),i(39994);var r,a=i(36663),s=i(67134),n=i(81977),o=(i(7283),i(79438)),l=i(40266),d=i(82064);i(7753);let u=r=class extends d.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new r({name:this.name,code:this.code})}};(0,a._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"name",void 0),(0,a._)([(0,n.Cb)({type:[String,Number],json:{write:!0}})],u.prototype,"code",void 0),u=r=(0,a._)([(0,l.j)("esri.layers.support.CodedValue")],u);const p=new(i(25709).X)({inherited:"inherited",codedValue:"coded-value",range:"range"});let c=class extends d.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,a._)([(0,n.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,a._)([(0,o.J)(p)],c.prototype,"type",void 0),c=(0,a._)([(0,l.j)("esri.layers.support.Domain")],c);const y=c;var m;let h=m=class extends y{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const i=String(e);this.codedValues.some((e=>(String(e.code)===i&&(t=e.name),!!t)))}return t}clone(){return new m({codedValues:(0,s.d9)(this.codedValues),name:this.name})}};(0,a._)([(0,n.Cb)({type:[u],json:{write:!0}})],h.prototype,"codedValues",void 0),(0,a._)([(0,o.J)({codedValue:"coded-value"})],h.prototype,"type",void 0),h=m=(0,a._)([(0,l.j)("esri.layers.support.CodedValueDomain")],h);const S=h;var T;i(13802),i(70375);let g=T=class extends y{constructor(e){super(e),this.type="inherited"}clone(){return new T}};(0,a._)([(0,o.J)({inherited:"inherited"})],g.prototype,"type",void 0),g=T=(0,a._)([(0,l.j)("esri.layers.support.InheritedDomain")],g);const f=g;var A;let v=A=class extends y{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new A({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,a._)([(0,n.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,i){t[i]=[this.minValue||0,e]}}}})],v.prototype,"maxValue",void 0),(0,a._)([(0,n.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,i){t[i]=[e,this.maxValue||0]}}}})],v.prototype,"minValue",void 0),(0,a._)([(0,o.J)({range:"range"})],v.prototype,"type",void 0),v=A=(0,a._)([(0,l.j)("esri.layers.support.RangeDomain")],v);const C=v,_={key:"type",base:y,typeMap:{range:v,"coded-value":S,inherited:f}};function b(e){if(!e||!e.type)return null;switch(e.type){case"range":return C.fromJSON(e);case"codedValue":return S.fromJSON(e);case"inherited":return f.fromJSON(e)}return null}},86349:(e,t,i)=>{i.d(t,{v:()=>r});const r=new(i(25709).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},7927:(e,t,i)=>{i.d(t,{h:()=>p});var r=i(39994),a=i(20692);const s={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function n(e,t,i){return!!l(e,t,i)}function o(e,t,i){return l(e,t,i)}function l(e,t,i){return e&&e.hasOwnProperty(t)?e[t]:i}function d(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const i=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!i?.includes(t.toLowerCase())}function p(e,t){return{analytics:c(e),attachment:y(e),data:m(e),metadata:h(e),operations:S(e.capabilities,e,t),query:T(e,t),queryRelated:g(e),queryTopFeatures:f(e),editing:A(e)}}function c(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function y(e){const t=e.attachmentProperties,i={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:n(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=s[e.name];t&&(i[t]=!!e.isEnabled)})),i}function m(e){return{isVersioned:n(e,"isDataVersioned",!1),supportsAttachment:n(e,"hasAttachments",!1),supportsM:n(e,"hasM",!1),supportsZ:n(e,"hasZ",!1)}}function h(e){return{supportsAdvancedFieldProperties:n(e,"supportsFieldDescriptionProperty",!1)}}function S(e,t,i){const r=e?e.toLowerCase().split(",").map((e=>e.trim())):[],s=i?(0,a.Qc)(i):null,o=r.includes(null!=s&&"MapServer"===s.serverType?"data":"query"),l=r.includes("editing")&&!t.datesInUnknownTimezone;let d=l&&r.includes("create"),u=l&&r.includes("delete"),p=l&&r.includes("update");const c=r.includes("changetracking"),y=t.advancedQueryCapabilities;return l&&!(d||u||p)&&(d=u=p=!0),{supportsCalculate:n(t,"supportsCalculate",!1),supportsTruncate:n(t,"supportsTruncate",!1),supportsValidateSql:n(t,"supportsValidateSql",!1),supportsAdd:d,supportsDelete:u,supportsEditing:l,supportsChangeTracking:c,supportsQuery:o,supportsQueryAnalytics:n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:n(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:n(t,"supportsAttachmentsResizing",!1),supportsSync:r.includes("sync"),supportsUpdate:p,supportsExceedsLimitStatistics:n(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:n(t,"supportsAsyncConvert3D",!1)}}function T(e,t){const i=e.advancedQueryCapabilities,s=e.ownershipBasedAccessControlForFeatures,l=e.archivingInfo,p=e.currentVersion,c=t?.includes("MapServer"),y=!c||p>=(0,r.Z)("mapserver-pbf-version-support"),m=(0,a.M8)(t),h=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:n(i,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:n(i,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:n(i,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:d(i),supportsCentroid:n(i,"supportsReturningGeometryCentroid",!1),supportsDistance:n(i,"supportsQueryWithDistance",!1),supportsDistinct:n(i,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:n(i,"supportsReturningQueryExtent",!1),supportsGeometryProperties:n(i,"supportsReturningGeometryProperties",!1),supportsHavingClause:n(i,"supportsHavingClause",!1),supportsOrderBy:n(i,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:n(i,"supportsPagination",!1),supportsQuantization:n(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:n(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:n(e,"supportsReturningQueryGeometry",!1),supportsResultType:n(i,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:n(i,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:n(i,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:n(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:n(i,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:n(s,"allowOthersToQuery",!0),supportsHistoricMoment:n(l,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&h.has("pbf"),supportsDisjointSpatialRelationship:n(i,"supportsDisjointSpatialRel",!1),supportsCacheHint:n(i,"supportsQueryWithCacheHint",!1)||u(i,"query"),supportsDefaultSpatialReference:n(i,"supportsDefaultSR",!1),supportsCompactGeometry:m,supportsFullTextSearch:n(i,"supportsFullTextSearch",!1),maxRecordCountFactor:o(e,"maxRecordCountFactor",void 0),maxRecordCount:o(e,"maxRecordCount",void 0),standardMaxRecordCount:o(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:o(e,"tileMaxRecordCount",void 0)}}function g(e){const t=e.advancedQueryCapabilities,i=n(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:n(t,"supportsQueryRelatedPagination",!1),supportsCount:i,supportsOrderBy:i,supportsCacheHint:u(t,"queryRelated")}}function f(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function A(e){const t=e.ownershipBasedAccessControlForFeatures,i=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:n(e,"allowGeometryUpdates",!0),supportsGlobalId:n(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:n(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:n(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:n(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:n(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:n(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:n(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:n(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:n(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:n(i,"supportsAsyncApplyEdits",!1)}}},13097:(e,t,i)=>{i.d(t,{p:()=>a});var r=i(95247);function a(e,t,i){if(!i||!i.features||!i.hasZ)return;const a=(0,r.k)(i.geometryType,t,e.outSpatialReference);if(null!=a)for(const e of i.features)a(e.geometry)}},86094:(e,t,i)=>{i.d(t,{ET:()=>s,I4:()=>a,eG:()=>l,lF:()=>n,lj:()=>u,qP:()=>o,wW:()=>d});const r=[252,146,31,255],a={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},s={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},n={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},o={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},9593:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(36663),a=i(41151),s=i(82064),n=i(81977),o=(i(7283),i(7753),i(39994),i(34248)),l=i(40266),d=i(39835),u=i(25302);let p=class extends((0,a.J)(s.wq)){constructor(e){super(e),this.legacy=null,this.timeZone="system"}readLegacy(e,t){const{timeZone:i,respectsDaylightSaving:r}=t;return{timeZone:i,respectsDaylightSaving:r}}readTimeZone(e,t){return"timeZoneIANA"in t?t.timeZoneIANA:(0,u.G)(t)}writeTimeZone(e,t){t.timeZoneIANA=e}equals(e){return null!=e&&null!=this.timeZone&&null!=e.timeZone&&this.timeZone===e.timeZone}};(0,r._)([(0,n.Cb)()],p.prototype,"legacy",void 0),(0,r._)([(0,o.r)("legacy",["timeZone"])],p.prototype,"readLegacy",null),(0,r._)([(0,n.Cb)({type:String,nonNullable:!0})],p.prototype,"timeZone",void 0),(0,r._)([(0,o.r)("timeZone",["timeZone","timeZoneIANA","respectsDaylightSaving"])],p.prototype,"readTimeZone",null),(0,r._)([(0,d.c)("timeZone")],p.prototype,"writeTimeZone",null),p=(0,r._)([(0,l.j)("esri.time.TimeReference")],p);const c=p},25302:(e,t,i)=>{i.d(t,{G:()=>s});const r=new Map([["AUS Central Standard Time","Australia/Darwin"],["AUS Eastern Standard Time","Australia/Sydney"],["Afghanistan Standard Time","Asia/Kabul"],["Alaskan Standard Time","America/Anchorage"],["Aleutian Standard Time","America/Adak"],["Altai Standard Time","Asia/Barnaul"],["Arab Standard Time","Asia/Riyadh"],["Arabian Standard Time","Asia/Dubai"],["Arabic Standard Time","Asia/Baghdad"],["Argentina Standard Time","America/Buenos_Aires"],["Astrakhan Standard Time","Europe/Astrakhan"],["Atlantic Standard Time","America/Halifax"],["Aus Central W. Standard Time","Australia/Eucla"],["Azerbaijan Standard Time","Asia/Baku"],["Azores Standard Time","Atlantic/Azores"],["Bahia Standard Time","America/Bahia"],["Bangladesh Standard Time","Asia/Dhaka"],["Belarus Standard Time","Europe/Minsk"],["Bougainville Standard Time","Pacific/Bougainville"],["Canada Central Standard Time","America/Regina"],["Cape Verde Standard Time","Atlantic/Cape_Verde"],["Caucasus Standard Time","Asia/Yerevan"],["Cen. Australia Standard Time","Australia/Adelaide"],["Central America Standard Time","America/Guatemala"],["Central Asia Standard Time","Asia/Almaty"],["Central Brazilian Standard Time","America/Cuiaba"],["Central Europe Standard Time","Europe/Budapest"],["Central European Standard Time","Europe/Warsaw"],["Central Pacific Standard Time","Pacific/Guadalcanal"],["Central Standard Time","America/Chicago"],["Central Standard Time (Mexico)","America/Mexico_City"],["Chatham Islands Standard Time","Pacific/Chatham"],["China Standard Time","Asia/Shanghai"],["Cuba Standard Time","America/Havana"],["Dateline Standard Time","Etc/GMT+12"],["E. Africa Standard Time","Africa/Nairobi"],["E. Australia Standard Time","Australia/Brisbane"],["E. Europe Standard Time","Europe/Chisinau"],["E. South America Standard Time","America/Sao_Paulo"],["Easter Island Standard Time","Pacific/Easter"],["Eastern Standard Time","America/New_York"],["Eastern Standard Time (Mexico)","America/Cancun"],["Egypt Standard Time","Africa/Cairo"],["Ekaterinburg Standard Time","Asia/Yekaterinburg"],["FLE Standard Time","Europe/Kiev"],["Fiji Standard Time","Pacific/Fiji"],["GMT Standard Time","Europe/London"],["GTB Standard Time","Europe/Bucharest"],["Georgian Standard Time","Asia/Tbilisi"],["Greenland Standard Time","America/Godthab"],["Greenwich Standard Time","Atlantic/Reykjavik"],["Haiti Standard Time","America/Port-au-Prince"],["Hawaiian Standard Time","Pacific/Honolulu"],["India Standard Time","Asia/Calcutta"],["Iran Standard Time","Asia/Tehran"],["Israel Standard Time","Asia/Jerusalem"],["Jordan Standard Time","Asia/Amman"],["Kaliningrad Standard Time","Europe/Kaliningrad"],["Korea Standard Time","Asia/Seoul"],["Libya Standard Time","Africa/Tripoli"],["Line Islands Standard Time","Pacific/Kiritimati"],["Lord Howe Standard Time","Australia/Lord_Howe"],["Magadan Standard Time","Asia/Magadan"],["Magallanes Standard Time","America/Punta_Arenas"],["Marquesas Standard Time","Pacific/Marquesas"],["Mauritius Standard Time","Indian/Mauritius"],["Middle East Standard Time","Asia/Beirut"],["Montevideo Standard Time","America/Montevideo"],["Morocco Standard Time","Africa/Casablanca"],["Mountain Standard Time","America/Denver"],["Mountain Standard Time (Mexico)","America/Mazatlan"],["Myanmar Standard Time","Asia/Rangoon"],["N. Central Asia Standard Time","Asia/Novosibirsk"],["Namibia Standard Time","Africa/Windhoek"],["Nepal Standard Time","Asia/Katmandu"],["New Zealand Standard Time","Pacific/Auckland"],["Newfoundland Standard Time","America/St_Johns"],["Norfolk Standard Time","Pacific/Norfolk"],["North Asia East Standard Time","Asia/Irkutsk"],["North Asia Standard Time","Asia/Krasnoyarsk"],["North Korea Standard Time","Asia/Pyongyang"],["Omsk Standard Time","Asia/Omsk"],["Pacific SA Standard Time","America/Santiago"],["Pacific Standard Time","America/Los_Angeles"],["Pacific Standard Time (Mexico)","America/Tijuana"],["Pakistan Standard Time","Asia/Karachi"],["Paraguay Standard Time","America/Asuncion"],["Qyzylorda Standard Time","Asia/Qyzylorda"],["Romance Standard Time","Europe/Paris"],["Russia Time Zone 10","Asia/Srednekolymsk"],["Russia Time Zone 11","Asia/Kamchatka"],["Russia Time Zone 3","Europe/Samara"],["Russian Standard Time","Europe/Moscow"],["SA Eastern Standard Time","America/Cayenne"],["SA Pacific Standard Time","America/Bogota"],["SA Western Standard Time","America/La_Paz"],["SE Asia Standard Time","Asia/Bangkok"],["Saint Pierre Standard Time","America/Miquelon"],["Sakhalin Standard Time","Asia/Sakhalin"],["Samoa Standard Time","Pacific/Apia"],["Sao Tome Standard Time","Africa/Sao_Tome"],["Saratov Standard Time","Europe/Saratov"],["Singapore Standard Time","Asia/Singapore"],["South Africa Standard Time","Africa/Johannesburg"],["South Sudan Standard Time","Africa/Juba"],["Sri Lanka Standard Time","Asia/Colombo"],["Sudan Standard Time","Africa/Khartoum"],["Syria Standard Time","Asia/Damascus"],["Taipei Standard Time","Asia/Taipei"],["Tasmania Standard Time","Australia/Hobart"],["Tocantins Standard Time","America/Araguaina"],["Tokyo Standard Time","Asia/Tokyo"],["Tomsk Standard Time","Asia/Tomsk"],["Tonga Standard Time","Pacific/Tongatapu"],["Transbaikal Standard Time","Asia/Chita"],["Turkey Standard Time","Europe/Istanbul"],["Turks And Caicos Standard Time","America/Grand_Turk"],["US Eastern Standard Time","America/Indianapolis"],["US Mountain Standard Time","America/Phoenix"],["UTC","Etc/GMT"],["UTC+01","Etc/GMT-1"],["UTC+02","Etc/GMT-2"],["UTC+03","Etc/GMT-3"],["UTC+04","Etc/GMT-4"],["UTC+05","Etc/GMT-5"],["UTC+06","Etc/GMT-6"],["UTC+07","Etc/GMT-7"],["UTC+08","Etc/GMT-8"],["UTC+09","Etc/GMT-9"],["UTC+10","Etc/GMT-10"],["UTC+11","Etc/GMT-11"],["UTC+12","Etc/GMT-12"],["UTC+13","Etc/GMT-13"],["UTC+14","Etc/GMT-14"],["UTC-01","Etc/GMT+1"],["UTC-02","Etc/GMT+2"],["UTC-03","Etc/GMT+3"],["UTC-04","Etc/GMT+4"],["UTC-05","Etc/GMT+5"],["UTC-06","Etc/GMT+6"],["UTC-07","Etc/GMT+7"],["UTC-08","Etc/GMT+8"],["UTC-09","Etc/GMT+9"],["UTC-10","Etc/GMT+10"],["UTC-11","Etc/GMT+11"],["UTC-12","Etc/GMT+12"],["Ulaanbaatar Standard Time","Asia/Ulaanbaatar"],["Venezuela Standard Time","America/Caracas"],["Vladivostok Standard Time","Asia/Vladivostok"],["Volgograd Standard Time","Europe/Volgograd"],["W. Australia Standard Time","Australia/Perth"],["W. Central Africa Standard Time","Africa/Lagos"],["W. Europe Standard Time","Europe/Berlin"],["W. Mongolia Standard Time","Asia/Hovd"],["West Asia Standard Time","Asia/Tashkent"],["West Bank Standard Time","Asia/Hebron"],["West Pacific Standard Time","Pacific/Port_Moresby"],["Yakutsk Standard Time","Asia/Yakutsk"],["Yukon Standard Time","America/Whitehorse"]]);var a=i(17126);function s(e,t="system"){if(!e||!r.has(e.timeZone))return t;const i=r.get(e.timeZone);return e.timeZone.startsWith("UTC")||e.respectsDaylightSaving?i:function(e){const t=a.ou.local().setZone(e),i=Math.min(t.set({month:1,day:1}).offset,t.set({month:5}).offset);return 0===i?"Etc/UTC":`Etc/GMT${a.Qf.instance(-i).formatOffset(0,"narrow")}`}(i)}}}]);