"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1007,8284],{71007:(e,t,o)=>{o.r(t),o.d(t,{executeRelationshipQuery:()=>p,executeRelationshipQueryForCount:()=>y});var r=o(84238),i=o(66341),s=o(27707);function n(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function a(e,t,o){const r=await u(e,t,o),i=r.data,s=i.geometryType,n=i.spatialReference,a={};for(const e of i.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:n,hasZ:!!i.hasZ,hasM:!!i.hasM,features:e.relatedRecords};if(null!=e.objectId)a[e.objectId]=t;else for(const o of Object.keys(e))"relatedRecords"!==o&&(a[e[o]]=t)}return{...r,data:a}}async function d(e,t,o){const r=await u(e,t,o,{returnCountOnly:!0}),i=r.data,s={};for(const e of i.relatedRecordGroups)null!=e.objectId&&(s[e.objectId]=e.count);return{...r,data:s}}async function u(e,t,o={},r){const a=(0,s.A)({...e.query,f:"json",...r,...n(t,r)});return(0,i.default)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...a}})}var c=o(51211),l=o(8284);async function p(e,t,o){return t=l.default.from(t),a((0,r.en)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=c.Z.fromJSON(t[e]))),o}))}async function y(e,t,o){return t=l.default.from(t),d((0,r.en)(e),t,{...o}).then((e=>e.data))}},8284:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var r,i=o(36663),s=(o(91957),o(82064)),n=o(67134),a=o(81977),d=o(7283),u=o(40266),c=o(39835),l=o(10743),p=o(14685);let y=r=class extends s.wq{constructor(e){super(e),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(t.definitionExpression="1=1")}clone(){return new r((0,n.d9)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"cacheHint",void 0),(0,i._)([(0,a.Cb)({type:l.n,json:{write:!0}})],y.prototype,"dynamicDataSource",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],y.prototype,"gdbVersion",void 0),(0,i._)([(0,a.Cb)({type:Number,json:{write:!0}})],y.prototype,"geometryPrecision",void 0),(0,i._)([(0,a.Cb)({type:Date})],y.prototype,"historicMoment",void 0),(0,i._)([(0,c.c)("historicMoment")],y.prototype,"_writeHistoricMoment",null),(0,i._)([(0,a.Cb)({type:Number,json:{write:!0}})],y.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,a.Cb)({type:[Number],json:{write:!0}})],y.prototype,"objectIds",void 0),(0,i._)([(0,a.Cb)({type:[String],json:{write:!0}})],y.prototype,"orderByFields",void 0),(0,i._)([(0,a.Cb)({type:[String],json:{write:!0}})],y.prototype,"outFields",void 0),(0,i._)([(0,a.Cb)({type:p.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],y.prototype,"outSpatialReference",void 0),(0,i._)([(0,a.Cb)({json:{write:!0}})],y.prototype,"relationshipId",void 0),(0,i._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],y.prototype,"start",void 0),(0,i._)([(0,c.c)("start"),(0,c.c)("num")],y.prototype,"writeStart",null),(0,i._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],y.prototype,"num",void 0),(0,i._)([(0,a.Cb)({json:{write:!0}})],y.prototype,"returnGeometry",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],y.prototype,"returnM",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],y.prototype,"returnZ",void 0),(0,i._)([(0,a.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],y.prototype,"where",void 0),y=r=(0,i._)([(0,u.j)("esri.rest.support.RelationshipQuery")],y),y.from=(0,d.se)(y);const h=y}}]);