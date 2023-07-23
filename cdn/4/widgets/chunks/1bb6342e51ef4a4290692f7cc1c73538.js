"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8806,9593],{74589:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(36663),r=a(41151),n=a(82064),s=a(807),o=a(81977),l=(a(7283),a(7753),a(39994),a(79438)),d=a(40266),m=a(80680);let u=class extends((0,r.J)(n.wq)){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return(0,s.rJ)(this.value,this.unit,"milliseconds")}};(0,i._)([(0,l.J)(m.v,{nonNullable:!0})],u.prototype,"unit",void 0),(0,i._)([(0,o.Cb)({type:Number,json:{write:!0},nonNullable:!0})],u.prototype,"value",void 0),u=(0,i._)([(0,d.j)("esri.TimeInterval")],u);const c=u},68577:(e,t,a)=>{a.d(t,{yZ:()=>n});var i=a(17321);const r=96;function n(e,t){const a=t||e.extent,n=e.width,s=(0,i.c9)(a&&a.spatialReference);return a&&n?a.width/n*s*i.hd*r:0}},88806:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var i=a(36663),r=a(66341),n=a(37956),s=a(70375),o=a(53280),l=a(63592),d=a(15842),m=a(33926),u=a(81977),c=a(7283),p=(a(7753),a(39994),a(34248)),y=a(40266),T=a(39835),h=a(65943),f=a(91772),S=a(68577),A=a(38481),b=a(91223),g=a(81432),v=a(87232),C=a(27668),E=a(63989),_=a(43330),w=a(18241),x=a(12478),M=a(95874),I=a(80002),U=a(2030),k=a(51599),N=a(74396),P=a(84684);function Z(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?function(e,t){if(!e?.length)return null;const a=e.filter((e=>""!==e)).map((e=>`'${e}'`));return a.push("''"),`${t} IN (${a.join(",")}) OR ${t} IS NULL`}(e,t.floorInfo.floorField):null}var O=a(93698);const G={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let L=class extends((0,o.p)(N.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=Z(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,O.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(G[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const a=Z(this.floors,t),i=(0,P._)(a,t.definitionExpression);return null!=i&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,a=t=>{const i=this.scale,r=0===i,n=0===t.minScale||i<=t.minScale,s=0===t.maxScale||i>=t.maxScale;t.visible&&(r||n&&s)&&(t.sublayers?t.sublayers.forEach(a):e.unshift(t))};t&&t.forEach(a);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,a)=>e[a]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,u.Cb)({readOnly:!0})],L.prototype,"dynamicLayers",null),(0,i._)([(0,u.Cb)()],L.prototype,"floors",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],L.prototype,"hasDynamicLayers",null),(0,i._)([(0,u.Cb)()],L.prototype,"layer",null),(0,i._)([(0,u.Cb)({readOnly:!0})],L.prototype,"layers",null),(0,i._)([(0,u.Cb)({readOnly:!0})],L.prototype,"layerDefs",null),(0,i._)([(0,u.Cb)({type:Number})],L.prototype,"scale",void 0),(0,i._)([(0,u.Cb)(k.qG)],L.prototype,"timeExtent",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],L.prototype,"version",null),(0,i._)([(0,u.Cb)({readOnly:!0})],L.prototype,"visibleSublayers",null),L=(0,i._)([(0,y.j)("esri.layers.mixins.ExportImageParameters")],L);var D=a(4452),j=a(23875),F=a(76912),R=a(9593);let J=class extends((0,C.h)((0,U.n)((0,M.M)((0,I.x)((0,g.O)((0,v.Y)((0,_.q)((0,w.I)((0,d.R)((0,x.Q)((0,b.V)((0,E.N)((0,o.p)(A.Z)))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(m.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const a=t.supportedImageFormatTypes;return a&&a.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,a,i){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap?.supportsDynamicLayers){const e=(0,h.M9)(i.origin);if(e===h.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;n=(0,O.QV)(r,e,h.s3.SERVICE)}else if(e>h.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");n=(0,O.QV)(r,e.sublayers,(0,h.M9)(e.origin))}}const s=[],o={writeSublayerStructure:n,...i};let l=n;r.forEach((e=>{const t=e.write({},o);s.push(t),l=l||"user"===e.originOf("visible")})),s.some((e=>Object.keys(e).length>1))&&(t.layers=s),l&&(t.visibleLayers=r.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,a,i){const r=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const n=new L({layer:this,floors:i?.floors,scale:(0,S.yZ)({extent:e,width:t})*r}),s=n.toJSON();n.destroy();const o=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e&&e.spatialReference,d=l.wkid||JSON.stringify(l.toJSON());s.dpi*=r;const m={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();m.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(m.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:t+","+a,...s,...o,...m}}async fetchImage(e,t,a,i){const{data:r}=await this._fetchImage("image",e,t,a,i);return r}async fetchImageBitmap(e,t,a,i){const{data:r,url:n}=await this._fetchImage("blob",e,t,a,i);return(0,D.g)(r,n,i?.signal)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:a}=await(0,r.default)(this.url,t),{extent:i,fullExtent:s,timeExtent:o}=a,l=i||s;return{fullExtent:l&&f.Z.fromJSON(l),timeExtent:o&&n.Z.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,l.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,F.D)(this,e)}async _fetchImage(e,t,a,i,n){const o={responseType:e,signal:n?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,a,i,n),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=o.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new s.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:o.query});try{const{data:e}=await(0,r.default)(l,o);return{data:e,url:l}}catch(e){if((0,m.D_)(e))throw e;throw new s.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:a}=await(0,r.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});a&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,u.Cb)({type:R.Z})],J.prototype,"dateFieldsTimeReference",void 0),(0,i._)([(0,u.Cb)({type:Boolean})],J.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,u.Cb)()],J.prototype,"dpi",void 0),(0,i._)([(0,u.Cb)()],J.prototype,"gdbVersion",void 0),(0,i._)([(0,u.Cb)()],J.prototype,"imageFormat",void 0),(0,i._)([(0,p.r)("imageFormat",["supportedImageFormatTypes"])],J.prototype,"readImageFormat",null),(0,i._)([(0,u.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],J.prototype,"imageMaxHeight",void 0),(0,i._)([(0,u.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],J.prototype,"imageMaxWidth",void 0),(0,i._)([(0,u.Cb)()],J.prototype,"imageTransparency",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,i._)([(0,u.Cb)({json:{read:!1,write:!1}})],J.prototype,"labelsVisible",void 0),(0,i._)([(0,u.Cb)({type:["ArcGISMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.Cb)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,i._)([(0,u.Cb)({type:R.Z})],J.prototype,"preferredTimeReference",void 0),(0,i._)([(0,u.Cb)()],J.prototype,"sourceJSON",void 0),(0,i._)([(0,u.Cb)({json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),(0,i._)([(0,T.c)("sublayers",{layers:{type:[j.Z]},visibleLayers:{type:[c.z8]}})],J.prototype,"writeSublayers",null),(0,i._)([(0,u.Cb)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],J.prototype,"type",void 0),(0,i._)([(0,u.Cb)(k.HQ)],J.prototype,"url",void 0),J=(0,i._)([(0,y.j)("esri.layers.MapImageLayer")],J);const B=J},87232:(e,t,a)=>{a.d(t,{Y:()=>l});var i=a(36663),r=a(13802),n=a(81977),s=(a(7283),a(7753),a(39994),a(40266)),o=a(20692);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,o.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,o.Nm)(e,r.Z.getLogger(this)))}};return(0,i._)([(0,n.Cb)()],t.prototype,"title",null),(0,i._)([(0,n.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,s.j)("esri.layers.mixins.ArcGISService")],t),t}},2030:(e,t,a)=>{a.d(t,{n:()=>c});var i=a(36663),r=a(37956),n=a(74589),s=a(81977),o=(a(7283),a(7753),a(39994),a(34248)),l=a(40266),d=a(17095),m=a(23756),u=a(80680);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const a=t.timeInfo.exportOptions;if(!a)return null;const i=a.timeOffset,r=u.v.fromJSON(a.timeOffsetUnits);return i&&r?new n.Z({value:i,unit:r}):null}set timeInfo(e){(0,d.UF)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,i._)([(0,s.Cb)({type:r.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,i._)([(0,s.Cb)({type:n.Z})],t.prototype,"timeOffset",void 0),(0,i._)([(0,o.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,i._)([(0,s.Cb)({value:null,type:m.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,i._)([(0,s.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,i._)([(0,l.j)("esri.layers.mixins.TemporalLayer")],t),t}},23756:(e,t,a)=>{a.d(t,{Z:()=>T});var i=a(36663),r=a(37956),n=a(74589),s=a(41151),o=a(82064),l=a(81977),d=(a(7283),a(7753),a(39994),a(34248)),m=a(40266),u=a(39835),c=a(9593);function p(e,t){return n.Z.fromJSON({value:e,unit:t})}let y=class extends((0,s.J)(o.wq)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const a=new Date(t.timeExtent[0]),i=new Date(t.timeExtent[1]);return new r.Z({start:a,end:i})}writeFullTimeExtent(e,t){e&&null!=e.start&&null!=e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?p(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?p(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){t.timeInterval=e?.toJSON().value??null,t.timeIntervalUnits=e?.toJSON().unit??null}};(0,i._)([(0,l.Cb)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],y.prototype,"cumulative",void 0),(0,i._)([(0,l.Cb)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],y.prototype,"endField",void 0),(0,i._)([(0,l.Cb)({type:r.Z,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"fullTimeExtent",void 0),(0,i._)([(0,d.r)("fullTimeExtent",["timeExtent"])],y.prototype,"readFullTimeExtent",null),(0,i._)([(0,u.c)("fullTimeExtent")],y.prototype,"writeFullTimeExtent",null),(0,i._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"hasLiveData",void 0),(0,i._)([(0,l.Cb)({type:n.Z,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"interval",void 0),(0,i._)([(0,d.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],y.prototype,"readInterval",null),(0,i._)([(0,u.c)("interval")],y.prototype,"writeInterval",null),(0,i._)([(0,l.Cb)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],y.prototype,"startField",void 0),(0,i._)([(0,l.Cb)({type:c.Z,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"timeReference",void 0),(0,i._)([(0,l.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"trackIdField",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],y.prototype,"useTime",void 0),y=(0,i._)([(0,m.j)("esri.layers.support.TimeInfo")],y);const T=y},76912:(e,t,a)=>{a.d(t,{D:()=>n});var i=a(20692);const r=[];function n(e,t){if((0,i.M8)(e.url??""))return!0;const{wkid:a}=t;for(const t of r){if((e.version??0)>=t[0])return!0;if("function"==typeof t[1]&&(t[1]=t[1]()),t[1].has(a))return!1}return!0}r.push([10.91,()=>{const e=new Set([9709,9716,9741,9761,9766]);for(let t=9712;t<=9713;t++)e.add(t);for(let t=9748;t<=9749;t++)e.add(t);for(let t=20904;t<=20932;t++)e.add(t);for(let t=21004;t<=21032;t++)e.add(t);for(let t=21207;t<=21264;t++)e.add(t);for(let t=21307;t<=21364;t++)e.add(t);for(let t=102759;t<=102760;t++)e.add(t);for(let t=102901;t<=102955;t++)e.add(t);return e}]),r.push([10.9,()=>{const e=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let t=9356;t<=9360;t++)e.add(t);for(let t=9404;t<=9407;t++)e.add(t);for(let t=9476;t<=9482;t++)e.add(t);for(let t=9487;t<=9494;t++)e.add(t);for(let t=9697;t<=9699;t++)e.add(t);return e}]),r.push([10.81,()=>{const e=new Set([9265,9333,103598,103699]);for(let t=9248;t<=9254;t++)e.add(t);for(let t=9271;t<=9273;t++)e.add(t);for(let t=9284;t<=9285;t++)e.add(t);for(let t=21453;t<=21463;t++)e.add(t);return e}]),r.push([10.8,()=>{const e=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let t=8035;t<=8036;t++)e.add(t);for(let t=8455;t<=8456;t++)e.add(t);for(let t=8518;t<=8529;t++)e.add(t);for(let t=8533;t<=8536;t++)e.add(t);for(let t=8538;t<=8540;t++)e.add(t);for(let t=8677;t<=8679;t++)e.add(t);for(let t=8902;t<=8903;t++)e.add(t);for(let t=8907;t<=8910;t++)e.add(t);for(let t=8949;t<=8951;t++)e.add(t);for(let t=8972;t<=8987;t++)e.add(t);for(let t=9039;t<=9040;t++)e.add(t);for(let t=9068;t<=9069;t++)e.add(t);for(let t=9140;t<=9141;t++)e.add(t);for(let t=9148;t<=9150;t++)e.add(t);for(let t=9153;t<=9159;t++)e.add(t);for(let t=9205;t<=9218;t++)e.add(t);for(let t=9221;t<=9222;t++)e.add(t);for(let t=54098;t<=54101;t++)e.add(t);return e}]),r.push([10.71,()=>{const e=new Set([6316]);for(let t=8351;t<=8353;t++)e.add(t);for(let t=9294;t<=9297;t++)e.add(t);for(let t=22619;t<=22621;t++)e.add(t);for(let t=103586;t<=103594;t++)e.add(t);return e}]),r.push([10.7,()=>{const e=new Set([8387,8391,8427,8545,8682,8685,8818,31370,104022,104024,104975]);for(let t=8065;t<=8068;t++)e.add(t);for(let t=8082;t<=8083;t++)e.add(t);for(let t=8379;t<=8385;t++)e.add(t);for(let t=8836;t<=8840;t++)e.add(t);for(let t=8857;t<=8860;t++)e.add(t);for(let t=53035;t<=53037;t++)e.add(t);for(let t=54090;t<=54091;t++)e.add(t);for(let t=102498;t<=102499;t++)e.add(t);return e}]),r.push([10.61,()=>new Set([102497])]),r.push([10.6,()=>{const e=new Set([7803,7805,7887,8086,8232,8237,8240,8246,8249,8252,8255,9019,9391]);for(let t=7755;t<=7787;t++)e.add(t);for(let t=7791;t<=7795;t++)e.add(t);for(let t=7799;t<=7801;t++)e.add(t);for(let t=7825;t<=7831;t++)e.add(t);for(let t=7877;t<=7878;t++)e.add(t);for(let t=7882;t<=7883;t++)e.add(t);for(let t=7991;t<=7992;t++)e.add(t);for(let t=8042;t<=8043;t++)e.add(t);for(let t=8058;t<=8059;t++)e.add(t);for(let t=8311;t<=8348;t++)e.add(t);for(let t=9060;t<=9067;t++)e.add(t);for(let t=102562;t<=102568;t++)e.add(t);for(let t=102799;t<=102900;t++)e.add(t);return e}]),r.push([10.51,()=>{const e=new Set([7683,7881,7886,7899,8888,9e3]);for(let t=8013;t<=8032;t++)e.add(t);for(let t=9053;t<=9057;t++)e.add(t);for(let t=104017;t<=104018;t++)e.add(t);for(let t=104971;t<=104974;t++)e.add(t);return e}]),r.push([10.5,()=>{const e=new Set([6962,7035,7037,7039,7041,7084,7086,7133,7798,102399]);for(let t=4087;t<=4088;t++)e.add(t);for(let t=5896;t<=5899;t++)e.add(t);for(let t=7005;t<=7007;t++)e.add(t);for(let t=7057;t<=7070;t++)e.add(t);for(let t=7073;t<=7082;t++)e.add(t);for(let t=7109;t<=7128;t++)e.add(t);for(let t=7844;t<=7859;t++)e.add(t);return e}])},80680:(e,t,a)=>{a.d(t,{v:()=>i});const i=(0,a(25709).w)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})},9593:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(36663),r=a(41151),n=a(82064),s=a(81977),o=(a(7283),a(7753),a(39994),a(34248)),l=a(40266),d=a(39835),m=a(25302);let u=class extends((0,r.J)(n.wq)){constructor(e){super(e),this.legacy=null,this.timeZone="system"}readLegacy(e,t){const{timeZone:a,respectsDaylightSaving:i}=t;return{timeZone:a,respectsDaylightSaving:i}}readTimeZone(e,t){return"timeZoneIANA"in t?t.timeZoneIANA:(0,m.G)(t)}writeTimeZone(e,t){t.timeZoneIANA=e}equals(e){return null!=e&&null!=this.timeZone&&null!=e.timeZone&&this.timeZone===e.timeZone}};(0,i._)([(0,s.Cb)()],u.prototype,"legacy",void 0),(0,i._)([(0,o.r)("legacy",["timeZone"])],u.prototype,"readLegacy",null),(0,i._)([(0,s.Cb)({type:String,nonNullable:!0})],u.prototype,"timeZone",void 0),(0,i._)([(0,o.r)("timeZone",["timeZone","timeZoneIANA","respectsDaylightSaving"])],u.prototype,"readTimeZone",null),(0,i._)([(0,d.c)("timeZone")],u.prototype,"writeTimeZone",null),u=(0,i._)([(0,l.j)("esri.time.TimeReference")],u);const c=u},25302:(e,t,a)=>{a.d(t,{G:()=>n});const i=new Map([["AUS Central Standard Time","Australia/Darwin"],["AUS Eastern Standard Time","Australia/Sydney"],["Afghanistan Standard Time","Asia/Kabul"],["Alaskan Standard Time","America/Anchorage"],["Aleutian Standard Time","America/Adak"],["Altai Standard Time","Asia/Barnaul"],["Arab Standard Time","Asia/Riyadh"],["Arabian Standard Time","Asia/Dubai"],["Arabic Standard Time","Asia/Baghdad"],["Argentina Standard Time","America/Buenos_Aires"],["Astrakhan Standard Time","Europe/Astrakhan"],["Atlantic Standard Time","America/Halifax"],["Aus Central W. Standard Time","Australia/Eucla"],["Azerbaijan Standard Time","Asia/Baku"],["Azores Standard Time","Atlantic/Azores"],["Bahia Standard Time","America/Bahia"],["Bangladesh Standard Time","Asia/Dhaka"],["Belarus Standard Time","Europe/Minsk"],["Bougainville Standard Time","Pacific/Bougainville"],["Canada Central Standard Time","America/Regina"],["Cape Verde Standard Time","Atlantic/Cape_Verde"],["Caucasus Standard Time","Asia/Yerevan"],["Cen. Australia Standard Time","Australia/Adelaide"],["Central America Standard Time","America/Guatemala"],["Central Asia Standard Time","Asia/Almaty"],["Central Brazilian Standard Time","America/Cuiaba"],["Central Europe Standard Time","Europe/Budapest"],["Central European Standard Time","Europe/Warsaw"],["Central Pacific Standard Time","Pacific/Guadalcanal"],["Central Standard Time","America/Chicago"],["Central Standard Time (Mexico)","America/Mexico_City"],["Chatham Islands Standard Time","Pacific/Chatham"],["China Standard Time","Asia/Shanghai"],["Cuba Standard Time","America/Havana"],["Dateline Standard Time","Etc/GMT+12"],["E. Africa Standard Time","Africa/Nairobi"],["E. Australia Standard Time","Australia/Brisbane"],["E. Europe Standard Time","Europe/Chisinau"],["E. South America Standard Time","America/Sao_Paulo"],["Easter Island Standard Time","Pacific/Easter"],["Eastern Standard Time","America/New_York"],["Eastern Standard Time (Mexico)","America/Cancun"],["Egypt Standard Time","Africa/Cairo"],["Ekaterinburg Standard Time","Asia/Yekaterinburg"],["FLE Standard Time","Europe/Kiev"],["Fiji Standard Time","Pacific/Fiji"],["GMT Standard Time","Europe/London"],["GTB Standard Time","Europe/Bucharest"],["Georgian Standard Time","Asia/Tbilisi"],["Greenland Standard Time","America/Godthab"],["Greenwich Standard Time","Atlantic/Reykjavik"],["Haiti Standard Time","America/Port-au-Prince"],["Hawaiian Standard Time","Pacific/Honolulu"],["India Standard Time","Asia/Calcutta"],["Iran Standard Time","Asia/Tehran"],["Israel Standard Time","Asia/Jerusalem"],["Jordan Standard Time","Asia/Amman"],["Kaliningrad Standard Time","Europe/Kaliningrad"],["Korea Standard Time","Asia/Seoul"],["Libya Standard Time","Africa/Tripoli"],["Line Islands Standard Time","Pacific/Kiritimati"],["Lord Howe Standard Time","Australia/Lord_Howe"],["Magadan Standard Time","Asia/Magadan"],["Magallanes Standard Time","America/Punta_Arenas"],["Marquesas Standard Time","Pacific/Marquesas"],["Mauritius Standard Time","Indian/Mauritius"],["Middle East Standard Time","Asia/Beirut"],["Montevideo Standard Time","America/Montevideo"],["Morocco Standard Time","Africa/Casablanca"],["Mountain Standard Time","America/Denver"],["Mountain Standard Time (Mexico)","America/Mazatlan"],["Myanmar Standard Time","Asia/Rangoon"],["N. Central Asia Standard Time","Asia/Novosibirsk"],["Namibia Standard Time","Africa/Windhoek"],["Nepal Standard Time","Asia/Katmandu"],["New Zealand Standard Time","Pacific/Auckland"],["Newfoundland Standard Time","America/St_Johns"],["Norfolk Standard Time","Pacific/Norfolk"],["North Asia East Standard Time","Asia/Irkutsk"],["North Asia Standard Time","Asia/Krasnoyarsk"],["North Korea Standard Time","Asia/Pyongyang"],["Omsk Standard Time","Asia/Omsk"],["Pacific SA Standard Time","America/Santiago"],["Pacific Standard Time","America/Los_Angeles"],["Pacific Standard Time (Mexico)","America/Tijuana"],["Pakistan Standard Time","Asia/Karachi"],["Paraguay Standard Time","America/Asuncion"],["Qyzylorda Standard Time","Asia/Qyzylorda"],["Romance Standard Time","Europe/Paris"],["Russia Time Zone 10","Asia/Srednekolymsk"],["Russia Time Zone 11","Asia/Kamchatka"],["Russia Time Zone 3","Europe/Samara"],["Russian Standard Time","Europe/Moscow"],["SA Eastern Standard Time","America/Cayenne"],["SA Pacific Standard Time","America/Bogota"],["SA Western Standard Time","America/La_Paz"],["SE Asia Standard Time","Asia/Bangkok"],["Saint Pierre Standard Time","America/Miquelon"],["Sakhalin Standard Time","Asia/Sakhalin"],["Samoa Standard Time","Pacific/Apia"],["Sao Tome Standard Time","Africa/Sao_Tome"],["Saratov Standard Time","Europe/Saratov"],["Singapore Standard Time","Asia/Singapore"],["South Africa Standard Time","Africa/Johannesburg"],["South Sudan Standard Time","Africa/Juba"],["Sri Lanka Standard Time","Asia/Colombo"],["Sudan Standard Time","Africa/Khartoum"],["Syria Standard Time","Asia/Damascus"],["Taipei Standard Time","Asia/Taipei"],["Tasmania Standard Time","Australia/Hobart"],["Tocantins Standard Time","America/Araguaina"],["Tokyo Standard Time","Asia/Tokyo"],["Tomsk Standard Time","Asia/Tomsk"],["Tonga Standard Time","Pacific/Tongatapu"],["Transbaikal Standard Time","Asia/Chita"],["Turkey Standard Time","Europe/Istanbul"],["Turks And Caicos Standard Time","America/Grand_Turk"],["US Eastern Standard Time","America/Indianapolis"],["US Mountain Standard Time","America/Phoenix"],["UTC","Etc/GMT"],["UTC+01","Etc/GMT-1"],["UTC+02","Etc/GMT-2"],["UTC+03","Etc/GMT-3"],["UTC+04","Etc/GMT-4"],["UTC+05","Etc/GMT-5"],["UTC+06","Etc/GMT-6"],["UTC+07","Etc/GMT-7"],["UTC+08","Etc/GMT-8"],["UTC+09","Etc/GMT-9"],["UTC+10","Etc/GMT-10"],["UTC+11","Etc/GMT-11"],["UTC+12","Etc/GMT-12"],["UTC+13","Etc/GMT-13"],["UTC+14","Etc/GMT-14"],["UTC-01","Etc/GMT+1"],["UTC-02","Etc/GMT+2"],["UTC-03","Etc/GMT+3"],["UTC-04","Etc/GMT+4"],["UTC-05","Etc/GMT+5"],["UTC-06","Etc/GMT+6"],["UTC-07","Etc/GMT+7"],["UTC-08","Etc/GMT+8"],["UTC-09","Etc/GMT+9"],["UTC-10","Etc/GMT+10"],["UTC-11","Etc/GMT+11"],["UTC-12","Etc/GMT+12"],["Ulaanbaatar Standard Time","Asia/Ulaanbaatar"],["Venezuela Standard Time","America/Caracas"],["Vladivostok Standard Time","Asia/Vladivostok"],["Volgograd Standard Time","Europe/Volgograd"],["W. Australia Standard Time","Australia/Perth"],["W. Central Africa Standard Time","Africa/Lagos"],["W. Europe Standard Time","Europe/Berlin"],["W. Mongolia Standard Time","Asia/Hovd"],["West Asia Standard Time","Asia/Tashkent"],["West Bank Standard Time","Asia/Hebron"],["West Pacific Standard Time","Pacific/Port_Moresby"],["Yakutsk Standard Time","Asia/Yakutsk"],["Yukon Standard Time","America/Whitehorse"]]);var r=a(17126);function n(e,t="system"){if(!e||!i.has(e.timeZone))return t;const a=i.get(e.timeZone);return e.timeZone.startsWith("UTC")||e.respectsDaylightSaving?a:function(e){const t=r.ou.local().setZone(e),a=Math.min(t.set({month:1,day:1}).offset,t.set({month:5}).offset);return 0===a?"Etc/UTC":`Etc/GMT${r.Qf.instance(-a).formatOffset(0,"narrow")}`}(a)}}}]);