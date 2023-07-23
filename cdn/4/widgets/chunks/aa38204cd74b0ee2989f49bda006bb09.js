"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8536],{93711:(e,t,s)=>{s.d(t,{S:()=>n,X:()=>i});const i=1;function n(e,t){let s=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(s=Math.max(s,t))}return s}},98536:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});var i=s(70375),n=s(53736),r=s(35925),a=s(12065),o=s(93711),l=s(4811),u=s(66069),d=s(24791),p=s(40400),c=s(24366),y=s(28790),f=s(86349),h=s(17095);const m=r.Zn,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.Zn},I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function b(e){return(0,n.wp)(e)?null!=e.z:!!e.hasZ}function F(e){return(0,n.wp)(e)?null!=e.m:!!e.hasM}class S{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:s}=e,n=this._inferLayerProperties(s,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:!!n.hasM,c=null!=e.hasZ?e.hasZ:!!n.hasZ,b=!e.spatialReference&&!n.spatialReference,F=b?m:e.spatialReference||n.spatialReference,S=b?g:null,_=e.geometryType||n.geometryType,E=!_;let x=e.objectIdField||n.objectIdField,T=e.timeInfo;if(!E&&(b&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new i.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!x)throw new i.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&x!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${x}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),x=n.objectIdField),x&&!n.objectIdField){let e=null;r.some((t=>t.name===x&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:x,name:x,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new i.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===x&&(e.type="esriFieldTypeOID"),!f.v.jsonValues.includes(e.type))throw new i.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const R={};for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=(0,h.os)(e);void 0!==t&&(R[e.name]=t)}if(this._fieldsIndex=new y.Z(r),this._createDefaultAttributes=(0,p.Dm)(R,x),T){if(T.startTimeField){const e=this._fieldsIndex.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=this._fieldsIndex.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=this._fieldsIndex.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:T}}),T=null)}const j={warnings:t,featureErrors:[],layerDefinition:{...I,drawingInfo:(0,p.bU)(_),templates:(0,p.Hq)(R),extent:S,geometryType:_,objectIdField:x,fields:r,hasZ:c,hasM:a,timeInfo:T},assignedObjectIds:{}};if(this._queryEngine=new d.q({fields:r,geometryType:_,hasM:a,hasZ:c,objectIdField:x,spatialReference:F,featureStore:new l.Z({geometryType:_,hasM:a,hasZ:c}),timeInfo:T,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=o.X,j;const q=(0,o.S)(x,s);return this._nextObjectId=q+1,await(0,u._W)(s,F),this._loadInitialFeatures(j,s)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([(0,c.b)(t,s),(0,u._W)(e.adds,t),(0,u._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,i,r=null,a=null,o=null;for(const t of e){const e=t.geometry;if(null!=e&&(r||(r=(0,n.Ji)(e)),a||(a=e.spatialReference),null==s&&(s=b(e)),null==i&&(i=F(e)),r&&a&&null!=s&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||i}))&&(o=e.name)}return{geometryType:r,spatialReference:a,objectIdField:o,hasM:i,hasZ:s}}async _loadInitialFeatures(e,t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:l,featureStore:d}=this._queryEngine,p=[];for(const i of t){if(null!=i.uid&&(e.assignedObjectIds[i.uid]=-1),i.geometry&&s!==(0,n.Ji)(i.geometry)){e.featureErrors.push((0,c.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,c.O0)(this._fieldsIndex,t,i.attributes,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,null!=i.uid&&(e.assignedObjectIds[i.uid]=i.attributes[o]),null!=i.geometry&&(i.geometry=(0,u.iV)(i.geometry,i.geometry.spatialReference,l)),p.push(i))}d.addMany((0,a.Yn)([],p,s,r,i,o));const{fullExtent:y,timeExtent:f}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=y,f){const{start:t,end:s}=f;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),s&&s.length&&this._applyUpdateEdits(n,s),i&&i.length){for(const e of i)n.deleteResults.push((0,c.d1)(e));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:a,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:r,hasZ:o,objectIdField:l,spatialReference:d,featureStore:p}=this._queryEngine,y=[];for(const r of t){if(r.geometry&&i!==(0,n.Ji)(r.geometry)){s.push((0,c.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,c.O0)(this._fieldsIndex,t,r.attributes);if(a)s.push(a);else{if(this._assignObjectId(t,r.attributes),r.attributes=t,null!=r.uid){const t=r.attributes[l];e.uidToObjectId[r.uid]=t}if(null!=r.geometry){const e=r.geometry.spatialReference??d;r.geometry=(0,u.iV)((0,c.og)(r.geometry,e),e,d)}y.push(r),s.push((0,c.d1)(r.attributes[l]))}}p.addMany((0,a.Yn)([],y,i,o,r,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:l,featureStore:d}=this._queryEngine;for(const p of t){const{attributes:t,geometry:y}=p,f=t&&t[o];if(null==f){e.push((0,c.av)(`Identifier field ${o} missing`));continue}if(!d.has(f)){e.push((0,c.av)(`Feature with object id ${f} missing`));continue}const h=(0,a.EI)(d.getFeature(f),s,r,i);if(null!=y){if(s!==(0,n.Ji)(y)){e.push((0,c.av)("Incorrect geometry type."));continue}const t=y.spatialReference??l;h.geometry=(0,u.iV)((0,c.og)(y,t),t,l)}if(t){const s=(0,c.O0)(this._fieldsIndex,h.attributes,t);if(s){e.push(s);continue}}d.add((0,a.XA)(h,s,r,i,o)),e.push((0,c.d1)(f))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;s&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}},40400:(e,t,s)=>{s.d(t,{Dm:()=>d,Hq:()=>p,MS:()=>c,bU:()=>o});var i=s(39994),n=s(67134),r=s(10287),a=s(86094);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new i}catch(s){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}},86094:(e,t,s)=>{s.d(t,{ET:()=>r,I4:()=>n,eG:()=>l,lF:()=>a,lj:()=>d,qP:()=>o,wW:()=>u});const i=[252,146,31,255],n={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},r={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},o={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},d={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);