"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5670],{1983:(e,t,n)=>{function r(){return[0,0,0,0]}function o(e,t,n,r){return[e,t,n,r]}function i(e,t){return new Float64Array(e,t,4)}function s(){return o(1,1,1,1)}function a(){return o(1,0,0,0)}function c(){return o(0,1,0,0)}function u(){return o(0,0,1,0)}function l(){return o(0,0,0,1)}n.d(t,{a:()=>i,c:()=>r,f:()=>o});const d=s(),f=a(),h=c(),p=u(),y=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_W:y,UNIT_X:f,UNIT_Y:h,UNIT_Z:p,ZEROS:[0,0,0,0],clone:function(e){return[e[0],e[1],e[2],e[3]]},create:r,createView:i,fromArray:function(e){const t=[0,0,0,0],n=Math.min(4,e.length);for(let r=0;r<n;++r)t[r]=e[r];return t},fromValues:o,ones:s,unitW:l,unitX:a,unitY:c,unitZ:u,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},94672:(e,t,n)=>{n.d(t,{AJ:()=>s,If:()=>c,QM:()=>a,k0:()=>i,nu:()=>o,wx:()=>u}),n(19431);var r=n(95550);n(88589),n(1983);const o=2.4;function i(e){return(0,r.Wz)(e*o)}function s(e){return(0,r.F2)(e)/o}function a(e,t,n,o){const{radius:i,fieldOffset:s,field:a}=t,u=Math.round((0,r.F2)(i)),l=new Float64Array(n*o);let d,f=Number.NEGATIVE_INFINITY;const h=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):n=>+n.readAttribute(e)+t:e=>1}(a,s),p=new Set;for(const t of e){const e=t.getCursor();for(;e.next();){const t=e.getObjectId();if(p.has(t))continue;p.add(t);const r=e.readLegacyPointGeometry(),i=128;if(r.x<-i||r.x>=n+i||r.y<-i||r.y>o+i)continue;const s=+h(e),a=Math.max(0,Math.round(r.x)-u),y=Math.max(0,Math.round(r.y)-u),_=Math.min(o,Math.round(r.y)+u),m=Math.min(n,Math.round(r.x)+u);for(let e=y;e<_;e++)for(let t=a;t<m;t++){const o=e*n+t,i=c(r.x-t,r.y-e,u);d=l[o]+=i*s,d>f&&(f=d)}}}return{matrix:l.buffer,max:f}}function c(e,t,n){const r=Math.sqrt(e**2+t**2)/n;return r>1?0:3/(Math.PI*n**2)*(1-r**2)**2}function u(e,t){return"function"==typeof e?e:e?"string"==typeof t?t=>-1*+t[e]:n=>+n[e]+t:()=>1}},67766:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(36663),o=n(53280),i=n(81977),s=(n(7283),n(7753),n(39994),n(40266));let a=class extends o.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,r._)([(0,i.Cb)({readOnly:!0})],a.prototype,"supportsTileUpdates",null),(0,r._)([(0,i.Cb)({constructOnly:!0})],a.prototype,"remoteClient",void 0),(0,r._)([(0,i.Cb)({constructOnly:!0})],a.prototype,"service",void 0),(0,r._)([(0,i.Cb)()],a.prototype,"spatialReference",null),(0,r._)([(0,i.Cb)({constructOnly:!0})],a.prototype,"tileInfo",void 0),(0,r._)([(0,i.Cb)({constructOnly:!0})],a.prototype,"tileStore",void 0),a=(0,r._)([(0,s.j)("esri.views.2d.layers.features.processors.BaseProcessor")],a);const c=a},5670:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(36663),o=(n(39994),n(61681)),i=(n(13802),n(7283),n(7753),n(70375),n(40266)),s=n(27281),a=n(94672),c=n(14266),u=n(67766),l=n(6413);class d{constructor(e,t){this.offset=e,this.extent=t}}function f(e){const t=e.key,n=new Map,r=256,o=c.I_,i=e.tileInfoView.tileInfo.isWrappable;return n.set((0,l.M)(t,-1,-1,i).id,new d([-o,-o],[o-r,o-r,o,o])),n.set((0,l.M)(t,0,-1,i).id,new d([0,-o],[0,o-r,o,o])),n.set((0,l.M)(t,1,-1,i).id,new d([o,-o],[0,o-r,r,o])),n.set((0,l.M)(t,-1,0,i).id,new d([-o,0],[o-r,0,o,o])),n.set((0,l.M)(t,1,0,i).id,new d([o,0],[0,0,r,o])),n.set((0,l.M)(t,-1,1,i).id,new d([-o,o],[o-r,0,o,r])),n.set((0,l.M)(t,0,1,i).id,new d([0,o],[0,0,o,r])),n.set((0,l.M)(t,1,1,i).id,new d([o,o],[0,0,r,r])),n}let h=class extends u.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const n=t.schema.processors[0];"heatmap"===n.type&&(0,s.Hg)(this._schema,n)&&(e.mesh=!0,this._schema=n)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,n){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const r=this._tileKeyToFeatureSets.get(e.key.id);if(r&&null!=t.addOrUpdate&&t.addOrUpdate.hasFeatures&&r.set(t.addOrUpdate.instance,t),t.end){const t=[],r=f(e);this._tileKeyToFeatureSets.forEach(((n,i)=>{if(i===e.key.id)n.forEach((e=>(0,o.yw)(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(i)){const e=r.get(i),[s,a]=e.offset;n.forEach((e=>(0,o.yw)(e.addOrUpdate,(e=>{const n=e.transform(s,a,1,1);t.push(n)}))))}}));const i=(0,a.QM)(t,this._schema.mesh,512,512),s={tileKey:e.key.id,intensityInfo:i},c=[i.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",s,{...n,transferList:c})}}onTileError(e,t,n){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},n)}};h=(0,r._)([(0,i.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);const p=h},6413:(e,t,n)=>{function r(e,t,n,r){const o=e.clone(),i=1<<o.level,s=o.col+t,a=o.row+n;return r&&s<0?(o.col=s+i,o.world-=1):s>=i?(o.col=s-i,o.world+=1):o.col=s,o.row=a,o}n.d(t,{M:()=>r})}}]);