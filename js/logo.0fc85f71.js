"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[781],{4554:function(t,s,e){e.d(s,{Z:function(){return r}});var a=function(){var t=this,s=t._self._c;return s("section",{staticClass:"components-block",attrs:{id:t.id}},[s("fieldset",{staticClass:"components-block__example"},[s("legend",[s("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))])]),t.desc?s("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}):t._e(),t._t("default")],2)])},o=[],n={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""},variants:{type:Array,default:()=>[]}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},i=n,c=e(1001),l=(0,c.Z)(i,a,o,!1,null,"2c6e2c74",null),r=l.exports},7223:function(t,s,e){e.d(s,{Z:function(){return p}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"wrap"},[s("table",{staticClass:"components-table"},[t._m(0),s("tbody",t._l(t.items,(function(e){return s("tr",{key:e.attr},[s("td",{staticClass:"components-table__attributes"},[s("router-link",{attrs:{to:`#${e.attr}`}},[t._v(t._s(e.attr))])],1),s("td",{staticClass:"components-table__values",domProps:{innerHTML:t._s(t.value(e.values))}}),s("td",{staticClass:"components-table__types"},[t._v(t._s(e.types.join(" | ")))]),s("td",{staticClass:"components-table__default"},[t._v(t._s(e.default))]),s("td",{staticClass:"components-table__required"},[e.required?s("span",{staticClass:"components-table__icon"},[s("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):s("span")])])})),0)])])},o=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),s("th",{staticClass:"components-table__values"},[t._v("Values")]),s("th",{staticClass:"components-table__types"},[t._v("Types")]),s("th",{staticClass:"components-table__default"},[t._v("Default")]),s("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],n=e(2415),i={props:{items:{type:Array,required:!0}},components:{SvgIcon:n.Z},methods:{value(t){return t.join(" | ")}}},c=i,l=e(1001),r=(0,l.Z)(c,a,o,!1,null,"1bd750fa",null),p=r.exports},5608:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var a=function(){var t=this,s=t._self._c;return s("div",[s("components-table",{attrs:{items:[{attr:"icon",values:["any"],types:["string"],default:"",required:!0},{attr:"size",values:["s","m","l"],types:["string"],default:"l"},{attr:"color",values:["positive","negative","colored","white","colored-only"],types:["string"],default:"positive"},{attr:"name",values:["any"],types:["string"],default:""}]}}),s("components-block",{attrs:{id:"icon",title:"icon"}},[s("v-logo",{attrs:{icon:"7spaces",name:"7spaces"}})],1),s("components-block",{attrs:{id:"size",title:"size"}},[s("div",{staticClass:"flex gap-16"},[s("v-logo",{attrs:{icon:"7spaces",name:"7spaces"}}),s("v-logo",{attrs:{icon:"7spaces",name:"7spaces",size:"m"}}),s("v-logo",{attrs:{icon:"7spaces",name:"7spaces",size:"s"}})],1)]),s("components-block",{attrs:{id:"color",title:"color"}},[s("div",{staticClass:"flex gap-16"},[s("v-logo",{attrs:{icon:"7spaces",name:"7spaces"}}),s("v-logo",{attrs:{icon:"7spaces",name:"7spaces",color:"negative"}}),s("v-logo",{attrs:{icon:"7spaces",name:"7spaces",color:"colored"}}),s("div",{staticClass:"add-bg"},[s("v-logo",{attrs:{icon:"7spaces",name:"7spaces",color:"white"}})],1),s("v-logo",{attrs:{icon:"7spaces",name:"7spaces",color:"colored-only"}})],1)]),s("components-block",{attrs:{id:"icon",title:"icon"}},[s("div",{staticClass:"flex gap-16"},[s("v-logo",{attrs:{icon:"7spaces"}}),s("v-logo",{attrs:{icon:"7spaces",name:"7spaces"}})],1)])],1)},o=[],n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"logo",class:`logo_size_${t.size} logo_color_${t.color}`},[s("div",{staticClass:"logo__inner"},[s("svg-icon",{staticClass:"logo__icon",attrs:{name:t.icon,size:[t.iconSize]}}),t.name?s("span",{staticClass:"logo__name"},[t._v(t._s(t.name))]):t._e()],1)])},i=[],c=e(2415),l={props:{icon:{type:String,required:!0},size:{type:String,default:"l"},name:{type:String,default:""},color:{type:String,default:"positive"}},components:{SvgIcon:c.Z},computed:{iconSize(){switch(this.size){case"m":return 32;case"s":return 16;default:return 48}}}},r=l,p=e(1001),u=(0,p.Z)(r,n,i,!1,null,"293a8c7a",null),_=u.exports,d=e(7223),m=e(4554),v={components:{VLogo:_,ComponentsTable:d.Z,ComponentsBlock:m.Z}},f=v,g=(0,p.Z)(f,a,o,!1,null,"f0430518",null),b=g.exports}}]);
//# sourceMappingURL=logo.0fc85f71.js.map