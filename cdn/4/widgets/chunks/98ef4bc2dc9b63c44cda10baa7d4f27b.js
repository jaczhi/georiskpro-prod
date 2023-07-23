"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6361],{66361:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>c});var t=r(70375),n=r(39154),l=r(20692),s=r(8308),i=r(54957),o=r(92557),y=r(40371);const u={FeatureLayer:!0,SceneLayer:!0};async function c(e){const a=e.properties?.customParameters,c=await async function(e,a){let r=(0,l.Qc)(e);if(null==r&&(r=await async function(e,a){const r=await(0,y.T)(e,{customParameters:a});let t=null,s=null;const i=r.type;if("Feature Layer"===i||"Table"===i?(t="FeatureServer",s=r.id??null):"indexedVector"===i?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":f(r)?(t="SceneServer",s=r.id):r.hasOwnProperty("layers")&&f(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=s?(0,l.DR)(e):null;return{title:null!=o&&r.name||(0,n.vt)(e),serverType:t,sublayer:s,url:{path:null!=o?o.serviceUrl:(0,n.mN)(e).path}}}(e,a)),null==r)throw new t.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:c,sublayer:d}=r;let b;const m={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(c){case"MapServer":b=null!=d?"FeatureLayer":await async function(e,a){return(await(0,y.T)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,y.T)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;b=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,y.T)(r.url.path,{customParameters:a});if(b="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)b="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=i.fb[e]&&(b=i.fb[e])}}break}default:b=m[c]}const w="FeatureServer"===c,h={parsedUrl:r,Constructor:null,layerOrTableId:w?d:void 0,sublayerIds:null,tableIds:null};if(u[b]&&null==d){const r=await async function(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await(0,s.V)(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await(0,y.T)(e,{customParameters:r});const l=t?.layers,i=t?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:i?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?i:[]}}(e,c,a);w&&(h.sublayerInfos=r.layerInfos,h.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(h.sublayerIds=r.layerIds,h.tableIds=r.tableIds):w&&(h.layerOrTableId=r.layerIds[0]??r.tableIds[0],h.sourceJSON=r.layerInfos?.[0]??r.tableInfos?.[0])}return h.Constructor=await async function(e){return(0,o.T[e])()}(b),h}(e.url,a),b={...e.properties,url:e.url};if(!c.sublayerIds)return null!=c.layerOrTableId&&(b.layerId=c.layerOrTableId,b.sourceJSON=c.sourceJSON),new c.Constructor(b);const m=new(0,(await Promise.all([r.e(3536),r.e(4710)]).then(r.bind(r,82481))).default)({title:c.parsedUrl.title});return function(e,a,r){function t(e,t){const n={...r,layerId:e,sublayerTitleMode:"service-name"};return null!=t&&(n.sourceJSON=t),new a.Constructor(n)}a.sublayerIds.forEach((r=>{const n=t(r,d(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,d(a.tableInfos,r));e.tables.add(n)}))}(m,c,b),m}function d(e,a){return e?e.find((e=>e.id===a)):null}function f(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}},8308:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(40371);async function n(e,a){const r=await(0,t.T)(e,a);r.layers=r.layers.filter(l);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const s=await(0,t.T)(e+"/layers",a);return n.layersJSON={layers:s.layers.filter(l),tables:s.tables},n}function l(e){return!e.type||"Feature Layer"===e.type}},92557:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(3536),r.e(6217)]).then(r.bind(r,31968))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(6985),r.e(4785),r.e(2926),r.e(4515),r.e(3183),r.e(6316),r.e(9871)]).then(r.bind(r,59871))).default,CSVLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(6985),r.e(4785),r.e(2926),r.e(994)]).then(r.bind(r,89849))).default,DimensionLayer:async()=>(await Promise.all([r.e(2080),r.e(442)]).then(r.bind(r,10442))).default,ElevationLayer:async()=>(await Promise.all([r.e(7109),r.e(7925),r.e(99)]).then(r.bind(r,90451))).default,FeatureLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(6985),r.e(4785),r.e(2926),r.e(7470)]).then(r.bind(r,12926))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(6985),r.e(3832)]).then(r.bind(r,81655))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(3536),r.e(169)]).then(r.bind(r,84417))).default,GroupLayer:async()=>(await Promise.all([r.e(3536),r.e(4710)]).then(r.bind(r,82481))).default,ImageryLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(8500),r.e(4733),r.e(8970),r.e(5347)]).then(r.bind(r,86776))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(4733),r.e(8970),r.e(494),r.e(1226)]).then(r.bind(r,10449))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(3183),r.e(4639)]).then(r.bind(r,96479))).default,KMLLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(2506),r.e(2868)]).then(r.bind(r,60711))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(2080),r.e(4277)]).then(r.bind(r,64277))).default,LinkChartLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(3362),r.e(9703),r.e(148)]).then(r.bind(r,89240))).default,MapImageLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(905),r.e(2506),r.e(4533),r.e(6985),r.e(8500),r.e(4269),r.e(8645),r.e(8806)]).then(r.bind(r,88806))).default,MapNotesLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(6985),r.e(4785),r.e(2926),r.e(1175)]).then(r.bind(r,29581))).default,MediaLayer:async()=>(await Promise.all([r.e(3536),r.e(2579)]).then(r.bind(r,15882))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(6985),r.e(7495),r.e(1814)]).then(r.bind(r,53963))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(3536),r.e(8661),r.e(3206)]).then(r.bind(r,33206))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(6985),r.e(4785),r.e(2926),r.e(3976)]).then(r.bind(r,93414))).default,PointCloudLayer:async()=>(await r.e(3108).then(r.bind(r,73108))).default,RouteLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(2506),r.e(3189)]).then(r.bind(r,57731))).default,SceneLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(6985),r.e(4785),r.e(2926),r.e(4515),r.e(3183),r.e(6316),r.e(4606)]).then(r.bind(r,74606))).default,StreamLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(8861)]).then(r.bind(r,75609))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(905),r.e(2506),r.e(4533),r.e(4785),r.e(1207),r.e(5017)]).then(r.bind(r,27764))).default,TileLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(905),r.e(2506),r.e(4533),r.e(6985),r.e(8500),r.e(4269),r.e(7925),r.e(8645),r.e(5369)]).then(r.bind(r,75369))).default,UnknownLayer:async()=>(await r.e(81).then(r.bind(r,40081))).default,UnsupportedLayer:async()=>(await r.e(4864).then(r.bind(r,74864))).default,VectorTileLayer:async()=>(await Promise.all([r.e(3536),r.e(7925),r.e(2616),r.e(3043),r.e(9251)]).then(r.bind(r,45520))).default,VoxelLayer:async()=>(await r.e(5519).then(r.bind(r,85519))).default,WFSLayer:async()=>(await Promise.all([r.e(3536),r.e(4497),r.e(7109),r.e(905),r.e(2506),r.e(4533),r.e(5094),r.e(8662),r.e(7956)]).then(r.bind(r,84420))).default,WMSLayer:async()=>(await Promise.all([r.e(3536),r.e(49)]).then(r.bind(r,30049))).default,WMTSLayer:async()=>(await Promise.all([r.e(3536),r.e(8661),r.e(9862)]).then(r.bind(r,69862))).default,WebTileLayer:async()=>(await Promise.all([r.e(3536),r.e(8661)]).then(r.bind(r,89859))).default}},40371:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(66341);async function n(e,a){const{data:r}=await(0,t.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);