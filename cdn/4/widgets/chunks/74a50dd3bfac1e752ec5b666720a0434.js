"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7925],{25015:(e,t,i)=>{var l;i.d(t,{Y:()=>l}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(l||(l={}))},89993:(e,t,i)=>{i.d(t,{Z:()=>p});var l=i(36663),s=(i(91957),i(81977)),o=(i(7283),i(7753),i(39994),i(34248)),r=i(40266),n=i(81590),a=i(88289),c=i(43550),h=i(14685);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){const l=t.capabilities?.includes("Tilemap");let{minLOD:s,maxLOD:o,minScale:r,maxScale:h}=t;if(null==s&&null==o&&0!==r&&0!==h){const e=e=>Math.round(1e4*e)/1e4;r=e(r||t.tileInfo.lods[0].scale),h=e(h||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);s=t>=r?i.level:s,o=t>=h?i.level:o}}if(l)return new c.y({layer:this,minLOD:s,maxLOD:o});if(t.tileInfo){const e=new n.Z;return e.read(t.tileInfo,i),new a.Z(e,s,o)}return null}};return(0,l._)([(0,s.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,s.Cb)()],t.prototype,"minScale",void 0),(0,l._)([(0,o.r)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,s.Cb)()],t.prototype,"maxScale",void 0),(0,l._)([(0,o.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,s.Cb)({type:h.Z})],t.prototype,"spatialReference",void 0),(0,l._)([(0,s.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,s.Cb)({type:n.Z})],t.prototype,"tileInfo",void 0),(0,l._)([(0,s.Cb)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,o.r)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,s.Cb)()],t.prototype,"version",void 0),t=(0,l._)([(0,r.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},87232:(e,t,i)=>{i.d(t,{Y:()=>a});var l=i(36663),s=i(13802),o=i(81977),r=(i(7283),i(7753),i(39994),i(40266)),n=i(20692);const a=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,n.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,n.Nm)(e,s.Z.getLogger(this)))}};return(0,l._)([(0,o.Cb)()],t.prototype,"title",null),(0,l._)([(0,o.Cb)({type:String})],t.prototype,"url",null),t=(0,l._)([(0,r.j)("esri.layers.mixins.ArcGISService")],t),t}},13054:(e,t,i)=>{i.d(t,{Z:()=>h});var l,s=i(36663),o=i(82064),r=i(81977),n=i(7283),a=(i(7753),i(39994),i(40266));let c=l=class extends o.wq{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new l({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,s._)([(0,r.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"cols",void 0),(0,s._)([(0,r.Cb)({type:n.z8,json:{write:!0}})],c.prototype,"level",void 0),(0,s._)([(0,r.Cb)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),(0,s._)([(0,r.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"origin",void 0),(0,s._)([(0,r.Cb)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),(0,s._)([(0,r.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"rows",void 0),(0,s._)([(0,r.Cb)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=l=(0,s._)([(0,a.j)("esri.layers.support.LOD")],c);const h=c},81590:(e,t,i)=>{i.d(t,{Z:()=>C});var l,s=i(36663),o=i(25709),r=i(82064),n=i(17321),a=i(81977),c=i(7283),h=(i(7753),i(39994),i(34248)),p=i(40266),u=i(39835),f=i(67666),d=i(14685),v=i(24568),m=i(35925),y=i(39536),w=i(13054),g=i(23758);const b=new o.X({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let _=l=class extends r.wq{static create(e={}){const{resolutionFactor:t=1,scales:i,size:s=256,spatialReference:o=d.Z.WebMercator,numLODs:r=24}=e;if(!(0,m.JY)(o)){const e=[];if(i)for(let t=0;t<i.length;t++){const l=i[t];e.push(new w.Z({level:t,scale:l,resolution:l}))}else{let t=5e-4;for(let i=r-1;i>=0;i--)e.unshift(new w.Z({level:i,scale:t,resolution:t})),t*=2}return new l({dpi:96,lods:e,origin:new f.Z(0,0,o),size:[s,s],spatialReference:o})}const a=(0,m.C5)(o),c=e.origin?new f.Z({x:e.origin.x,y:e.origin.y,spatialReference:o}):new f.Z(a?{x:a.origin[0],y:a.origin[1],spatialReference:o}:{x:0,y:0,spatialReference:o}),h=1/(39.37*(0,n.c9)(o)*96),p=[];if(i)for(let e=0;e<i.length;e++){const t=i[e],l=t*h;p.push(new w.Z({level:e,scale:t,resolution:l}))}else{let e=(0,m.sT)(o)?512/s*591657527.5917094:256/s*591657527.591555;const i=Math.ceil(r/t);p.push(new w.Z({level:0,scale:e,resolution:e*h}));for(let l=1;l<i;l++){const i=e/2**t,s=i*h;p.push(new w.Z({level:l,scale:i,resolution:s})),e=i}}return new l({dpi:96,lods:p,origin:c,size:[s,s],spatialReference:o})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=(0,m.C5)(e);return e.isWrappable&&!!i&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return f.Z.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const l=[],s=this._levelToLOD={};e&&(t=-1/0,i=1/0,e.forEach((e=>{l.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,s[e.level]=e}))),this._set("scales",l),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const i=Math.floor(e),l=i+1;return t[i]/(t[i]/t[l])**(e-i)}scaleToZoom(e){const t=this.scales,i=t.length-1;let l=0;for(;l<i;l++){const i=t[l],s=t[l+1];if(i<=e)return l;if(s===e)return l+1;if(i>e&&s<e)return l+Math.log(i/e)/Math.log(i/s)}return l}snapScale(e,t=.95){const i=this.scaleToZoom(e);return i%Math.floor(i)>=t?this.zoomToScale(Math.ceil(i)):this.zoomToScale(Math.floor(i))}tileAt(e,t,i,l){const s=this.lodAt(e);if(!s)return null;let o,r;if("number"==typeof t)o=t,r=i;else if((0,m.fS)(t.spatialReference,this.spatialReference))o=t.x,r=t.y,l=i;else{const e=(0,y.iV)(t,this.spatialReference);if(null==e)return null;o=e.x,r=e.y,l=i}const n=s.resolution*this.size[0],a=s.resolution*this.size[1];return l||(l=new g.f(null,0,0,0,(0,v.Ue)())),l.level=e,l.row=Math.floor((this.origin.y-r)/a+.001),l.col=Math.floor((o-this.origin.x)/n+.001),this.updateTileInfo(l),l}updateTileInfo(e,t=l.ExtrapolateOptions.NONE){let i=this.lodAt(e.level);if(!i&&t===l.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const s=e.level-i.level,o=i.resolution*this.size[0]/2**s,r=i.resolution*this.size[1]/2**s;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,v.Ue)()),e.extent[0]=this.origin.x+e.col*o,e.extent[1]=this.origin.y-(e.row+1)*r,e.extent[2]=e.extent[0]+o,e.extent[3]=e.extent[1]+r}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const i=this.lodAt(t.level);if(null==i)return null;const{resolution:l}=i,s=l*this.size[0],o=l*this.size[1];return e[0]=this.origin.x+t.col*s,e[1]=this.origin.y-(t.row+1)*o,e[2]=e[0]+s,e[3]=e[1]+o,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return l.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null;const i=[],s=this.lods.length;for(let e=0;e<s;e++){const l=this.lods[e],s=l.resolution*t;i.push(new w.Z({level:l.level,scale:l.scale,resolution:s}))}return new l({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:i})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const l=e[i];this._upsampleLevels[l.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/l.resolution:0},t=l}}};var O,x;(0,s._)([(0,a.Cb)({type:Number,json:{write:!0}})],_.prototype,"compressionQuality",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{write:!0}})],_.prototype,"dpi",void 0),(0,s._)([(0,a.Cb)({type:String,json:{read:b.read,write:b.write,origins:{"web-scene":{read:!1,write:!1}}}})],_.prototype,"format",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],_.prototype,"isWrappable",null),(0,s._)([(0,a.Cb)({type:f.Z,json:{write:!0}})],_.prototype,"origin",void 0),(0,s._)([(0,h.r)("origin")],_.prototype,"readOrigin",null),(0,s._)([(0,a.Cb)({type:[w.Z],value:null,json:{write:!0}})],_.prototype,"lods",null),(0,s._)([(0,a.Cb)({readOnly:!0})],_.prototype,"scales",void 0),(0,s._)([(0,a.Cb)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],_.prototype,"size",void 0),(0,s._)([(0,h.r)("size",["rows","cols"])],_.prototype,"readSize",null),(0,s._)([(0,u.c)("size",{cols:{type:c.z8},rows:{type:c.z8}})],_.prototype,"writeSize",null),(0,s._)([(0,a.Cb)({type:d.Z,json:{write:!0}})],_.prototype,"spatialReference",void 0),_=l=(0,s._)([(0,p.j)("esri.layers.support.TileInfo")],_),(x=(O=_||(_={})).ExtrapolateOptions||(O.ExtrapolateOptions={}))[x.NONE=0]="NONE",x[x.POWER_OF_TWO=1]="POWER_OF_TWO";const C=_},88289:(e,t,i)=>{i.d(t,{Z:()=>o});var l=i(70375),s=i(33926);class o{constructor(e,t=0,i=e.lods.length-1){this.tileInfo=e,this.minLOD=t,this.maxLOD=i}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){const l=this.tileInfo?.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,o){await(0,s.Yn)(o);const r=this.getAvailability(e,t,i);if("unavailable"===r)throw new l.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return r}async fetchAvailabilityUpsample(e,t,i,l,o){await(0,s.Yn)(o),l.level=e,l.row=t,l.col=i;const r=this.tileInfo;return r.updateTileInfo(l),this.fetchAvailability(e,t,i,o).catch((e=>{if((0,s.D_)(e))throw e;if(r.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,o);throw e}))}}},23758:(e,t,i)=>{i.d(t,{f:()=>l});class l{constructor(e,t,i,l,s=undefined){this.id=e,this.level=t,this.row=i,this.col=l,this.extent=s}}},43550:(e,t,i)=>{i.d(t,{y:()=>C});var l,s=i(36663),o=i(66341),r=i(74396),n=i(25015),a=i(70375),c=i(23148),h=i(55854),p=i(17135),u=i(33926),f=i(76868),d=i(17262),v=i(39154),m=i(81977),y=(i(7283),i(7753)),w=(i(39994),i(40266)),g=i(23758),b=i(67134),_=i(86098);class O{constructor(e){this._validateJSON(e);const{location:t,data:i}=e;this.location=Object.freeze((0,b.d9)(t));const l=this.location.width,s=this.location.height;let o=!0,r=!0;const n=function(e,t=!1){return e<=_.DB?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(l*s/32));let a=0;for(let e=0;e<i.length;e++){const t=e%32;i[e]?(r=!1,n[a]|=1<<t):o=!1,31===t&&++a}r?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=n,this.byteSize=40+(0,_.Xw)(n))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%32,s=i>>5,o=this._availability;return s<0||s>o.length?"unknown":o[s]&1<<l?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||o.default,{row:l,col:s,width:r,height:n}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:l,left:s,width:r,height:n},valid:!0,data:(0,y.a9)(r*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==s||e.location.width!==r||e.location.height!==n))throw new a.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:s,width:r,height:n}});return O.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new O(e))}_validateJSON(e){if(!e||!e.location)throw new a.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new a.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new a.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new a.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new a.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function x(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let C=l=class extends r.Z{constructor(e){super(e),this._pendingTilemapRequests={},this.request=o.default,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new h.z(2*n.Y.MEGABYTES),this.addHandles([(0,f.YP)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),f.nn)])}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,i,l){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new a.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,i,s);if(o)return Promise.resolve(o);const r=l&&l.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,u.fu)(r,(()=>t((0,u.zE)())));const i=x(s);let o=this._pendingTilemapRequests[i];if(!o){o=O.fromDefinition(s,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=o,o.then(e,e)}o.then(e,t)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new a.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof O){const s=l.getAvailability(t,i);if("unavailable"===s)throw new a.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return s}if((0,u.D_)(l))throw l;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,l,s){l.level=e,l.row=t,l.col=i;const o=this.layer.tileInfo;o.updateTileInfo(l);const r=this.fetchAvailability(e,t,i,s).catch((e=>{if((0,u.D_)(e))throw e;if(o.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,s);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,s,r),r}async _fetchAvailabilityUpsamplePrefetch(e,t,i,s,o,r){if(!this._prefetchingEnabled||null==e)return;const n=`prefetch-${e}`;if(this.hasHandles(n))return;const a=new AbortController;r.then((()=>a.abort()),(()=>a.abort()));let h=!1;const p=(0,c.kB)((()=>{h||(h=!0,a.abort())}));if(this.addHandles(p,n),await(0,d.MU)(10,a.signal).catch((()=>{})),h||(h=!0,this.removeHandles(n)),(0,u.Hc)(a))return;const f=new g.f(e,t,i,s),v={...o,signal:a.signal},m=this.layer.tileInfo;for(let e=0;l._prefetches.length<l._maxPrefetch&&m.upsampleTile(f);++e){const e=this.fetchAvailability(f.level,f.row,f.col,v);l._prefetches.push(e);const t=()=>{l._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,v.B7)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const s=x(l);return this._tilemapCache.get(s)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};C._maxPrefetch=4,C._prefetches=new p.Z({initialSize:l._maxPrefetch}),(0,s._)([(0,m.Cb)({constructOnly:!0})],C.prototype,"layer",void 0),(0,s._)([(0,m.Cb)({constructOnly:!0})],C.prototype,"minLOD",void 0),(0,s._)([(0,m.Cb)({constructOnly:!0})],C.prototype,"maxLOD",void 0),(0,s._)([(0,m.Cb)({constructOnly:!0})],C.prototype,"request",void 0),(0,s._)([(0,m.Cb)({constructOnly:!0})],C.prototype,"size",void 0),C=l=(0,s._)([(0,w.j)("esri.layers.support.TilemapCache")],C)}}]);