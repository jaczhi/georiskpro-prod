"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[905],{37956:(t,e,i)=>{i.d(e,{Z:()=>m});var r,s=i(36663),o=i(82064),n=i(61681),a=i(807),l=i(81977),u=(i(7283),i(7753),i(39994),i(34248)),p=i(40266),c=i(39835);let d=r=class extends o.wq{static get allTime(){return h}static get empty(){return y}constructor(t){super(t),this.end=null,this.start=null}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?t.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?t.getTime():null}clone(){return new r({end:this.end,start:this.start})}equals(t){if(!t)return!1;const e=null!=this.start?this.start.getTime():this.start,i=null!=this.end?this.end.getTime():this.end,r=null!=t.start?t.start.getTime():t.start,s=null!=t.end?t.end.getTime():t.end;return e===r&&i===s}expandTo(t){if(this.isEmpty||this.isAllTime)return this.clone();const e=(0,n.yw)(this.start,(e=>(0,a.JE)(e,t))),i=(0,n.yw)(this.end,(e=>{const i=(0,a.JE)(e,t);return e.getTime()===i.getTime()?i:(0,a.Nm)(i,1,t)}));return new r({start:e,end:i})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return r.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=this.start?.getTime()??-1/0,i=this.end?.getTime()??1/0,s=t.start?.getTime()??-1/0,o=t.end?.getTime()??1/0;let n,a;if(s>=e&&s<=i?n=s:e>=s&&e<=o&&(n=e),i>=s&&i<=o?a=i:o>=e&&o<=i&&(a=o),null!=n&&null!=a&&!isNaN(n)&&!isNaN(a)){const t=new r;return t.start=n===-1/0?null:new Date(n),t.end=a===1/0?null:new Date(a),t}return r.empty}offset(t,e){if(this.isEmpty||this.isAllTime)return this.clone();const i=new r,{start:s,end:o}=this;return null!=s&&(i.start=(0,a.Nm)(s,t,e)),null!=o&&(i.end=(0,a.Nm)(o,t,e)),i}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return h.clone();const e=null!=this.start&&null!=t.start?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,i=null!=this.end&&null!=t.end?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new r({start:e,end:i})}};(0,s._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,s._)([(0,u.r)("end")],d.prototype,"readEnd",null),(0,s._)([(0,c.c)("end")],d.prototype,"writeEnd",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,s._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,s._)([(0,u.r)("start")],d.prototype,"readStart",null),(0,s._)([(0,c.c)("start")],d.prototype,"writeStart",null),d=r=(0,s._)([(0,p.j)("esri.TimeExtent")],d);const h=new d,y=new d({start:void 0,end:void 0}),m=d},55854:(t,e,i)=>{i.d(e,{z:()=>s});var r=i(40366);class s{constructor(t,e){this._storage=new r.WJ,this.id="",this.name="",this.size=0,this._storage.maxSize=t,this._storage.register(this),e&&this._storage.registerRemoveFunc("",e)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(t,e,i=1){this._storage.put(this,t,e,i,1)}pop(t){return this._storage.pop(this,t)}get(t){return this._storage.get(this,t)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}resetHitRate(){}}},40366:(t,e,i)=>{i.d(e,{WJ:()=>a,Xq:()=>n});var r,s,o=i(17135);(s=r||(r={}))[s.ALL=0]="ALL",s[s.SOME=1]="SOME";class n{constructor(t,e,i){this.name=t,this._storage=e,this.id=l+++":",this.size=0,this.maxSize=0,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),i&&(this._storage.registerRemoveFunc(this.id,i),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get sizeAll(){return this._storage.size}resetHitRate(){this._hit=this._miss=0}put(t,e,i,r=0){this._storage.put(this,t,e,i,r)}get(t){const e=this._storage.get(this,t);return void 0===e?++this._miss:++this._hit,e}pop(t){const e=this._storage.pop(this,t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,i){this._storage.updateSize(this,t,e,i)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class a{get size(){return this._size}constructor(t=10485760){this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new o.Z,this._users=new o.Z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimits()}put(t,e,i,s,o){e=t.id+e;const n=this._db.get(e);if(n&&(this._size-=n.size,t.size-=n.size,this._db.delete(e),n.entry!==i&&this._notifyRemove(e,n.entry,r.ALL)),s>this._maxSize)return void this._notifyRemove(e,i,r.ALL);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const a=1+Math.max(o,-3)- -3;this._db.set(e,{entry:i,size:s,lifetime:a,lives:a}),this._size+=s,t.size+=s,this._checkSizeLimits()}updateSize(t,e,i,s){e=t.id+e;const o=this._db.get(e);if(o&&o.entry===i){for(this._size-=o.size,t.size-=o.size;s>this._maxSize;){const t=this._notifyRemove(e,i,r.SOME);if(!(null!=t&&t>0))return void this._db.delete(e);s=t}o.size=s,this._size+=s,t.size+=s,this._checkSizeLimits()}}pop(t,e){e=t.id+e;const i=this._db.get(e);if(i)return this._size-=i.size,t.size-=i.size,this._db.delete(e),++this._hit,i.entry;++this._miss}get(t,e){e=t.id+e;const i=this._db.get(e);if(void 0!==i)return this._db.delete(e),i.lives=i.lifetime,this._db.set(e,i),++this._hit,i.entry;++this._miss}get performanceInfo(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},i=new Array;this._db.forEach(((t,r)=>{const s=t.lifetime;i[s]=(i[s]||0)+t.size,this._users.forAll((i=>{const{id:s,name:o}=i;if(r.startsWith(s)){const i=e[o]||0;e[o]=i+t.size}}))}));const r={};this._users.forAll((t=>{const i=t.name;if("hitRate"in t&&"number"==typeof t.hitRate&&!isNaN(t.hitRate)&&t.hitRate>0){const s=e[i]||0;e[i]=s,r[i]=Math.round(100*t.hitRate)+"%"}else r[i]="0%"}));const s=Object.keys(e);s.sort(((t,i)=>e[i]-e[t])),s.forEach((i=>t[i]=Math.round(e[i]/2**20)+"MB / "+r[i]));for(let e=i.length-1;e>=0;--e){const r=i[e];r&&(t["Priority "+(e+-3-1)]=Math.round(r/this._size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){const e=t.id;this._db.forEach(((t,i)=>{i.startsWith(e)&&(this._size-=t.size,this._db.delete(i),this._notifyRemove(i,t.entry,r.ALL))})),t.size=0}clearAll(){this._db.forEach(((t,e)=>this._notifyRemove(e,t.entry,r.ALL))),this._users.forEach((t=>t.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,e,i){let r;return this._removeFuncs.some((s=>{if(t.startsWith(s[0])){const t=s[1](e,i);return"number"==typeof t&&(r=t),!0}return!1})),r}_checkSizeLimits(){if(this._size>this._maxSize)for(const[t,e]of this._db)if(this._purgeItem(t,e),this._size<=.9*this.maxSize)return;this._users.forEach((t=>{if(t.maxSize>0&&t.size>t.maxSize)for(const[e,i]of this._db)if(e.startsWith(t.id)&&(this._purgeItem(e,i,t),t.size<=.9*t.maxSize))return}))}_purgeItem(t,e,i=this._users.find((e=>t.startsWith(e.id)))){if(this._db.delete(t),e.lives<=1){this._size-=e.size,i&&(i.size-=e.size);const s=this._notifyRemove(t,e.entry,r.SOME);null!=s&&s>0&&(this._size+=s,i&&(i.size+=s),e.lives=e.lifetime,e.size=s,this._db.set(t,e))}else--e.lives,this._db.set(t,e)}}let l=0},76868:(t,e,i)=>{i.d(e,{N1:()=>d,YP:()=>l,Z_:()=>m,gx:()=>u,nn:()=>_,on:()=>c,tX:()=>g});var r=i(49546),s=i(23148),o=i(61681),n=i(33926),a=i(65449);function l(t,e,i={}){return p(t,e,i,h)}function u(t,e,i={}){return p(t,e,i,y)}function p(t,e,i={},r){let s=null;const n=i.once?(t,i)=>{r(t)&&((0,o.hw)(s),e(t,i))}:(t,i)=>{r(t)&&e(t,i)};if(s=(0,a.aQ)(t,n,i.sync,i.equals),i.initial){const e=t();n(e,e)}return s}function c(t,e,i,n={}){let a=null,u=null,p=null;function c(){a&&u&&(u.remove(),n.onListenerRemove?.(a),a=null,u=null)}function d(t){n.once&&n.once&&(0,o.hw)(p),i(t)}const h=l(t,((t,i)=>{c(),(0,r.vT)(t)&&(a=t,u=(0,r.on)(t,e,d),n.onListenerAdd?.(t))}),{sync:n.sync,initial:!0});return p=(0,s.kB)((()=>{h.remove(),c()})),p}function d(t,e){return function(t,e,i){if((0,n.Hc)(i))return Promise.reject((0,n.zE)());const r=t();if(e?.(r))return Promise.resolve(r);let a=null;function l(){a=(0,o.hw)(a)}return new Promise(((r,o)=>{a=(0,s.AL)([(0,n.fu)(i,(()=>{l(),o((0,n.zE)())})),p(t,(t=>{l(),r(t)}),{sync:!1,once:!0},e??h)])}))}(t,y,e)}function h(t){return!0}function y(t){return!!t}i(63235);const m={sync:!0},_={initial:!0},g={sync:!0,initial:!0}},807:(t,e,i)=>{i.d(e,{JE:()=>n,Nm:()=>o,rJ:()=>a}),i(39994);const r={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},s={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function o(t,e,i){const r=new Date(t.getTime());if(e&&i){const t=s[i],{getter:o,setter:n,multiplier:a}=t;if("months"===i){const t=function(t,e){const i=new Date(t,e+1,1);return i.setDate(0),i.getDate()}(r.getFullYear(),r.getMonth()+e);r.getDate()>t&&r.setDate(t)}r[n](r[o]()+e*a)}return r}function n(t,e){switch(e){case"milliseconds":return new Date(t.getTime());case"seconds":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());case"minutes":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes());case"hours":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours());case"days":return new Date(t.getFullYear(),t.getMonth(),t.getDate());case"weeks":return new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay());case"months":return new Date(t.getFullYear(),t.getMonth(),1);case"years":return new Date(t.getFullYear(),0,1);case"decades":return new Date(t.getFullYear()-t.getFullYear()%10,0,1);case"centuries":return new Date(t.getFullYear()-t.getFullYear()%100,0,1);default:return new Date}}function a(t,e,i){return 0===t?0:t*r[e]/r[i]}},10743:(t,e,i)=>{i.d(e,{n:()=>E});var r,s=i(36663),o=i(25709),n=i(82064),a=i(81977),l=i(69236),u=i(79438),p=i(34248),c=i(40266),d=i(7283),h=i(3593),y=i(12512),m=i(81580),_=(i(91957),i(7753),i(39994),i(14685)),g=i(59659);let b=r=class extends n.wq{constructor(t){super(t),this.type="query-table"}clone(){const{workspaceId:t,query:e,oidFields:i,spatialReference:s,geometryType:o}=this,n={workspaceId:t,query:e,oidFields:i,spatialReference:s?.clone()??void 0,geometryType:o};return new r(n)}};var w;(0,s._)([(0,u.J)({queryTable:"query-table"})],b.prototype,"type",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"workspaceId",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"query",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"oidFields",void 0),(0,s._)([(0,a.Cb)({type:_.Z,json:{write:!0}})],b.prototype,"spatialReference",void 0),(0,s._)([(0,u.J)(g.M)],b.prototype,"geometryType",void 0),b=r=(0,s._)([(0,c.j)("esri.layers.support.source.QueryTableDataSource")],b);let f=w=class extends n.wq{constructor(t){super(t),this.type="raster"}clone(){const{workspaceId:t,dataSourceName:e}=this;return new w({workspaceId:t,dataSourceName:e})}};var v;(0,s._)([(0,u.J)({raster:"raster"})],f.prototype,"type",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],f.prototype,"dataSourceName",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],f.prototype,"workspaceId",void 0),f=w=(0,s._)([(0,c.j)("esri.layers.support.source.RasterDataSource")],f);let S=v=class extends n.wq{constructor(t){super(t),this.type="table"}clone(){const{workspaceId:t,gdbVersion:e,dataSourceName:i}=this;return new v({workspaceId:t,gdbVersion:e,dataSourceName:i})}};var C,j;(0,s._)([(0,u.J)({table:"table"})],S.prototype,"type",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"workspaceId",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"gdbVersion",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"dataSourceName",void 0),S=v=(0,s._)([(0,c.j)("esri.layers.support.source.TableDataSource")],S);const T=(0,o.w)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let x=C=class extends n.wq{constructor(t){super(t),this.type="join-table"}readLeftTableSource(t,e,i){return z()(t,e,i)}castLeftTableSource(t){return(0,d.N7)(D(),t)}readRightTableSource(t,e,i){return z()(t,e,i)}castRightTableSource(t){return(0,d.N7)(D(),t)}clone(){const{leftTableKey:t,rightTableKey:e,leftTableSource:i,rightTableSource:r,joinType:s}=this,o={leftTableKey:t,rightTableKey:e,leftTableSource:i?.clone()??void 0,rightTableSource:r?.clone()??void 0,joinType:s};return new C(o)}};(0,s._)([(0,u.J)({joinTable:"join-table"})],x.prototype,"type",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"leftTableKey",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"rightTableKey",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],x.prototype,"leftTableSource",void 0),(0,s._)([(0,p.r)("leftTableSource")],x.prototype,"readLeftTableSource",null),(0,s._)([(0,l.p)("leftTableSource")],x.prototype,"castLeftTableSource",null),(0,s._)([(0,a.Cb)({json:{write:!0}})],x.prototype,"rightTableSource",void 0),(0,s._)([(0,p.r)("rightTableSource")],x.prototype,"readRightTableSource",null),(0,s._)([(0,l.p)("rightTableSource")],x.prototype,"castRightTableSource",null),(0,s._)([(0,u.J)(T)],x.prototype,"joinType",void 0),x=C=(0,s._)([(0,c.j)("esri.layers.support.source.JoinTableDataSource")],x);let R=null;function z(){return R||(R=(0,h.d)({types:D()})),R}let F=null;function D(){return F||(F={key:"type",base:null,typeMap:{"data-layer":E,"map-layer":m.R}}),F}const M={key:"type",base:null,typeMap:{"join-table":x,"query-table":b,raster:f,table:S}};let E=j=class extends n.wq{constructor(t){super(t),this.type="data-layer"}clone(){const{fields:t,dataSource:e}=this;return new j({fields:t,dataSource:e})}};(0,s._)([(0,u.J)({dataLayer:"data-layer"})],E.prototype,"type",void 0),(0,s._)([(0,a.Cb)({type:[y.Z],json:{write:!0}})],E.prototype,"fields",void 0),(0,s._)([(0,a.Cb)({types:M,json:{write:!0}})],E.prototype,"dataSource",void 0),E=j=(0,s._)([(0,c.j)("esri.layers.support.source.DataLayerSource")],E),E.from=(0,d.se)(E)},81580:(t,e,i)=>{i.d(e,{R:()=>p});var r,s=i(36663),o=i(82064),n=i(81977),a=i(7283),l=(i(7753),i(39994),i(79438)),u=i(40266);let p=r=class extends o.wq{constructor(t){super(t),this.type="map-layer"}clone(){const{mapLayerId:t,gdbVersion:e}=this;return new r({mapLayerId:t,gdbVersion:e})}};(0,s._)([(0,l.J)({mapLayer:"map-layer"})],p.prototype,"type",void 0),(0,s._)([(0,n.Cb)({type:a.z8,json:{write:!0}})],p.prototype,"mapLayerId",void 0),(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"gdbVersion",void 0),p=r=(0,s._)([(0,u.j)("esri.layers.support.source.MapLayerSource")],p)},56836:(t,e,i)=>{i.d(e,{Z:()=>h});var r,s=i(36663),o=(i(91957),i(25709)),n=i(82064),a=i(67134),l=i(81977),u=(i(7283),i(40266)),p=i(91772);const c=new o.X({upperLeft:"upper-left",lowerLeft:"lower-left"});let d=r=class extends n.wq{constructor(t){super(t),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new r((0,a.d9)({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};(0,s._)([(0,l.Cb)({type:p.Z,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],d.prototype,"extent",void 0),(0,s._)([(0,l.Cb)({type:["view","edit"],json:{write:!0}})],d.prototype,"mode",void 0),(0,s._)([(0,l.Cb)({type:String,json:{read:c.read,write:c.write}})],d.prototype,"originPosition",void 0),(0,s._)([(0,l.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],d.prototype,"tolerance",void 0),d=r=(0,s._)([(0,u.j)("esri.rest.support.QuantizationParameters")],d);const h=d},14626:(t,e,i)=>{i.d(e,{Z:()=>z});var r=i(36663),s=i(91957),o=i(37956),n=i(25709),a=i(82064),l=i(67134),u=i(81977),p=i(69236),c=i(79438),d=i(40266),h=i(39835),y=i(7283),m=i(53736),_=i(10743),g=i(41151);i(7753),i(39994);let b=class extends((0,g.J)(a.wq)){constructor(t){super(t),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};(0,r._)([(0,u.Cb)({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.onFields&&this.onFields.length>0}}}}})],b.prototype,"onFields",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],b.prototype,"operator",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],b.prototype,"searchTerm",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],b.prototype,"searchType",void 0),b=(0,r._)([(0,d.j)("esri.rest.support.FullTextSearch")],b);const w=b;var f,v=i(56836),S=i(53631),C=i(14685),j=i(67666);const T=new n.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),x=new n.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let R=f=class extends a.wq{static from(t){return(0,y.TJ)(f,t)}constructor(t){super(t),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(t){return"number"==typeof t||"object"==typeof t?t:null}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeParameterValues(t,e){if(t){const i={};for(const e in t){const r=t[e];Array.isArray(r)?i[e]=r.map((t=>t instanceof Date?t.getTime():t)):r instanceof Date?i[e]=r.getTime():i[e]=r}e.parameterValues=i}}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"}writeWhere(t,e){e.where=t||"1=1"}clone(){return new f((0,l.d9)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:null!=this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};R.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,r._)([(0,u.Cb)({json:{write:!0}})],R.prototype,"aggregateIds",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"compactGeometryEnabled",void 0),(0,r._)([(0,u.Cb)({json:{write:!0}})],R.prototype,"datumTransformation",void 0),(0,r._)([(0,p.p)("datumTransformation")],R.prototype,"castDatumTransformation",null),(0,r._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"defaultSpatialReferenceEnabled",void 0),(0,r._)([(0,u.Cb)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],R.prototype,"distance",void 0),(0,r._)([(0,u.Cb)({type:_.n,json:{write:!0}})],R.prototype,"dynamicDataSource",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],R.prototype,"formatOf3DObjects",void 0),(0,r._)([(0,u.Cb)({type:[w],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.fullText&&this.fullText.length>0}}}}})],R.prototype,"fullText",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],R.prototype,"gdbVersion",void 0),(0,r._)([(0,u.Cb)({types:s.qM,json:{read:m.im,write:!0}})],R.prototype,"geometry",void 0),(0,r._)([(0,u.Cb)({type:Number,json:{write:!0}})],R.prototype,"geometryPrecision",void 0),(0,r._)([(0,u.Cb)({type:[String],json:{write:!0}})],R.prototype,"groupByFieldsForStatistics",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],R.prototype,"having",void 0),(0,r._)([(0,u.Cb)({type:Date})],R.prototype,"historicMoment",void 0),(0,r._)([(0,h.c)("historicMoment")],R.prototype,"writeHistoricMoment",null),(0,r._)([(0,u.Cb)({type:Number,json:{write:!0}})],R.prototype,"maxAllowableOffset",void 0),(0,r._)([(0,u.Cb)({type:Number,cast:t=>t<1?1:t>f.MAX_MAX_RECORD_COUNT_FACTOR?f.MAX_MAX_RECORD_COUNT_FACTOR:t,json:{write:{overridePolicy:t=>({enabled:t>1})}}})],R.prototype,"maxRecordCountFactor",void 0),(0,r._)([(0,u.Cb)({type:["xyFootprint"],json:{write:!0}})],R.prototype,"multipatchOption",void 0),(0,r._)([(0,u.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],R.prototype,"num",void 0),(0,r._)([(0,u.Cb)({json:{write:!0}})],R.prototype,"objectIds",void 0),(0,r._)([(0,u.Cb)({type:[String],json:{write:!0}})],R.prototype,"orderByFields",void 0),(0,r._)([(0,u.Cb)({type:[String],json:{write:!0}})],R.prototype,"outFields",void 0),(0,r._)([(0,u.Cb)({type:C.Z,json:{name:"outSR",write:!0}})],R.prototype,"outSpatialReference",void 0),(0,r._)([(0,u.Cb)({type:[S.Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],R.prototype,"outStatistics",void 0),(0,r._)([(0,u.Cb)({json:{write:!0}})],R.prototype,"parameterValues",void 0),(0,r._)([(0,h.c)("parameterValues")],R.prototype,"writeParameterValues",null),(0,r._)([(0,u.Cb)({type:j.Z,json:{write:!0}})],R.prototype,"pixelSize",void 0),(0,r._)([(0,u.Cb)({type:v.Z,json:{write:!0}})],R.prototype,"quantizationParameters",void 0),(0,r._)([(0,u.Cb)({type:[Object],json:{write:!0}})],R.prototype,"rangeValues",void 0),(0,r._)([(0,u.Cb)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],R.prototype,"relationParameter",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],R.prototype,"resultType",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnCentroid",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnDistinctValues",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{default:!0,write:!0}})],R.prototype,"returnExceededLimitFeatures",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],R.prototype,"returnGeometry",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnQueryGeometry",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnM",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnZ",void 0),(0,r._)([(0,u.Cb)({type:C.Z,json:{write:!0}})],R.prototype,"sourceSpatialReference",void 0),(0,r._)([(0,c.J)(T,{ignoreUnknown:!1,name:"spatialRel"})],R.prototype,"spatialRelationship",void 0),(0,r._)([(0,u.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],R.prototype,"start",void 0),(0,r._)([(0,h.c)("start"),(0,h.c)("num")],R.prototype,"writeStart",null),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],R.prototype,"sqlFormat",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],R.prototype,"text",void 0),(0,r._)([(0,u.Cb)({type:o.Z,json:{write:!0}})],R.prototype,"timeExtent",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"timeReferenceUnknownClient",void 0),(0,r._)([(0,c.J)(x,{ignoreUnknown:!1}),(0,u.Cb)({json:{write:{overridePolicy(t){return{enabled:!!t&&null!=this.distance&&this.distance>0}}}}})],R.prototype,"units",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:{overridePolicy(t){return{enabled:null!=t||null!=this.start&&this.start>0}}}}})],R.prototype,"where",void 0),(0,r._)([(0,h.c)("where")],R.prototype,"writeWhere",null),R=f=(0,r._)([(0,d.j)("esri.rest.support.Query")],R);const z=R},53631:(t,e,i)=>{i.d(e,{Z:()=>h});var r,s=i(36663),o=i(25709),n=i(82064),a=i(67134),l=i(81977),u=(i(7283),i(40266)),p=i(39835);const c=new o.X({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let d=r=class extends n.wq{constructor(t){super(t),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=(0,a.d9)(t))}clone(){return new r({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,a.d9)(this.statisticParameters)})}};(0,s._)([(0,l.Cb)({type:Number,json:{write:!0}})],d.prototype,"maxPointCount",void 0),(0,s._)([(0,l.Cb)({type:Number,json:{write:!0}})],d.prototype,"maxRecordCount",void 0),(0,s._)([(0,l.Cb)({type:Number,json:{write:!0}})],d.prototype,"maxVertexCount",void 0),(0,s._)([(0,l.Cb)({type:String,json:{write:!0}})],d.prototype,"onStatisticField",void 0),(0,s._)([(0,l.Cb)({type:String,json:{write:!0}})],d.prototype,"outStatisticFieldName",void 0),(0,s._)([(0,l.Cb)({type:String,json:{read:{source:"statisticType",reader:c.read},write:{target:"statisticType",writer:c.write}}})],d.prototype,"statisticType",void 0),(0,s._)([(0,l.Cb)({type:Object})],d.prototype,"statisticParameters",void 0),(0,s._)([(0,p.c)("statisticParameters")],d.prototype,"writeStatisticParameters",null),d=r=(0,s._)([(0,u.j)("esri.rest.support.StatisticDefinition")],d);const h=d}}]);