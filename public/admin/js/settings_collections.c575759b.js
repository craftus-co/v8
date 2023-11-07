(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings_collections"],{baa4:function(e,t,n){"use strict";var o=n("cd02"),a=n.n(o);a.a},cd02:function(e,t,n){},e126:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"collections"},[n("v-header",{attrs:{breadcrumb:e.breadcrumb,"icon-link":"/"+e.currentProjectKey+"/settings",settings:""}},[n("template",{slot:"buttons"},[n("v-header-button",{key:"add",attrs:{icon:"add",label:e.$t("new"),"icon-color":"button-primary-text-color","background-color":"button-primary-background-color"},on:{click:function(t){e.addNew=!0}}})],1)],2),0===e.items.length?n("v-error",{attrs:{title:e.$t("no_collections"),body:e.$t("no_collections_body"),icon:"error_outline"}}):n("div",{staticClass:"table"},[n("div",{staticClass:"header"},[n("div",{staticClass:"row"},[n("div",{staticClass:"cell icon type-table-head"},[n("v-icon",{attrs:{name:"box",color:"--input-icon-color"}})],1),n("div",{staticClass:"cell type-table-head"},[e._v(e._s(e.$tc("collection",2)))])])]),n("div",{staticClass:"body"},e._l(e.items,(function(t){return n("router-link",{key:t.collection,staticClass:"row",class:t.hidden?"subdue":null,attrs:{to:t.__link__}},[n("div",{staticClass:"cell icon"},[n("v-icon",{attrs:{name:t.icon||"box",color:"--input-icon-color"}})],1),n("div",{staticClass:"cell name"},[e._v(" "+e._s(t.collection)+" "),t.note?n("span",{staticClass:"note"},[e._v("("+e._s(t.note)+")")]):e._e()]),t.managed?n("v-button",{staticClass:"managed",attrs:{"x-small":"","background-color":"--button-tertiary-background-color",color:"--button-tertiary-text-color","hover-background-color":"--danger","hover-color":"--white",loading:e.toManage.includes(t.collection)},nativeOn:{click:function(n){return n.stopPropagation(),n.preventDefault(),e.toggleManage(t)}}},[e._v(" "+e._s(e.$t("dont_manage"))+" ")]):n("v-button",{staticClass:"not-managed",attrs:{"x-small":"",loading:e.toManage.includes(t.collection)},nativeOn:{click:function(n){return n.stopPropagation(),n.preventDefault(),e.toggleManage(t)}}},[e._v(" "+e._s(e.$t("manage"))+" ")])],1)})),1)]),e.addNew?n("portal",{attrs:{to:"modal"}},[n("v-prompt",{attrs:{safe:"","confirm-text":e.$t("create"),title:e.$t("create_collection"),placeholder:e.$t("enter_collection_name"),loading:e.adding},on:{cancel:function(t){e.addNew=!1},confirm:e.add},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}},[n("v-details",{attrs:{title:"Default fields",open:!0}},[n("div",{staticClass:"advanced-form"},[n("v-switch",{attrs:{label:e.$t("status")},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}}),n("v-switch",{attrs:{label:e.$t("sort")},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}}),n("v-switch",{attrs:{label:e.$t("owner")},model:{value:e.owner,callback:function(t){e.owner=t},expression:"owner"}}),n("v-switch",{attrs:{label:e.$t("created_on")},model:{value:e.createdOn,callback:function(t){e.createdOn=t},expression:"createdOn"}}),n("v-switch",{attrs:{label:e.$t("modified_by")},model:{value:e.modifiedBy,callback:function(t){e.modifiedBy=t},expression:"modifiedBy"}}),n("v-switch",{attrs:{label:e.$t("modified_on")},model:{value:e.modifiedOn,callback:function(t){e.modifiedOn=t},expression:"modifiedOn"}})],1)])],1)],1):e._e(),e.dontManage?n("portal",{attrs:{to:"modal"}},[n("v-confirm",{attrs:{message:e.$t("dont_manage_copy"),color:"danger","confirm-text":e.$t("dont_manage"),loading:e.toManage.includes(e.dontManage.collection.collection)},on:{cancel:function(t){e.dontManage=null},confirm:e.stopManaging}})],1):e._e(),n("v-info-sidebar",{attrs:{wide:""}},[n("span",{staticClass:"type-note"},[e._v("No settings")])])],1)},a=[],i=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("a434"),n("e439"),n("dbb4"),n("b64b"),n("07ac"),n("2ca0"),n("159b"),n("ade3")),l=n("2f62");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={name:"SettingsCollections",metaInfo:function(){return{title:"".concat(this.$t("settings")," | ").concat(this.$t("settings_collections_fields"))}},data:function(){return{addNew:!1,newName:"",adding:!1,status:!0,sort:!1,owner:!0,createdOn:!0,modifiedBy:!1,modifiedOn:!1,dontManage:null,toManage:[]}},computed:r({},Object(l["e"])(["currentProjectKey"]),{items:function(){var e=this,t=this.$store.state.collections||{};return Object.values(t).filter((function(e){return!1===e.collection.startsWith("directus_")})).map((function(t){return r({},t,{__link__:"/".concat(e.currentProjectKey,"/settings/collections/").concat(t.collection)})}))},breadcrumb:function(){return[{name:this.$t("settings"),path:"/".concat(this.currentProjectKey,"/settings")},{name:this.$t("collections_and_fields"),path:"/".concat(this.currentProjectKey,"/settings/collections")}]}}),methods:{add:function(){var e=this;this.adding=!0;var t=this.$helpers.shortid.generate();this.$store.dispatch("loadingStart",{id:t});var n=[{type:"integer",datatype:"INT",length:15,field:"id",interface:"primary-key",auto_increment:!0,primary_key:!0,hidden_detail:!0,hidden_browse:!0}],o={id:{auto_increment:!0,collection:this.newName,datatype:"INT",default_value:null,field:"id",group:null,hidden_detail:!0,hidden_browse:!0,interface:"primary-key",length:"10",locked:0,note:"",options:null,primary_key:!0,readonly:0,required:!0,signed:!1,sort:1,translation:null,type:"integer",unique:!1,validation:null,width:"full"}};this.status&&(n.push({type:"status",datatype:"VARCHAR",length:20,field:"status",interface:"status",default_value:"draft",width:"full",required:!0,options:{status_mapping:{published:{name:"Published",value:"published",text_color:"white",background_color:"accent",browse_subdued:!1,browse_badge:!0,soft_delete:!1,published:!0,required_fields:!0},draft:{name:"Draft",value:"draft",text_color:"white",background_color:"blue-grey-100",browse_subdued:!0,browse_badge:!0,soft_delete:!1,published:!1,required_fields:!1},deleted:{name:"Deleted",value:"deleted",text_color:"white",background_color:"red",browse_subdued:!0,browse_badge:!0,soft_delete:!0,published:!1,required_fields:!1}}}}),o.status={collection:this.newName,field:"status",datatype:"VARCHAR",unique:!1,primary_key:!1,auto_increment:!1,default_value:"draft",note:null,signed:!0,type:"status",sort:0,interface:"status",hidden_detail:!1,hidden_browse:!1,required:!0,options:{status_mapping:{published:{name:"Published",value:"published",text_color:"white",background_color:"accent",browse_subdued:!1,browse_badge:!0,soft_delete:!1,published:!0},draft:{name:"Draft",value:"draft",text_color:"white",background_color:"blue-grey-100",browse_subdued:!0,browse_badge:!0,soft_delete:!1,published:!1},deleted:{name:"Deleted",value:"deleted",text_color:"white",background_color:"red",browse_subdued:!0,browse_badge:!0,soft_delete:!0,published:!1}}},locked:!1,translation:null,readonly:!1,width:"full",validation:null,group:null,length:"20"}),this.sort&&(n.push({type:"sort",datatype:"INT",field:"sort",interface:"sort",hidden_detail:!0,hidden_browse:!0,width:"full"}),o.sort={collection:this.newName,field:"sort",datatype:"INT",unique:!1,primary_key:!1,auto_increment:!1,default_value:null,note:null,signed:!1,type:"sort",sort:0,interface:"sort",hidden_detail:!0,hidden_browse:!0,required:!1,options:null,locked:!1,translation:null,readonly:!1,width:"full",validation:null,group:null,length:"10"}),this.owner&&(n.push({type:"owner",datatype:"INT",field:"owner",interface:"owner",options:{template:"{{first_name}} {{last_name}}",display:"both"},readonly:!0,hidden_detail:!0,hidden_browse:!0,width:"full"}),o.owner={collection:this.newName,field:"owner",datatype:"INT",unique:!1,primary_key:!1,auto_increment:!1,default_value:null,note:null,signed:!1,type:"owner",sort:0,interface:"owner",hidden_detail:!0,hidden_browse:!0,required:!1,options:{template:"{{first_name}} {{last_name}}",display:"both"},locked:!1,translation:null,readonly:!0,width:"full",validation:null,group:null,length:"10"}),this.createdOn&&(n.push({type:"datetime_created",datatype:"DATETIME",field:"created_on",interface:"datetime-created",readonly:!0,hidden_detail:!0,hidden_browse:!0,width:"full"}),o.created_on={collection:this.newName,field:"created_on",datatype:"DATETIME",unique:!1,primary_key:!1,auto_increment:!1,default_value:null,note:null,signed:!0,type:"datetime_created",sort:0,interface:"datetime-created",hidden_detail:!0,hidden_browse:!0,required:!1,options:null,locked:!1,translation:null,readonly:!0,width:"full",validation:null,group:null,length:null}),this.modifiedBy&&(n.push({type:"user_updated",datatype:"INT",field:"modified_by",interface:"user-updated",options:{template:"{{first_name}} {{last_name}}",display:"both"},readonly:!0,hidden_detail:!0,hidden_browse:!0,width:"full"}),o.modified_by={collection:this.newName,field:"modified_by",datatype:"INT",unique:!1,primary_key:!1,auto_increment:!1,default_value:null,note:null,signed:!1,type:"user_updated",sort:0,interface:"user-updated",hidden_detail:!0,hidden_browse:!0,required:!1,options:{template:"{{first_name}} {{last_name}}",display:"both"},locked:!1,translation:null,readonly:!0,width:"full",validation:null,group:null,length:"10"}),this.modifiedOn&&(n.push({type:"datetime_updated",datatype:"DATETIME",field:"modified_on",interface:"datetime-updated",readonly:!0,hidden_detail:!0,hidden_browse:!0,width:"full"}),o.modified_on={collection:this.newName,field:"modified_on",datatype:"DATETIME",unique:!1,primary_key:!1,auto_increment:!1,default_value:null,note:null,signed:!0,type:"datetime_updated",sort:0,interface:"datetime-updated",hidden_detail:!0,hidden_browse:!0,required:!1,options:null,locked:!1,translation:null,readonly:!0,width:"full",validation:null,group:null,length:null}),this.$api.createCollection({collection:this.newName,hidden:0,fields:n},{fields:"*.*"}).then((function(e){return e.data})).then((function(n){e.$store.dispatch("loadingFinished",t),e.$store.dispatch("addCollection",r({},n,{fields:o})),e.$store.dispatch("getPermissions"),e.$router.push("/".concat(e.currentProjectKey,"/settings/collections/").concat(e.newName))})).catch((function(n){if(e.adding=!1,e.$store.dispatch("loadingFinished",t),n){var o={4:e.$t("collection_invalid_name")};e.$events.emit("error",{notify:n.code in o?o[n.code]:e.$t("something_went_wrong_body"),error:n})}}))},toggleManage:function(e){var t=this;if(!e.managed)return this.$api.updateItem("directus_collections",e.collection,{managed:!0}).then((function(){return t.toManage.push(e.collection),t.$store.dispatch("getCollections")})).then((function(){t.$notify({title:t.$t("manage_started"),color:"green",iconMain:"check"})})).catch((function(e){t.$events.emit("error",{notify:t.$t("something_went_wrong_body"),error:e})})).then((function(){t.toManage.splice(t.toManage.indexOf(e.collection),1)}));this.dontManage=e},stopManaging:function(){var e=this,t=this.dontManage;return this.toManage.push(t.collection.collection),this.$api.updateItem("directus_collections",t.collection,{managed:!1}).then((function(){return e.$store.dispatch("getCollections")})).then((function(){e.$notify({title:e.$t("manage_stopped"),color:"green",iconMain:"check"})})).catch((function(t){e.$events.emit("error",{notify:e.$t("something_went_wrong_body"),error:t})})).then((function(){e.toManage.splice(e.toManage.indexOf(t.collection.collection),1),e.dontManage=null}))}}},c=s,u=(n("baa4"),n("2877")),f=Object(u["a"])(c,o,a,!1,null,"8e8f34c0",null);t["default"]=f.exports}}]);
//# sourceMappingURL=settings_collections.c575759b.js.map