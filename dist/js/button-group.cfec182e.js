"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[473],{7844:function(t,e,n){n.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))]),e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}),t._t("default")],2)},s=[],o={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},i=o,r=n(1001),u=(0,r.Z)(i,a,s,!1,null,"26829939",null),l=u.exports},9274:function(t,e,n){n.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(n){return e("tr",{key:n.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${n.attr}`}},[t._v(t._s(n.attr))])],1),e("td",{staticClass:"components-table__values"},[t._v(t._s(n.values.join(", ")))]),e("td",{staticClass:"components-table__types"},[t._v(t._s(n.types.join(", ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(n.default))]),e("td",{staticClass:"components-table__required"},[n.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])},s=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Атрибуты")]),e("th",{staticClass:"components-table__values"},[t._v("Значения")]),e("th",{staticClass:"components-table__types"},[t._v("Типы")]),e("th",{staticClass:"components-table__default"},[t._v("По умолчанию")]),e("th",{staticClass:"components-table__required"},[t._v("Обязательный")])])])}],o=n(2415),i={props:{items:{type:Array,required:!0}},components:{SvgIcon:o.Z}},r=i,u=n(1001),l=(0,u.Z)(r,a,s,!1,null,"83869c66",null),c=l.exports},8958:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var a=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"items",values:["any object with name prop"],types:["array"],default:"—",required:!0},{attr:"size",values:["s","m","l"],types:["string"],default:"m"},{attr:"multiple",values:[!0,!1],types:["boolean"],default:!1},{attr:"mandatory",values:[!0,!1],types:["boolean"],default:!1},{attr:"color",values:["red","orange","yellow","green","blue","gray"],types:["string"],default:"orange"},{attr:"activeView",values:["primary","secondary","outline","text","rounded","square"],types:["string"],default:"primary"},{attr:"inactiveView",values:["primary","secondary","outline","text","rounded","square"],types:["string"],default:"secondary"}]}}),e("components-block",{attrs:{id:"items",title:"Items",desc:"Array of items. Every item must include <code>name</code> or <code>icon</code> property."}},[e("div",{staticClass:"flex gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}})],1)]),e("components-block",{attrs:{id:"size",title:"Size",desc:"Select from different sizes: 's', 'm', 'l'. Default is medium."}},[e("v-button-group",{staticClass:"mb-24",attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],size:"s"}}),e("v-button-group",{staticClass:"mb-24",attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}}),e("v-button-group",{staticClass:"mb-24",attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],size:"l"}})],1),e("components-block",{attrs:{id:"multiple",title:"Multiple",desc:"Use for multiselect."}},[e("div",{staticClass:"flex gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1"},{name:"Button 2"},{name:"Button 3"}],multiple:""}})],1)]),e("components-block",{attrs:{id:"color",title:"Color",desc:"Select color from predefined variables."}},[e("div",{staticClass:"flex flex-col flex-start gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"red"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"yellow"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"green"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"blue"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],color:"gray"}})],1)]),e("components-block",{attrs:{id:"mandatory",title:"Mandatory",desc:"Use case for minimum one item as required."}},[e("div",{staticClass:"flex gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],multiple:"",mandatory:""}}),e("v-button-group",{attrs:{items:[{name:"Button 1"},{name:"Button 2"},{name:"Button 3"}],mandatory:""}})],1)]),e("components-block",{attrs:{id:"activeView",title:"Active view",desc:"Button view style for active button in group."}},[e("div",{staticClass:"flex flex-col flex-start gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],activeView:"outline"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],activeView:"text"}})],1)]),e("components-block",{attrs:{id:"inactiveView",title:"inactive view",desc:"Inactive button view style for active button in group."}},[e("div",{staticClass:"flex flex-col flex-start gap-16"},[e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}]}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],inactiveView:"outline"}}),e("v-button-group",{attrs:{items:[{name:"Button 1",active:!0},{name:"Button 2"},{name:"Button 3"}],inactiveView:"text"}})],1)])],1)},s=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-group"},[e("div",{staticClass:"button-group__inner"},t._l(t.list,(function(n,a){return e("div",{key:a,staticClass:"button-group__item"},[e("v-button",{attrs:{icon:n.icon,active:n.active,size:t.size,view:n.active?t.activeView:t.inactiveView,color:t.color},on:{click:function(e){return t.selectItem(a,e)}}},[t._v(t._s(n.name))])],1)})),0)])},i=[],r=n(3914),u={components:{VButton:r.Z},props:{items:{type:Array,default:()=>[]},size:{type:String,default:"m"},multiple:{type:Boolean,default:!1},mandatory:{type:Boolean,default:!1},color:{type:String,default:"orange"},activeView:{type:String,default:"primary"},inactiveView:{type:String,default:"secondary"}},data(){return{list:this.items}},methods:{selectItem(t){const e=this.items.map((t=>(this.multiple||(t.active=!1),t)));if(this.mandatory){const n=e.filter((t=>!0===t.active)).length>1;e[t].active=!n||!e[t].active}else e[t].active=!e[t].active;this.list=e}}},l=u,c=n(1001),m=(0,c.Z)(l,o,i,!1,null,"1e65daf6",null),p=m.exports,v=n(9274),d=n(7844),f={components:{VButtonGroup:p,ComponentsTable:v.Z,ComponentsBlock:d.Z}},_=f,b=(0,c.Z)(_,a,s,!1,null,null,null),B=b.exports}}]);
//# sourceMappingURL=button-group.cfec182e.js.map