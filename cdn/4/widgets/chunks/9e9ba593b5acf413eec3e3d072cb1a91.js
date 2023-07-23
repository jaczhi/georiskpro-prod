"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1691],{67979:(e,t,r)=>{r.d(t,{Ed:()=>l,UI:()=>h,mt:()=>_,q6:()=>y,vr:()=>d});var s=r(36663),n=r(74396),a=r(61681),i=r(33926),o=r(81977),u=r(40266);function l(e,t,r){return(0,i.as)(e.map(((e,s)=>t.apply(r,[e,s]))))}async function h(e,t,r){return(await(0,i.as)(e.map(((e,s)=>t.apply(r,[e,s]))))).map((e=>e.value))}function p(e){return{ok:!0,value:e}}function c(e){return{ok:!1,error:e}}async function y(e){if(null==e)return{ok:!1,error:new Error("no promise provided")};try{return p(await e)}catch(e){return c(e)}}async function _(e){try{return p(await e)}catch(e){return(0,i.r9)(e),c(e)}}function d(e,t){return new g(e,t)}let g=class extends n.Z{get value(){return null!=(e=this._result)&&!0===e.ok?e.value:null;var e}get error(){return null!=(e=this._result)&&!1===e.ok?e.error:null;var e}get finished(){return null!=this._result}constructor(e,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=(0,a.IM)(this._abortController)},this.remove=this.abort,this._abortController=new AbortController;const{signal:r}=this._abortController;this.promise=e(r),this.promise.then((e=>{this._result=p(e),this._cleanup()}),(e=>{this._result=c(e),this._cleanup()})),this._abortHandle=(0,i.fu)(t,this.abort)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=(0,a.hw)(this._abortHandle),this._abortController=null}};(0,s._)([(0,o.Cb)()],g.prototype,"value",null),(0,s._)([(0,o.Cb)()],g.prototype,"error",null),(0,s._)([(0,o.Cb)()],g.prototype,"finished",null),(0,s._)([(0,o.Cb)()],g.prototype,"promise",void 0),(0,s._)([(0,o.Cb)()],g.prototype,"_result",void 0),g=(0,s._)([(0,u.j)("esri.core.asyncUtils.ReactiveTask")],g)},1691:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var s=r(67979),n=r(70375),a=r(13802),i=r(33926),o=r(35925),u=r(12065),l=r(4811),h=r(66069),p=r(24791),c=r(61957),y=r(24366),_=r(48662),d=r(28790);class g{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,r=await(0,_.Bm)(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await(0,c.O3)(r),(0,i.k_)(e);const s=(0,c.lG)(r,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!(0,o.fS)(this._queryEngine.spatialReference,o.Zn))for(const e of s)null!=e.geometry&&(e.geometry=(0,u.GH)((0,h.iV)((0,u.di)(e.geometry,this._queryEngine.geometryType,!1,!1),o.Zn,this._queryEngine.spatialReference)));let n=1;for(const e of s){const r={};(0,y.O0)(this._fieldsIndex,r,e.attributes,!0),e.attributes=r,null==e.attributes[t]&&(e.objectId=e.attributes[t]=n++)}return s}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:s,spatialReference:n,fields:a,geometryType:o,featureType:u,objectIdField:h,customParameters:c}=e;this._featureType=u,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=s,this._fieldsIndex=new d.Z(a),await this._checkProjection(n),(0,i.k_)(t),this._queryEngine=new p.q({fields:a,geometryType:o,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:n,timeInfo:null,featureStore:new l.Z({geometryType:o,hasM:!1,hasZ:!1})});const y=await this._snapshotFeatures(t.signal);return this._queryEngine.featureStore.addMany(y),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new n.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,s.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,i.D_)(e)||a.Z.getLogger("esri.layers.WFSLayer").error(new n.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await(0,h._W)(o.Zn,e)}catch{throw new n.Z("unsupported-projection","Projection not supported",{spatialReference:e})}}}}}]);