"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5007],{15007:(e,n,t)=>{t.r(n),t.d(n,{registerFunctions:()=>v});var a=t(78053),r=t(58780),i=t(19249),s=t(7182),l=t(94634),o=t(33455),u=t(88009),f=t(58830),c=t(94837),d=t(86727),m=t(45712),y=t(62700),p=t(2441),h=t(81273),g=t(40581),w=t(20155),F=t(7429),I=t(68673),D=t(62294),E=t(45573),x=t(33926),N=t(3362),b=t(12926),S=t(12512),C=t(93968);async function A(e,n,t){const a=e.getVariables();if(a.length>0){const r=[];for(let e=0;e<a.length;e++){const i={name:a[e]};r.push(await n.evaluateIdentifier(t,i))}const i={};for(let e=0;e<a.length;e++)i[a[e]]=r[e];return e.parameters=i,e}return e}function T(e,n,t=null){for(const t in e)if(t.toLowerCase()===n.toLowerCase())return e[t];return t}function P(e){if(null===e)return null;const n={type:T(e,"type",""),name:T(e,"name","")};if("range"===n.type)n.range=T(e,"range",[]);else{n.codedValues=[];for(const t of T(e,"codedValues",[]))n.codedValues.push({name:T(t,"name",""),code:T(t,"code",null)})}return n}function $(e){if(null===e)return null;const n={},t=T(e,"wkt",null);null!==t&&(n.wkt=t);const a=T(e,"wkid",null);return null!==a&&(n.wkid=a),n}function H(e){if(null===e)return null;const n={hasZ:T(e,"hasz",!1),hasM:T(e,"hasm",!1)},t=T(e,"spatialreference",null);t&&(n.spatialReference=$(t));const a=T(e,"x",null);if(null!==a)return n.x=a,n.y=T(e,"y",null),n;const r=T(e,"rings",null);if(null!==r)return n.rings=r,n;const i=T(e,"paths",null);if(null!==i)return n.paths=i,n;const s=T(e,"points",null);if(null!==s)return n.points=s,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const a=T(e,t,null);null!==a&&(n[t]=a)}return n}function v(e){"async"===e.mode&&(e.functions.timezone=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,l)=>{if((0,c.C)(l,1,2,n,t),(0,c.r)(l[0])){if(await l[0].load(),1===l.length||null===l[1])return l[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(l[1]instanceof i.Z)||!1===l[1].hasField("type"))throw new s.aV(n,s.rH.InvalidParameter,t);const e=l[1].field("type");if(!1===(0,c.c)(e))throw new s.aV(n,s.rH.InvalidParameter,t);switch((0,c.j)(e).toLowerCase()){case"preferredtimezone":return l[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return l[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return l[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(l[1].hasField("fieldname")&&(0,c.c)(l[1].field("fieldname")))return l[0].dateTimeReferenceFieldIndex.fieldTimeZone((0,c.j)(l[1].field("fieldname")))}throw new s.aV(n,s.rH.InvalidParameter,t)}const o=(0,c.l)(l[0],(0,c.G)(n));if(null===o)return null;const u=o.timeZone;return"system"===u?a.iG.systemTimeZoneCanonicalName:u}))},e.functions.sqltimestamp=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,r)=>{(0,c.C)(r,1,3,n,t);const i=r[0];if((0,c.k)(i)){if(1===r.length)return i.toSQLString();if(2===r.length)return i.changeTimeZone((0,c.j)(r[1])).toSQLString();throw new s.aV(n,s.rH.InvalidParameter,t)}if((0,c.r)(i)){if(3!==r.length)throw new s.aV(n,s.rH.InvalidParameter,t);await i.load();const e=(0,c.j)(r[1]);if(!1===(0,c.k)(r[2]))throw new s.aV(n,s.rH.InvalidParameter,t);const a=i.fieldTimeZone(e);return null===a?r[2].toSQLString():r[2].changeTimeZone(a).toSQLString()}throw new s.aV(n,s.rH.InvalidParameter,t)}))},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(n,t){return e.standardFunctionAsync(n,t,((e,a,r)=>{if((0,c.C)(r,2,4,n,t),r[0]instanceof o.Z){const e=(0,c.j)(r[1]);let a=(0,c.D)(r[2],null);const i=(0,c.h)((0,c.D)(r[3],!0));if(null===a&&(a=["*"]),!1===(0,c.m)(a))throw new s.aV(n,s.rH.InvalidParameter,t);return r[0].featureSetById(e,i,a)}throw new s.aV(n,s.rH.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(n,t){return e.standardFunctionAsync(n,t,((e,a,r)=>{if((0,c.C)(r,1,2,n,t),(0,c.p)(r[0])){let e=(0,c.D)(r[1],"datasource");return null===e&&(e="datasource"),e=(0,c.j)(e).toLowerCase(),(0,u.convertToFeatureSet)(r[0].fullSchema(),e,n.lrucache,n.interceptor,n.spatialReference)}throw new s.aV(n,s.rH.InvalidParameter,t)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(n,t){return e.standardFunctionAsync(n,t,((e,a,i)=>{if((0,c.C)(i,2,5,n,t),null===i[0])throw new s.aV(n,s.rH.PortalRequired,t);if(i[0]instanceof r.Z){const e=(0,c.j)(i[1]),a=(0,c.j)(i[2]);let r=(0,c.D)(i[3],null);const l=(0,c.h)((0,c.D)(i[4],!0));if(null===r&&(r=["*"]),!1===(0,c.m)(r))throw new s.aV(n,s.rH.InvalidParameter,t);let o=null;return o=n.services&&n.services.portal?n.services.portal:C.Z.getDefault(),o=(0,d._)(i[0],o),(0,u.constructFeatureSetFromPortalItem)(e,a,n.spatialReference,r,l,o,n.lrucache,n.interceptor)}if(!1===(0,c.c)(i[0]))throw new s.aV(n,s.rH.PortalRequired,t);const l=(0,c.j)(i[0]),o=(0,c.j)(i[1]);let f=(0,c.D)(i[2],null);const m=(0,c.h)((0,c.D)(i[3],!0));if(null===f&&(f=["*"]),!1===(0,c.m)(f))throw new s.aV(n,s.rH.InvalidParameter,t);return(0,u.constructFeatureSetFromPortalItem)(l,o,n.spatialReference,f,m,n.services?.portal??C.Z.getDefault(),n.lrucache,n.interceptor)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(n,t){return e.standardFunctionAsync(n,t,((e,a,r)=>{if((0,c.C)(r,2,4,n,t),r[0]instanceof o.Z){const e=(0,c.j)(r[1]);let a=(0,c.D)(r[2],null);const i=(0,c.h)((0,c.D)(r[3],!0));if(null===a&&(a=["*"]),!1===(0,c.m)(a))throw new s.aV(n,s.rH.InvalidParameter,t);return r[0].featureSetByName(e,i,a)}throw new s.aV(n,s.rH.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(n,t){return e.standardFunction(n,t,((e,a,r)=>{(0,c.C)(r,1,1,n,t);let l=r[0];const o={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,c.c)(l))l=JSON.parse(l),void 0!==l.layerDefinition?(o.layerDefinition=l.layerDefinition,o.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(o.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(o.featureSet.features=l.features,o.featureSet.geometryType=l.geometryType,o.layerDefinition.geometryType=o.featureSet.geometryType,o.layerDefinition.objectIdField=l.objectIdFieldName??"",o.layerDefinition.typeIdField=l.typeIdFieldName,o.layerDefinition.globalIdField=l.globalIdFieldName,o.layerDefinition.fields=l.fields,l.spatialReference&&(o.layerDefinition.spatialReference=l.spatialReference));else{if(!(r[0]instanceof i.Z))throw new s.aV(n,s.rH.InvalidParameter,t);{l=JSON.parse(r[0].castToText(!0));const e=T(l,"layerdefinition");if(null!==e){o.layerDefinition.geometryType=T(e,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.globalIdField=T(e,"globalidfield",""),o.layerDefinition.objectIdField=T(e,"objectidfield",""),o.layerDefinition.typeIdField=T(e,"typeidfield",""),o.layerDefinition.hasZ=!0===T(e,"hasz",!1),o.layerDefinition.hasM=!0===T(e,"hasm",!1);const n=T(e,"spatialreference",null);n&&(o.layerDefinition.spatialReference=$(n));for(const n of T(e,"fields",[])){const e={name:T(n,"name",""),alias:T(n,"alias",""),type:T(n,"type",""),nullable:T(n,"nullable",!0),editable:T(n,"editable",!0),length:T(n,"length",null),domain:P(T(n,"domain"))};o.layerDefinition.fields.push(e)}const t=T(l,"featureset",null);if(t){const e={};for(const n of o.layerDefinition.fields)e[n.name.toLowerCase()]=n.name;for(const n of T(t,"features",[])){const t={},a=T(n,"attributes",{});for(const n in a)t[e[n.toLowerCase()]]=a[n];o.featureSet.features.push({attributes:t,geometry:H(T(n,"geometry",null))})}}}else{o.layerDefinition.hasZ=!0===T(l,"hasz",!1),o.layerDefinition.hasM=!0===T(l,"hasm",!1),o.layerDefinition.geometryType=T(l,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.objectIdField=T(l,"objectidfieldname",""),o.layerDefinition.typeIdField=T(l,"typeidfieldname","");const e=T(l,"spatialreference",null);e&&(o.layerDefinition.spatialReference=$(e));let n=T(l,"fields",null);if((0,c.m)(n))for(const e of n){const n={name:T(e,"name",""),alias:T(e,"alias",""),type:T(e,"type",""),nullable:T(e,"nullable",!0),editable:T(e,"editable",!0),length:T(e,"length",null),domain:P(T(e,"domain"))};o.layerDefinition.fields.push(n)}else n=null,o.layerDefinition.fields=n;const t={};for(const e of o.layerDefinition.fields)t[e.name.toLowerCase()]=e.name;let a=T(l,"features",null);if((0,c.m)(a))for(const e of a){const n={},a=T(e,"attributes",{});for(const e in a)n[t[e.toLowerCase()]]=a[e];o.featureSet.features.push({attributes:n,geometry:H(T(e,"geometry",null))})}else a=null,o.featureSet.features=a}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,n){for(const n of["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(n===e)return!0;return!1}(e.layerDefinition.geometryType)&&!1!==(0,c.m)(e.layerDefinition.fields)&&!1!==(0,c.m)(e.featureSet.features)}(o))throw new s.aV(n,s.rH.InvalidParameter,t);return""===(o?.layerDefinition?.geometryType||"")&&(o.layerDefinition.geometryType="esriGeometryNull"),w.Z.create(o,n.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(n,t){return e.standardFunctionAsync(n,t,(async(a,r,i)=>{if((0,c.C)(i,2,2,n,t),(0,c.m)(i[0])||(0,c.o)(i[0])){const e=[];let a=i[0];a instanceof f.Z&&(a=a.toArray());let r=null;if(!(0,c.i)(i[1]))throw new s.aV(n,s.rH.InvalidParameter,t);r=i[1].createFunction(n);for(const n of a){const t=r(n);(0,x.y8)(t)?!0===await t&&e.push(n):!0===t&&e.push(n)}return e}if((0,c.r)(i[0])){const t=await i[0].load(),a=N.WhereClause.create(i[1],t.getFieldsIndex()),r=a.getVariables();if(r.length>0){const t=[];for(let a=0;a<r.length;a++){const i={name:r[a]};t.push(await e.evaluateIdentifier(n,i))}const s={};for(let e=0;e<r.length;e++)s[r[e]]=t[e];return a.parameters=s,new y.Z({parentfeatureset:i[0],whereclause:a})}return new y.Z({parentfeatureset:i[0],whereclause:a})}throw new s.aV(n,s.rH.InvalidParameter,t)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,r)=>{if((0,c.C)(r,2,2,n,t),(0,c.r)(r[0])){const e=new F.Z(r[1]);return new p.Z({parentfeatureset:r[0],orderbyclause:e})}throw new s.aV(n,s.rH.InvalidParameter,t)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,r)=>{if((0,c.C)(r,2,2,n,t),(0,c.r)(r[0]))return new h.Z({parentfeatureset:r[0],topnum:r[1]});if((0,c.m)(r[0]))return(0,c.g)(r[1])>=r[0].length?r[0].slice(0):r[0].slice(0,(0,c.g)(r[1]));if((0,c.o)(r[0]))return(0,c.g)(r[1])>=r[0].length()?r[0].slice(0):r[0].slice(0,(0,c.g)(r[1]));throw new s.aV(n,s.rH.InvalidParameter,t)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,r)=>{if((0,c.C)(r,1,1,n,t),(0,c.r)(r[0])){const t=await r[0].first(e.abortSignal);if(null!==t){const e=l.Z.createFromGraphicLikeObject(t.geometry,t.attributes,r[0],n.timeReference);return e._underlyingGraphic=t,e}return t}return(0,c.m)(r[0])?0===r[0].length?null:r[0][0]:(0,c.o)(r[0])?0===r[0].length()?null:r[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,r)=>{(0,c.C)(r,1,2,n,t);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(r.length>1)if(r[1]instanceof i.Z){if(r[1].hasField("minsize")&&(l.minsize=(0,c.g)(r[1].field("minsize"))),r[1].hasField("metadata")&&(l.returnMetadata=(0,c.h)(r[1].field("metadata"))),r[1].hasField("maxsize")&&(l.maxsize=(0,c.g)(r[1].field("maxsize"))),r[1].hasField("types")){const e=(0,c.a0)(r[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==r[1])throw new s.aV(n,s.rH.InvalidParameter,t);if((0,c.p)(r[0])){let e=r[0]._layer;return e instanceof b.default&&(e=(0,u.constructFeatureSet)(e,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===e||!1===(0,c.r)(e)?[]:(await e.load(),e.queryAttachments(r[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===r[0])return[];throw new s.aV(n,s.rH.InvalidParameter,t)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,r)=>{(0,c.C)(r,2,4,n,t);const i=r[0],l=(0,c.j)(r[1]);let o=(0,c.D)(r[2],null);const f=(0,c.h)((0,c.D)(r[3],!0));if(null===o&&(o=["*"]),!1===(0,c.m)(o))throw new s.aV(n,s.rH.InvalidParameter,t);if(null===r[0])return null;if(!(0,c.p)(r[0]))throw new s.aV(n,s.rH.InvalidParameter,t);let d=i._layer;if(d instanceof b.default&&(d=(0,u.constructFeatureSet)(d,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===d)return null;if(!1===(0,c.r)(d))return null;d=await d.load();const m=d.relationshipMetaData().filter((e=>e.name===l));if(0===m.length)return null;if(void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1)return(0,u.constructFeatureSetFromRelationship)(d,m[0],i.field(d.objectIdField),d.spatialReference,o,f,n.lrucache,n.interceptor);let y=d.serviceUrl();if(!y)return null;y="/"===y.charAt(y.length-1)?y+m[0].relatedTableId.toString():y+"/"+m[0].relatedTableId.toString();const p=await(0,u.constructFeatureSetFromUrl)(y,d.spatialReference,o,f,n.lrucache,n.interceptor);await p.load();let h=p.relationshipMetaData();if(h=h.filter((e=>e.id===m[0].id)),!1===i.hasField(m[0].keyField)||null===i.field(m[0].keyField)){const e=await d.getFeatureByObjectId(i.field(d.objectIdField),[m[0].keyField]);if(e){const n=N.WhereClause.create(h[0].keyField+"= @id",p.getFieldsIndex());return n.parameters={id:e.attributes[m[0].keyField]},p.filter(n)}return new g.Z({parentfeatureset:p})}const w=N.WhereClause.create(h[0].keyField+"= @id",p.getFieldsIndex());return w.parameters={id:i.field(m[0].keyField)},p.filter(w)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,r)=>{(0,c.C)(r,2,3,n,t);const i=r[0],l=(0,c.j)((0,c.D)(r[1],"")).toLowerCase(),o=(0,c.c)(r[2])?(0,c.j)(r[2]):null;if(null===r[0])return null;if(!(0,c.p)(r[0]))throw new s.aV(n,s.rH.InvalidParameter,t);let f=i._layer;if(f instanceof b.default&&(f=(0,u.constructFeatureSet)(f,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===f)return null;if(!1===(0,c.r)(f))return null;await f.load();const d=f.serviceUrl(),y=await(0,u.constructAssociationMetaDataFeatureSetFromUrl)(d,n.spatialReference);let p=null,h=null,g=!1;if(null!==o&&""!==o&&void 0!==o){for(const e of y.terminals)e.terminalName===o&&(h=e.terminalId);null===h&&(g=!0)}const w=y.associations.getFieldsIndex(),F=w.get("TOGLOBALID").name,D=w.get("FROMGLOBALID").name,E=w.get("TOTERMINALID").name,x=w.get("FROMTERMINALID").name,C=w.get("FROMNETWORKSOURCEID").name,A=w.get("TONETWORKSOURCEID").name,T=w.get("ASSOCIATIONTYPE").name,P=w.get("ISCONTENTVISIBLE").name,$=w.get("OBJECTID").name;for(const e of f.fields)if("global-id"===e.type){p=i.field(e.name);break}let H=null,v=new m.yN(new S.Z({name:"percentalong",alias:"percentalong",type:"double"}),N.WhereClause.create("0",y.associations.getFieldsIndex())),L=new m.yN(new S.Z({name:"side",alias:"side",type:"string"}),N.WhereClause.create("''",y.associations.getFieldsIndex()));const V="globalid",Z="globalId",R={};for(const e in y.lkp)R[e]=y.lkp[e].sourceId;const j=new m.TO(new S.Z({name:"classname",alias:"classname",type:"string"}),null,R);let W="";switch(l){case"midspan":{W=`((${F}='${p}') OR ( ${D}='${p}')) AND (${T} IN (5))`,j.codefield=N.WhereClause.create(`CASE WHEN (${F}='${p}') THEN ${C} ELSE ${A} END`,y.associations.getFieldsIndex());const e=(0,I.JW)(m.Xx.findField(y.associations.fields,D));e.name=V,e.alias=V,H=new m.yN(e,N.WhereClause.create(`CASE WHEN (${D}='${p}') THEN ${F} ELSE ${D} END`,y.associations.getFieldsIndex())),v=y.unVersion>=4?new m.$X(m.Xx.findField(y.associations.fields,w.get("PERCENTALONG").name)):new m.yN(new S.Z({name:"percentalong",alias:"percentalong",type:"double"}),N.WhereClause.create("0",y.associations.getFieldsIndex()));break}case"junctionedge":{W=`((${F}='${p}') OR ( ${D}='${p}')) AND (${T} IN (4,6))`,j.codefield=N.WhereClause.create(`CASE WHEN (${F}='${p}') THEN ${C} ELSE ${A} END`,y.associations.getFieldsIndex());const e=(0,I.JW)(m.Xx.findField(y.associations.fields,D));e.name=V,e.alias=V,H=new m.yN(e,N.WhereClause.create(`CASE WHEN (${D}='${p}') THEN ${F} ELSE ${D} END`,y.associations.getFieldsIndex())),L=new m.yN(new S.Z({name:"side",alias:"side",type:"string"}),N.WhereClause.create(`CASE WHEN (${T}=4) THEN 'from' ELSE 'to' END`,y.associations.getFieldsIndex()));break}case"connected":{let e=`${F}='@T'`,n=`${D}='@T'`;null!==h&&(e+=` AND ${E}=@A`,n+=` AND ${x}=@A`),W="(("+e+") OR ("+n+"))",W=(0,c.P)(W,"@T",p??""),e=(0,c.P)(e,"@T",p??""),null!==h&&(e=(0,c.P)(e,"@A",h.toString()),W=(0,c.P)(W,"@A",h.toString())),j.codefield=N.WhereClause.create("CASE WHEN "+e+` THEN ${C} ELSE ${A} END`,y.associations.getFieldsIndex());const t=(0,I.JW)(m.Xx.findField(y.associations.fields,D));t.name=V,t.alias=V,H=new m.yN(t,N.WhereClause.create("CASE WHEN "+e+` THEN ${D} ELSE ${F} END`,y.associations.getFieldsIndex()));break}case"container":W=`${F}='${p}' AND ${T} = 2`,null!==h&&(W+=` AND ${E} = `+h.toString()),j.codefield=C,W="( "+W+" )",H=new m.QP(m.Xx.findField(y.associations.fields,D),V,V);break;case"content":W=`(${D}='${p}' AND ${T} = 2)`,null!==h&&(W+=` AND ${x} = `+h.toString()),j.codefield=A,W="( "+W+" )",H=new m.QP(m.Xx.findField(y.associations.fields,F),V,V);break;case"structure":W=`(${F}='${p}' AND ${T} = 3)`,null!==h&&(W+=` AND ${E} = `+h.toString()),j.codefield=C,W="( "+W+" )",H=new m.QP(m.Xx.findField(y.associations.fields,D),V,Z);break;case"attached":W=`(${D}='${p}' AND ${T} = 3)`,null!==h&&(W+=` AND ${x} = `+h.toString()),j.codefield=A,W="( "+W+" )",H=new m.QP(m.Xx.findField(y.associations.fields,F),V,Z);break;default:throw new s.aV(n,s.rH.InvalidParameter,t)}return g&&(W="1 <> 1"),new m.Xx({parentfeatureset:y.associations,adaptedFields:[new m.$X(m.Xx.findField(y.associations.fields,$)),new m.$X(m.Xx.findField(y.associations.fields,P)),H,L,j,v],extraFilter:W?N.WhereClause.create(W,y.associations.getFieldsIndex()):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(n,t){return e.standardFunctionAsync(n,t,(async(a,r,l)=>{if((0,c.C)(l,3,3,n,t),!(0,c.r)(l[0]))throw new s.aV(n,s.rH.InvalidParameter,t);const o=await l[0].load(),u=[],f=[];let d=!1,m=[];if((0,c.c)(l[1]))m.push(l[1]);else if(l[1]instanceof i.Z)m.push(l[1]);else if((0,c.m)(l[1]))m=l[1];else{if(!(0,c.o)(l[1]))throw new s.aV(n,s.rH.InvalidParameter,t);m=l[1].toArray()}for(const e of m)if((0,c.c)(e)){const n=N.WhereClause.create((0,c.j)(e),o.getFieldsIndex()),t=!0===(0,D.y5)(n)?(0,c.j)(e):"%%%%FIELDNAME";u.push({name:t,expression:n}),"%%%%FIELDNAME"===t&&(d=!0)}else{if(!(e instanceof i.Z))throw new s.aV(n,s.rH.InvalidParameter,t);{const a=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",r=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===a&&(d=!0),!a)throw new s.aV(n,s.rH.InvalidParameter,t);u.push({name:a,expression:N.WhereClause.create(r||a,o.getFieldsIndex())})}}if(m=[],(0,c.c)(l[2]))m.push(l[2]);else if((0,c.m)(l[2]))m=l[2];else if((0,c.o)(l[2]))m=l[2].toArray();else{if(!(l[2]instanceof i.Z))throw new s.aV(n,s.rH.InvalidParameter,t);m.push(l[2])}for(const e of m){if(!(e instanceof i.Z))throw new s.aV(n,s.rH.InvalidParameter,t);{const a=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",i=e.hasField("expression")?e.field("expression"):"";if(!a||!r||!i)throw new s.aV(n,s.rH.InvalidParameter,t);f.push({name:a,statistic:r.toLowerCase(),expression:N.WhereClause.create(i,o.getFieldsIndex())})}}if(d){const e={};for(const n of o.fields)e[n.name.toLowerCase()]=1;for(const n of u)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of f)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let n=0;for(const t of u)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}for(const t of u)await A(t.expression,e,n);for(const t of f)await A(t.expression,e,n);return l[0].groupby(u,f)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(n,t){return e.standardFunctionAsync(n,t,(async(a,r,l)=>{if((0,c.r)(l[0])){(0,c.C)(l,2,2,n,t);const a=await l[0].load(),r=[];let o=[];if((0,c.c)(l[1]))o.push(l[1]);else if(l[1]instanceof i.Z)o.push(l[1]);else if((0,c.m)(l[1]))o=l[1];else{if(!(0,c.o)(l[1]))throw new s.aV(n,s.rH.InvalidParameter,t);o=l[1].toArray()}let u=!1;for(const e of o)if((0,c.c)(e)){const n=N.WhereClause.create((0,c.j)(e),a.getFieldsIndex()),t=!0===(0,D.y5)(n)?(0,c.j)(e):"%%%%FIELDNAME";r.push({name:t,expression:n}),"%%%%FIELDNAME"===t&&(u=!0)}else{if(!(e instanceof i.Z))throw new s.aV(n,s.rH.InvalidParameter,t);{const i=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===i&&(u=!0),!i)throw new s.aV(n,s.rH.InvalidParameter,t);r.push({name:i,expression:N.WhereClause.create(l||i,a.getFieldsIndex())})}}if(u){const e={};for(const n of a.fields)e[n.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let n=0;for(const t of r)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}for(const t of r)await A(t.expression,e,n);return l[0].groupby(r,[])}return function(e,n,t,a){if(1===a.length){if((0,c.m)(a[0]))return(0,E.t)(e,a[0],-1);if((0,c.o)(a[0]))return(0,E.t)(e,a[0].toArray(),-1)}return(0,E.t)(e,a,-1)}("distinct",0,0,l)}))})}},86727:(e,n,t)=>{t.d(n,{_:()=>s,q:()=>l});var a=t(88256),r=t(66341),i=t(93968);function s(e,n){return null===e?n:new i.Z({url:e.field("url")})}async function l(e,n,t){const i=a.id?.findCredential(e.restUrl);if(!i)return null;if("loaded"===e.loadStatus&&""===n&&e.user&&e.user.sourceJSON&&!1===t)return e.user.sourceJSON;if(""===n){const n=await(0,r.default)(e.restUrl+"/community/self",{responseType:"json",query:{f:"json",...!1===t?{}:{returnUserLicenseTypeExtensions:!0}}});if(n.data){const e=n.data;if(e&&e.username)return e}return null}const s=await(0,r.default)(e.restUrl+"/community/users/"+n,{responseType:"json",query:{f:"json"}});if(s.data){const e=s.data;return e.error?null:e}return null}}}]);