"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[93751],{93751:(e,a,t)=>{t.r(a),t.d(a,{createSymbolSchema:()=>c});var r=t(38716),n=t(89106);function l(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return(0,n.hF)(e)}function c(e,a,t=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,a,t){const c=(0,n.jj)(r.LW.FILL,a),o=t?s(c):c,i=e.clone(),h=i.outline,m=(0,n.jy)(a.symbologyType);m||(i.outline=null);const u={materialKey:o,hash:i.hash(),...l(i)};if(m)return u;const y=[];if(y.push(u),h){const e=(0,n.jj)(r.LW.LINE,{...a,isOutline:!0}),c={materialKey:t?s(e):e,hash:h.hash(),...l(h)};y.push(c)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,a)=>a.hash+e),"")}}(e,a,t);case"simple-marker":case"picture-marker":return function(e,a,t){const c=(0,n.jj)(r.LW.MARKER,a),o=t?s(c):c,i=l(e);return{materialKey:o,hash:e.hash(),...i,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"simple-line":return function(e,a,t){const c=(0,n.jy)(a.symbologyType)?r.mD.DEFAULT:a.symbologyType,o=(0,n.jj)(r.LW.LINE,{...a,symbologyType:c}),i=t?s(o):o,h=e.clone(),m=h.marker;h.marker=null;const u=[];if(u.push({materialKey:i,hash:h.hash(),...l(h)}),m){const e=(0,n.jj)(r.LW.MARKER,a),c=t?s(e):e;m.color=m.color??h.color,u.push({materialKey:c,hash:m.hash(),lineWidth:h.width,...l(m)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,a)=>a.hash+e),"")}}(e,a,t);case"text":return function(e,a,t){const c=(0,n.jj)(r.LW.TEXT,a),o=t?s(c):c,i=l(e);return{materialKey:o,hash:e.hash(),...i,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"label":return function(e,a,t){const l=e.toJSON(),c=(0,n.jj)(r.LW.LABEL,{...a,placement:l.labelPlacement});return{materialKey:t?s(c):c,hash:e.hash(),...l,labelPlacement:l.labelPlacement}}(e,a,t);case"cim":return{type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return{...l(e),type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}}}]);