"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[2901],{62901:(e,r,i)=>{i.r(r),i.d(r,{clearBoundingBoxCache:()=>h,computeIconLayerResourceSize:()=>f,computeObjectLayerResourceSize:()=>d});var n=i(66341),t=i(70375),o=i(55854),s=i(8909),c=i(37116),u=i(19049);let a=l();function l(){return new o.z(50)}function h(){a=l()}async function f(e,r){if(e.resource?.href)return(i=e.resource.href,(0,n.default)(i,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var i;if(e.resource?.primitive)return null!=r?[r,r]:[256,256];throw new t.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}async function d(e,r=null){if(!e.isPrimitive){const r=e.resource.href;if(!r)throw new t.Z("symbol:invalid-resource","The symbol does not have a valid resource");const n=a.get(r);if(void 0!==n)return n;const{fetch:o}=await Promise.all([i.e(1936),i.e(4515),i.e(8450),i.e(7681),i.e(2566)]).then(i.bind(i,92566)),u=await o(r,{disableTextures:!0}),l=(0,c.dp)(u.referenceBoundingBox,(0,s.c)());return a.put(r,l),l}if(!e.resource?.primitive)throw new t.Z("symbol:invalid-resource","The symbol does not have a valid resource");const n=(0,c.Ue)((0,u.Uz)(e.resource.primitive));if(null!=r)for(let e=0;e<n.length;e++)n[e]*=r;return(0,c.dp)(n,(0,s.c)())}}}]);