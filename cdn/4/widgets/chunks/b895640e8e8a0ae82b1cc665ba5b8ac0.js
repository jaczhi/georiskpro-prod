"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5094,8284],{86630:(e,t,r)=>{r.d(t,{F:()=>h,M:()=>i});const i={Base64:0,Hex:1,String:2,Raw:3},n=8,s=(1<<n)-1;function o(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function a(e){const t=[];for(let r=0,i=e.length*n;r<i;r+=n)t[r>>5]|=(e.charCodeAt(r/n)&s)<<r%32;return t}function l(e){const t=[];for(let r=0,i=32*e.length;r<i;r+=n)t.push(String.fromCharCode(e[r>>5]>>>r%32&s));return t.join("")}function u(e,t,r,i,n,s){return o(function(e,t){return e<<t|e>>>32-t}(o(o(t,e),o(i,s)),n),r)}function p(e,t,r,i,n,s,o){return u(t&r|~t&i,e,t,n,s,o)}function d(e,t,r,i,n,s,o){return u(t&i|r&~i,e,t,n,s,o)}function c(e,t,r,i,n,s,o){return u(t^r^i,e,t,n,s,o)}function y(e,t,r,i,n,s,o){return u(r^(t|~i),e,t,n,s,o)}function f(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let r=1732584193,i=-271733879,n=-1732584194,s=271733878;for(let t=0;t<e.length;t+=16){const a=r,l=i,u=n,f=s;r=p(r,i,n,s,e[t],7,-680876936),s=p(s,r,i,n,e[t+1],12,-389564586),n=p(n,s,r,i,e[t+2],17,606105819),i=p(i,n,s,r,e[t+3],22,-1044525330),r=p(r,i,n,s,e[t+4],7,-176418897),s=p(s,r,i,n,e[t+5],12,1200080426),n=p(n,s,r,i,e[t+6],17,-1473231341),i=p(i,n,s,r,e[t+7],22,-45705983),r=p(r,i,n,s,e[t+8],7,1770035416),s=p(s,r,i,n,e[t+9],12,-1958414417),n=p(n,s,r,i,e[t+10],17,-42063),i=p(i,n,s,r,e[t+11],22,-1990404162),r=p(r,i,n,s,e[t+12],7,1804603682),s=p(s,r,i,n,e[t+13],12,-40341101),n=p(n,s,r,i,e[t+14],17,-1502002290),i=p(i,n,s,r,e[t+15],22,1236535329),r=d(r,i,n,s,e[t+1],5,-165796510),s=d(s,r,i,n,e[t+6],9,-1069501632),n=d(n,s,r,i,e[t+11],14,643717713),i=d(i,n,s,r,e[t],20,-373897302),r=d(r,i,n,s,e[t+5],5,-701558691),s=d(s,r,i,n,e[t+10],9,38016083),n=d(n,s,r,i,e[t+15],14,-660478335),i=d(i,n,s,r,e[t+4],20,-405537848),r=d(r,i,n,s,e[t+9],5,568446438),s=d(s,r,i,n,e[t+14],9,-1019803690),n=d(n,s,r,i,e[t+3],14,-187363961),i=d(i,n,s,r,e[t+8],20,1163531501),r=d(r,i,n,s,e[t+13],5,-1444681467),s=d(s,r,i,n,e[t+2],9,-51403784),n=d(n,s,r,i,e[t+7],14,1735328473),i=d(i,n,s,r,e[t+12],20,-1926607734),r=c(r,i,n,s,e[t+5],4,-378558),s=c(s,r,i,n,e[t+8],11,-2022574463),n=c(n,s,r,i,e[t+11],16,1839030562),i=c(i,n,s,r,e[t+14],23,-35309556),r=c(r,i,n,s,e[t+1],4,-1530992060),s=c(s,r,i,n,e[t+4],11,1272893353),n=c(n,s,r,i,e[t+7],16,-155497632),i=c(i,n,s,r,e[t+10],23,-1094730640),r=c(r,i,n,s,e[t+13],4,681279174),s=c(s,r,i,n,e[t],11,-358537222),n=c(n,s,r,i,e[t+3],16,-722521979),i=c(i,n,s,r,e[t+6],23,76029189),r=c(r,i,n,s,e[t+9],4,-640364487),s=c(s,r,i,n,e[t+12],11,-421815835),n=c(n,s,r,i,e[t+15],16,530742520),i=c(i,n,s,r,e[t+2],23,-995338651),r=y(r,i,n,s,e[t],6,-198630844),s=y(s,r,i,n,e[t+7],10,1126891415),n=y(n,s,r,i,e[t+14],15,-1416354905),i=y(i,n,s,r,e[t+5],21,-57434055),r=y(r,i,n,s,e[t+12],6,1700485571),s=y(s,r,i,n,e[t+3],10,-1894986606),n=y(n,s,r,i,e[t+10],15,-1051523),i=y(i,n,s,r,e[t+1],21,-2054922799),r=y(r,i,n,s,e[t+8],6,1873313359),s=y(s,r,i,n,e[t+15],10,-30611744),n=y(n,s,r,i,e[t+6],15,-1560198380),i=y(i,n,s,r,e[t+13],21,1309151649),r=y(r,i,n,s,e[t+4],6,-145523070),s=y(s,r,i,n,e[t+11],10,-1120210379),n=y(n,s,r,i,e[t+2],15,718787259),i=y(i,n,s,r,e[t+9],21,-343485551),r=o(r,a),i=o(i,l),n=o(n,u),s=o(s,f)}return[r,i,n,s]}function h(e,t=i.Hex){const r=t||i.Base64,s=f(a(e),e.length*n);switch(r){case i.Raw:return s;case i.Hex:return function(e){const t="0123456789abcdef",r=[];for(let i=0,n=4*e.length;i<n;i++)r.push(t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15));return r.join("")}(s);case i.String:return l(s);case i.Base64:return function(e){const t=[];for(let r=0,i=4*e.length;r<i;r+=3){const i=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let n=0;n<4;n++)8*r+6*n>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-n)&63))}return t.join("")}(s)}}},35134:(e,t,r)=>{r.d(t,{M:()=>X});var i=r(36663),n=r(81977),s=(r(7283),r(7753),r(39994)),o=r(40266),a=r(82064),l=r(67134),u=r(41151);let p=class extends((0,u.J)(a.wq)){constructor(e){super(e),this.expression=null,this.title=null,this.returnType=null}};(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"title",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"returnType",void 0),p=(0,i._)([(0,o.j)("esri.layers.support.ExpressionInfo")],p);const d=p;var c;let y=c=class extends a.wq{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new c({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,l.d9)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,i._)([(0,n.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"isAutoGenerated",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"alias",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"onStatisticField",void 0),(0,i._)([(0,n.Cb)({type:d,json:{write:!0}})],y.prototype,"onStatisticExpression",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"statisticType",void 0),y=c=(0,i._)([(0,o.j)("esri.layers.support.AggregateField")],y);const f=y;var h,m=r(48257),b=r(44308),w=(r(86004),r(45510),r(16192),r(17259),r(878),r(22836),r(50172)),g=(r(72043),r(72506)),v=r(54021),_=r(86745),x=r(79438),S=r(34248),C=r(39835),F=r(51599),I=r(23556),j=r(26732);let E=h=class extends m.B{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(e,t,r){const i=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,_.RB)(r,i,t)}readRenderer(e,t,r){const i=t.drawingInfo?.renderer;return i?(0,g.a)(i,t,r)??void 0:(0,I.Ob)(t,r)}clone(){return new h({fields:(0,l.d9)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,l.d9)(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:(0,l.d9)(this.popupTemplate),renderer:(0,l.d9)(this.renderer)})}};(0,i._)([(0,x.J)({binning:"binning"})],E.prototype,"type",void 0),(0,i._)([(0,x.J)({geohash:"geohash"})],E.prototype,"binType",void 0),(0,i._)([(0,n.Cb)({type:Number,range:{min:1,max:9},json:{write:!0}})],E.prototype,"fixedBinLevel",void 0),(0,i._)([(0,n.Cb)({type:[j.Z],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],E.prototype,"labelingInfo",void 0),(0,i._)([(0,n.Cb)(F.iR)],E.prototype,"labelsVisible",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],E.prototype,"maxScale",void 0),(0,i._)([(0,n.Cb)(F.C_)],E.prototype,"popupEnabled",void 0),(0,i._)([(0,n.Cb)({type:b.Z,json:{name:"popupInfo",write:!0}})],E.prototype,"popupTemplate",void 0),(0,i._)([(0,n.Cb)({type:[f],json:{write:!0}})],E.prototype,"fields",void 0),(0,i._)([(0,C.c)("fields")],E.prototype,"writeFields",null),(0,i._)([(0,n.Cb)({types:v.A,json:{write:{target:"drawingInfo.renderer"}}})],E.prototype,"renderer",void 0),(0,i._)([(0,S.r)("renderer",["drawingInfo.renderer"])],E.prototype,"readRenderer",null),E=h=(0,i._)([(0,o.j)("esri.layers.support.FeatureReductionBinning")],E);const R=E;var Z,A=r(4905),O=r(95550);function T(e){return"simple"===e.type&&!e.visualVariables?.length}let M=Z=class extends a.wq{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,O.t_)("80px"),this.clusterMinSize=(0,O.t_)("12px"),this.clusterMaxSize=(0,O.t_)("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(e,t,r){const i=t.drawingInfo?.renderer;return i?.authoringInfo?.isAutoGenerated?null:i?T(i)?null:(0,g.a)(i,t,r)??void 0:(0,I.Ob)(t,r)}readSymbol(e,t,r){const i=t.drawingInfo?.renderer;if(i?.authoringInfo?.isAutoGenerated)return null;if(i&&T(i)){const e=(0,g.a)(i,t,r);return e?.symbol}return null}writeSymbol(e,t,r,i){const n=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||n){const r=new w.Z({symbol:e});t.drawingInfo={renderer:r.write({},i)}}}writeFields(e,t,r){const i=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,_.RB)(r,i,t)}readFields(e,t,r){return e.filter((e=>!e.isAutoGenerated)).map((e=>f.fromJSON(e)))}clone(){return new Z({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,l.d9)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,l.d9)(this.fields),maxScale:this.maxScale,renderer:(0,l.d9)(this.renderer),symbol:(0,l.d9)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,l.d9)(this.popupTemplate)})}};(0,i._)([(0,n.Cb)({type:["cluster"],readOnly:!0,json:{write:!0}})],M.prototype,"type",void 0),(0,i._)([(0,n.Cb)({type:Number,cast:e=>"auto"===e?e:(0,O.t_)(e),json:{write:!0}})],M.prototype,"clusterRadius",void 0),(0,i._)([(0,n.Cb)({type:Number,cast:O.t_,json:{write:!0}})],M.prototype,"clusterMinSize",void 0),(0,i._)([(0,n.Cb)({type:Number,cast:O.t_,json:{write:!0}})],M.prototype,"clusterMaxSize",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],M.prototype,"maxScale",void 0),(0,i._)([(0,n.Cb)(F.C_)],M.prototype,"popupEnabled",void 0),(0,i._)([(0,n.Cb)({type:b.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],M.prototype,"popupTemplate",void 0),(0,i._)([(0,n.Cb)({types:v.A,json:{write:{target:"drawingInfo.renderer"}}})],M.prototype,"renderer",void 0),(0,i._)([(0,S.r)("renderer",["drawingInfo.renderer"])],M.prototype,"readRenderer",null),(0,i._)([(0,n.Cb)({types:A.AH})],M.prototype,"symbol",void 0),(0,i._)([(0,S.r)("symbol",["drawingInfo.renderer"])],M.prototype,"readSymbol",null),(0,i._)([(0,C.c)("symbol")],M.prototype,"writeSymbol",null),(0,i._)([(0,n.Cb)({type:[j.Z],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],M.prototype,"labelingInfo",void 0),(0,i._)([(0,n.Cb)(F.iR)],M.prototype,"labelsVisible",void 0),(0,i._)([(0,n.Cb)({type:[f],json:{write:!0}})],M.prototype,"fields",void 0),(0,i._)([(0,C.c)("fields")],M.prototype,"writeFields",null),(0,i._)([(0,S.r)("fields")],M.prototype,"readFields",null),M=Z=(0,i._)([(0,o.j)("esri.layers.support.FeatureReductionCluster")],M);const V=M;var q=r(69766);const z={key:"type",base:m.B,typeMap:{cluster:V,binning:R}},G={types:{key:"type",base:m.B,typeMap:{selection:q.Z,cluster:V,binning:R}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:z},"portal-item":{types:z},"web-scene":{types:{key:"type",base:m.B,typeMap:{selection:q.Z}}}}}};var P,B=r(70375),L=r(13802),k=r(86630),D=r(95187),N=r(82638),$=(r(98872),r(67272));let H=P=class extends N.Z{writeLevels(e,t,r){for(const r in e){const e=this.levels[r];return void(t.stops=e)}}clone(){return new P({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,$.iY)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,$.iY)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:(0,l.d9)(this.levels)})}};(0,i._)([(0,n.Cb)()],H.prototype,"levels",void 0),(0,i._)([(0,C.c)("levels")],H.prototype,"writeLevels",null),H=P=(0,i._)([(0,o.j)("esri.views.2d.engine.LevelDependentSizeVariable")],H);const U=L.Z.getLogger("esri.views.2d.layers.support.clusterUtils");s.Z.add("esri-cluster-arcade-enabled",!0);const J=(0,s.Z)("esri-cluster-arcade-enabled");function Q(e,t,r,i){const n=(0,k.F)(t),s="mode"===r?`cluster_type_${n}`:"sum"===r?`cluster_sum_${n}`:`cluster_avg_${n}`;return e.some((e=>e.name===s))||e.push(new f({name:s,isAutoGenerated:!0,onStatisticExpression:new d({expression:t,returnType:i}),statisticType:r})),s}function Y(e,t,r,i,n){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const s=function(e,t,r){switch(e){case"sum":return`cluster_sum_${t}`;case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"avg_norm":{const e=r,i="field",n=t.toLowerCase()+",norm:"+i+","+e.toLowerCase();return"cluster_avg_"+(0,k.F)(n)}}}(r,t,n);return e.some((e=>e.name===s))||("avg_norm"===r?e.push(new f({name:s,isAutoGenerated:!0,onStatisticExpression:new d({expression:`$feature.${t} / $feature.${n}`,returnType:i}),statisticType:"avg"})):e.push(new f({name:s,isAutoGenerated:!0,onStatisticField:t,statisticType:r}))),s}const X=e=>{let t=class extends e{constructor(...e){super(...e),this.own(this.watch("renderer",(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),!0))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const t=e.clone(),r=[new f({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],i=(t.fields??[]).filter((e=>!e.isAutoGenerated));if(e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated)return t.fields=[...r,...i],t;if(e.symbol)return t.fields=[...r,...i],t.renderer=null,t;if(!this.renderer)return e;const n=((e,t,r,i,n)=>{const s=t.clone();if(!(e=>{const t=t=>U.error(new B.Z("Unsupported-renderer",t,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const r=e.normalizationType;if("field"!==r)return t(`FeatureReductionCluster does not support a normalizationType of ${r}`),!1}break;case"simple":case"pie-chart":break;default:return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!J){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0})(s))return s;if(s.authoringInfo||(s.authoringInfo=new D.Z),s.authoringInfo.isAutoGenerated=!0,"visualVariables"in s){const t=(s.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),r=(e=>{for(const t of e)if("size"===t.type)return t;return null})(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=Y(e,t.field,"avg_angle","number"):t.valueExpression&&(t.field=Q(e,t.valueExpression,"avg_angle","number"),t.valueExpression=null):t.normalizationField?(t.field=Y(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=Y(e,t.field,"avg","number"):t.valueExpression&&(t.field=Q(e,t.valueExpression,"avg","number"),t.valueExpression=null)})),null==r&&(e=>{for(const t of e)if("cluster_count"===t.field)return!0})(t),s.visualVariables=t}switch(s.type){case"simple":break;case"pie-chart":for(const t of s.attributes)t.field?t.field=Y(e,t.field,"sum","number"):t.valueExpression&&(t.field=Q(e,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":s.field?s.field=Y(e,s.field,"mode","string"):s.valueExpression&&(s.field=Q(e,s.valueExpression,"mode","string"),s.valueExpression=null);break;case"class-breaks":s.normalizationField?(s.field=Y(e,s.field,"avg_norm","number",s.normalizationField),s.normalizationField=null):s.field?s.field=Y(e,s.field,"avg","number"):s.valueExpression&&(s.field=Q(e,s.valueExpression,"avg","number"),s.valueExpression=null)}return s})(r,this.renderer);return t.fields=[...r,...i],t.renderer=n,t}};return(0,i._)([(0,n.Cb)(G)],t.prototype,"featureReduction",null),t=(0,i._)([(0,o.j)("esri.layers.mixins.FeatureReductionLayer")],t),t}},48257:(e,t,r)=>{r.d(t,{B:()=>a});var i=r(36663),n=r(82064),s=r(81977),o=(r(7283),r(7753),r(39994),r(40266));let a=class extends n.wq{constructor(){super(...arguments),this.type=null}};(0,i._)([(0,s.Cb)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,i._)([(0,o.j)("esri.layers.support.FeatureReduction")],a)},69766:(e,t,r)=>{r.d(t,{Z:()=>u});var i,n=r(36663),s=r(81977),o=(r(7283),r(7753),r(39994),r(40266)),a=r(48257);let l=i=class extends a.B{constructor(e){super(e),this.type="selection"}clone(){return new i}};(0,n._)([(0,s.Cb)({type:["selection"]})],l.prototype,"type",void 0),l=i=(0,n._)([(0,o.j)("esri.layers.support.FeatureReductionSelection")],l);const u=l},23556:(e,t,r)=>{r.d(t,{C9:()=>E,Ci:()=>x,FV:()=>_,Fr:()=>h,JD:()=>m,JY:()=>T,Jj:()=>g,KE:()=>I,Ob:()=>G,SU:()=>S,VG:()=>F,Y5:()=>w,gG:()=>R,kZ:()=>O,kp:()=>j,nU:()=>V,rP:()=>Z,rk:()=>A,sX:()=>q,tD:()=>C,uj:()=>v});var i=r(88256),n=r(4905),s=r(70375),o=r(25709),a=r(84684),l=r(3593),u=r(54957),p=r(50172),d=r(72043),c=r(67692),y=r(14626),f=r(8284);const h=new o.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function m(e,t,r,i){const n=await M(e);if(await b(e,t,i),!n.addAttachment)throw new s.Z(i,"Layer source does not support addAttachment capability");return n.addAttachment(t,r)}function b(e,t,r){const{attributes:i}=t,{objectIdField:n}=e;return e.get("capabilities.data.supportsAttachment")?t?i?n&&i[n]?Promise.resolve():Promise.reject(new s.Z(r,`feature is missing the identifying attribute ${n}`)):Promise.reject(new s.Z(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new s.Z(r,"A feature is required to add/delete/update attachments")):Promise.reject(new s.Z(r,"this layer doesn't support attachments"))}async function w(e,t,r,i,n){const o=await M(e);if(await b(e,t,n),!o.updateAttachment)throw new s.Z(n,"Layer source does not support updateAttachment capability");return o.updateAttachment(t,r,i)}async function g(e,t,i){const{applyEdits:n}=await r.e(3261).then(r.bind(r,23261)),s=await e.load();return n(s,s.source,t,i)}async function v(e,t,i){const{uploadAssets:n}=await r.e(3261).then(r.bind(r,23261)),s=await e.load();return n(s,s.source,t,i)}async function _(e,t,r,i){const n=await M(e);if(await b(e,t,i),!n.deleteAttachments)throw new s.Z(i,"Layer source does not support deleteAttachments capability");return n.deleteAttachments(t,r)}async function x(e,t,r){const i=(await e.load({signal:t?.signal})).source;if(!i.fetchRecomputedExtents)throw new s.Z(r,"Layer source does not support fetchUpdates capability");return i.fetchRecomputedExtents(t)}async function S(e,t,r,i){t=c.Z.from(t),await e.load();const n=e.source,o=e.capabilities;if(!o?.data?.supportsAttachment)throw new s.Z(i,"this layer doesn't support attachments");const{attachmentTypes:a,objectIds:l,globalIds:u,num:p,size:d,start:y,where:f}=t;if(!o?.operations?.supportsQueryAttachments&&(a?.length>0||u?.length>0||d?.length>0||p||y||f))throw new s.Z(i,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(l?.length||u?.length||f))throw new s.Z(i,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!n.queryAttachments)throw new s.Z(i,"Layer source does not support queryAttachments capability",t);return n.queryAttachments(t)}async function C(e,t,r,i){const n=await M(e);if(!n.queryObjectIds)throw new s.Z(i,"Layer source does not support queryObjectIds capability");return n.queryObjectIds(y.Z.from(t)??e.createQuery(),r)}async function F(e,t,r,i){const n=await M(e);if(!n.queryFeatureCount)throw new s.Z(i,"Layer source does not support queryFeatureCount capability");return n.queryFeatureCount(y.Z.from(t)??e.createQuery(),r)}async function I(e,t,r,i){const n=await M(e);if(!n.queryExtent)throw new s.Z(i,"Layer source does not support queryExtent capability");return n.queryExtent(y.Z.from(t)??e.createQuery(),r)}async function j(e,t,r,i){const n=await M(e);if(!n.queryRelatedFeatures)throw new s.Z(i,"Layer source does not support queryRelatedFeatures capability");return n.queryRelatedFeatures(f.default.from(t),r)}async function E(e,t,r,i){const n=await M(e);if(!n.queryRelatedFeaturesCount)throw new s.Z(i,"Layer source does not support queryRelatedFeaturesCount capability");return n.queryRelatedFeaturesCount(f.default.from(t),r)}async function R(e){const t=e.source;if(t?.refresh)try{const{dataChanged:r,updates:i}=await t.refresh();if(null!=i&&(e.sourceJSON={...e.sourceJSON,...i},e.read(i,{origin:"service",url:e.parsedUrl})),r)return!0}catch{}if(e.definitionExpression)try{return(await(0,a.E)(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function Z(e){const t=new y.Z,r=e.get("capabilities.data"),i=e.get("capabilities.query");t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,i&&(t.compactGeometryEnabled=i.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=i.supportsDefaultSpatialReference),r&&(r.supportsZ&&null!=e.returnZ&&(t.returnZ=e.returnZ),r.supportsM&&null!=e.returnM&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:n,timeExtent:s}=e;return t.timeExtent=null!=n&&null!=s?s.offset(-n.value,n.unit):s||null,t.multipatchOption="multipatch"===e.geometryType?"xyFootprint":null,t}function A(e){const{globalIdField:t,fields:r}=e;if(t)return t;if(r)for(const e of r)if("esriFieldTypeGlobalID"===e.type)return e.name}function O(e){const{objectIdField:t,fields:r}=e;if(t)return t;if(r)for(const e of r)if("esriFieldTypeOID"===e.type)return e.name}function T(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}async function M(e){return(await e.load()).source}async function V(e,t){const r=e.parsedUrl?.path;r&&function(e){const t=e.editFieldsInfo;return!(!t?.creatorField&&!t?.editorField)||(e.userHasUpdateItemPrivileges?e.hasUpdateItemRestrictions:!!e.userHasFullEditingPrivileges&&e.hasFullEditingRestrictions)}(e)&&await async function(e,t){if(!i.id)return;if(i.id.findCredential(e))return;let r;try{const n=await(0,u.oP)(e,t);n&&(r=await i.id.checkSignInStatus(`${n}/sharing`))}catch(e){}if(r)try{const r=null!=t?t.signal:null;await i.id.getCredential(e,{signal:r})}catch(e){}}(r,t)}function q(e){return!e.sourceJSON?.isMultiServicesView&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const z=(0,l.d)({types:n.QT});function G(e,t){if(e.defaultSymbol)return e.types&&e.types.length?new d.Z({defaultSymbol:z(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map((e=>({id:e.id,symbol:z(e.symbol,e,t)})))}):new p.Z({symbol:z(e.defaultSymbol,e,t)})}},89076:(e,t,r)=>{r.d(t,{v:()=>a});var i=r(13802),n=r(12512),s=r(28790),o=r(17095);function a(){return{fields:{type:[n.Z],value:null},fieldsIndex:{readOnly:!0,get(){return new s.Z(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e){const r=this.fieldsIndex?.has(t);r||i.Z.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e})}return(0,o.Q0)(this.fieldsIndex,e)}}}}},8284:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i,n=r(36663),s=(r(91957),r(82064)),o=r(67134),a=r(81977),l=r(7283),u=r(40266),p=r(39835),d=r(10743),c=r(14685);let y=i=class extends s.wq{constructor(e){super(e),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(t.definitionExpression="1=1")}clone(){return new i((0,o.d9)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"cacheHint",void 0),(0,n._)([(0,a.Cb)({type:d.n,json:{write:!0}})],y.prototype,"dynamicDataSource",void 0),(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],y.prototype,"gdbVersion",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{write:!0}})],y.prototype,"geometryPrecision",void 0),(0,n._)([(0,a.Cb)({type:Date})],y.prototype,"historicMoment",void 0),(0,n._)([(0,p.c)("historicMoment")],y.prototype,"_writeHistoricMoment",null),(0,n._)([(0,a.Cb)({type:Number,json:{write:!0}})],y.prototype,"maxAllowableOffset",void 0),(0,n._)([(0,a.Cb)({type:[Number],json:{write:!0}})],y.prototype,"objectIds",void 0),(0,n._)([(0,a.Cb)({type:[String],json:{write:!0}})],y.prototype,"orderByFields",void 0),(0,n._)([(0,a.Cb)({type:[String],json:{write:!0}})],y.prototype,"outFields",void 0),(0,n._)([(0,a.Cb)({type:c.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],y.prototype,"outSpatialReference",void 0),(0,n._)([(0,a.Cb)({json:{write:!0}})],y.prototype,"relationshipId",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],y.prototype,"start",void 0),(0,n._)([(0,p.c)("start"),(0,p.c)("num")],y.prototype,"writeStart",null),(0,n._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],y.prototype,"num",void 0),(0,n._)([(0,a.Cb)({json:{write:!0}})],y.prototype,"returnGeometry",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],y.prototype,"returnM",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],y.prototype,"returnZ",void 0),(0,n._)([(0,a.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],y.prototype,"where",void 0),y=i=(0,n._)([(0,u.j)("esri.rest.support.RelationshipQuery")],y),y.from=(0,l.se)(y);const f=y}}]);