"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_layers_support_arcgisLayerUrl_js-node_modules_arcgis_core_layers_sup-7ce991"],{

/***/ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanTitle": () => (/* binding */ m),
/* harmony export */   "isArcGISUrl": () => (/* binding */ v),
/* harmony export */   "isHostedAgolService": () => (/* binding */ w),
/* harmony export */   "isServerOrServicesAGOLUrl": () => (/* binding */ b),
/* harmony export */   "isWmsServer": () => (/* binding */ C),
/* harmony export */   "parse": () => (/* binding */ p),
/* harmony export */   "parseNonStandardSublayerUrl": () => (/* binding */ d),
/* harmony export */   "sanitizeUrl": () => (/* binding */ y),
/* harmony export */   "sanitizeUrlWithLayerId": () => (/* binding */ g),
/* harmony export */   "serverTypes": () => (/* binding */ o),
/* harmony export */   "titleFromUrlAndName": () => (/* binding */ h),
/* harmony export */   "writeUrlWithLayerId": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const i={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},o=Object.values(i),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),a=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),f=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function v(e){return!!c.test(e)}function p(r){if(null==r)return null;const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(r),n=t.path.match(c)||t.path.match(a);if(!n)return null;const[,s,l,u,o]=n,f=l.indexOf("/");return{title:m(-1!==f?l.slice(f+1):l),serverType:i[u.toLowerCase()],sublayer:null!=o&&""!==o?parseInt(o,10):null,url:{path:s}}}function d(r){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(r).path.match(f);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function m(e){return(e=e.replaceAll(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function h(e,r){const t=[];if(e){const r=p(e);null!=r&&r.title&&t.push(r.title)}if(r){const e=m(r);t.push(e)}if(2===t.length){if(t[0].toLowerCase().includes(t[1].toLowerCase()))return t[0];if(t[1].toLowerCase().includes(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function w(e){if(!e)return!1;const r=".arcgis.com/",t="//services",n="//tiles",s="//features",l=(e=e.toLowerCase()).includes(r),u=e.includes(t)||e.includes(n)||e.includes(s);return l&&u}function y(e,n){return e?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeTrailingSlash)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeQueryParameters)(e,n)):e}function g(n){let{url:s}=n;if(!s)return{url:s};s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeQueryParameters)(s,n.logger);const l=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(s),u=p(l.path);let i;if(null!=u)null!=u.sublayer&&null==n.layer.layerId&&(i=u.sublayer),s=u.url.path;else if(n.nonStandardUrlAllowed){const e=d(l.path);null!=e&&(s=e.serviceUrl,i=e.sublayerId)}return{url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeTrailingSlash)(s),layerId:i}}function S(e,r,t,s,l){(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__.w)(r,s,"url",l),s.url&&null!=e.layerId&&(s.url=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.join)(s.url,t,e.layerId.toString()))}function C(e){if(!e)return!1;const r=e.toLowerCase(),t=r.includes("/services/"),n=r.includes("/mapserver/wmsserver"),s=r.includes("/imageserver/wmsserver"),l=r.includes("/wmsserver");return t&&(n||s||l)}function b(e){if(!e)return!1;const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.Url((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.makeAbsolute)(e)),t=r.authority?.toLowerCase();return"server.arcgisonline.com"===t||"services.arcgisonline.com"===t}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/layerUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/layerUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEffectiveEditingEnabled": () => (/* binding */ S),
/* harmony export */   "getEffectiveLayerCapabilities": () => (/* binding */ E),
/* harmony export */   "getOwningPortalUrl": () => (/* binding */ h),
/* harmony export */   "getTileMaxtrixSetFromActiveLayer": () => (/* binding */ v),
/* harmony export */   "isBaseLayer": () => (/* binding */ y),
/* harmony export */   "isBasemap3DSupportedLayer": () => (/* binding */ n),
/* harmony export */   "isBasemapSupportedTiledLayer": () => (/* binding */ u),
/* harmony export */   "isFeatureCollectionLayer": () => (/* binding */ p),
/* harmony export */   "isFeatureLayer": () => (/* binding */ r),
/* harmony export */   "isFeatureServiceLayer": () => (/* binding */ d),
/* harmony export */   "isGroupLayer": () => (/* binding */ a),
/* harmony export */   "isImageryTileLayer": () => (/* binding */ f),
/* harmony export */   "isLayerWithFeatureLayerSource": () => (/* binding */ g),
/* harmony export */   "isSceneLayer": () => (/* binding */ i),
/* harmony export */   "isSceneServiceLayer": () => (/* binding */ o),
/* harmony export */   "isTable": () => (/* binding */ j),
/* harmony export */   "isTiledLayer": () => (/* binding */ s),
/* harmony export */   "isVoxelLayer": () => (/* binding */ l),
/* harmony export */   "sceneServiceLayerTypeToClassName": () => (/* binding */ c),
/* harmony export */   "serializeLayerDefinitions": () => (/* binding */ b),
/* harmony export */   "serializeTimeOptions": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(e){return u(e)||i(e)}function r(e){return null!=e&&"object"==typeof e&&"type"in e&&"feature"===e.type}function i(e){return"scene"===e?.type}function u(e){const t=e?.type;return"imagery-tile"===t||"tile"===t||"open-street-map"===t||"vector-tile"===t||"web-tile"===t||"wmts"===t}function s(e){const t=e?.type;return"base-tile"===t||"tile"===t||"elevation"===t||"imagery-tile"===t||"base-elevation"===t||"open-street-map"===t||"wcs"===t||"web-tile"===t||"wmts"===t||"vector-tile"===t}function a(e){return null!=e&&"type"in e&&"group"===e.type}const c={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};function o(e){const t=e?.type;return"building-scene"===t||"integrated-mesh"===t||"point-cloud"===t||"scene"===t}function l(e){return"voxel"===e?.type}function f(e){return"imagery-tile"===e?.type}function y(e){return null!=e&&null!=e.parent&&"declaredClass"in e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.includes(e)}function p(e){return"feature"===e?.type&&!e.url&&"memory"===e.source?.type}function g(e){return("feature"===e?.type||"subtype-group"===e?.type)&&"feature-layer"===e.source?.type}function d(e){return"feature"===e?.type&&"feature-layer"===e.source?.type}function b(e){const t=/[:;]/,n=[];let r=!1;if(e&&(e.forEach(((e,i)=>{n.push([i,e]),!r&&t.test(e)&&(r=!0)})),n.length>0)){let e;if(r){const t={};n.forEach((e=>{t[e[0]]=e[1]})),e=JSON.stringify(t)}else{const t=[];n.forEach((e=>{t.push(e[0]+":"+e[1])})),e=t.join(";")}return e}return null}function m(e){if(!e)return;const t=[];return e.forEach(((e,n)=>{t.push('"'+n+'":'+JSON.stringify(e))})),t.length?"{"+t.join(",")+"}":void 0}function v(e){if(e.activeLayer){const t=e.activeLayer.tileMatrixSet;if(t)return t;const n=e.activeLayer.tileMatrixSets;if(n)return n}return null}async function h(n,r){const i=_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id?.findServerInfo(n);if(null!=i?.currentVersion)return i.owningSystemUrl||null;const u=n.toLowerCase().indexOf("/rest/services");if(-1===u)return null;const s=`${n.substring(0,u)}/rest/info`,a=null!=r?r.signal:null,{data:c}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s,{query:{f:"json"},responseType:"json",signal:a});return c?.owningSystemUrl||null}function w(e){if(!("capabilities"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"imagery":case"knowledge-graph-sublayer":case"ogc-feature":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":case"wfs":return!0;default:return!1}}function j(e){return null!=e&&"object"==typeof e&&"isTable"in e&&!!e.isTable}function E(e){return w(e)?"effectiveCapabilities"in e?e.effectiveCapabilities:e.capabilities:null}function L(e){if(!("editingEnabled"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":return!0;default:return!1}}function S(e){return!!L(e)&&("effectiveEditingEnabled"in e?e.effectiveEditingEnabled:e.editingEnabled)}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZjJiY2NhZjJlMDg4YzZjMjRlZTVjMDcwMTc3YWNlMmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNzTSxTQUFTLHdLQUF3SywyRkFBMkYsWUFBWSxpR0FBaUcsWUFBWSx3RUFBd0UsY0FBYyxrQkFBa0IsY0FBYyx1QkFBdUIsUUFBUSw4REFBQyx1Q0FBdUMsa0JBQWtCLG1DQUFtQyxPQUFPLCtHQUErRyxTQUFTLGNBQWMsUUFBUSw4REFBQyxrQkFBa0IsVUFBVSx3Q0FBd0MsTUFBTSxjQUFjLHVFQUF1RSxnQkFBZ0IsV0FBVyxNQUFNLGFBQWEsa0NBQWtDLE1BQU0sYUFBYSxVQUFVLGlCQUFpQiwrREFBK0QsK0RBQStELHFCQUFxQixjQUFjLGVBQWUsaUpBQWlKLFlBQVksZ0JBQWdCLFNBQVMsc0VBQUMsQ0FBQyx3RUFBQyxTQUFTLGNBQWMsSUFBSSxNQUFNLEdBQUcsYUFBYSxPQUFPLEVBQUUsd0VBQUMsYUFBYSxRQUFRLDhEQUFDLGdCQUFnQixNQUFNLGdGQUFnRixpQ0FBaUMsa0JBQWtCLHlDQUF5QyxPQUFPLElBQUksc0VBQUMsZUFBZSxzQkFBc0IsaUVBQUMsNkNBQTZDLHVEQUFDLGdDQUFnQyxjQUFjLGVBQWUsMEpBQTBKLG9CQUFvQixjQUFjLGVBQWUsWUFBWSxrREFBQyxDQUFDLCtEQUFDLGtDQUFrQyxxRUFBbVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeGxGO0FBQ0E7QUFDQTtBQUNBO0FBQ3FFLGNBQWMsa0JBQWtCLGNBQWMsbUVBQW1FLGNBQWMsd0JBQXdCLGNBQWMsZ0JBQWdCLDJHQUEyRyxjQUFjLGdCQUFnQiw4S0FBOEssY0FBYyw2Q0FBNkMsU0FBUyw0SUFBNEksY0FBYyxnQkFBZ0Isa0ZBQWtGLGNBQWMsd0JBQXdCLGNBQWMsK0JBQStCLGNBQWMscUlBQXFJLGNBQWMsNkRBQTZELGNBQWMseUZBQXlGLGNBQWMsNERBQTRELGNBQWMsWUFBWSxRQUFRLFNBQVMsMEJBQTBCLG9DQUFvQyxnQkFBZ0IsTUFBTSxNQUFNLFdBQVcsZUFBZSxhQUFhLHVCQUF1QixLQUFLLFdBQVcsZUFBZSxzQkFBc0IsY0FBYyxHQUFHLFNBQVMsWUFBWSxjQUFjLGFBQWEsV0FBVywwQkFBMEIscUNBQXFDLGNBQWMsZ0JBQWdCLFNBQVMsY0FBYyxrQkFBa0Isb0NBQW9DLGNBQWMscUNBQXFDLGNBQWMsWUFBWSxzQkFBc0IsUUFBUSwwQ0FBQyxvQkFBb0IsMERBQTBELGtEQUFrRCxzQkFBc0IsV0FBVyxpQkFBaUIscUNBQXFDLE9BQU8sT0FBTyx1REFBQyxJQUFJLE9BQU8sU0FBUyw4QkFBOEIsRUFBRSxnQ0FBZ0MsY0FBYyxrQ0FBa0MsZUFBZSxzTUFBc00sa0JBQWtCLGNBQWMsK0RBQStELGNBQWMsb0ZBQW9GLGNBQWMsb0NBQW9DLGVBQWUsNkhBQTZILGtCQUFrQixjQUFjLHlGQUF5b0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9hcmNnaXNMYXllclVybC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9sYXllclV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7dXJsVG9PYmplY3QgYXMgZSxyZW1vdmVUcmFpbGluZ1NsYXNoIGFzIHIscmVtb3ZlUXVlcnlQYXJhbWV0ZXJzIGFzIHQsam9pbiBhcyBuLFVybCBhcyBzLG1ha2VBYnNvbHV0ZSBhcyBsfWZyb21cIi4uLy4uL2NvcmUvdXJsVXRpbHMuanNcIjtpbXBvcnR7dyBhcyB1fWZyb21cIi4uLy4uL2NodW5rcy9wZXJzaXN0YWJsZVVybFV0aWxzLmpzXCI7Y29uc3QgaT17bWFwc2VydmVyOlwiTWFwU2VydmVyXCIsaW1hZ2VzZXJ2ZXI6XCJJbWFnZVNlcnZlclwiLGZlYXR1cmVzZXJ2ZXI6XCJGZWF0dXJlU2VydmVyXCIsc2NlbmVzZXJ2ZXI6XCJTY2VuZVNlcnZlclwiLHN0cmVhbXNlcnZlcjpcIlN0cmVhbVNlcnZlclwiLHZlY3RvcnRpbGVzZXJ2ZXI6XCJWZWN0b3JUaWxlU2VydmVyXCJ9LG89T2JqZWN0LnZhbHVlcyhpKSxjPW5ldyBSZWdFeHAoYF4oKD86aHR0cHM/Oik/XFxcXC9cXFxcL1xcXFxTKz9cXFxcL3Jlc3RcXFxcL3NlcnZpY2VzXFxcXC8oLis/KVxcXFwvKCR7by5qb2luKFwifFwiKX0pKSg/OlxcXFwvKD86bGF5ZXJzXFxcXC8pPyhcXFxcZCspKT9gLFwiaVwiKSxhPW5ldyBSZWdFeHAoYF4oKD86aHR0cHM/Oik/XFxcXC9cXFxcL1xcXFxTKz9cXFxcLyhbXlxcXFwvXFxcXG5dKylcXFxcLygke28uam9pbihcInxcIil9KSkoPzpcXFxcLyg/OmxheWVyc1xcXFwvKT8oXFxcXGQrKSk/YCxcImlcIiksZj0vKC4qPylcXC8oPzpsYXllcnNcXC8pPyhcXGQrKVxcLz8kL2k7ZnVuY3Rpb24gdihlKXtyZXR1cm4hIWMudGVzdChlKX1mdW5jdGlvbiBwKHIpe2lmKG51bGw9PXIpcmV0dXJuIG51bGw7Y29uc3QgdD1lKHIpLG49dC5wYXRoLm1hdGNoKGMpfHx0LnBhdGgubWF0Y2goYSk7aWYoIW4pcmV0dXJuIG51bGw7Y29uc3RbLHMsbCx1LG9dPW4sZj1sLmluZGV4T2YoXCIvXCIpO3JldHVybnt0aXRsZTptKC0xIT09Zj9sLnNsaWNlKGYrMSk6bCksc2VydmVyVHlwZTppW3UudG9Mb3dlckNhc2UoKV0sc3VibGF5ZXI6bnVsbCE9byYmXCJcIiE9PW8/cGFyc2VJbnQobywxMCk6bnVsbCx1cmw6e3BhdGg6c319fWZ1bmN0aW9uIGQocil7Y29uc3QgdD1lKHIpLnBhdGgubWF0Y2goZik7cmV0dXJuIHQ/e3NlcnZpY2VVcmw6dFsxXSxzdWJsYXllcklkOk51bWJlcih0WzJdKX06bnVsbH1mdW5jdGlvbiBtKGUpe3JldHVybihlPWUucmVwbGFjZUFsbCgvXFxzKlsvX10rXFxzKi9nLFwiIFwiKSlbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpfWZ1bmN0aW9uIGgoZSxyKXtjb25zdCB0PVtdO2lmKGUpe2NvbnN0IHI9cChlKTtudWxsIT1yJiZyLnRpdGxlJiZ0LnB1c2goci50aXRsZSl9aWYocil7Y29uc3QgZT1tKHIpO3QucHVzaChlKX1pZigyPT09dC5sZW5ndGgpe2lmKHRbMF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0WzFdLnRvTG93ZXJDYXNlKCkpKXJldHVybiB0WzBdO2lmKHRbMV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0WzBdLnRvTG93ZXJDYXNlKCkpKXJldHVybiB0WzFdfXJldHVybiB0LmpvaW4oXCIgLSBcIil9ZnVuY3Rpb24gdyhlKXtpZighZSlyZXR1cm4hMTtjb25zdCByPVwiLmFyY2dpcy5jb20vXCIsdD1cIi8vc2VydmljZXNcIixuPVwiLy90aWxlc1wiLHM9XCIvL2ZlYXR1cmVzXCIsbD0oZT1lLnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHIpLHU9ZS5pbmNsdWRlcyh0KXx8ZS5pbmNsdWRlcyhuKXx8ZS5pbmNsdWRlcyhzKTtyZXR1cm4gbCYmdX1mdW5jdGlvbiB5KGUsbil7cmV0dXJuIGU/cih0KGUsbikpOmV9ZnVuY3Rpb24gZyhuKXtsZXR7dXJsOnN9PW47aWYoIXMpcmV0dXJue3VybDpzfTtzPXQocyxuLmxvZ2dlcik7Y29uc3QgbD1lKHMpLHU9cChsLnBhdGgpO2xldCBpO2lmKG51bGwhPXUpbnVsbCE9dS5zdWJsYXllciYmbnVsbD09bi5sYXllci5sYXllcklkJiYoaT11LnN1YmxheWVyKSxzPXUudXJsLnBhdGg7ZWxzZSBpZihuLm5vblN0YW5kYXJkVXJsQWxsb3dlZCl7Y29uc3QgZT1kKGwucGF0aCk7bnVsbCE9ZSYmKHM9ZS5zZXJ2aWNlVXJsLGk9ZS5zdWJsYXllcklkKX1yZXR1cm57dXJsOnIocyksbGF5ZXJJZDppfX1mdW5jdGlvbiBTKGUscix0LHMsbCl7dShyLHMsXCJ1cmxcIixsKSxzLnVybCYmbnVsbCE9ZS5sYXllcklkJiYocy51cmw9bihzLnVybCx0LGUubGF5ZXJJZC50b1N0cmluZygpKSl9ZnVuY3Rpb24gQyhlKXtpZighZSlyZXR1cm4hMTtjb25zdCByPWUudG9Mb3dlckNhc2UoKSx0PXIuaW5jbHVkZXMoXCIvc2VydmljZXMvXCIpLG49ci5pbmNsdWRlcyhcIi9tYXBzZXJ2ZXIvd21zc2VydmVyXCIpLHM9ci5pbmNsdWRlcyhcIi9pbWFnZXNlcnZlci93bXNzZXJ2ZXJcIiksbD1yLmluY2x1ZGVzKFwiL3dtc3NlcnZlclwiKTtyZXR1cm4gdCYmKG58fHN8fGwpfWZ1bmN0aW9uIGIoZSl7aWYoIWUpcmV0dXJuITE7Y29uc3Qgcj1uZXcgcyhsKGUpKSx0PXIuYXV0aG9yaXR5Py50b0xvd2VyQ2FzZSgpO3JldHVyblwic2VydmVyLmFyY2dpc29ubGluZS5jb21cIj09PXR8fFwic2VydmljZXMuYXJjZ2lzb25saW5lLmNvbVwiPT09dH1leHBvcnR7bSBhcyBjbGVhblRpdGxlLHYgYXMgaXNBcmNHSVNVcmwsdyBhcyBpc0hvc3RlZEFnb2xTZXJ2aWNlLGIgYXMgaXNTZXJ2ZXJPclNlcnZpY2VzQUdPTFVybCxDIGFzIGlzV21zU2VydmVyLHAgYXMgcGFyc2UsZCBhcyBwYXJzZU5vblN0YW5kYXJkU3VibGF5ZXJVcmwseSBhcyBzYW5pdGl6ZVVybCxnIGFzIHNhbml0aXplVXJsV2l0aExheWVySWQsbyBhcyBzZXJ2ZXJUeXBlcyxoIGFzIHRpdGxlRnJvbVVybEFuZE5hbWUsUyBhcyB3cml0ZVVybFdpdGhMYXllcklkfTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7aWQgYXMgZX1mcm9tXCIuLi8uLi9rZXJuZWwuanNcIjtpbXBvcnQgdCBmcm9tXCIuLi8uLi9yZXF1ZXN0LmpzXCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gdShlKXx8aShlKX1mdW5jdGlvbiByKGUpe3JldHVybiBudWxsIT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJ0eXBlXCJpbiBlJiZcImZlYXR1cmVcIj09PWUudHlwZX1mdW5jdGlvbiBpKGUpe3JldHVyblwic2NlbmVcIj09PWU/LnR5cGV9ZnVuY3Rpb24gdShlKXtjb25zdCB0PWU/LnR5cGU7cmV0dXJuXCJpbWFnZXJ5LXRpbGVcIj09PXR8fFwidGlsZVwiPT09dHx8XCJvcGVuLXN0cmVldC1tYXBcIj09PXR8fFwidmVjdG9yLXRpbGVcIj09PXR8fFwid2ViLXRpbGVcIj09PXR8fFwid210c1wiPT09dH1mdW5jdGlvbiBzKGUpe2NvbnN0IHQ9ZT8udHlwZTtyZXR1cm5cImJhc2UtdGlsZVwiPT09dHx8XCJ0aWxlXCI9PT10fHxcImVsZXZhdGlvblwiPT09dHx8XCJpbWFnZXJ5LXRpbGVcIj09PXR8fFwiYmFzZS1lbGV2YXRpb25cIj09PXR8fFwib3Blbi1zdHJlZXQtbWFwXCI9PT10fHxcIndjc1wiPT09dHx8XCJ3ZWItdGlsZVwiPT09dHx8XCJ3bXRzXCI9PT10fHxcInZlY3Rvci10aWxlXCI9PT10fWZ1bmN0aW9uIGEoZSl7cmV0dXJuIG51bGwhPWUmJlwidHlwZVwiaW4gZSYmXCJncm91cFwiPT09ZS50eXBlfWNvbnN0IGM9e1BvaW50OlwiU2NlbmVMYXllclwiLFwiM0RPYmplY3RcIjpcIlNjZW5lTGF5ZXJcIixJbnRlZ3JhdGVkTWVzaDpcIkludGVncmF0ZWRNZXNoTGF5ZXJcIixQb2ludENsb3VkOlwiUG9pbnRDbG91ZExheWVyXCIsQnVpbGRpbmc6XCJCdWlsZGluZ1NjZW5lTGF5ZXJcIn07ZnVuY3Rpb24gbyhlKXtjb25zdCB0PWU/LnR5cGU7cmV0dXJuXCJidWlsZGluZy1zY2VuZVwiPT09dHx8XCJpbnRlZ3JhdGVkLW1lc2hcIj09PXR8fFwicG9pbnQtY2xvdWRcIj09PXR8fFwic2NlbmVcIj09PXR9ZnVuY3Rpb24gbChlKXtyZXR1cm5cInZveGVsXCI9PT1lPy50eXBlfWZ1bmN0aW9uIGYoZSl7cmV0dXJuXCJpbWFnZXJ5LXRpbGVcIj09PWU/LnR5cGV9ZnVuY3Rpb24geShlKXtyZXR1cm4gbnVsbCE9ZSYmbnVsbCE9ZS5wYXJlbnQmJlwiZGVjbGFyZWRDbGFzc1wiaW4gZS5wYXJlbnQmJlwiZXNyaS5CYXNlbWFwXCI9PT1lLnBhcmVudC5kZWNsYXJlZENsYXNzJiZlLnBhcmVudC5iYXNlTGF5ZXJzLmluY2x1ZGVzKGUpfWZ1bmN0aW9uIHAoZSl7cmV0dXJuXCJmZWF0dXJlXCI9PT1lPy50eXBlJiYhZS51cmwmJlwibWVtb3J5XCI9PT1lLnNvdXJjZT8udHlwZX1mdW5jdGlvbiBnKGUpe3JldHVybihcImZlYXR1cmVcIj09PWU/LnR5cGV8fFwic3VidHlwZS1ncm91cFwiPT09ZT8udHlwZSkmJlwiZmVhdHVyZS1sYXllclwiPT09ZS5zb3VyY2U/LnR5cGV9ZnVuY3Rpb24gZChlKXtyZXR1cm5cImZlYXR1cmVcIj09PWU/LnR5cGUmJlwiZmVhdHVyZS1sYXllclwiPT09ZS5zb3VyY2U/LnR5cGV9ZnVuY3Rpb24gYihlKXtjb25zdCB0PS9bOjtdLyxuPVtdO2xldCByPSExO2lmKGUmJihlLmZvckVhY2goKChlLGkpPT57bi5wdXNoKFtpLGVdKSwhciYmdC50ZXN0KGUpJiYocj0hMCl9KSksbi5sZW5ndGg+MCkpe2xldCBlO2lmKHIpe2NvbnN0IHQ9e307bi5mb3JFYWNoKChlPT57dFtlWzBdXT1lWzFdfSkpLGU9SlNPTi5zdHJpbmdpZnkodCl9ZWxzZXtjb25zdCB0PVtdO24uZm9yRWFjaCgoZT0+e3QucHVzaChlWzBdK1wiOlwiK2VbMV0pfSkpLGU9dC5qb2luKFwiO1wiKX1yZXR1cm4gZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBtKGUpe2lmKCFlKXJldHVybjtjb25zdCB0PVtdO3JldHVybiBlLmZvckVhY2goKChlLG4pPT57dC5wdXNoKCdcIicrbisnXCI6JytKU09OLnN0cmluZ2lmeShlKSl9KSksdC5sZW5ndGg/XCJ7XCIrdC5qb2luKFwiLFwiKStcIn1cIjp2b2lkIDB9ZnVuY3Rpb24gdihlKXtpZihlLmFjdGl2ZUxheWVyKXtjb25zdCB0PWUuYWN0aXZlTGF5ZXIudGlsZU1hdHJpeFNldDtpZih0KXJldHVybiB0O2NvbnN0IG49ZS5hY3RpdmVMYXllci50aWxlTWF0cml4U2V0cztpZihuKXJldHVybiBufXJldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uIGgobixyKXtjb25zdCBpPWU/LmZpbmRTZXJ2ZXJJbmZvKG4pO2lmKG51bGwhPWk/LmN1cnJlbnRWZXJzaW9uKXJldHVybiBpLm93bmluZ1N5c3RlbVVybHx8bnVsbDtjb25zdCB1PW4udG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiL3Jlc3Qvc2VydmljZXNcIik7aWYoLTE9PT11KXJldHVybiBudWxsO2NvbnN0IHM9YCR7bi5zdWJzdHJpbmcoMCx1KX0vcmVzdC9pbmZvYCxhPW51bGwhPXI/ci5zaWduYWw6bnVsbCx7ZGF0YTpjfT1hd2FpdCB0KHMse3F1ZXJ5OntmOlwianNvblwifSxyZXNwb25zZVR5cGU6XCJqc29uXCIsc2lnbmFsOmF9KTtyZXR1cm4gYz8ub3duaW5nU3lzdGVtVXJsfHxudWxsfWZ1bmN0aW9uIHcoZSl7aWYoIShcImNhcGFiaWxpdGllc1wiaW4gZSkpcmV0dXJuITE7c3dpdGNoKGUudHlwZSl7Y2FzZVwiY3N2XCI6Y2FzZVwiZmVhdHVyZVwiOmNhc2VcImdlb2pzb25cIjpjYXNlXCJpbWFnZXJ5XCI6Y2FzZVwia25vd2xlZGdlLWdyYXBoLXN1YmxheWVyXCI6Y2FzZVwib2djLWZlYXR1cmVcIjpjYXNlXCJvcmllbnRlZC1pbWFnZXJ5XCI6Y2FzZVwic2NlbmVcIjpjYXNlXCJzdWJ0eXBlLWdyb3VwXCI6Y2FzZVwic3VidHlwZS1zdWJsYXllclwiOmNhc2VcIndmc1wiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIGooZSl7cmV0dXJuIG51bGwhPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImlzVGFibGVcImluIGUmJiEhZS5pc1RhYmxlfWZ1bmN0aW9uIEUoZSl7cmV0dXJuIHcoZSk/XCJlZmZlY3RpdmVDYXBhYmlsaXRpZXNcImluIGU/ZS5lZmZlY3RpdmVDYXBhYmlsaXRpZXM6ZS5jYXBhYmlsaXRpZXM6bnVsbH1mdW5jdGlvbiBMKGUpe2lmKCEoXCJlZGl0aW5nRW5hYmxlZFwiaW4gZSkpcmV0dXJuITE7c3dpdGNoKGUudHlwZSl7Y2FzZVwiY3N2XCI6Y2FzZVwiZmVhdHVyZVwiOmNhc2VcImdlb2pzb25cIjpjYXNlXCJvcmllbnRlZC1pbWFnZXJ5XCI6Y2FzZVwic2NlbmVcIjpjYXNlXCJzdWJ0eXBlLWdyb3VwXCI6Y2FzZVwic3VidHlwZS1zdWJsYXllclwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIFMoZSl7cmV0dXJuISFMKGUpJiYoXCJlZmZlY3RpdmVFZGl0aW5nRW5hYmxlZFwiaW4gZT9lLmVmZmVjdGl2ZUVkaXRpbmdFbmFibGVkOmUuZWRpdGluZ0VuYWJsZWQpfWV4cG9ydHtTIGFzIGdldEVmZmVjdGl2ZUVkaXRpbmdFbmFibGVkLEUgYXMgZ2V0RWZmZWN0aXZlTGF5ZXJDYXBhYmlsaXRpZXMsaCBhcyBnZXRPd25pbmdQb3J0YWxVcmwsdiBhcyBnZXRUaWxlTWF4dHJpeFNldEZyb21BY3RpdmVMYXllcix5IGFzIGlzQmFzZUxheWVyLG4gYXMgaXNCYXNlbWFwM0RTdXBwb3J0ZWRMYXllcix1IGFzIGlzQmFzZW1hcFN1cHBvcnRlZFRpbGVkTGF5ZXIscCBhcyBpc0ZlYXR1cmVDb2xsZWN0aW9uTGF5ZXIsciBhcyBpc0ZlYXR1cmVMYXllcixkIGFzIGlzRmVhdHVyZVNlcnZpY2VMYXllcixhIGFzIGlzR3JvdXBMYXllcixmIGFzIGlzSW1hZ2VyeVRpbGVMYXllcixnIGFzIGlzTGF5ZXJXaXRoRmVhdHVyZUxheWVyU291cmNlLGkgYXMgaXNTY2VuZUxheWVyLG8gYXMgaXNTY2VuZVNlcnZpY2VMYXllcixqIGFzIGlzVGFibGUscyBhcyBpc1RpbGVkTGF5ZXIsbCBhcyBpc1ZveGVsTGF5ZXIsYyBhcyBzY2VuZVNlcnZpY2VMYXllclR5cGVUb0NsYXNzTmFtZSxiIGFzIHNlcmlhbGl6ZUxheWVyRGVmaW5pdGlvbnMsbSBhcyBzZXJpYWxpemVUaW1lT3B0aW9uc307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=