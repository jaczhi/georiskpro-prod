"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[169],{37956:(e,t,r)=>{r.d(t,{Z:()=>g});var i,s=r(36663),a=r(82064),n=r(61681),l=r(807),o=r(81977),u=(r(7283),r(7753),r(39994),r(34248)),p=r(40266),c=r(39835);let d=i=class extends a.wq{static get allTime(){return h}static get empty(){return y}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=null!=this.start?this.start.getTime():this.start,r=null!=this.end?this.end.getTime():this.end,i=null!=e.start?e.start.getTime():e.start,s=null!=e.end?e.end.getTime():e.end;return t===i&&r===s}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,n.yw)(this.start,(t=>(0,l.JE)(t,e))),r=(0,n.yw)(this.end,(t=>{const r=(0,l.JE)(t,e);return t.getTime()===r.getTime()?r:(0,l.Nm)(r,1,e)}));return new i({start:t,end:r})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,s=e.start?.getTime()??-1/0,a=e.end?.getTime()??1/0;let n,l;if(s>=t&&s<=r?n=s:t>=s&&t<=a&&(n=t),r>=s&&r<=a?l=r:a>=t&&a<=r&&(l=a),null!=n&&null!=l&&!isNaN(n)&&!isNaN(l)){const e=new i;return e.start=n===-1/0?null:new Date(n),e.end=l===1/0?null:new Date(l),e}return i.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const r=new i,{start:s,end:a}=this;return null!=s&&(r.start=(0,l.Nm)(s,e,t)),null!=a&&(r.end=(0,l.Nm)(a,e,t)),r}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return h.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,s._)([(0,o.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,s._)([(0,u.r)("end")],d.prototype,"readEnd",null),(0,s._)([(0,c.c)("end")],d.prototype,"writeEnd",null),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,s._)([(0,o.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,s._)([(0,u.r)("start")],d.prototype,"readStart",null),(0,s._)([(0,c.c)("start")],d.prototype,"writeStart",null),d=i=(0,s._)([(0,p.j)("esri.TimeExtent")],d);const h=new d,y=new d({start:void 0,end:void 0}),g=d},15842:(e,t,r)=>{r.d(t,{R:()=>v,w:()=>w});var i=r(36663),s=r(74396),a=r(61681),n=r(20701),l=r(67134),o=r(65943);class u{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o.kk),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new u,r=this._originStores[o.s3.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,l.d9)(e),o.s3.DEFAULTS)}));for(let r=o.s3.SERVICE;r<o.kk;r++){const i=this._originStores[r];i&&i.forEach(((i,s)=>{e&&e.has(s)||t.set(s,(0,l.d9)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=o.s3.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||(0,a.j0)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=o.s3.USER){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),s=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),s!==i}originOf(e){return this._propertyOriginMap.get(e)||o.s3.DEFAULTS}forEach(e){this._values.forEach(e)}}var p=r(70148),c=r(95620),d=r(40266);const h=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,a.j0)((0,c.vw)(this)),r=t.store,i=new u;t.store=i,(0,n.M)(t,r,i)}read(e,t){(0,p.i)(this,e,t)}getAtOrigin(e,t){const r=y(this),i=(0,o.M9)(t);if("string"==typeof e)return r.get(e,i);const s={};return e.forEach((e=>{s[e]=r.get(e,i)})),s}originOf(e){return(0,o.x3)(this.originIdOf(e))}originIdOf(e){return y(this).originOf(e)}revert(e,t){const r=y(this),i=(0,o.M9)(t),s=(0,c.vw)(this);let a;a="string"==typeof e?"*"===e?r.keys(i):[e]:e,a.forEach((e=>{s.invalidate(e),r.revert(e,i),s.commit(e)}))}};return t=(0,i._)([(0,d.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function y(e){return(0,c.vw)(e).store}let g=class extends(h(s.Z)){};g=(0,i._)([(0,d.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],g);var m=r(86561);const f=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return S(this).delete(e,(0,o.M9)(t))}write(e,t){return(0,m.c)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,c.vw)(this).setAtOrigin(e,t,(0,o.M9)(r))}removeOrigin(e){const t=S(this),r=(0,o.M9)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),o.s3.USER)}updateOrigin(e,t){const r=S(this),i=(0,o.M9)(t),s=this.get(e);for(let t=i+1;t<o.kk;++t)r.delete(e,t);r.set(e,s,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,d.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function S(e){return(0,c.vw)(e).store}const v=e=>{let t=class extends(f(h(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,d.j)("esri.core.MultiOriginJSONSupport")],t),t};let w=class extends(v(s.Z)){};w=(0,i._)([(0,d.j)("esri.core.MultiOriginJSONSupport")],w)},807:(e,t,r)=>{r.d(t,{JE:()=>n,Nm:()=>a,rJ:()=>l}),r(39994);const i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},s={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function a(e,t,r){const i=new Date(e.getTime());if(t&&r){const e=s[r],{getter:a,setter:n,multiplier:l}=e;if("months"===r){const e=function(e,t){const r=new Date(e,t+1,1);return r.setDate(0),r.getDate()}(i.getFullYear(),i.getMonth()+t);i.getDate()>e&&i.setDate(e)}i[n](i[a]()+t*l)}return i}function n(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function l(e,t,r){return 0===e?0:e*i[t]/i[r]}},84417:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var i=r(36663),s=r(51366),a=r(66341),n=(r(4905),r(15842)),l=r(33926),o=r(39154),u=r(81977),p=(r(7283),r(7753),r(39994),r(34248)),c=r(40266),d=r(91772),h=r(35925),y=r(38481),g=r(27668),m=r(43330),f=r(18241),S=r(12478),v=r(95874),w=r(51599),_=r(18251),b=r(15498),I=r(86036),L=r(1759),T=r(43411);const M=["atom","xml"],C={base:_.Z,key:"type",typeMap:{"simple-line":b.Z},errorContext:"symbol"},O={base:_.Z,key:"type",typeMap:{"picture-marker":I.Z,"simple-marker":L.Z},errorContext:"symbol"},E={base:_.Z,key:"type",typeMap:{"simple-fill":T.Z},errorContext:"symbol"};let D=class extends((0,g.h)((0,S.Q)((0,m.q)((0,f.I)((0,v.M)((0,n.R)(y.Z))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline?.style.includes("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,o.vt)(this.url,M)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(l.r9).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:r}=await(0,a.default)(s.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,h.oR)(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return r}_hasGeometry(e){return this.featureCollections?.some((t=>t.featureSet?.geometryType===e&&t.featureSet.features?.length>0))??!1}};(0,i._)([(0,u.Cb)()],D.prototype,"description",void 0),(0,i._)([(0,u.Cb)()],D.prototype,"featureCollections",void 0),(0,i._)([(0,p.r)("service","featureCollections",["featureCollection.layers"])],D.prototype,"readFeatureCollections",null),(0,i._)([(0,u.Cb)({type:d.Z,json:{name:"lookAtExtent"}})],D.prototype,"fullExtent",void 0),(0,i._)([(0,u.Cb)(w.id)],D.prototype,"id",void 0),(0,i._)([(0,u.Cb)(w.rn)],D.prototype,"legendEnabled",void 0),(0,i._)([(0,u.Cb)({types:C,json:{write:!0}})],D.prototype,"lineSymbol",void 0),(0,i._)([(0,u.Cb)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)({types:O,json:{write:!0}})],D.prototype,"pointSymbol",void 0),(0,i._)([(0,u.Cb)({types:E,json:{write:!0}})],D.prototype,"polygonSymbol",void 0),(0,i._)([(0,u.Cb)({type:["GeoRSS"]})],D.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.Cb)(w.HQ)],D.prototype,"url",void 0),(0,i._)([(0,u.Cb)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],D.prototype,"title",null),(0,i._)([(0,u.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],D.prototype,"type",void 0),D=(0,i._)([(0,c.j)("esri.layers.GeoRSSLayer")],D);const A=D},43330:(e,t,r)=>{r.d(t,{q:()=>m});var i=r(36663),s=r(70375),a=r(39154),n=r(81977),l=(r(7283),r(7753),r(39994),r(40266)),o=r(39835),u=r(70148),p=r(86561);const c={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},d={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},h={ArcGISFeatureLayer:!0},y={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":c,"web-map/basemap":d,"web-map/tables":h,"link-chart/operational-layers":{...c,LinkChartLayer:!0},"link-chart/basemap":d,"link-chart/tables":h,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0}};var g=r(51599);const m=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,p.d)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e??"Layer"}read(e,t){t&&(t.layer=this),(0,u.$)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=y[e];let i=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new s.Z("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof s.Z&&"web-document-write:property-required"===e.name)).length;return(0,a.jc)(r?.url)?(t?.messages?.push(new s.Z("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,n.Cb)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,n.Cb)(g.rT)],t.prototype,"listMode",void 0),(0,i._)([(0,o.c)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,n.Cb)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,o.c)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,n.Cb)(g.Oh)],t.prototype,"opacity",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,o.c)("title"),(0,o.c)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,i._)([(0,n.Cb)({type:Boolean,json:{name:"visibility"}})],t.prototype,"visible",void 0),t=(0,i._)([(0,l.j)("esri.layers.mixins.OperationalLayer")],t),t}},18241:(e,t,r)=>{r.d(t,{I:()=>b});var i=r(36663),s=r(51366),a=r(88256),n=r(66341),l=r(67979),o=r(70375),u=r(13802),p=r(61681),c=r(33926),d=r(39154),h=r(81977),y=(r(7283),r(7753),r(39994),r(34248)),g=r(40266),m=r(39835),f=r(54957),S=r(93968),v=r(53110),w=r(90298),_=r(31370);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,p.SC)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new v.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const{load:i}=await r.e(9112).then(r.bind(r,49112));return(0,c.k_)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,c.D_)(e)||u.Z.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.r9)(e),!0))))}async _setUserPrivileges(e,t){if(!s.Z.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(e){(0,c.r9)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,_.Ss)(r);let s,n;if(i)s=r.portal.url;else try{s=await(0,f.oP)(this.url,t)}catch(e){(0,c.r9)(e)}if(!s||!(0,d.Zo)(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;n=await(a.id?.getCredential(`${s}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,c.r9)(e)}if(!n)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(i?await r.reload():(r=new v.default({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return(0,_.Ss)(r)}catch(e){(0,c.r9)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,c.r9)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?a.id?.findCredential(this.url):null;if(!t)return!0;const r=I.credential===t?I.user:await this._fetchEditingUser(e);return I.credential=t,I.user=r,null==r||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=a.id.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=S.Z.getDefault();if(s&&s.loaded&&(0,d.Fv)(s.restUrl)===(0,d.Fv)(i))return s.user;const o=`${i}/community/self`,u=null!=e?e.signal:null,p=await(0,l.q6)((0,n.default)(o,{authMode:"no-prompt",query:{f:"json"},signal:u}));return p.ok?w.default.fromJSON(p.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||S.Z.getDefault());return r&&i&&!(0,d.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new o.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,h.Cb)({type:v.default})],t.prototype,"portalItem",null),(0,i._)([(0,y.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,m.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,h.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,g.j)("esri.layers.mixins.PortalLayer")],t),t},I={credential:null,user:null}},12478:(e,t,r)=>{r.d(t,{Q:()=>f});var i=r(36663),s=r(13802),a=r(33926),n=r(81977),l=(r(7283),r(7753),r(39994),r(40266)),o=r(6865),u=(r(70375),r(65449),r(63235));const p=new o.Z,c=new WeakMap;function d(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function h(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:h(t,e%t):0}let y=0,g=0;function m(){const e=Date.now();for(const t of p)t.refreshInterval&&e-(c.get(t)??0)+5>=6e4*t.refreshInterval&&(c.set(t,e),t.refresh(e))}(0,u.EH)((()=>{const e=Date.now();let t=0;for(const r of p)t=h(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?c.get(r)||c.set(r,e):c.delete(r);if(t!==g){if(g=t,clearInterval(y),0===g)return void(y=0);y=setInterval(m,g)}}));const f=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,a.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||function(e){d(e)&&p.push(e)}(this)}),(()=>{}))}destroy(){d(this)&&p.includes(this)&&p.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,a.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{s.Z.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,i._)([(0,n.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,i._)([(0,n.Cb)()],t.prototype,"refreshParameters",null),t=(0,i._)([(0,l.j)("esri.layers.mixins.RefreshableLayer")],t),t}}}]);