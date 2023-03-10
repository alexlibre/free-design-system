"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[982],{3868:function(t,e,a){a.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"textarea",class:{textarea_focus:t.hasFocus,textarea_error:t.hasError,textarea_fixed:t.isFixed}},[e("div",{staticClass:"textarea__inner"},[e("label",{staticClass:"textarea__label",attrs:{for:t.guid}},[t._v(t._s(t.label))]),e("div",{staticClass:"textarea__box"},[t.controls.length?e("div",{staticClass:"textarea__controls"},[t._l(t.controls,(function(t,a){return["divider"===t.name?[e("span",{key:a,staticClass:"textarea__control textarea__control_divider"},[e("SvgIcon",{attrs:{name:"divider",size:[16]}})],1)]:[e("v-button",{key:a,attrs:{view:"text",icon:t.name,"on-click":t.cb}})]]}))],2):t._e(),e("textarea",{attrs:{id:t.guid,placeholder:t.placeholder,rows:t.rows},domProps:{value:t.text},on:{input:t.updateValue,focus:t.onFocus,blur:t.onBlur}})]),e("div",{staticClass:"textarea__footer"},[t.helper?e("p",{staticClass:"textarea__helper"},[t._v(t._s(t.helper))]):t._e(),t.limit?e("p",{staticClass:"textarea__limit"},[t._v(" "+t._s(t.limitRest)+" / "+t._s(t.limit)+" ")]):t._e()])])])},l=[],r=a(2415),n=a(9093),o={props:{label:{type:String,default:""},placeholder:{type:String,default:""},helper:{type:String,default:""},limit:{type:Number,default:0},rows:{type:Number,default:6},controls:{type:Array,default:()=>[]},hasError:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1}},components:{SvgIcon:r.Z,VButton:n.Z},data(){return{text:"",hasFocus:!1}},computed:{guid(){return(Math.random()+1).toString(36).substring(2)},limitRest(){return this.text.length}},methods:{updateValue(t){const e=t.target.value;(!this.limit||String(e).length<=this.limit)&&(this.text=e),this.$forceUpdate()},onFocus(){this.hasFocus=!0},onBlur(){this.hasFocus=!1}}},i=o,c=a(1001),u=(0,c.Z)(i,s,l,!1,null,null,null),p=u.exports},6285:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"components-block"},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.title))]),t._t("default")],2)},l=[],r={props:{title:{type:String,required:!0}}},n=r,o=a(1001),i=(0,o.Z)(n,s,l,!1,null,"2dd08045",null),c=i.exports},9891:function(t,e,a){a.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(a){return e("tr",{key:a.attr},[e("td",{staticClass:"components-table__attributes"},[t._v(t._s(a.attr))]),e("td",{staticClass:"components-table__values"},[t._v(t._s(a.values.join(", ")))]),e("td",{staticClass:"components-table__types"},[t._v(t._s(a.types.join(", ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(a.default))]),e("td",{staticClass:"components-table__required"},[a.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span",[t._v("—")])])])})),0)])},l=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],r=a(2415),n={props:{items:{type:Array,default:()=>[{}]}},components:{SvgIcon:r.Z}},o=n,i=a(1001),c=(0,i.Z)(o,s,l,!1,null,"1958d3ac",null),u=c.exports},8489:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"label",values:["any"],types:["string"],default:"—"},{attr:"placeholder",values:["any"],types:["string"],default:"—"},{attr:"helper",values:["any"],types:["string"],default:"—"},{attr:"limit",values:["any number"],types:["number"],default:"0"},{attr:"rows",values:["any number"],types:["number"],default:"6"},{attr:"controls",values:["any"],types:["{[ name: string","cb: function ]}"],default:"empty Array"},{attr:"has-error",values:["true","false"],types:["boolean"],default:"false"},{attr:"is-fixed",values:["true","false"],types:["boolean"],default:"false"}]}}),e("components-block",{attrs:{title:"label"}},[e("v-textarea",{attrs:{label:"Textarea label"}})],1),e("components-block",{attrs:{title:"placeholder"}},[e("v-textarea",{attrs:{placeholder:"Textarea placeholder"}})],1),e("components-block",{attrs:{title:"helper"}},[e("v-textarea",{attrs:{helper:"Textarea helper"}})],1),e("components-block",{attrs:{title:"limit"}},[e("v-textarea",{attrs:{limit:1e3}})],1),e("components-block",{attrs:{title:"rows"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-textarea",{attrs:{rows:15}}),e("v-textarea",{attrs:{rows:3}}),e("v-textarea",{attrs:{rows:8}})],1)]),e("components-block",{attrs:{title:"controls"}},[e("v-textarea",{attrs:{controls:[{name:"text-bold",cb:t.cb1},{name:"text-italic",cb:t.cb2},{name:"text-underline",cb:t.cb3},{name:"divider"},{name:"link-2",cb:t.cb4}]}})],1),e("components-block",{attrs:{title:"has-error"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-textarea",{attrs:{"has-error":"",helper:"Error"}})],1)]),e("components-block",{attrs:{title:"is-fixed"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-textarea",{attrs:{label:"Fixed","is-fixed":""}}),e("v-textarea",{attrs:{label:"Not fixed"}})],1)])],1)},l=[],r=a(3868),n=a(9891),o=a(6285),i={components:{VTextarea:r.Z,ComponentsTable:n.Z,ComponentsBlock:o.Z},methods:{cb1(){console.log("text-bold")},cb2(){console.log("text-italic")},cb3(){console.log("text-underline")},cb4(){console.log("link-2")}}},c=i,u=a(1001),p=(0,u.Z)(c,s,l,!1,null,null,null),d=p.exports}}]);
//# sourceMappingURL=textareas.d94a119e.js.map