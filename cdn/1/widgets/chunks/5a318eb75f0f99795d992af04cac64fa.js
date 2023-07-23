"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_rest_query_operations_editsZScale_js-node_modules_arcgis_core_rest_q-6f52d3"],{

/***/ "./node_modules/@arcgis/core/rest/query/operations/editsZScale.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/editsZScale.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unapplyEditsZUnitScaling": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(n,e,t){if(null==n.hasM||n.hasZ)for(const i of e)for(const n of i)n.length>2&&(n[2]*=t)}function i(e,t,i){if(!e&&!t||!i)return;const s=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(i);o(e,i,s),o(t,i,s)}function o(n,e,t){if(n)for(const i of n)s(i.geometry,e,t)}function s(i,o,s){if(null==i||!i.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.equals)(i.spatialReference,o))return;const f=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(i.spatialReference)/s;if(1!==f)if("x"in i)null!=i.z&&(i.z*=f);else if("rings"in i)t(i,i.rings,f);else if("paths"in i)t(i,i.paths,f);else if("points"in i&&(null==i.hasM||i.hasZ))for(const n of i.points)n.length>2&&(n[2]*=f)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/queryZScale.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/queryZScale.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyFeatureSetZUnitScaling": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/zscale.js */ "./node_modules/@arcgis/core/geometry/support/zscale.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r||!r.features||!r.hasZ)return;const f=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__.getGeometryZScaler)(r.geometryType,o,t.outSpatialReference);if(null!=f)for(const e of r.features)f(e.geometry)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/FeatureSet.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/FeatureSet.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/support/Field.js */ "./node_modules/@arcgis/core/layers/support/Field.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var f;const h=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let g=f=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.JSONSupport{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(t.spatialReference),s=[];for(let n=0;n<e.length;n++){const t=e[n],i=_Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(t),l=t.geometry&&t.geometry.spatialReference;null==i.geometry||l||(i.geometry.spatialReference=o);const a=t.aggregateGeometries,p=i.aggregateGeometries;if(a&&null!=p)for(const e in p){const t=p[e],r=a[e],s=r?.spatialReference;null==t||s||(t.spatialReference=o)}s.push(i)}return s}writeGeometryType(e,t,r,o){if(e)return void h.write(e,t,r,o);const{features:s}=this;if(s)for(const n of s)if(n&&null!=n.geometry)return void h.write(n.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__.fromJSON)(e);return o&&!r&&t.spatialReference&&(o.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const o of r)if(o&&null!=o.geometry&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}clone(){return new f(this.cloneProperties())}cloneProperties(){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,n=e=>Math.round((e-o)/t),i=e=>Math.round((s-e)/r),l=this.features,a=this._getQuantizationFunction(this.geometryType,n,i);for(let p=0,m=l.length;p<m;p++)a?.(l[p].geometry)||(l.splice(p,1),p--,m--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[n,i]}=r,l=e=>e*n+o,a=e=>s-e*i;let p=null,m=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;p=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;m=r=>null==r?r:r*t+e}const c=this._getHydrationFunction(e,l,a,p,m);for(const{geometry:u}of t)null!=u&&c&&c(u);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,l=e.length;i<l;i++){const l=e[i];if(i>0){const e=t(l[0]),i=r(l[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i)}else o=t(l[0]),s=r(l[1]),n.push([o,s])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__.isPolygon)(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i)}return s.length>0?((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__.isPolygon)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,o,s){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),o&&(e.z=o(e.z))}:"polyline"===e||"polygon"===e?e=>{const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__.isPolygon)(e)?e.rings:e.paths;let i,l;for(let o=0,s=n.length;o<s;o++){const e=n[o];for(let o=0,s=e.length;o<s;o++){const s=e[o];o>0?(i+=s[0],l+=s[1]):(i=s[0],l=s[1]),s[0]=t(i),s[1]=r(l)}}if(o&&s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=o(r[2]),r[3]=s(r[3])}}else if(o)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=o(r[2])}}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),o&&null!=e.zmax&&null!=e.zmin&&(e.zmax=o(e.zmax),e.zmin=o(e.zmin)),s&&null!=e.mmax&&null!=e.mmin&&(e.mmax=s(e.mmax),e.mmin=s(e.mmin))}:"multipoint"===e?e=>{const n=e.points;let i,l;for(let o=0,s=n.length;o<s;o++){const e=n[o];o>0?(i+=e[0],l+=e[1]):(i=e[0],l=e[1]),e[0]=t(i),e[1]=r(l)}if(o&&s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=o(e[2]),e[3]=s(e[3])}else if(o)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=o(e[2])}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=s(e[2])}}:null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{write:!0}})],g.prototype,"displayFieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"exceededTransferLimit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]],json:{write:!0}})],g.prototype,"features",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)("features")],g.prototype,"readFeatures",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:[_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_13__["default"]],json:{write:!0}})],g.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],g.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__.writer)("geometryType")],g.prototype,"writeGeometryType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__.geometryTypes,json:{write:!0}})],g.prototype,"queryGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)("queryGeometry")],g.prototype,"readQueryGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{write:!0}})],g.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__.writer)("spatialReference")],g.prototype,"writeSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],g.prototype,"transform",void 0),g=f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.rest.support.FeatureSet")],g),g.prototype.toJSON.isDefaultToJSON=!0;const d=g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNWEzMThlYjc1ZjBmOTk3OTVkOTkyYWYwNGNhYzY0ZmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDdUosa0JBQWtCLGdGQUFnRixrQkFBa0IscUJBQXFCLFFBQVEsaUZBQUMsSUFBSSxrQkFBa0Isa0JBQWtCLHdDQUF3QyxrQkFBa0IsaUNBQWlDLGtGQUFDLDhCQUE4QixRQUFRLGlGQUFDLHVCQUF1Qix3Q0FBd0MsbUNBQW1DLG1DQUFtQywyRkFBaUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ3lFLGtCQUFrQixtQ0FBbUMsUUFBUSwrRUFBQyx5Q0FBeUMsbURBQTRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o1UTtBQUNBO0FBQ0E7QUFDQTtBQUM2eEIsTUFBTSxZQUFZLHFEQUFDLEVBQUUsOEtBQThLLEVBQUUsc0JBQXNCLDZEQUFDLENBQUMsZUFBZSx3TUFBd00sa0JBQWtCLFFBQVEsK0VBQVUsMEJBQTBCLFlBQVksV0FBVyxLQUFLLGVBQWUsNERBQVUsOENBQThDLHFEQUFxRCxzREFBc0QsZ0NBQWdDLDBDQUEwQyxtQ0FBbUMsVUFBVSxTQUFTLDJCQUEyQixrQ0FBa0MsTUFBTSxXQUFXLE1BQU0sd0ZBQXdGLHVCQUF1QixrQkFBa0IsK0JBQStCLHlFQUFDLElBQUksc0RBQXNELCtFQUFVLHdCQUF3QiwyQkFBMkIsZ0RBQWdELE1BQU0sV0FBVyxNQUFNLCtJQUErSSxRQUFRLHFDQUFxQyxrQkFBa0IsT0FBTyxvREFBQyxFQUFFLGdTQUFnUyxFQUFFLFVBQVUscUJBQXFCLHdEQUF3RCxvQkFBb0IsS0FBSyxzQkFBc0IsZUFBZSxnQkFBZ0Isc0NBQXNDLFNBQVMsWUFBWSxNQUFNLDRCQUE0Qiw0SEFBNEgsdUJBQXVCLElBQUksZ0RBQWdELDZCQUE2QixhQUFhLE1BQU0sc0NBQXNDLE1BQU0sa0JBQWtCLE1BQU0sNEJBQTRCLHlCQUF5QixrQkFBa0IsbUNBQW1DLE1BQU0sNEJBQTRCLEdBQUcsV0FBVyxtQ0FBbUMsTUFBTSw4QkFBOEIsR0FBRyxxQkFBcUIsOENBQThDLFVBQVUsV0FBVyxzQkFBc0IsZ0NBQWdDLHVCQUF1QixRQUFRLFdBQVcsdUJBQXVCLElBQUksS0FBSyxhQUFhLFFBQVEsMEJBQTBCLDBDQUEwQyx1Q0FBdUMseUJBQXlCLGdDQUFnQyxpRkFBaUYsUUFBUSwwRUFBQyx5QkFBeUIsdUJBQXVCLElBQUksS0FBSywyQ0FBMkMsYUFBYSxtQkFBbUIsMEVBQUMsZ0NBQWdDLHNCQUFzQiwyQ0FBMkMseUNBQXlDLHdCQUF3QixpQ0FBaUMsc0JBQXNCLHNDQUFzQyxtQ0FBbUMsUUFBUSwwRUFBQyxvQkFBb0IsUUFBUSx1QkFBdUIsSUFBSSxLQUFLLGFBQWEsdUJBQXVCLElBQUksS0FBSyxhQUFhLDJEQUEyRCwrQkFBK0IsSUFBSSxLQUFLLGFBQWEsdUJBQXVCLElBQUksS0FBSyxhQUFhLDJCQUEyQixpQ0FBaUMsSUFBSSxLQUFLLGFBQWEsdUJBQXVCLElBQUksS0FBSyxhQUFhLGNBQWMsaUNBQWlDLElBQUksS0FBSyxhQUFhLHVCQUF1QixJQUFJLEtBQUssYUFBYSxlQUFlLGtCQUFrQiwwTUFBME0sc0JBQXNCLGlCQUFpQixRQUFRLHVCQUF1QixJQUFJLEtBQUssYUFBYSwwREFBMEQsK0JBQStCLElBQUksS0FBSyxhQUFhLDBCQUEwQixpQ0FBaUMsSUFBSSxLQUFLLGFBQWEsYUFBYSxpQ0FBaUMsSUFBSSxLQUFLLGFBQWEsY0FBYyxRQUFRLHVEQUFDLEVBQUUsc0ZBQUMsRUFBRSxrQkFBa0IsVUFBVSwwQ0FBMEMsdURBQUMsRUFBRSxzRkFBQyxFQUFFLG1CQUFtQixPQUFPLG9CQUFvQixVQUFVLElBQUksK0NBQStDLHVEQUFDLEVBQUUsc0ZBQUMsRUFBRSxNQUFNLG1EQUFDLFFBQVEsVUFBVSxrQ0FBa0MsdURBQUMsRUFBRSxrRkFBQywrQ0FBK0MsdURBQUMsRUFBRSxzRkFBQyxFQUFFLE1BQU0saUVBQUMsUUFBUSxVQUFVLGdDQUFnQyx1REFBQyxFQUFFLHNGQUFDLEVBQUUsdUVBQXVFLE1BQU0sZ0JBQWdCLHNDQUFzQyx1REFBQyxFQUFFLG1GQUFDLHdEQUF3RCx1REFBQyxFQUFFLHNGQUFDLEVBQUUsbUJBQW1CLE9BQU8sb0JBQW9CLFVBQVUsSUFBSSw4QkFBOEIsdURBQUMsRUFBRSxzRkFBQyxFQUFFLG1CQUFtQixPQUFPLG9CQUFvQixVQUFVLElBQUksOEJBQThCLHVEQUFDLEVBQUUsc0ZBQUMsRUFBRSxNQUFNLHVEQUFDLE9BQU8sVUFBVSx1Q0FBdUMsdURBQUMsRUFBRSxrRkFBQyx5REFBeUQsdURBQUMsRUFBRSxzRkFBQyxFQUFFLEtBQUssc0VBQUMsT0FBTyxVQUFVLDBDQUEwQyx1REFBQyxFQUFFLG1GQUFDLGdFQUFnRSx1REFBQyxFQUFFLHNGQUFDLEVBQUUsTUFBTSxVQUFVLHVDQUF1Qyx1REFBQyxFQUFFLHNGQUFDLDJFQUEyRSxVQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3Jlc3QvcXVlcnkvb3BlcmF0aW9ucy9lZGl0c1pTY2FsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9yZXN0L3F1ZXJ5L29wZXJhdGlvbnMvcXVlcnlaU2NhbGUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvcmVzdC9zdXBwb3J0L0ZlYXR1cmVTZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtnZXRNZXRlcnNQZXJWZXJ0aWNhbFVuaXRGb3JTUiBhcyBufWZyb21cIi4uLy4uLy4uL2NvcmUvdW5pdFV0aWxzLmpzXCI7aW1wb3J0e2VxdWFscyBhcyBlfWZyb21cIi4uLy4uLy4uL2dlb21ldHJ5L3N1cHBvcnQvc3BhdGlhbFJlZmVyZW5jZVV0aWxzLmpzXCI7ZnVuY3Rpb24gdChuLGUsdCl7aWYobnVsbD09bi5oYXNNfHxuLmhhc1opZm9yKGNvbnN0IGkgb2YgZSlmb3IoY29uc3QgbiBvZiBpKW4ubGVuZ3RoPjImJihuWzJdKj10KX1mdW5jdGlvbiBpKGUsdCxpKXtpZighZSYmIXR8fCFpKXJldHVybjtjb25zdCBzPW4oaSk7byhlLGkscyksbyh0LGkscyl9ZnVuY3Rpb24gbyhuLGUsdCl7aWYobilmb3IoY29uc3QgaSBvZiBuKXMoaS5nZW9tZXRyeSxlLHQpfWZ1bmN0aW9uIHMoaSxvLHMpe2lmKG51bGw9PWl8fCFpLnNwYXRpYWxSZWZlcmVuY2V8fGUoaS5zcGF0aWFsUmVmZXJlbmNlLG8pKXJldHVybjtjb25zdCBmPW4oaS5zcGF0aWFsUmVmZXJlbmNlKS9zO2lmKDEhPT1mKWlmKFwieFwiaW4gaSludWxsIT1pLnomJihpLnoqPWYpO2Vsc2UgaWYoXCJyaW5nc1wiaW4gaSl0KGksaS5yaW5ncyxmKTtlbHNlIGlmKFwicGF0aHNcImluIGkpdChpLGkucGF0aHMsZik7ZWxzZSBpZihcInBvaW50c1wiaW4gaSYmKG51bGw9PWkuaGFzTXx8aS5oYXNaKSlmb3IoY29uc3QgbiBvZiBpLnBvaW50cyluLmxlbmd0aD4yJiYoblsyXSo9Zil9ZXhwb3J0e2kgYXMgdW5hcHBseUVkaXRzWlVuaXRTY2FsaW5nfTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7Z2V0R2VvbWV0cnlaU2NhbGVyIGFzIGV9ZnJvbVwiLi4vLi4vLi4vZ2VvbWV0cnkvc3VwcG9ydC96c2NhbGUuanNcIjtmdW5jdGlvbiB0KHQsbyxyKXtpZighcnx8IXIuZmVhdHVyZXN8fCFyLmhhc1opcmV0dXJuO2NvbnN0IGY9ZShyLmdlb21ldHJ5VHlwZSxvLHQub3V0U3BhdGlhbFJlZmVyZW5jZSk7aWYobnVsbCE9Zilmb3IoY29uc3QgZSBvZiByLmZlYXR1cmVzKWYoZS5nZW9tZXRyeSl9ZXhwb3J0e3QgYXMgYXBwbHlGZWF0dXJlU2V0WlVuaXRTY2FsaW5nfTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyBlfWZyb21cIi4uLy4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnR7Z2VvbWV0cnlUeXBlcyBhcyB0fWZyb21cIi4uLy4uL2dlb21ldHJ5LmpzXCI7aW1wb3J0IHIgZnJvbVwiLi4vLi4vR3JhcGhpYy5qc1wiO2ltcG9ydHtKU09OTWFwIGFzIG99ZnJvbVwiLi4vLi4vY29yZS9qc29uTWFwLmpzXCI7aW1wb3J0e0pTT05TdXBwb3J0IGFzIHN9ZnJvbVwiLi4vLi4vY29yZS9KU09OU3VwcG9ydC5qc1wiO2ltcG9ydHtjbG9uZSBhcyBufWZyb21cIi4uLy4uL2NvcmUvbGFuZy5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyBpfWZyb21cIi4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnR7cmVhZGVyIGFzIGx9ZnJvbVwiLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9yZWFkZXIuanNcIjtpbXBvcnR7c3ViY2xhc3MgYXMgYX1mcm9tXCIuLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3N1YmNsYXNzLmpzXCI7aW1wb3J0e3dyaXRlciBhcyBwfWZyb21cIi4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvd3JpdGVyLmpzXCI7aW1wb3J0IG0gZnJvbVwiLi4vLi4vZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZS5qc1wiO2ltcG9ydHtmcm9tSlNPTiBhcyBjLGlzUG9seWdvbiBhcyB1fWZyb21cIi4uLy4uL2dlb21ldHJ5L3N1cHBvcnQvanNvblV0aWxzLmpzXCI7aW1wb3J0IHkgZnJvbVwiLi4vLi4vbGF5ZXJzL3N1cHBvcnQvRmllbGQuanNcIjt2YXIgZjtjb25zdCBoPW5ldyBvKHtlc3JpR2VvbWV0cnlQb2ludDpcInBvaW50XCIsZXNyaUdlb21ldHJ5TXVsdGlwb2ludDpcIm11bHRpcG9pbnRcIixlc3JpR2VvbWV0cnlQb2x5bGluZTpcInBvbHlsaW5lXCIsZXNyaUdlb21ldHJ5UG9seWdvbjpcInBvbHlnb25cIixlc3JpR2VvbWV0cnlFbnZlbG9wZTpcImV4dGVudFwiLG1lc2g6XCJtZXNoXCIsXCJcIjpudWxsfSk7bGV0IGc9Zj1jbGFzcyBleHRlbmRzIHN7Y29uc3RydWN0b3IoZSl7c3VwZXIoZSksdGhpcy5kaXNwbGF5RmllbGROYW1lPW51bGwsdGhpcy5leGNlZWRlZFRyYW5zZmVyTGltaXQ9ITEsdGhpcy5mZWF0dXJlcz1bXSx0aGlzLmZpZWxkcz1udWxsLHRoaXMuZ2VvbWV0cnlUeXBlPW51bGwsdGhpcy5oYXNNPSExLHRoaXMuaGFzWj0hMSx0aGlzLnF1ZXJ5R2VvbWV0cnk9bnVsbCx0aGlzLnNwYXRpYWxSZWZlcmVuY2U9bnVsbH1yZWFkRmVhdHVyZXMoZSx0KXtjb25zdCBvPW0uZnJvbUpTT04odC5zcGF0aWFsUmVmZXJlbmNlKSxzPVtdO2ZvcihsZXQgbj0wO248ZS5sZW5ndGg7bisrKXtjb25zdCB0PWVbbl0saT1yLmZyb21KU09OKHQpLGw9dC5nZW9tZXRyeSYmdC5nZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlO251bGw9PWkuZ2VvbWV0cnl8fGx8fChpLmdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2U9byk7Y29uc3QgYT10LmFnZ3JlZ2F0ZUdlb21ldHJpZXMscD1pLmFnZ3JlZ2F0ZUdlb21ldHJpZXM7aWYoYSYmbnVsbCE9cClmb3IoY29uc3QgZSBpbiBwKXtjb25zdCB0PXBbZV0scj1hW2VdLHM9cj8uc3BhdGlhbFJlZmVyZW5jZTtudWxsPT10fHxzfHwodC5zcGF0aWFsUmVmZXJlbmNlPW8pfXMucHVzaChpKX1yZXR1cm4gc313cml0ZUdlb21ldHJ5VHlwZShlLHQscixvKXtpZihlKXJldHVybiB2b2lkIGgud3JpdGUoZSx0LHIsbyk7Y29uc3R7ZmVhdHVyZXM6c309dGhpcztpZihzKWZvcihjb25zdCBuIG9mIHMpaWYobiYmbnVsbCE9bi5nZW9tZXRyeSlyZXR1cm4gdm9pZCBoLndyaXRlKG4uZ2VvbWV0cnkudHlwZSx0LHIsbyl9cmVhZFF1ZXJ5R2VvbWV0cnkoZSx0KXtpZighZSlyZXR1cm4gbnVsbDtjb25zdCByPSEhZS5zcGF0aWFsUmVmZXJlbmNlLG89YyhlKTtyZXR1cm4gbyYmIXImJnQuc3BhdGlhbFJlZmVyZW5jZSYmKG8uc3BhdGlhbFJlZmVyZW5jZT1tLmZyb21KU09OKHQuc3BhdGlhbFJlZmVyZW5jZSkpLG99d3JpdGVTcGF0aWFsUmVmZXJlbmNlKGUsdCl7aWYoZSlyZXR1cm4gdm9pZCh0LnNwYXRpYWxSZWZlcmVuY2U9ZS50b0pTT04oKSk7Y29uc3R7ZmVhdHVyZXM6cn09dGhpcztpZihyKWZvcihjb25zdCBvIG9mIHIpaWYobyYmbnVsbCE9by5nZW9tZXRyeSYmby5nZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlKXJldHVybiB2b2lkKHQuc3BhdGlhbFJlZmVyZW5jZT1vLmdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2UudG9KU09OKCkpfWNsb25lKCl7cmV0dXJuIG5ldyBmKHRoaXMuY2xvbmVQcm9wZXJ0aWVzKCkpfWNsb25lUHJvcGVydGllcygpe3JldHVybiBuKHtkaXNwbGF5RmllbGROYW1lOnRoaXMuZGlzcGxheUZpZWxkTmFtZSxleGNlZWRlZFRyYW5zZmVyTGltaXQ6dGhpcy5leGNlZWRlZFRyYW5zZmVyTGltaXQsZmVhdHVyZXM6dGhpcy5mZWF0dXJlcyxmaWVsZHM6dGhpcy5maWVsZHMsZ2VvbWV0cnlUeXBlOnRoaXMuZ2VvbWV0cnlUeXBlLGhhc006dGhpcy5oYXNNLGhhc1o6dGhpcy5oYXNaLHF1ZXJ5R2VvbWV0cnk6dGhpcy5xdWVyeUdlb21ldHJ5LHNwYXRpYWxSZWZlcmVuY2U6dGhpcy5zcGF0aWFsUmVmZXJlbmNlLHRyYW5zZm9ybTp0aGlzLnRyYW5zZm9ybX0pfXRvSlNPTihlKXtjb25zdCB0PXRoaXMud3JpdGUoKTtpZih0LmZlYXR1cmVzJiZBcnJheS5pc0FycmF5KGUpJiZlLmxlbmd0aD4wKWZvcihsZXQgcj0wO3I8dC5mZWF0dXJlcy5sZW5ndGg7cisrKXtjb25zdCBvPXQuZmVhdHVyZXNbcl07aWYoby5nZW9tZXRyeSl7Y29uc3QgdD1lJiZlW3JdO28uZ2VvbWV0cnk9dCYmdC50b0pTT04oKXx8by5nZW9tZXRyeX19cmV0dXJuIHR9cXVhbnRpemUoZSl7Y29uc3R7c2NhbGU6W3Qscl0sdHJhbnNsYXRlOltvLHNdfT1lLG49ZT0+TWF0aC5yb3VuZCgoZS1vKS90KSxpPWU9Pk1hdGgucm91bmQoKHMtZSkvciksbD10aGlzLmZlYXR1cmVzLGE9dGhpcy5fZ2V0UXVhbnRpemF0aW9uRnVuY3Rpb24odGhpcy5nZW9tZXRyeVR5cGUsbixpKTtmb3IobGV0IHA9MCxtPWwubGVuZ3RoO3A8bTtwKyspYT8uKGxbcF0uZ2VvbWV0cnkpfHwobC5zcGxpY2UocCwxKSxwLS0sbS0tKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm09ZSx0aGlzfXVucXVhbnRpemUoKXtjb25zdHtnZW9tZXRyeVR5cGU6ZSxmZWF0dXJlczp0LHRyYW5zZm9ybTpyfT10aGlzO2lmKCFyKXJldHVybiB0aGlzO2NvbnN0e3RyYW5zbGF0ZTpbbyxzXSxzY2FsZTpbbixpXX09cixsPWU9PmUqbitvLGE9ZT0+cy1lKmk7bGV0IHA9bnVsbCxtPW51bGw7aWYodGhpcy5oYXNaJiZudWxsIT1yPy5zY2FsZT8uWzJdKXtjb25zdHt0cmFuc2xhdGU6WywsZV0sc2NhbGU6WywsdF19PXI7cD1yPT5yKnQrZX1pZih0aGlzLmhhc00mJm51bGwhPXI/LnNjYWxlPy5bM10pe2NvbnN0e3RyYW5zbGF0ZTpbLCwsZV0sc2NhbGU6WywsLHRdfT1yO209cj0+bnVsbD09cj9yOnIqdCtlfWNvbnN0IGM9dGhpcy5fZ2V0SHlkcmF0aW9uRnVuY3Rpb24oZSxsLGEscCxtKTtmb3IoY29uc3R7Z2VvbWV0cnk6dX1vZiB0KW51bGwhPXUmJmMmJmModSk7cmV0dXJuIHRoaXMudHJhbnNmb3JtPW51bGwsdGhpc31fcXVhbnRpemVQb2ludHMoZSx0LHIpe2xldCBvLHM7Y29uc3Qgbj1bXTtmb3IobGV0IGk9MCxsPWUubGVuZ3RoO2k8bDtpKyspe2NvbnN0IGw9ZVtpXTtpZihpPjApe2NvbnN0IGU9dChsWzBdKSxpPXIobFsxXSk7ZT09PW8mJmk9PT1zfHwobi5wdXNoKFtlLW8saS1zXSksbz1lLHM9aSl9ZWxzZSBvPXQobFswXSkscz1yKGxbMV0pLG4ucHVzaChbbyxzXSl9cmV0dXJuIG4ubGVuZ3RoPjA/bjpudWxsfV9nZXRRdWFudGl6YXRpb25GdW5jdGlvbihlLHQscil7cmV0dXJuXCJwb2ludFwiPT09ZT9lPT4oZS54PXQoZS54KSxlLnk9cihlLnkpLGUpOlwicG9seWxpbmVcIj09PWV8fFwicG9seWdvblwiPT09ZT9lPT57Y29uc3Qgbz11KGUpP2UucmluZ3M6ZS5wYXRocyxzPVtdO2ZvcihsZXQgbj0wLGk9by5sZW5ndGg7bjxpO24rKyl7Y29uc3QgZT1vW25dLGk9dGhpcy5fcXVhbnRpemVQb2ludHMoZSx0LHIpO2kmJnMucHVzaChpKX1yZXR1cm4gcy5sZW5ndGg+MD8odShlKT9lLnJpbmdzPXM6ZS5wYXRocz1zLGUpOm51bGx9OlwibXVsdGlwb2ludFwiPT09ZT9lPT57Y29uc3Qgbz10aGlzLl9xdWFudGl6ZVBvaW50cyhlLnBvaW50cyx0LHIpO3JldHVybiBvJiZvLmxlbmd0aD4wPyhlLnBvaW50cz1vLGUpOm51bGx9OlwiZXh0ZW50XCI9PT1lP2U9PmU6bnVsbH1fZ2V0SHlkcmF0aW9uRnVuY3Rpb24oZSx0LHIsbyxzKXtyZXR1cm5cInBvaW50XCI9PT1lP2U9PntlLng9dChlLngpLGUueT1yKGUueSksbyYmKGUuej1vKGUueikpfTpcInBvbHlsaW5lXCI9PT1lfHxcInBvbHlnb25cIj09PWU/ZT0+e2NvbnN0IG49dShlKT9lLnJpbmdzOmUucGF0aHM7bGV0IGksbDtmb3IobGV0IG89MCxzPW4ubGVuZ3RoO288cztvKyspe2NvbnN0IGU9bltvXTtmb3IobGV0IG89MCxzPWUubGVuZ3RoO288cztvKyspe2NvbnN0IHM9ZVtvXTtvPjA/KGkrPXNbMF0sbCs9c1sxXSk6KGk9c1swXSxsPXNbMV0pLHNbMF09dChpKSxzWzFdPXIobCl9fWlmKG8mJnMpZm9yKGxldCB0PTAscj1uLmxlbmd0aDt0PHI7dCsrKXtjb25zdCBlPW5bdF07Zm9yKGxldCB0PTAscj1lLmxlbmd0aDt0PHI7dCsrKXtjb25zdCByPWVbdF07clsyXT1vKHJbMl0pLHJbM109cyhyWzNdKX19ZWxzZSBpZihvKWZvcihsZXQgdD0wLHI9bi5sZW5ndGg7dDxyO3QrKyl7Y29uc3QgZT1uW3RdO2ZvcihsZXQgdD0wLHI9ZS5sZW5ndGg7dDxyO3QrKyl7Y29uc3Qgcj1lW3RdO3JbMl09byhyWzJdKX19ZWxzZSBpZihzKWZvcihsZXQgdD0wLHI9bi5sZW5ndGg7dDxyO3QrKyl7Y29uc3QgZT1uW3RdO2ZvcihsZXQgdD0wLHI9ZS5sZW5ndGg7dDxyO3QrKyl7Y29uc3Qgcj1lW3RdO3JbMl09cyhyWzJdKX19fTpcImV4dGVudFwiPT09ZT9lPT57ZS54bWluPXQoZS54bWluKSxlLnltaW49cihlLnltaW4pLGUueG1heD10KGUueG1heCksZS55bWF4PXIoZS55bWF4KSxvJiZudWxsIT1lLnptYXgmJm51bGwhPWUuem1pbiYmKGUuem1heD1vKGUuem1heCksZS56bWluPW8oZS56bWluKSkscyYmbnVsbCE9ZS5tbWF4JiZudWxsIT1lLm1taW4mJihlLm1tYXg9cyhlLm1tYXgpLGUubW1pbj1zKGUubW1pbikpfTpcIm11bHRpcG9pbnRcIj09PWU/ZT0+e2NvbnN0IG49ZS5wb2ludHM7bGV0IGksbDtmb3IobGV0IG89MCxzPW4ubGVuZ3RoO288cztvKyspe2NvbnN0IGU9bltvXTtvPjA/KGkrPWVbMF0sbCs9ZVsxXSk6KGk9ZVswXSxsPWVbMV0pLGVbMF09dChpKSxlWzFdPXIobCl9aWYobyYmcylmb3IobGV0IHQ9MCxyPW4ubGVuZ3RoO3Q8cjt0Kyspe2NvbnN0IGU9blt0XTtlWzJdPW8oZVsyXSksZVszXT1zKGVbM10pfWVsc2UgaWYobylmb3IobGV0IHQ9MCxyPW4ubGVuZ3RoO3Q8cjt0Kyspe2NvbnN0IGU9blt0XTtlWzJdPW8oZVsyXSl9ZWxzZSBpZihzKWZvcihsZXQgdD0wLHI9bi5sZW5ndGg7dDxyO3QrKyl7Y29uc3QgZT1uW3RdO2VbMl09cyhlWzJdKX19Om51bGx9fTtlKFtpKHt0eXBlOlN0cmluZyxqc29uOnt3cml0ZTohMH19KV0sZy5wcm90b3R5cGUsXCJkaXNwbGF5RmllbGROYW1lXCIsdm9pZCAwKSxlKFtpKHt0eXBlOkJvb2xlYW4sanNvbjp7d3JpdGU6e292ZXJyaWRlUG9saWN5OmU9Pih7ZW5hYmxlZDplfSl9fX0pXSxnLnByb3RvdHlwZSxcImV4Y2VlZGVkVHJhbnNmZXJMaW1pdFwiLHZvaWQgMCksZShbaSh7dHlwZTpbcl0sanNvbjp7d3JpdGU6ITB9fSldLGcucHJvdG90eXBlLFwiZmVhdHVyZXNcIix2b2lkIDApLGUoW2woXCJmZWF0dXJlc1wiKV0sZy5wcm90b3R5cGUsXCJyZWFkRmVhdHVyZXNcIixudWxsKSxlKFtpKHt0eXBlOlt5XSxqc29uOnt3cml0ZTohMH19KV0sZy5wcm90b3R5cGUsXCJmaWVsZHNcIix2b2lkIDApLGUoW2koe3R5cGU6W1wicG9pbnRcIixcIm11bHRpcG9pbnRcIixcInBvbHlsaW5lXCIsXCJwb2x5Z29uXCIsXCJleHRlbnRcIixcIm1lc2hcIl0sanNvbjp7cmVhZDp7cmVhZGVyOmgucmVhZH19fSldLGcucHJvdG90eXBlLFwiZ2VvbWV0cnlUeXBlXCIsdm9pZCAwKSxlKFtwKFwiZ2VvbWV0cnlUeXBlXCIpXSxnLnByb3RvdHlwZSxcIndyaXRlR2VvbWV0cnlUeXBlXCIsbnVsbCksZShbaSh7dHlwZTpCb29sZWFuLGpzb246e3dyaXRlOntvdmVycmlkZVBvbGljeTplPT4oe2VuYWJsZWQ6ZX0pfX19KV0sZy5wcm90b3R5cGUsXCJoYXNNXCIsdm9pZCAwKSxlKFtpKHt0eXBlOkJvb2xlYW4sanNvbjp7d3JpdGU6e292ZXJyaWRlUG9saWN5OmU9Pih7ZW5hYmxlZDplfSl9fX0pXSxnLnByb3RvdHlwZSxcImhhc1pcIix2b2lkIDApLGUoW2koe3R5cGVzOnQsanNvbjp7d3JpdGU6ITB9fSldLGcucHJvdG90eXBlLFwicXVlcnlHZW9tZXRyeVwiLHZvaWQgMCksZShbbChcInF1ZXJ5R2VvbWV0cnlcIildLGcucHJvdG90eXBlLFwicmVhZFF1ZXJ5R2VvbWV0cnlcIixudWxsKSxlKFtpKHt0eXBlOm0sanNvbjp7d3JpdGU6ITB9fSldLGcucHJvdG90eXBlLFwic3BhdGlhbFJlZmVyZW5jZVwiLHZvaWQgMCksZShbcChcInNwYXRpYWxSZWZlcmVuY2VcIildLGcucHJvdG90eXBlLFwid3JpdGVTcGF0aWFsUmVmZXJlbmNlXCIsbnVsbCksZShbaSh7anNvbjp7d3JpdGU6ITB9fSldLGcucHJvdG90eXBlLFwidHJhbnNmb3JtXCIsdm9pZCAwKSxnPWY9ZShbYShcImVzcmkucmVzdC5zdXBwb3J0LkZlYXR1cmVTZXRcIildLGcpLGcucHJvdG90eXBlLnRvSlNPTi5pc0RlZmF1bHRUb0pTT049ITA7Y29uc3QgZD1nO2V4cG9ydHtkIGFzIGRlZmF1bHR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9