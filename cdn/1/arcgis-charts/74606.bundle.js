"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[74606],{98786:(e,t,r)=>{r.d(t,{B:()=>c});var i=r(71760),s=r(3466),o=r(12173),n=r(41610),a=r(65943),l=r(81977),p=r(51876),d=r(16641);function c(e){const t=e?.origins??[void 0];return(r,o)=>{const c=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const o=(0,n.Oe)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,d.r)(e,t,r);return o.type===String?i:"function"==typeof o.type?new o.type({url:i}):void 0},write:{writer(t,n,l,c){if(!c||!c.resources)return"string"==typeof t?void(n[l]=(0,d.t)(t,c)):void(n[l]=t.write({},c));const f=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),g=(0,d.t)(f,{...c,verifyItemRelativeUrls:c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),m=o.type!==String&&(!(0,i.l)(this)||c&&c.origin&&this.originIdOf(r)>(0,a.M9)(c.origin)),b={object:this,propertyName:r,value:t,targetUrl:g,dest:n,targetPropertyName:l,context:c,params:e};c&&c.portalItem&&g&&!(0,s.YP)(g)?m?function(e){const{context:t,targetUrl:r,params:i,value:o,dest:n,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(r),d=h(o,r,t),c=(0,p.B)(d),f=(0,s.Ml)(l.path),g=i?.compress??!1;c===f?(t.resources&&y({...e,resource:l,content:d,compress:g,updates:t.resources.toUpdate}),n[a]=r):u(e)}(b):function({context:e,targetUrl:t,dest:r,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[i]=t)}(b):c&&c.portalItem&&(null==g||null!=(0,d.i)(g)||(0,s.jc)(g)||m)?u(b):n[l]=g}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.a;return{read:e,write:t}}}}(e,r,o);for(const e of t){const t=(0,l.CJ)(r,e,o);for(const e in c)t[e]=c[e]}}}function u(e){const{targetUrl:t,params:i,value:n,context:a,dest:l,targetPropertyName:c}=e;if(!a.portalItem)return;const u=(0,d.p)(t),f=u?.filename??(0,o.D)(),g=i?.prefix??u?.prefix,m=h(n,t,a),b=(0,s.v_)(g,f),v=`${b}.${(0,p.B)(m)}`,w=a.portalItem.resourceFromPath(v);(0,s.jc)(t)&&a.resources&&a.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,66341))).default,{data:i}=await t(e,{responseType:"blob"});return i}(t).then((e=>{w.path=`${b}.${(0,p.B)(e)}`,l[c]=w.itemRelativeUrl})).catch((()=>{})));const _=i?.compress??!1;a.resources&&y({...e,resource:w,content:m,compress:_,updates:a.resources.toAdd}),l[c]=w.itemRelativeUrl}function y({object:e,propertyName:t,updates:r,resource:i,content:s,compress:o}){r.push({resource:i,content:s,compress:o,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function h(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},74606:(e,t,r)=>{r.r(t),r.d(t,{default:()=>fe});var i=r(36663),s=r(80085),o=r(80020),n=(r(86004),r(45510),r(16192),r(71297),r(878),r(22836),r(50172),r(72043),r(72506),r(54021)),a=r(66341),l=r(41151),p=r(6865),d=r(70375),c=r(13802),u=r(15842),y=r(78668),h=r(76868),f=r(3466),g=r(81977),m=(r(7283),r(7753),r(39994),r(95620)),b=r(34248),v=r(40266),w=r(65943),_=r(38481),I=r(91223),S=r(87232),L=r(15801),C=r(43330),F=r(18241),j=r(95874),x=r(69724),O=r(20692),E=r(31484),A=r(51599),P=r(48257),T=r(69766),R=r(31906),N=r(89076),Z=r(28790),D=r(14845),U=r(97304),q=r(26732),G=r(49341),Q=r(94081),k=r(82064);let V=class extends k.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,i._)([(0,g.Cb)({type:String,json:{read:!0,write:!0}})],V.prototype,"name",void 0),(0,i._)([(0,g.Cb)({type:String,json:{read:!0,write:!0}})],V.prototype,"field",void 0),(0,i._)([(0,g.Cb)({type:[Number],json:{read:!0,write:!0}})],V.prototype,"currentRangeExtent",void 0),(0,i._)([(0,g.Cb)({type:[Number],json:{read:!0,write:!0}})],V.prototype,"fullRangeExtent",void 0),(0,i._)([(0,g.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],V.prototype,"type",void 0),V=(0,i._)([(0,v.j)("esri.layers.support.RangeInfo")],V);var J,M=r(44584),B=r(67134),$=r(98786),z=r(96863),K=r(89542),W=r(92376);let Y=J=class extends((0,k.eC)(p.Z.ofType(K.Z))){constructor(e){super(e)}clone(){return new J(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!(0,W.canProjectWithoutEngine)(r.spatialReference,t))return e&&e.messages&&e.messages.push(new z.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const i=new K.Z;(0,W.projectPolygon)(r,i,t),r=i}const i=r.toJSON(e);return delete i.spatialReference,i})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new z.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new J;return e.forEach((e=>r.add(K.Z.fromJSON(e,t)))),r}};Y=J=(0,i._)([(0,v.j)("esri.layers.support.PolygonCollection")],Y);const H=Y;var X,ee=r(16641);let te=X=class extends k.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new H,this._geometriesSource=null,this._handles=new M.Z}initialize(){this._handles.add((0,h.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),h.Z_))}destroy(){this._handles.destroy()}readGeometries(e,t,r){Array.isArray(e)?this.geometries=H.fromJSON(e,r):this._geometriesSource={url:(0,ee.f)(e,r),context:r}}async loadGeometries(e,t){if(null==this._geometriesSource)return;const{url:r,context:i}=this._geometriesSource,s=await(0,a.default)(r,{responseType:"json",signal:t?.signal}),o=e.toJSON(),n=s.data.map((e=>({...e,spatialReference:o})));this.geometries=H.fromJSON(n,i),this._geometriesSource=null}clone(){const e=new X({geometries:(0,B.d9)(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};(0,i._)([(0,g.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],te.prototype,"spatialRelationship",void 0),(0,i._)([(0,g.Cb)({type:H,nonNullable:!0,json:{write:!0}}),(0,$.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],te.prototype,"geometries",void 0),(0,i._)([(0,b.r)(["web-scene","portal-item"],"geometries")],te.prototype,"readGeometries",null),te=X=(0,i._)([(0,v.j)("esri.layers.support.SceneFilter")],te);const re=te;var ie=r(16603),se=r(14626),oe=r(51622),ne=r(10171),ae=r(11530),le=r(59439),pe=r(78621);const de=["3DObject","Point"],ce=(0,N.v)();let ue=class extends((0,L.o1)((0,x.Vt)((0,S.Y)((0,C.q)((0,F.I)((0,j.M)((0,u.R)((0,I.V)((0,l.J)(_.Z)))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new p.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new Z.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:U.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return he[this.profile]||"mesh"}set renderer(e){(0,D.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=this.associatedLayer?.capabilities??E.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:i,supportsUploadWithItemId:s,supportsGeometryUpdate:o,supportsReturnServiceEditsInSourceSpatialReference:n},data:{supportsZ:a,supportsM:l,isVersioned:p,supportsAttachment:d},operations:{supportsEditing:c,supportsAdd:u,supportsUpdate:y,supportsDelete:h,supportsQuery:f,supportsQueryAttachments:g,supportsAsyncConvert3D:m}}=e,b=e.operations.supportsChangeTracking,v=!!this.associatedLayer?.infoFor3D&&(0,oe.Rx)();return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:n,supportsRollbackOnFailure:i,supportsGeometryUpdate:v&&o,supportsUploadWithItemId:s},data:{supportsAttachment:d,supportsZ:a,supportsM:l,isVersioned:p},operations:{supportsQuery:f,supportsQueryAttachments:g,supportsEditing:c&&b,supportsAdd:v&&u&&b,supportsDelete:v&&h&&b,supportsUpdate:y&&b,supportsAsyncConvert3D:m}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return null!=r&&ye[r]?ye[r]:(c.Z.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(y.r9).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,ie.y)(this,{origin:"service"},t))).then((()=>(0,D.YN)(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){c.Z.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new se.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryCachedAttributes(e,t){const r=(0,D.Lk)(this.fieldsIndex,await(0,le.e7)(this,(0,le.V5)(this)));return(0,ae.xe)(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new d.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new s.Z;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.Z.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,ne.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new d.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new d.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new d.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.statisticsInfo)if(e.name===r.name){const r=(0,f.v_)(this.parsedUrl.path,e.href);return(0,a.default)(r,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new d.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(x.xp.SAVE,e)}async applyEdits(e,t){const{applyEdits:i}=await r.e(23261).then(r.bind(r,23261));if(await this.load(),!this.associatedLayer)throw new d.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),i(this,this.associatedLayer.source,e,t)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new d.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!de.includes(e.layerType))throw new d.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=s;break;case"vertex-reference-frame":r=!0,i=!s;break;default:r=!1}}if(!r)throw new d.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new d.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new d.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!this.associatedLayer?.fields?.some((t=>t&&e.name===t.name)),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=i}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=(0,m.vw)(this);for(let r=0;r<e.length;r++){const i=e[r],s=this.originIdOf(i),o=this.associatedLayer.originIdOf(i);s<o&&(o===w.s3.SERVICE||o===w.s3.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],o)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.editingInfo?.lastEditDate,t=this.associatedLayer?.serverGens,r=this.associatedLayer?.getAtOrigin("fullExtent","service");(0,oe.Rx)()&&null!=this.associatedLayer?.infoFor3D&&r&&(0,O.M8)(this.associatedLayer?.url)&&e&&this.serviceUpdateTimeStamp?.lastUpdate!==e.getTime()&&(this.serviceUpdateTimeStamp||t?.minServerGen!==t?.serverGen)&&(0,m.vw)(this).setAtOrigin("fullExtent",r.clone(),w.s3.SERVICE)}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new R.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(e){(0,y.D_)(e)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,h.N1)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?c.Z.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.Z.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&c.Z.getLogger(this).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&c.Z.getLogger(this).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,i._)([(0,g.Cb)({types:{key:"type",base:P.B,typeMap:{selection:T.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ue.prototype,"featureReduction",void 0),(0,i._)([(0,g.Cb)({type:[V],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ue.prototype,"rangeInfos",void 0),(0,i._)([(0,g.Cb)({json:{read:!1}})],ue.prototype,"associatedLayer",void 0),(0,i._)([(0,g.Cb)({type:["show","hide"]})],ue.prototype,"listMode",void 0),(0,i._)([(0,g.Cb)({type:["ArcGISSceneServiceLayer"]})],ue.prototype,"operationalLayerType",void 0),(0,i._)([(0,g.Cb)({json:{read:!1},readOnly:!0})],ue.prototype,"type",void 0),(0,i._)([(0,g.Cb)({...ce.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ue.prototype,"fields",void 0),(0,i._)([(0,g.Cb)()],ue.prototype,"types",null),(0,i._)([(0,g.Cb)()],ue.prototype,"typeIdField",null),(0,i._)([(0,g.Cb)()],ue.prototype,"templates",null),(0,i._)([(0,g.Cb)()],ue.prototype,"formTemplate",null),(0,i._)([(0,g.Cb)({readOnly:!0})],ue.prototype,"fieldsIndex",null),(0,i._)([(0,g.Cb)({type:Q.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ue.prototype,"floorInfo",void 0),(0,i._)([(0,g.Cb)(ce.outFields)],ue.prototype,"outFields",void 0),(0,i._)([(0,g.Cb)({type:U.U4,readOnly:!0,json:{read:!1}})],ue.prototype,"nodePages",void 0),(0,i._)([(0,b.r)("service","nodePages",["nodePages","pointNodePages"])],ue.prototype,"readNodePages",null),(0,i._)([(0,g.Cb)({type:[U.QI],readOnly:!0})],ue.prototype,"materialDefinitions",void 0),(0,i._)([(0,g.Cb)({type:[U.Yh],readOnly:!0})],ue.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,g.Cb)({type:[U.H3],readOnly:!0})],ue.prototype,"geometryDefinitions",void 0),(0,i._)([(0,g.Cb)({readOnly:!0})],ue.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,g.Cb)({readOnly:!0})],ue.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,g.Cb)({readOnly:!0})],ue.prototype,"statisticsInfo",void 0),(0,i._)([(0,g.Cb)({type:p.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ue.prototype,"excludeObjectIds",void 0),(0,i._)([(0,g.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ue.prototype,"definitionExpression",void 0),(0,i._)([(0,g.Cb)({type:re,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],ue.prototype,"filter",void 0),(0,i._)([(0,g.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ue.prototype,"path",void 0),(0,i._)([(0,g.Cb)(A.PV)],ue.prototype,"elevationInfo",null),(0,i._)([(0,g.Cb)({type:String})],ue.prototype,"geometryType",null),(0,i._)([(0,g.Cb)(A.iR)],ue.prototype,"labelsVisible",void 0),(0,i._)([(0,g.Cb)({type:[q.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:G.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:G.r},write:!0}})],ue.prototype,"labelingInfo",void 0),(0,i._)([(0,g.Cb)(A.rn)],ue.prototype,"legendEnabled",void 0),(0,i._)([(0,g.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,pe.b)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ue.prototype,"opacity",void 0),(0,i._)([(0,g.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ue.prototype,"priority",void 0),(0,i._)([(0,g.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ue.prototype,"semantic",void 0),(0,i._)([(0,g.Cb)({types:n.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ue.prototype,"renderer",null),(0,i._)([(0,g.Cb)({json:{read:!1}})],ue.prototype,"cachedDrawingInfo",void 0),(0,i._)([(0,b.r)("service","cachedDrawingInfo")],ue.prototype,"readCachedDrawingInfo",null),(0,i._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],ue.prototype,"capabilities",null),(0,i._)([(0,g.Cb)({type:Boolean,json:{read:!1}})],ue.prototype,"editingEnabled",null),(0,i._)([(0,g.Cb)({readOnly:!0,json:{write:!1,read:!1}})],ue.prototype,"infoFor3D",null),(0,i._)([(0,g.Cb)(A.C_)],ue.prototype,"popupEnabled",void 0),(0,i._)([(0,g.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],ue.prototype,"popupTemplate",void 0),(0,i._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],ue.prototype,"defaultPopupTemplate",null),(0,i._)([(0,g.Cb)({type:String,json:{read:!1}})],ue.prototype,"objectIdField",void 0),(0,i._)([(0,b.r)("service","objectIdField",["objectIdField","fields"])],ue.prototype,"readObjectIdField",null),(0,i._)([(0,g.Cb)({type:String,json:{read:!1}})],ue.prototype,"globalIdField",void 0),(0,i._)([(0,b.r)("service","globalIdField",["globalIdField","fields"])],ue.prototype,"readGlobalIdField",null),(0,i._)([(0,g.Cb)({readOnly:!0,type:String,json:{read:!1}})],ue.prototype,"displayField",null),(0,i._)([(0,g.Cb)({type:String,json:{read:!1}})],ue.prototype,"profile",void 0),(0,i._)([(0,b.r)("service","profile",["store.profile"])],ue.prototype,"readProfile",null),(0,i._)([(0,g.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ue.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,g.Cb)(A.YI)],ue.prototype,"screenSizePerspectiveEnabled",void 0),ue=(0,i._)([(0,v.j)("esri.layers.SceneLayer")],ue);const ye={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},he={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},fe=ue},51876:(e,t,r)=>{r.d(t,{B:()=>s});var i=r(3466);function s(e){return o[function(e){return e instanceof Blob?e.type:function(e){const t=(0,i.Ml)(e);return l[t]||n}(e.url)}(e)]||a}const o={},n="text/plain",a=o[n],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in l)o[l[e]]=e}}]);