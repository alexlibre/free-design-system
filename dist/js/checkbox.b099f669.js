(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[696],{2415:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("svg",{class:t.className,attrs:{width:t.size[0],height:t.size[1]?t.size[1]:t.size[0],xmlns:"http://www.w3.org/2000/svg"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e(),e("use",{attrs:{"xlink:href":t.iconPath,"xmlns:xlink":"http://www.w3.org/1999/xlink"}})])},n=[],r={props:{name:{type:String,required:!0},title:{type:String,default:null},size:{type:Array,default:()=>[18,18]}},computed:{iconPath(){let t=s(7254)(`./${this.name}.svg`);return Object.hasOwnProperty.call(t,"default")&&(t=t.default),t.url},className(){return"icon icon_"+this.name}}},c=r,l=s(1001),a=(0,l.Z)(c,i,n,!1,null,null,null),u=a.exports},7844:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))]),e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}),t._t("default")],2)},n=[],r={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},c=r,l=s(1001),a=(0,l.Z)(c,i,n,!1,null,"26829939",null),u=a.exports},1850:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(s){return e("tr",{key:s.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${s.attr}`}},[t._v(t._s(s.attr))])],1),e("td",{staticClass:"components-table__values",domProps:{innerHTML:t._s(t.value(s.values))}}),e("td",{staticClass:"components-table__types"},[t._v(t._s(s.types.join(" | ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(s.default))]),e("td",{staticClass:"components-table__required"},[s.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])])},n=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],r=s(2415),c={props:{items:{type:Array,required:!0}},components:{SvgIcon:r.Z},methods:{value(t){return t.join(" | ")}}},l=c,a=s(1001),u=(0,a.Z)(l,i,n,!1,null,"a03e6dd2",null),o=u.exports},2099:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return _}});var i=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"checked",values:[!0,!1],types:["boolean"],default:!1},{attr:"disabled",values:[!0,!1],types:["boolean"],default:!1},{attr:"label",values:["any string"],types:["string"],default:""}]}}),e("components-block",{attrs:{title:"Checked",id:"checked"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-checkbox",{attrs:{label:"label",checked:""}}),e("v-checkbox",{attrs:{label:"label"}})],1)]),e("components-block",{attrs:{title:"Disabled",id:"disabled"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-checkbox",{attrs:{label:"label",checked:"",disabled:""}}),e("v-checkbox",{attrs:{label:"label",disabled:""}}),e("v-checkbox",{attrs:{checked:"",disabled:""}}),e("v-checkbox",{attrs:{disabled:""}})],1)]),e("components-block",{attrs:{title:"Label",id:"label"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-checkbox",{attrs:{label:"label text",checked:""}}),e("v-checkbox",{attrs:{label:"label another",disabled:""}}),e("v-checkbox",{attrs:{label:"label",checked:"",disabled:""}}),e("v-checkbox")],1)])],1)},n=[],r=function(){var t=this,e=t._self._c;return e("label",{staticClass:"checkbox",class:{checkbox_disabled:t.disabled},attrs:{for:t.guid}},[e("div",{staticClass:"checkbox__inner"},[e("input",{staticClass:"checkbox__input",attrs:{type:"checkbox",id:t.guid},domProps:{checked:!!t.checked}}),e("span",{staticClass:"checkbox__box"},[e("SvgIcon",{attrs:{name:"check",size:[10,8]}})],1),t.label?e("span",{staticClass:"checkbox__label"},[t._v(t._s(t.label))]):t._e()])])},c=[],l=s(2415),a={props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1}},components:{SvgIcon:l.Z},computed:{guid(){return(Math.random()+1).toString(36).substring(2)}}},u=a,o=s(1001),d=(0,o.Z)(u,r,c,!1,null,"354119e4",null),f=d.exports,g=s(1850),v=s(7844),p={components:{VCheckbox:f,ComponentsTable:g.Z,ComponentsBlock:v.Z}},h=p,b=(0,o.Z)(h,i,n,!1,null,null,null),_=b.exports},2515:function(t,e,s){"use strict";s.r(e),e["default"]={id:"7spaces-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#7spaces",toString:function(){return this.url}}},2802:function(t,e,s){"use strict";s.r(e),e["default"]={id:"attach-square-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.6f95d2ef.svg#attach-square",toString:function(){return this.url}}},30:function(t,e,s){"use strict";s.r(e),e["default"]={id:"check-usage",viewBox:"0 0 10 8",url:s.p+"img/icons.6f95d2ef.svg#check",toString:function(){return this.url}}},1297:function(t,e,s){"use strict";s.r(e),e["default"]={id:"close-circle-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#close-circle",toString:function(){return this.url}}},1566:function(t,e,s){"use strict";s.r(e),e["default"]={id:"divider-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#divider",toString:function(){return this.url}}},898:function(t,e,s){"use strict";s.r(e),e["default"]={id:"eye-slash-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#eye-slash",toString:function(){return this.url}}},2707:function(t,e,s){"use strict";s.r(e),e["default"]={id:"eye-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#eye",toString:function(){return this.url}}},4513:function(t,e,s){"use strict";s.r(e),e["default"]={id:"heart-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#heart",toString:function(){return this.url}}},3251:function(t,e,s){"use strict";s.r(e),e["default"]={id:"info-circle-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#info-circle",toString:function(){return this.url}}},7125:function(t,e,s){"use strict";s.r(e),e["default"]={id:"link-2-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.6f95d2ef.svg#link-2",toString:function(){return this.url}}},1894:function(t,e,s){"use strict";s.r(e),e["default"]={id:"mask-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#mask",toString:function(){return this.url}}},8067:function(t,e,s){"use strict";s.r(e),e["default"]={id:"menu-close-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#menu-close",toString:function(){return this.url}}},3198:function(t,e,s){"use strict";s.r(e),e["default"]={id:"menu-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#menu",toString:function(){return this.url}}},7858:function(t,e,s){"use strict";s.r(e),e["default"]={id:"quote-down-square-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.6f95d2ef.svg#quote-down-square",toString:function(){return this.url}}},5641:function(t,e,s){"use strict";s.r(e),e["default"]={id:"star-usage",viewBox:"0 0 20 20",url:s.p+"img/icons.6f95d2ef.svg#star",toString:function(){return this.url}}},1772:function(t,e,s){"use strict";s.r(e),e["default"]={id:"task-usage",viewBox:"0 0 25 24",url:s.p+"img/icons.6f95d2ef.svg#task",toString:function(){return this.url}}},3605:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-bold-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#text-bold",toString:function(){return this.url}}},8971:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-italic-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#text-italic",toString:function(){return this.url}}},8558:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-underline-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#text-underline",toString:function(){return this.url}}},145:function(t,e,s){"use strict";s.r(e),e["default"]={id:"tick-circle-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#tick-circle",toString:function(){return this.url}}},7254:function(t,e,s){var i={"./7spaces.svg":2515,"./attach-square.svg":2802,"./check.svg":30,"./close-circle.svg":1297,"./divider.svg":1566,"./eye-slash.svg":898,"./eye.svg":2707,"./heart.svg":4513,"./info-circle.svg":3251,"./link-2.svg":7125,"./mask.svg":1894,"./menu-close.svg":8067,"./menu.svg":3198,"./quote-down-square.svg":7858,"./star.svg":5641,"./task.svg":1772,"./text-bold.svg":3605,"./text-italic.svg":8971,"./text-underline.svg":8558,"./tick-circle.svg":145};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=7254}}]);
//# sourceMappingURL=checkbox.b099f669.js.map