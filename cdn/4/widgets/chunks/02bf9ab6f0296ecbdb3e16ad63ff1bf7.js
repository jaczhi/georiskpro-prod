"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6985],{15842:(e,t,r)=>{r.d(t,{R:()=>S,w:()=>w});var i=r(36663),s=r(74396),o=r(61681),n=r(20701),a=r(67134),l=r(65943);class p{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(l.kk),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new p,r=this._originStores[l.s3.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,a.d9)(e),l.s3.DEFAULTS)}));for(let r=l.s3.SERVICE;r<l.kk;r++){const i=this._originStores[r];i&&i.forEach(((i,s)=>{e&&e.has(s)||t.set(s,(0,a.d9)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=l.s3.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||(0,o.j0)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=l.s3.USER){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),s=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),s!==i}originOf(e){return this._propertyOriginMap.get(e)||l.s3.DEFAULTS}forEach(e){this._values.forEach(e)}}var u=r(70148),c=r(95620),y=r(40266);const d=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,o.j0)((0,c.vw)(this)),r=t.store,i=new p;t.store=i,(0,n.M)(t,r,i)}read(e,t){(0,u.i)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=(0,l.M9)(t);if("string"==typeof e)return r.get(e,i);const s={};return e.forEach((e=>{s[e]=r.get(e,i)})),s}originOf(e){return(0,l.x3)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=(0,l.M9)(t),s=(0,c.vw)(this);let o;o="string"==typeof e?"*"===e?r.keys(i):[e]:e,o.forEach((e=>{s.invalidate(e),r.revert(e,i),s.commit(e)}))}};return t=(0,i._)([(0,y.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return(0,c.vw)(e).store}let g=class extends(d(s.Z)){};g=(0,i._)([(0,y.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],g);var m=r(86561);const f=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return v(this).delete(e,(0,l.M9)(t))}write(e,t){return(0,m.c)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,c.vw)(this).setAtOrigin(e,t,(0,l.M9)(r))}removeOrigin(e){const t=v(this),r=(0,l.M9)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),l.s3.USER)}updateOrigin(e,t){const r=v(this),i=(0,l.M9)(t),s=this.get(e);for(let t=i+1;t<l.kk;++t)r.delete(e,t);r.set(e,s,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,y.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function v(e){return(0,c.vw)(e).store}const S=e=>{let t=class extends(f(d(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,y.j)("esri.core.MultiOriginJSONSupport")],t),t};let w=class extends(S(s.Z)){};w=(0,i._)([(0,y.j)("esri.core.MultiOriginJSONSupport")],w)},63989:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(36663),s=r(81977),o=(r(7283),r(7753),r(39994),r(40266));const n=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,s.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,o.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},43330:(e,t,r)=>{r.d(t,{q:()=>m});var i=r(36663),s=r(70375),o=r(39154),n=r(81977),a=(r(7283),r(7753),r(39994),r(40266)),l=r(39835),p=r(70148),u=r(86561);const c={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},y={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},d={ArcGISFeatureLayer:!0},h={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":c,"web-map/basemap":y,"web-map/tables":d,"link-chart/operational-layers":{...c,LinkChartLayer:!0},"link-chart/basemap":y,"link-chart/tables":d,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0}};var g=r(51599);const m=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,u.d)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e??"Layer"}read(e,t){t&&(t.layer=this),(0,p.$)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=h[e];let i=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new s.Z("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof s.Z&&"web-document-write:property-required"===e.name)).length;return(0,o.jc)(r?.url)?(t?.messages?.push(new s.Z("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,n.Cb)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,n.Cb)(g.rT)],t.prototype,"listMode",void 0),(0,i._)([(0,l.c)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,n.Cb)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,l.c)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,n.Cb)(g.Oh)],t.prototype,"opacity",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,l.c)("title"),(0,l.c)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,i._)([(0,n.Cb)({type:Boolean,json:{name:"visibility"}})],t.prototype,"visible",void 0),t=(0,i._)([(0,a.j)("esri.layers.mixins.OperationalLayer")],t),t}},18241:(e,t,r)=>{r.d(t,{I:()=>b});var i=r(36663),s=r(51366),o=r(88256),n=r(66341),a=r(67979),l=r(70375),p=r(13802),u=r(61681),c=r(33926),y=r(39154),d=r(81977),h=(r(7283),r(7753),r(39994),r(34248)),g=r(40266),m=r(39835),f=r(54957),v=r(93968),S=r(53110),w=r(90298),_=r(31370);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.SC)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new S.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const{load:i}=await r.e(9112).then(r.bind(r,49112));return(0,c.k_)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,c.D_)(e)||p.Z.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.r9)(e),!0))))}async _setUserPrivileges(e,t){if(!s.Z.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(e){(0,c.r9)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,_.Ss)(r);let s,n;if(i)s=r.portal.url;else try{s=await(0,f.oP)(this.url,t)}catch(e){(0,c.r9)(e)}if(!s||!(0,y.Zo)(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;n=await(o.id?.getCredential(`${s}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,c.r9)(e)}if(!n)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(i?await r.reload():(r=new S.default({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return(0,_.Ss)(r)}catch(e){(0,c.r9)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,c.r9)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?o.id?.findCredential(this.url):null;if(!t)return!0;const r=L.credential===t?L.user:await this._fetchEditingUser(e);return L.credential=t,L.user=r,null==r||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=o.id.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=v.Z.getDefault();if(s&&s.loaded&&(0,y.Fv)(s.restUrl)===(0,y.Fv)(i))return s.user;const l=`${i}/community/self`,p=null!=e?e.signal:null,u=await(0,a.q6)((0,n.default)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?w.default.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||v.Z.getDefault());return r&&i&&!(0,y.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,d.Cb)({type:S.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,m.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,d.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,g.j)("esri.layers.mixins.PortalLayer")],t),t},L={credential:null,user:null}},60822:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(36663),s=r(41151),o=r(25709),n=r(82064),a=r(81977),l=(r(7283),r(7753),r(39994),r(40266));const p=new o.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,s.J)(n.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,i._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,i._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,i._)([(0,a.Cb)({json:{read:p.read,write:p.write}})],u.prototype,"drawingTool",void 0),(0,i._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,i._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,i._)([(0,l.j)("esri.layers.support.FeatureTemplate")],u);const c=u},18160:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(36663),s=r(41151),o=r(82064),n=r(81977),a=(r(7283),r(7753),r(39994),r(34248)),l=r(40266),p=r(39835),u=r(60248),c=r(60822);let y=class extends((0,s.J)(o.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,i._)([(0,n.Cb)({json:{write:!0}})],y.prototype,"id",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],y.prototype,"name",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],y.prototype,"domains",void 0),(0,i._)([(0,a.r)("domains")],y.prototype,"readDomains",null),(0,i._)([(0,p.c)("domains")],y.prototype,"writeDomains",null),(0,i._)([(0,n.Cb)({type:[c.Z],json:{write:!0}})],y.prototype,"templates",void 0),y=(0,i._)([(0,l.j)("esri.layers.support.FeatureType")],y);const d=y},49341:(e,t,r)=>{r.d(t,{a:()=>c,r:()=>p});var i=r(70375),s=r(67134),o=r(13802),n=r(26732);const a=o.Z.getLogger("esri.layers.support.labelingInfo"),l=/\[([^\[\]]+)\]/gi;function p(e,t,r){return e?e.map((e=>{const i=new n.Z;if(i.read(e,r),i.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;i.labelExpression=i.labelExpression.replaceAll(l,((t,r)=>`[${function(e,t){if(!t)return e;const r=e.toLowerCase();for(let e=0;e<t.length;e++){const i=t[e].name;if(i.toLowerCase()===r)return i}return e}(r,e)}]`))}return i})):null}const u={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function c(e,t){const r=(0,s.d9)(e);return r.some((e=>function(e,t){const r=e.labelPlacement,s=u[t];if(!e.symbol)return a.warn("No ILabelClass symbol specified."),!0;if(!s)return a.error(new i.Z("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),!0;if(!s.includes(r)){const i=s[0];r&&a.warn(`Found invalid label placement type ${r} for ${t}. Defaulting to ${i}`),e.labelPlacement=i}return!1}(e,t)))?[]:r}},51211:(e,t,r)=>{r.d(t,{Z:()=>S});var i,s=r(36663),o=r(91957),n=r(80085),a=r(25709),l=r(82064),p=r(67134),u=r(81977),c=(r(7283),r(34248)),y=r(40266),d=r(39835),h=r(14685),g=r(53736),m=r(12512);const f=new a.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=i=class extends l.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=h.Z.fromJSON(t.spatialReference),i=[];for(let t=0;t<e.length;t++){const s=e[t],o=n.Z.fromJSON(s),a=s.geometry&&s.geometry.spatialReference;null==o.geometry||a||(o.geometry.spatialReference=r);const l=s.aggregateGeometries,p=o.aggregateGeometries;if(l&&null!=p)for(const e in p){const t=p[e],i=l[e],s=i?.spatialReference;null==t||s||(t.spatialReference=r)}i.push(o)}return i}writeGeometryType(e,t,r,i){if(e)return void f.write(e,t,r,i);const{features:s}=this;if(s)for(const e of s)if(e&&null!=e.geometry)return void f.write(e.geometry.type,t,r,i)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,i=(0,g.im)(e);return i&&!r&&t.spatialReference&&(i.spatialReference=h.Z.fromJSON(t.spatialReference)),i}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new i(this.cloneProperties())}cloneProperties(){return(0,p.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const i=t.features[r];if(i.geometry){const t=e&&e[r];i.geometry=t&&t.toJSON()||i.geometry}}return t}quantize(e){const{scale:[t,r],translate:[i,s]}=e,o=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-i)/t)),(e=>Math.round((s-e)/r)));for(let e=0,t=o.length;e<t;e++)n?.(o[e].geometry)||(o.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[i,s],scale:[o,n]}=r;let a=null,l=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;a=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;l=r=>null==r?r:r*t+e}const p=this._getHydrationFunction(e,(e=>e*o+i),(e=>s-e*n),a,l);for(const{geometry:e}of t)null!=e&&p&&p(e);return this.transform=null,this}_quantizePoints(e,t,r){let i,s;const o=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===i&&n===s||(o.push([e-i,n-s]),i=e,s=n)}else i=t(a[0]),s=r(a[1]),o.push([i,s])}return o.length>0?o:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const i=(0,g.oU)(e)?e.rings:e.paths,s=[];for(let e=0,o=i.length;e<o;e++){const o=i[e],n=this._quantizePoints(o,t,r);n&&s.push(n)}return s.length>0?((0,g.oU)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const i=this._quantizePoints(e.points,t,r);return i&&i.length>0?(e.points=i,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,i,s){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),i&&(e.z=i(e.z))}:"polyline"===e||"polygon"===e?e=>{const o=(0,g.oU)(e)?e.rings:e.paths;let n,a;for(let e=0,i=o.length;e<i;e++){const i=o[e];for(let e=0,s=i.length;e<s;e++){const s=i[e];e>0?(n+=s[0],a+=s[1]):(n=s[0],a=s[1]),s[0]=t(n),s[1]=r(a)}}if(i&&s)for(let e=0,t=o.length;e<t;e++){const t=o[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=i(r[2]),r[3]=s(r[3])}}else if(i)for(let e=0,t=o.length;e<t;e++){const t=o[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=i(r[2])}}else if(s)for(let e=0,t=o.length;e<t;e++){const t=o[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=s(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),i&&null!=e.zmax&&null!=e.zmin&&(e.zmax=i(e.zmax),e.zmin=i(e.zmin)),s&&null!=e.mmax&&null!=e.mmin&&(e.mmax=s(e.mmax),e.mmin=s(e.mmin))}:"multipoint"===e?e=>{const o=e.points;let n,a;for(let e=0,i=o.length;e<i;e++){const i=o[e];e>0?(n+=i[0],a+=i[1]):(n=i[0],a=i[1]),i[0]=t(n),i[1]=r(a)}if(i&&s)for(let e=0,t=o.length;e<t;e++){const t=o[e];t[2]=i(t[2]),t[3]=s(t[3])}else if(i)for(let e=0,t=o.length;e<t;e++){const t=o[e];t[2]=i(t[2])}else if(s)for(let e=0,t=o.length;e<t;e++){const t=o[e];t[2]=s(t[2])}}:null}};(0,s._)([(0,u.Cb)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,s._)([(0,u.Cb)({type:[n.Z],json:{write:!0}})],v.prototype,"features",void 0),(0,s._)([(0,c.r)("features")],v.prototype,"readFeatures",null),(0,s._)([(0,u.Cb)({type:[m.Z],json:{write:!0}})],v.prototype,"fields",void 0),(0,s._)([(0,u.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],v.prototype,"geometryType",void 0),(0,s._)([(0,d.c)("geometryType")],v.prototype,"writeGeometryType",null),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,s._)([(0,u.Cb)({types:o.qM,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,s._)([(0,c.r)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,s._)([(0,u.Cb)({type:h.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,s._)([(0,d.c)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,s._)([(0,u.Cb)({json:{write:!0}})],v.prototype,"transform",void 0),v=i=(0,s._)([(0,y.j)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const S=v}}]);