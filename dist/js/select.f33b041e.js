"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[286],{2239:function(t,e,s){s.d(e,{Z:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))]),e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}),e("div",{staticClass:"components-block__example"},[t._t("default")],2)])},o=[],l={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""},variants:{type:Array,default:()=>[]}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},n=l,i=s(1001),c=(0,i.Z)(n,a,o,!1,null,"f7dd0538",null),r=c.exports},7223:function(t,e,s){s.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(s){return e("tr",{key:s.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${s.attr}`}},[t._v(t._s(s.attr))])],1),e("td",{staticClass:"components-table__values",domProps:{innerHTML:t._s(t.value(s.values))}}),e("td",{staticClass:"components-table__types"},[t._v(t._s(s.types.join(" | ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(s.default))]),e("td",{staticClass:"components-table__required"},[s.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])])},o=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],l=s(2415),n={props:{items:{type:Array,required:!0}},components:{SvgIcon:l.Z},methods:{value(t){return t.join(" | ")}}},i=n,c=s(1001),r=(0,c.Z)(i,a,o,!1,null,"1bd750fa",null),p=r.exports},2921:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var a=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"options",values:["any array of strings"],types:["string[]"],default:"",required:!0},{attr:"placeholder",values:["any string"],types:["string"],default:"Select option"},{attr:"compact",values:[!0,!1],types:["boolean"],default:!1},{attr:"label",values:["any string"],types:["string"],default:""},{attr:"disabled",values:[!0,!1],types:["boolean"],default:!1}]}}),e("components-block",{attrs:{id:"options",title:"options"}},[e("div",{staticClass:"flex gap-16"},[e("v-select",{attrs:{options:["Option 1","Option 2","Option 3","Option 4","Option 5","Option 6","Option 7"]}})],1)]),e("components-block",{attrs:{id:"placeholder",title:"placeholder"}},[e("div",{staticClass:"flex gap-16"},[e("v-select",{attrs:{options:["Option 1","Option 2","Option 3"]}}),e("v-select",{attrs:{options:["Option 1","Option 2","Option 3"],placeholder:"Custom placeholder"}})],1)]),e("components-block",{attrs:{id:"compact",title:"compact"}},[e("div",{staticClass:"flex gap-16"},[e("v-select",{attrs:{label:"Compact",compact:"",options:["Option 1","Option 2","Option 3"]}}),e("v-select",{attrs:{label:"Default",options:["Option 1","Option 2","Option 3"]}})],1)]),e("components-block",{attrs:{id:"label",title:"label"}},[e("div",{staticClass:"flex gap-16"},[e("v-select",{attrs:{label:"Label for select",options:["Option 1","Option 2","Option 3"]}})],1)]),e("components-block",{attrs:{id:"disabled",title:"disabled"}},[e("div",{staticClass:"flex gap-16"},[e("v-select",{attrs:{label:"Label",options:["Option 1","Option 2","Option 3"],disabled:""}})],1)])],1)},o=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"select",class:{select_compact:t.compact,select_opened:t.opened,select_disabled:t.disabled},attrs:{tabindex:"0"},on:{blur:t.looseFocus}},[e("div",{staticClass:"select__inner"},[t.label?e("label",{staticClass:"select__label",on:{click:t.toggleOptions}},[t._v(t._s(t.label))]):t._e(),e("div",{staticClass:"select__box",class:{select__box_opened:t.opened},on:{click:t.toggleOptions}},[e("div",{staticClass:"select__value",class:{select__value_selected:t.selected!==t.placeholder}},[t._v(" "+t._s(t.selected)+" ")]),e("div",{ref:"selectArrow",staticClass:"select__icon"},[e("svg-icon",{attrs:{name:"arrow-down",size:[20]}})],1)]),e("transition",{attrs:{appear:""}},[t.opened?e("div",{ref:"selectList",staticClass:"select__options"},t._l(t.options,(function(s){return e("div",{key:s,staticClass:"select__option",on:{click:function(e){return t.selectOption(s)}}},[t._v(" "+t._s(s)+" ")])})),0):t._e()])],1),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{"aria-hidden":"true"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?s:s[0]}}},t._l(t.options,(function(s){return e("option",{key:s,domProps:{value:s}},[t._v(" "+t._s(s)+" ")])})),0)])},n=[],i=s(2415),c=s(477),r=s(4037),p={components:{SvgIcon:i.Z},props:{options:{type:Array,default:()=>[]},placeholder:{type:String,default:"Select option"},compact:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{type:String,default:""}},data(){return{selected:this.placeholder,opened:!1}},watch:{opened(){this.opened?this.animateIn():this.animateOut()}},methods:{selectOption(t){this.selected=t,this.opened=!1},toggleOptions(){this.opened=!this.opened},looseFocus(){this.opened=!1},animateIn(){c.p8.to(this.$refs.selectArrow,1,{rotate:"180deg",ease:r.tQ.easeOut.config(1,.3)}),this.$nextTick((()=>{c.p8.from(this.$refs.selectList,.2,{opacity:0}),c.p8.from(this.$refs.selectList,.5,{y:"-40px",ease:r.sm.easeOut})}))},animateOut(){c.p8.killTweensOf(this.$refs.selectArrow),c.p8.fromTo(this.$refs.selectArrow,.2,{rotate:"180deg"},{rotate:"0"}),c.p8.to(this.$refs.selectList,.2,{opacity:0})}}},d=p,u=s(1001),_=(0,u.Z)(d,l,n,!1,null,"04eaa2c0",null),f=_.exports,v=s(7223),m=s(2239),b={components:{VSelect:f,ComponentsTable:v.Z,ComponentsBlock:m.Z}},h=b,y=(0,u.Z)(h,a,o,!1,null,"2fc66e2e",null),C=y.exports}}]);
//# sourceMappingURL=select.f33b041e.js.map