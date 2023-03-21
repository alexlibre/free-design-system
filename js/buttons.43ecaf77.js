"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[607],{7844:function(t,e,o){o.d(e,{Z:function(){return a}});var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))]),e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}),t._t("default")],2)},r=[],l={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},n=l,c=o(1001),s=(0,c.Z)(n,i,r,!1,null,"26829939",null),a=s.exports},9003:function(t,e,o){o.d(e,{Z:function(){return v}});var i=function(){var t=this,e=t._self._c;return e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(o){return e("tr",{key:o.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${o.attr}`}},[t._v(t._s(o.attr))])],1),e("td",{staticClass:"components-table__values"},[t._v(t._s(o.values.join(", ")))]),e("td",{staticClass:"components-table__types"},[t._v(t._s(o.types.join(", ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(o.default))]),e("td",{staticClass:"components-table__required"},[o.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])},r=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],l=o(2415),n={props:{items:{type:Array,required:!0}},components:{SvgIcon:l.Z}},c=n,s=o(1001),a=(0,s.Z)(c,i,r,!1,null,"5642846f",null),v=a.exports},7551:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"size",values:["s","m","l"],types:["string"],default:"m"},{attr:"view",values:["primary","secondary","outline","text","rounded","square"],types:["string"],default:"primary"},{attr:"icon",values:["any"],types:["string"],default:""},{attr:"color",values:["red","orange","yellow","green","blue","violet"],types:["string"],default:"orange"},{attr:"disabled",values:[!0,!1],types:["boolean"],default:!1}]}}),e("components-block",{attrs:{id:"size",title:"size",desc:"Select from different sizes: <code>s</code>, <code>m</code>, <code>l</code>. Default is medium."}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{size:"s"},on:{click:t.logClick}},[t._v("Small")]),e("v-button",{attrs:{size:"s",icon:"heart"},on:{click:t.logClick}},[t._v("Small")]),e("v-button",{attrs:{size:"s",icon:"heart"},on:{click:t.logClick}}),e("v-button",{on:{click:t.logClick}},[t._v("Medium")]),e("v-button",{attrs:{icon:"heart"},on:{click:t.logClick}},[t._v("Medium")]),e("v-button",{attrs:{icon:"heart"},on:{click:t.logClick}}),e("v-button",{attrs:{size:"l"},on:{click:t.logClick}},[t._v("Large")]),e("v-button",{attrs:{size:"l",icon:"heart"},on:{click:t.logClick}},[t._v("Large")]),e("v-button",{attrs:{size:"l",icon:"heart"},on:{click:t.logClick}})],1)]),e("components-block",{attrs:{id:"view",title:"view"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{on:{click:t.logClick}},[t._v("Primary")]),e("v-button",{attrs:{view:"secondary"},on:{click:t.logClick}},[t._v("Secondary")]),e("v-button",{attrs:{view:"outline"},on:{click:t.logClick}},[t._v("Outline")]),e("v-button",{attrs:{view:"text"},on:{click:t.logClick}},[t._v("Text")]),e("v-button",{attrs:{view:"rounded"},on:{click:t.logClick}},[t._v("Rounded")]),e("v-button",{attrs:{view:"square"},on:{click:t.logClick}},[t._v("Square")])],1)]),e("components-block",{attrs:{id:"icon",title:"icon"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{icon:"heart"},on:{click:t.logClick}},[t._v("Like")]),e("v-button",{attrs:{view:"secondary",icon:"eye"},on:{click:t.logClick}},[t._v("View")]),e("v-button",{attrs:{view:"outline",icon:"link-2"},on:{click:t.logClick}},[t._v("Link")]),e("v-button",{attrs:{view:"text",icon:"task"},on:{click:t.logClick}},[t._v("Tasks")]),e("v-button",{attrs:{view:"rounded",icon:"info-circle"},on:{click:t.logClick}},[t._v("Info")]),e("v-button",{attrs:{view:"square",icon:"attach-square"},on:{click:t.logClick}},[t._v("Attach")])],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{icon:"heart"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"secondary",icon:"eye"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"outline",icon:"link-2"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"text",icon:"task"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"rounded",icon:"info-circle"},on:{click:t.logClick}}),e("v-button",{attrs:{view:"square",icon:"attach-square"},on:{click:t.logClick}})],1)]),e("components-block",{attrs:{id:"color",title:"color"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{color:"red"}},[t._v("Primary")]),e("v-button",{attrs:{icon:"info-circle",color:"red"}}),e("v-button",[t._v("Primary")]),e("v-button",{attrs:{icon:"close-circle"}}),e("v-button",{attrs:{color:"yellow"}},[t._v("Primary")]),e("v-button",{attrs:{color:"yellow",icon:"heart"}}),e("v-button",{attrs:{color:"green"}},[t._v("Primary")]),e("v-button",{attrs:{color:"green",icon:"tick-circle"}}),e("v-button",{attrs:{color:"blue"}},[t._v("Primary")]),e("v-button",{attrs:{color:"blue",icon:"mask"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{view:"secondary",color:"red"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"secondary",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"secondary"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"secondary",icon:"close-circle"}}),e("v-button",{attrs:{view:"secondary",color:"yellow"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"secondary",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"secondary",color:"green"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"secondary",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"secondary",color:"blue"}},[t._v("Secondary")]),e("v-button",{attrs:{view:"secondary",icon:"mask",color:"blue"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{view:"outline",color:"red"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"outline",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"outline"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"outline",icon:"close-circle"}}),e("v-button",{attrs:{view:"outline",color:"yellow"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"outline",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"outline",color:"green"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"outline",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"outline",color:"blue"}},[t._v("Outlined")]),e("v-button",{attrs:{view:"outline",icon:"mask",color:"blue"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{view:"text",color:"red"}},[t._v("Text")]),e("v-button",{attrs:{view:"text",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"text"}},[t._v("Text")]),e("v-button",{attrs:{view:"text",icon:"close-circle"}}),e("v-button",{attrs:{view:"text",color:"yellow"}},[t._v("Text")]),e("v-button",{attrs:{view:"text",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"text",color:"green"}},[t._v("Text")]),e("v-button",{attrs:{view:"text",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"text",color:"blue"}},[t._v("Text")]),e("v-button",{attrs:{view:"text",icon:"mask",color:"blue"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{view:"rounded",color:"red"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"rounded",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"rounded"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"rounded",icon:"close-circle"}}),e("v-button",{attrs:{view:"rounded",color:"yellow"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"rounded",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"rounded",color:"green"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"rounded",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"rounded",color:"blue"}},[t._v("Rounded")]),e("v-button",{attrs:{view:"rounded",icon:"mask",color:"blue"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{view:"square",color:"red"}},[t._v("Square")]),e("v-button",{attrs:{view:"square",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{view:"square"}},[t._v("Square")]),e("v-button",{attrs:{view:"square",icon:"close-circle"}}),e("v-button",{attrs:{view:"square",color:"yellow"}},[t._v("Square")]),e("v-button",{attrs:{view:"square",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{view:"square",color:"green"}},[t._v("Square")]),e("v-button",{attrs:{view:"square",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{view:"square",color:"blue"}},[t._v("Square")]),e("v-button",{attrs:{view:"square",icon:"mask",color:"blue"}})],1)]),e("components-block",{attrs:{id:"disabled",title:"disabled"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",color:"red"}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:""}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",color:"yellow"}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",color:"yellow",icon:"heart"}}),e("v-button",{attrs:{disabled:"",color:"green"}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",color:"green",icon:"tick-circle"}}),e("v-button",{attrs:{disabled:"",color:"blue"}},[t._v("Primary")]),e("v-button",{attrs:{disabled:"",color:"blue",icon:"mask"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",view:"secondary",color:"red"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"secondary"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"secondary",color:"yellow"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"secondary",color:"green"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"secondary",color:"blue"}},[t._v("Secondary")]),e("v-button",{attrs:{disabled:"",view:"secondary",icon:"mask",color:"blue"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",view:"outline",color:"red"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"outline",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"outline"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"outline",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"outline",color:"yellow"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"outline",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"outline",color:"green"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"outline",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"outline",color:"blue"}},[t._v("Outlined")]),e("v-button",{attrs:{disabled:"",view:"outline",icon:"mask",color:"blue"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",view:"text",color:"red"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"text",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"text"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"text",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"text",color:"yellow"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"text",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"text",color:"green"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"text",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"text",color:"blue"}},[t._v("Text")]),e("v-button",{attrs:{disabled:"",view:"text",icon:"mask",color:"blue"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",view:"rounded",color:"red"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"rounded"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"rounded",color:"yellow"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"rounded",color:"green"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"rounded",color:"blue"}},[t._v("Rounded")]),e("v-button",{attrs:{disabled:"",view:"rounded",icon:"mask",color:"blue"}})],1),e("div",{staticClass:"flex gap-16"},[e("v-button",{attrs:{disabled:"",view:"square",color:"red"}},[t._v("Square")]),e("v-button",{attrs:{disabled:"",view:"square",icon:"info-circle",color:"red"}}),e("v-button",{attrs:{disabled:"",view:"square"}},[t._v("Square")]),e("v-button",{attrs:{disabled:"",view:"square",icon:"close-circle"}}),e("v-button",{attrs:{disabled:"",view:"square",color:"yellow"}},[t._v("Square")]),e("v-button",{attrs:{disabled:"",view:"square",icon:"heart",color:"yellow"}}),e("v-button",{attrs:{disabled:"",view:"square",color:"green"}},[t._v("Square")]),e("v-button",{attrs:{disabled:"",view:"square",icon:"tick-circle",color:"green"}}),e("v-button",{attrs:{disabled:"",view:"square",color:"blue"}},[t._v("Square")]),e("v-button",{attrs:{disabled:"",view:"square",icon:"mask",color:"blue"}})],1)]),e("components-block",{attrs:{id:"click",title:"click"}},[e("div",{staticClass:"flex gap-16"},[e("v-button",{on:{click:t.alertClick}},[t._v("Make alert")])],1)])],1)},r=[],l=o(3914),n=o(9003),c=o(7844),s={components:{vButton:l.Z,ComponentsTable:n.Z,ComponentsBlock:c.Z},methods:{logClick(){console.log("click")},alertClick(){alert("Clicked!")}}},a=s,v=o(1001),u=(0,v.Z)(a,i,r,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=buttons.43ecaf77.js.map