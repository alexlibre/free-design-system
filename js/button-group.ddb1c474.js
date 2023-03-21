(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[473],{298:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("button",{staticClass:"button",class:{button_view_primary:"primary"===t.view,button_view_secondary:"secondary"===t.view,button_view_outline:"outline"===t.view,button_view_text:"text"===t.view,button_view_rounded:"rounded"===t.view,button_view_square:"square"===t.view,button_color_red:"red"===t.color,button_color_orange:"orange"===t.color,button_color_yellow:"yellow"===t.color,button_color_green:"green"===t.color,button_color_blue:"blue"===t.color,button_color_gray:"gray"===t.color,button_icon:t.noText,button_size_s:"s"===t.size,button_size_m:"m"===t.size,button_size_l:"l"===t.size,button_is_active:t.active,button_empty:t.empty},on:{click:t.onClick}},[t.noText?t._e():e("span",{staticClass:"button__text"},[t._t("default")],2),t.icon?e("svg-icon",{attrs:{name:t.icon,size:t.iconSize}}):t._e()],1)},s=[],o=n(2415),r={props:{size:{type:String,default:"m"},view:{type:String,default:"primary"},icon:{type:String,default:""},active:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},color:{type:String,default:"orange"}},components:{SvgIcon:o.Z},computed:{noText(){return!this.$slots.default},iconSize(){switch(this.size){case"s":return[14];case"l":return[20];default:return[16]}}},methods:{onClick(t){this.$emit("click",t)}}},u=r,a=n(1001),c=(0,a.Z)(u,i,s,!1,null,"62d81c16",null),l=c.exports},2415:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("svg",{class:t.className,attrs:{width:t.size[0],height:t.size[1]?t.size[1]:t.size[0],xmlns:"http://www.w3.org/2000/svg"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e(),e("use",{attrs:{"xlink:href":t.iconPath,"xmlns:xlink":"http://www.w3.org/1999/xlink"}})])},s=[],o={props:{name:{type:String,required:!0},title:{type:String,default:null},size:{type:Array,default:()=>[18,18]}},computed:{iconPath(){let t=n(7254)(`./${this.name}.svg`);return Object.hasOwnProperty.call(t,"default")&&(t=t.default),t.url},className(){return"icon icon_"+this.name}}},r=o,u=n(1001),a=(0,u.Z)(r,i,s,!1,null,null,null),c=a.exports},7844:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))]),e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}),t._t("default")],2)},s=[],o={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},r=o,u=n(1001),a=(0,u.Z)(r,i,s,!1,null,"26829939",null),c=a.exports},5732:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(n){return e("tr",{key:n.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${n.attr}`}},[t._v(t._s(n.attr))])],1),e("td",{staticClass:"components-table__values"},[t._v(t._s(n.values.join(", ")))]),e("td",{staticClass:"components-table__types"},[t._v(t._s(n.types.join(", ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(n.default))]),e("td",{staticClass:"components-table__required"},[n.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])])},s=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],o=n(2415),r={props:{items:{type:Array,required:!0}},components:{SvgIcon:o.Z}},u=r,a=n(1001),c=(0,a.Z)(u,i,s,!1,null,"4868267d",null),l=c.exports},5776:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var i=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"items",values:["any object with name prop"],types:["array"],default:"",required:!0},{attr:"size",values:["s","m","l"],types:["string"],default:"m"},{attr:"multiple",values:[!0,!1],types:["boolean"],default:!1},{attr:"mandatory",values:[!0,!1],types:["boolean"],default:!1},{attr:"color",values:["red","orange","yellow","green","blue","gray"],types:["string"],default:"orange"},{attr:"activeView",values:["primary","secondary","outline","text","rounded","square"],types:["string"],default:"primary"},{attr:"inactiveView",values:["primary","secondary","outline","text","rounded","square"],types:["string"],default:"secondary"}]}}),e("components-block",{attrs:{id:"items",title:"Items",desc:"Array of items. Every item must include <code>name</code> or <code>icon</code> property."}},[e("div",{staticClass:"flex gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}})],1)]),e("components-block",{attrs:{id:"size",title:"Size",desc:"Select from different sizes: 's', 'm', 'l'. Default is medium."}},[e("v-button-group",{staticClass:"mb-24",attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],size:"s"}}),e("v-button-group",{staticClass:"mb-24",attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}}),e("v-button-group",{staticClass:"mb-24",attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],size:"l"}})],1),e("components-block",{attrs:{id:"multiple",title:"Multiple",desc:"Use for multiselect."}},[e("div",{staticClass:"flex gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1"},{name:"Button 2"},{name:"Button 3"}],multiple:""}})],1)]),e("components-block",{attrs:{id:"color",title:"Color",desc:"Select color from predefined variables."}},[e("div",{staticClass:"flex flex-col flex-start gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"red"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"yellow"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"green"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"blue"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"gray"}})],1)]),e("components-block",{attrs:{id:"mandatory",title:"Mandatory",desc:"Use case for minimum one item as required."}},[e("div",{staticClass:"flex gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],multiple:"",mandatory:""}}),e("v-button-group",{attrs:{items:[{name:"Button 1"},{name:"Button 2"},{name:"Button 3"}],mandatory:""}})],1)]),e("components-block",{attrs:{id:"activeView",title:"Active view",desc:"Button view style for active button in group."}},[e("div",{staticClass:"flex flex-col flex-start gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],activeView:"outline"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],activeView:"text"}})],1)]),e("components-block",{attrs:{id:"inactiveView",title:"inactive view",desc:"Inactive button view style for active button in group."}},[e("div",{staticClass:"flex flex-col flex-start gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],inactiveView:"outline"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],inactiveView:"text"}})],1)])],1)},s=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-group"},[e("div",{staticClass:"button-group__inner"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"button-group__item"},[e("v-button",{attrs:{icon:n.icon,active:n.active,size:t.size,view:n.active?t.activeView:t.inactiveView,color:t.color},on:{click:function(e){return t.selectItem(i,e)}}},[t._v(t._s(n.name))])],1)})),0)])},r=[],u=n(298),a={components:{VButton:u.Z},props:{items:{type:Array,default:()=>[]},size:{type:String,default:"m"},multiple:{type:Boolean,default:!1},mandatory:{type:Boolean,default:!1},color:{type:String,default:"orange"},activeView:{type:String,default:"primary"},inactiveView:{type:String,default:"secondary"}},data(){return{list:this.items}},methods:{selectItem(t){const e=this.items.map((t=>(this.multiple||(t.active=!1),t)));if(this.mandatory){const n=e.filter((t=>!0===t.active)).length>1;e[t].active=!n||!e[t].active}else e[t].active=!e[t].active;this.list=e}}},c=a,l=n(1001),m=(0,l.Z)(c,o,r,!1,null,"1e65daf6",null),d=m.exports,v=n(5732),f=n(7844),g={components:{VButtonGroup:d,ComponentsTable:v.Z,ComponentsBlock:f.Z}},p=g,_=(0,l.Z)(p,i,s,!1,null,null,null),b=_.exports},2515:function(t,e,n){"use strict";n.r(e),e["default"]={id:"7spaces-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.6f95d2ef.svg#7spaces",toString:function(){return this.url}}},2802:function(t,e,n){"use strict";n.r(e),e["default"]={id:"attach-square-usage",viewBox:"0 0 16 17",url:n.p+"img/icons.6f95d2ef.svg#attach-square",toString:function(){return this.url}}},30:function(t,e,n){"use strict";n.r(e),e["default"]={id:"check-usage",viewBox:"0 0 10 8",url:n.p+"img/icons.6f95d2ef.svg#check",toString:function(){return this.url}}},1297:function(t,e,n){"use strict";n.r(e),e["default"]={id:"close-circle-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.6f95d2ef.svg#close-circle",toString:function(){return this.url}}},1566:function(t,e,n){"use strict";n.r(e),e["default"]={id:"divider-usage",viewBox:"0 0 16 16",url:n.p+"img/icons.6f95d2ef.svg#divider",toString:function(){return this.url}}},898:function(t,e,n){"use strict";n.r(e),e["default"]={id:"eye-slash-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.6f95d2ef.svg#eye-slash",toString:function(){return this.url}}},2707:function(t,e,n){"use strict";n.r(e),e["default"]={id:"eye-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.6f95d2ef.svg#eye",toString:function(){return this.url}}},4513:function(t,e,n){"use strict";n.r(e),e["default"]={id:"heart-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.6f95d2ef.svg#heart",toString:function(){return this.url}}},3251:function(t,e,n){"use strict";n.r(e),e["default"]={id:"info-circle-usage",viewBox:"0 0 16 16",url:n.p+"img/icons.6f95d2ef.svg#info-circle",toString:function(){return this.url}}},7125:function(t,e,n){"use strict";n.r(e),e["default"]={id:"link-2-usage",viewBox:"0 0 16 17",url:n.p+"img/icons.6f95d2ef.svg#link-2",toString:function(){return this.url}}},1894:function(t,e,n){"use strict";n.r(e),e["default"]={id:"mask-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.6f95d2ef.svg#mask",toString:function(){return this.url}}},8067:function(t,e,n){"use strict";n.r(e),e["default"]={id:"menu-close-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.6f95d2ef.svg#menu-close",toString:function(){return this.url}}},3198:function(t,e,n){"use strict";n.r(e),e["default"]={id:"menu-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.6f95d2ef.svg#menu",toString:function(){return this.url}}},7858:function(t,e,n){"use strict";n.r(e),e["default"]={id:"quote-down-square-usage",viewBox:"0 0 16 17",url:n.p+"img/icons.6f95d2ef.svg#quote-down-square",toString:function(){return this.url}}},5641:function(t,e,n){"use strict";n.r(e),e["default"]={id:"star-usage",viewBox:"0 0 20 20",url:n.p+"img/icons.6f95d2ef.svg#star",toString:function(){return this.url}}},1772:function(t,e,n){"use strict";n.r(e),e["default"]={id:"task-usage",viewBox:"0 0 25 24",url:n.p+"img/icons.6f95d2ef.svg#task",toString:function(){return this.url}}},3605:function(t,e,n){"use strict";n.r(e),e["default"]={id:"text-bold-usage",viewBox:"0 0 16 16",url:n.p+"img/icons.6f95d2ef.svg#text-bold",toString:function(){return this.url}}},8971:function(t,e,n){"use strict";n.r(e),e["default"]={id:"text-italic-usage",viewBox:"0 0 16 16",url:n.p+"img/icons.6f95d2ef.svg#text-italic",toString:function(){return this.url}}},8558:function(t,e,n){"use strict";n.r(e),e["default"]={id:"text-underline-usage",viewBox:"0 0 16 16",url:n.p+"img/icons.6f95d2ef.svg#text-underline",toString:function(){return this.url}}},145:function(t,e,n){"use strict";n.r(e),e["default"]={id:"tick-circle-usage",viewBox:"0 0 16 16",url:n.p+"img/icons.6f95d2ef.svg#tick-circle",toString:function(){return this.url}}},7254:function(t,e,n){var i={"./7spaces.svg":2515,"./attach-square.svg":2802,"./check.svg":30,"./close-circle.svg":1297,"./divider.svg":1566,"./eye-slash.svg":898,"./eye.svg":2707,"./heart.svg":4513,"./info-circle.svg":3251,"./link-2.svg":7125,"./mask.svg":1894,"./menu-close.svg":8067,"./menu.svg":3198,"./quote-down-square.svg":7858,"./star.svg":5641,"./task.svg":1772,"./text-bold.svg":3605,"./text-italic.svg":8971,"./text-underline.svg":8558,"./tick-circle.svg":145};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id=7254}}]);
//# sourceMappingURL=button-group.ddb1c474.js.map