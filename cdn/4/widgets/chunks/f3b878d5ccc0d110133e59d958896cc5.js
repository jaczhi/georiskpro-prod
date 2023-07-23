"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5859],{45859:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var s=i(70375),r=i(13802),a=i(24568),o=i(79880),n=i(20592),h=i(53316),l=i(34398),d=i(14626),c=i(52689);const u=r.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),_={getAttribute:(e,t)=>e.field(t)};async function y(e,t){const r=await Promise.resolve().then(i.bind(i,3362));try{const i=r.WhereClause.create(e,t);if(!i.isStandardized){const e=new s.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);u.error(e)}return e=>{const t=e.readArcadeFeature();return i.testFeature(t,_)}}catch(t){return u.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}class f{constructor(e){this._geometryBounds=(0,a.Ue)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach(((e,r)=>{const a=!!(1&this._idToVisibility.get(r)),o=s.has(r);!a&&o?t.push(r):a&&!o&&i.push(r),this._idToVisibility.set(r,o?3:0)})),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r}=this;return d.Z.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r})}async update(e,t){this._hash=JSON.stringify(e);const i=await(0,l.j6)(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await y(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await(0,n.cW)(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);(0,o.$P)(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,h.y)(this._serviceInfo.timeInfo,e.timeExtent,c.k);else{const t=new s.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);r.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return null==this._timeOperator||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach(((t,i)=>{1&t||(this._idToVisibility.set(i,1),e.push(i))})),e}}}}]);