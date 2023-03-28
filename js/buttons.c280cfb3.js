"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[607],{4024:function(t,e,o){o.d(e,{Z:function(){return v}});var i=function(){var t=this,e=t._self._c;return e("button",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button",class:{button_view_primary:"primary"===t.view,button_view_secondary:"secondary"===t.view,button_view_outline:"outline"===t.view,button_view_text:"text"===t.view,button_view_rounded:"rounded"===t.view,button_view_square:"square"===t.view,button_color_red:"red"===t.color,button_color_orange:"orange"===t.color,button_color_yellow:"yellow"===t.color,button_color_green:"green"===t.color,button_color_blue:"blue"===t.color,button_color_gray:"gray"===t.color,button_icon:t.noText,button_size_s:"s"===t.size,button_size_m:"m"===t.size,button_size_l:"l"===t.size,button_is_active:t.active,button_empty:t.empty},on:{click:t.onClick}},[t.noText?t._e():e("span",{staticClass:"button__text"},[t._t("default")],2),t.icon?e("svg-icon",{attrs:{name:t.icon,size:t.iconSize}}):t._e()],1)},r=[],n=o(2415),l={props:{size:{type:String,default:"m"},view:{type:String,default:"primary"},icon:{type:String,default:""},active:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},color:{type:String,default:"blue"}},components:{SvgIcon:n.Z},computed:{noText(){return!this.$slots.default},iconSize(){switch(this.size){case"s":return[14];case"l":return[20];default:return[16]}}},methods:{onClick(t){this.$emit("click",t)}}},a=l,s=o(1001),c=(0,s.Z)(a,i,r,!1,null,"403e0b07",null),v=c.exports},3143:function(t,e,o){o.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("fieldset",{staticClass:"components-block__example"},[e("legend",[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))])]),t.desc?e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}):t._e(),t._t("default")],2)])},r=[],n={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""},variants:{type:Array,default:()=>[]}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},l=n,a=o(1001),s=(0,a.Z)(l,i,r,!1,null,"43068d1e",null),c=s.exports},7223:function(t,e,o){o.d(e,{Z:function(){return v}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(o){return e("tr",{key:o.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${o.attr}`}},[t._v(t._s(o.attr))])],1),e("td",{staticClass:"components-table__values",domProps:{innerHTML:t._s(t.value(o.values))}}),e("td",{staticClass:"components-table__types"},[t._v(t._s(o.types.join(" | ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(o.default))]),e("td",{staticClass:"components-table__required"},[o.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])])},r=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],n=o(2415),l={props:{items:{type:Array,required:!0}},components:{SvgIcon:n.Z},methods:{value(t){return t.join(" | ")}}},a=l,s=o(1001),c=(0,s.Z)(a,i,r,!1,null,"1bd750fa",null),v=c.exports},653:function(t,e,o){o.r(e),o.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"size",values:["s","m","l"],types:["string"],default:"m"},{attr:"view",values:["primary","secondary","outline","text","rounded","square"],types:["string"],default:"primary"},{attr:"icon",values:["any"],types:["string"],default:""},{attr:"color",values:["red","orange","yellow","green","orange","violet"],types:["string"],default:"orange"},{attr:"disabled",values:[!0,!1],types:["boolean"],default:!1}]}}),e("components-block",{attrs:{id:"size",title:"size",desc:"Select from different sizes: <code>s</code>, <code>m</code>, <code>l</code>. Default is medium."}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{size:"s"},on:{click:t.logClick}},[t._v("Small")]),e("v-button",{attrs:{size:"s",icon:"heart"},on:{click:t.logClick}},[t._v("Small")]),e("v-button",{attrs:{size:"s",icon:"heart"},on:{click:t.logClick}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{on:{click:t.logClick}},[t._v("Medium")]),e("v-button",{attrs:{icon:"heart"},on:{click:t.logClick}},[t._v("Medium")]),e("v-button",{attrs:{icon:"heart"},on:{click:t.logClick}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{size:"l"},on:{click:t.logClick}},[t._v("Large")]),e("v-button",{attrs:{size:"l",icon:"heart"},on:{click:t.logClick}},[t._v("Large")]),e("v-button",{attrs:{size:"l",icon:"heart"},on:{click:t.logClick}})],1)]),e("components-block",{attrs:{id:"view",title:"view"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{on:{click:t.logClick}},[t._v("Primary")]),e("v-button",{attrs:{view:"secondary"},on:{click:t.logClick}},[t._v("Secondary")]),e("v-button",{attrs:{view:"outline"},on:{click:t.logClick}},[t._v("Outline")]),e("v-button",{attrs:{view:"text"},on:{click:t.logClick}},[t._v("Text")]),e("v-button",{attrs:{view:"rounded"},on:{click:t.logClick}},[t._v("Rounded")]),e("v-button",{attrs:{view:"square"},on:{click:t.logClick}},[t._v("Square")])],1)]),e("components-block",{attrs:{id:"icon",title:"icon"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{icon:"heart"},on:{click:t.logClick}},[t._v("Like")]),e("v-button",{attrs:{view:"secondary",icon:"eye"},on:{click:t.logClick}},[t._v("View")]),e("v-button",{attrs:{view:"outline",icon:"link-2"},on:{click:t.logClick}},[t._v("Link")]),e("v-button",{attrs:{view:"text",icon:"task"},on:{click:t.logClick}},[t._v("Tasks")]),e("v-button",{attrs:{view:"rounded",icon:"info-circle"},on:{click:t.logClick}},[t._v("Info")]),e("v-button",{attrs:{view:"square",icon:"attach-square"},on:{click:t.logClick}},[t._v("Attach")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{icon:"heart"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"secondary",icon:"eye"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"outline",icon:"link-2"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"text",icon:"task"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"rounded",icon:"info-circle"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"square",icon:"attach-square"},on:{click:t.logClick}})],1)]),e("components-block",{attrs:{id:"color",title:"color"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{color:"red"}},[t._v("Primary")]),e("v-button",{attrs:{view:"secondary",color:"red"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"outline",color:"red"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"text",color:"red"}},[t._v("Text")]),e("v-button",{attrs:{view:"rounded",color:"red"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"square",color:"red"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",[t._v("Primary")]),e("v-button",{attrs:{view:"secondary"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"outline"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"text"}},[t._v("Text")]),e("v-button",{attrs:{view:"rounded"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"square"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{color:"yellow"}},[t._v("Primary")]),e("v-button",{attrs:{view:"secondary",color:"yellow"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"outline",color:"yellow"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"text",color:"yellow"}},[t._v("Text")]),e("v-button",{attrs:{view:"rounded",color:"yellow"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"square",color:"yellow"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{color:"green"}},[t._v("Primary")]),e("v-button",{attrs:{view:"secondary",color:"green"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"outline",color:"green"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"text",color:"green"}},[t._v("Text")]),e("v-button",{attrs:{view:"rounded",color:"green"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"square",color:"green"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{color:"orange"}},[t._v("Primary")]),e("v-button",{attrs:{view:"secondary",color:"orange"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"outline",color:"orange"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"text",color:"orange"}},[t._v("Text")]),e("v-button",{attrs:{view:"rounded",color:"orange"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"square",color:"orange"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"secondary",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"outline",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"text",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"rounded",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"square",icon:"info-circle",color:"red"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{icon:"close-circle"}}),e("v-button",{attrs:{view:"secondary",icon:"close-circle"}}),e("v-button",{attrs:{view:"outline",icon:"close-circle"}}),e("v-button",{attrs:{view:"text",icon:"close-circle"}}),e("v-button",{attrs:{view:"rounded",icon:"close-circle"}}),e("v-button",{attrs:{view:"square",icon:"close-circle"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{color:"yellow",icon:"heart"}}),e("v-button",{attrs:{view:"secondary",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"outline",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"text",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"rounded",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"square",icon:"heart",color:"yellow"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{color:"green",icon:"tick-circle"}}),e("v-button",{attrs:{view:"secondary",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"outline",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"text",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"rounded",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"square",icon:"tick-circle",color:"green"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{color:"orange",icon:"mask"}}),e("v-button",{attrs:{view:"secondary",icon:"mask",color:"orange"}}),e("v-button",{attrs:{view:"outline",icon:"mask",color:"orange"}}),e("v-button",{attrs:{view:"text",icon:"mask",color:"orange"}}),e("v-button",{attrs:{view:"rounded",icon:"mask",color:"orange"}}),e("v-button",{attrs:{view:"square",icon:"mask",color:"orange"}})],1)]),e("components-block",{attrs:{id:"disabled",title:"disabled"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",color:"red"}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",view:"secondary",color:"red"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"outline",color:"red"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"text",color:"red"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"rounded",color:"red"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"square",color:"red"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:""}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",view:"secondary"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"outline"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"text"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"rounded"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"square"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",color:"yellow"}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",view:"secondary",color:"yellow"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"outline",color:"yellow"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"text",color:"yellow"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"rounded",color:"yellow"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"square",color:"yellow"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",color:"green"}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",view:"secondary",color:"green"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"outline",color:"green"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"text",color:"green"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"rounded",color:"green"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"square",color:"green"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",color:"orange"}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",view:"secondary",color:"orange"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"outline",color:"orange"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"text",color:"orange"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"rounded",color:"orange"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"square",color:"orange"}},[t._v("Square")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"outline",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"text",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"square",icon:"info-circle",color:"red"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"outline",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"text",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"square",icon:"close-circle"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",color:"yellow",icon:"heart"}}),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"outline",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"text",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"square",icon:"heart",color:"yellow"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",color:"green",icon:"tick-circle"}}),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"outline",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"text",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"square",icon:"tick-circle",color:"green"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",color:"orange",icon:"mask"}}),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"mask",color:"orange"}}),e("v-button",{attrs:{disabled:"",view:"outline",icon:"mask",color:"orange"}}),e("v-button",{attrs:{disabled:"",view:"text",icon:"mask",color:"orange"}}),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"mask",color:"orange"}}),e("v-button",{attrs:{disabled:"",view:"square",icon:"mask",color:"orange"}})],1)]),e("components-block",{attrs:{id:"click",title:"click"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{on:{click:t.alertClick}},[t._v("Make alert")])],1)])],1)},r=[],n=o(4024),l=o(7223),a=o(3143),s={components:{vButton:n.Z,ComponentsTable:l.Z,ComponentsBlock:a.Z},methods:{logClick(){console.log("click")},alertClick(){alert("Clicked!")}}},c=s,v=o(1001),d=(0,v.Z)(c,i,r,!1,null,null,null),u=d.exports}}]);
//# sourceMappingURL=buttons.c280cfb3.js.map