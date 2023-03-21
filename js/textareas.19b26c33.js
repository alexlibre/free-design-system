"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[982],{2592:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"textarea",class:{textarea_focus:t.hasFocus,textarea_error:t.hasError,textarea_fixed:t.isFixed}},[e("div",{staticClass:"textarea__inner"},[e("label",{staticClass:"textarea__label",attrs:{for:t.guid}},[t._v(t._s(t.label))]),e("div",{staticClass:"textarea__box"},[t.controls.length?e("div",{staticClass:"textarea__controls"},[t._l(t.controls,(function(t,a){return["divider"===t.name?[e("span",{key:a,staticClass:"textarea__control textarea__control_divider"},[e("SvgIcon",{attrs:{name:"divider",size:[16]}})],1)]:[e("v-button",{key:a,attrs:{view:"text",size:"s",color:"gray",icon:t.name},on:{click:t.cb}})]]}))],2):t._e(),e("textarea",{attrs:{id:t.guid,placeholder:t.placeholder,rows:t.rows},domProps:{value:t.text},on:{input:t.updateValue,focus:t.onFocus,blur:t.onBlur}})]),e("div",{staticClass:"textarea__footer"},[t.helper?e("p",{staticClass:"textarea__helper"},[t._v(t._s(t.helper))]):t._e(),t.limit?e("p",{staticClass:"textarea__limit"},[t._v(" "+t._s(t.limitRest)+" / "+t._s(t.limit)+" ")]):t._e()])])])},r=[],l=a(2415),o=a(3914),i={props:{label:{type:String,default:""},placeholder:{type:String,default:""},helper:{type:String,default:""},limit:{type:Number,default:0},rows:{type:Number,default:6},controls:{type:Array,default:()=>[]},hasError:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1}},components:{SvgIcon:l.Z,VButton:o.Z},data(){return{text:"",hasFocus:!1}},computed:{guid(){return(Math.random()+1).toString(36).substring(2)},limitRest(){return this.text.length}},methods:{updateValue(t){const e=t.target.value;(!this.limit||String(e).length<=this.limit)&&(this.text=e),this.$forceUpdate()},onFocus(){this.hasFocus=!0},onBlur(){this.hasFocus=!1}}},n=i,c=a(1001),u=(0,c.Z)(n,s,r,!1,null,null,null),d=u.exports},7844:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))]),e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}),t._t("default")],2)},r=[],l={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},o=l,i=a(1001),n=(0,i.Z)(o,s,r,!1,null,"26829939",null),c=n.exports},9003:function(t,e,a){a.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(a){return e("tr",{key:a.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${a.attr}`}},[t._v(t._s(a.attr))])],1),e("td",{staticClass:"components-table__values"},[t._v(t._s(a.values.join(", ")))]),e("td",{staticClass:"components-table__types"},[t._v(t._s(a.types.join(", ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(a.default))]),e("td",{staticClass:"components-table__required"},[a.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])},r=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],l=a(2415),o={props:{items:{type:Array,required:!0}},components:{SvgIcon:l.Z}},i=o,n=a(1001),c=(0,n.Z)(i,s,r,!1,null,"5642846f",null),u=c.exports},1962:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"label",values:["any"],types:["string"],default:""},{attr:"placeholder",values:["any"],types:["string"],default:""},{attr:"helper",values:["any"],types:["string"],default:""},{attr:"limit",values:["any number"],types:["number"],default:"0"},{attr:"rows",values:["any number"],types:["number"],default:"6"},{attr:"controls",values:["any"],types:["Object"],default:"empty Array"},{attr:"has-error",values:["true","false"],types:["boolean"],default:"false"},{attr:"is-fixed",values:["true","false"],types:["boolean"],default:"false"}]}}),e("components-block",{attrs:{id:"label",title:"label"}},[e("v-textarea",{attrs:{label:"Textarea label"}})],1),e("components-block",{attrs:{id:"placeholder",title:"placeholder"}},[e("v-textarea",{attrs:{placeholder:"Textarea placeholder"}})],1),e("components-block",{attrs:{id:"helper",title:"helper"}},[e("v-textarea",{attrs:{helper:"Textarea helper"}})],1),e("components-block",{attrs:{id:"limit",title:"limit"}},[e("v-textarea",{attrs:{limit:1e3}})],1),e("components-block",{attrs:{id:"rows",title:"rows"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-textarea",{attrs:{helper:"15 rows",rows:15}}),e("v-textarea",{attrs:{helper:"3 rows",rows:3}}),e("v-textarea",{attrs:{helper:"8 rows",rows:8}})],1)]),e("components-block",{attrs:{id:"controls",title:"controls"}},[e("v-textarea",{attrs:{controls:[{name:"text-bold",cb:t.cb1},{name:"text-italic",cb:t.cb2},{name:"text-underline",cb:t.cb3},{name:"divider"},{name:"link-2",cb:t.cb4}]}})],1),e("components-block",{attrs:{id:"hasError",title:"has-error"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-textarea",{attrs:{"has-error":"",helper:"Error"}})],1)]),e("components-block",{attrs:{id:"isFixed",title:"is-fixed"}},[e("div",{staticClass:"flex flex-start gap-16"},[e("v-textarea",{attrs:{label:"Fixed","is-fixed":""}}),e("v-textarea",{attrs:{label:"Not fixed"}})],1)])],1)},r=[],l=a(2592),o=a(9003),i=a(7844),n={components:{VTextarea:l.Z,ComponentsTable:o.Z,ComponentsBlock:i.Z},methods:{cb1(){alert("Will set text to bold")},cb2(){alert("Will set text to italic")},cb3(){alert("Will set text to underline")},cb4(){alert("Will add link")}}},c=n,u=a(1001),d=(0,u.Z)(c,s,r,!1,null,null,null),p=d.exports}}]);
//# sourceMappingURL=textareas.19b26c33.js.map