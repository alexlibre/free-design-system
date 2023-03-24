"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[160],{5270:function(t,n,e){e.d(n,{Z:function(){return u}});var s=function(){var t=this,n=t._self._c;return n("button",{staticClass:"button",class:{button_view_primary:"primary"===t.view,button_view_secondary:"secondary"===t.view,button_view_outline:"outline"===t.view,button_view_text:"text"===t.view,button_view_rounded:"rounded"===t.view,button_view_square:"square"===t.view,button_color_red:"red"===t.color,button_color_orange:"orange"===t.color,button_color_yellow:"yellow"===t.color,button_color_green:"green"===t.color,button_color_blue:"blue"===t.color,button_color_gray:"gray"===t.color,button_icon:t.noText,button_size_s:"s"===t.size,button_size_m:"m"===t.size,button_size_l:"l"===t.size,button_is_active:t.active,button_empty:t.empty},on:{click:t.onClick}},[t.noText?t._e():n("span",{staticClass:"button__text"},[t._t("default")],2),t.icon?n("svg-icon",{attrs:{name:t.icon,size:t.iconSize}}):t._e()],1)},o=[],a=e(2415),i={props:{size:{type:String,default:"m"},view:{type:String,default:"primary"},icon:{type:String,default:""},active:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},color:{type:String,default:"blue"}},components:{SvgIcon:a.Z},computed:{noText(){return!this.$slots.default},iconSize(){switch(this.size){case"s":return[14];case"l":return[20];default:return[16]}}},methods:{onClick(t){this.$emit("click",t)}}},r=i,c=e(1001),l=(0,c.Z)(r,s,o,!1,null,"4587fbc9",null),u=l.exports},8715:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var s=function(){var t=this,n=t._self._c;return n("div",{staticClass:"content"},[n("div",{staticClass:"content__head"},[n("v-button",{staticClass:"content__menu-btn",attrs:{icon:t.menuOpened?"menu-close":"menu"},on:{click:t.toggleAside}}),n("Transition",{attrs:{appear:"",name:"slide-fade",mode:"out-in"}},[n("h1",{key:t.currentRouteName,staticClass:"content__header"},[t._v(" "+t._s(t.currentRouteName)+" ")])])],1),n("hr"),n("div",{staticClass:"content__inner"},[n("div",{ref:"aside",staticClass:"content__aside"},[n("nav",{staticClass:"content__nav"},[n("span",{staticClass:"content__nav-title"},[t._v("Foundations")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/grids"}},[t._v("Grid")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/colors"}},[t._v("Colors")]),n("hr",{staticClass:"content__nav-divider"}),n("span",{staticClass:"content__nav-title"},[t._v("Atoms")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/avatar"}},[t._v("Avatar")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/avatar-group"}},[t._v("Avatar group")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/buttons"}},[t._v("Button")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/button-group"}},[t._v("Button group")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/checkbox"}},[t._v("Checkbox")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/input"}},[t._v("Input")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/logo"}},[t._v("Logo")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/rating"}},[t._v("Rating")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/select"}},[t._v("Select")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/switch"}},[t._v("Switch")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/tags"}},[t._v("Tag")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/textarea"}},[t._v("Textarea")]),n("hr",{staticClass:"content__nav-divider"}),n("span",{staticClass:"content__nav-title"},[t._v("Molecules")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/card"}},[t._v("Card")]),n("v-menu-item",{staticClass:"content__nav-link",attrs:{url:"/components/modal"}},[t._v("Modal")]),n("hr",{staticClass:"content__nav-divider"}),n("span",{staticClass:"content__nav-title"},[t._v("Organisms")])],1)]),n("div",{staticClass:"content__wrapper"},[n("transition",{attrs:{mode:"out-in",appear:""}},[n("router-view",{staticClass:"content__view"},[n("p",[t._v("Components page")])])],1),t.isRoot?n("div",{staticClass:"content__view"},[n("p",[t._v("In progress")])]):t._e()],1)])])},o=[],a=function(){var t=this,n=t._self._c;return n("router-link",{staticClass:"menu-item",attrs:{to:t.url}},[t._t("default")],2)},i=[],r={props:{url:{type:String,default:""}}},c=r,l=e(1001),u=(0,l.Z)(c,a,i,!1,null,"24ce30ed",null),_=u.exports,v=e(5270),m=e(477),p={components:{VMenuItem:_,VButton:v.Z},data(){return{menuOpened:!1}},computed:{currentRouteName(){return this.$route.name},isRoot(){return"Components"===this.$route.name}},watch:{$route(t,n){this.closeAside()}},methods:{toggleAside(){if(!this.menuOpened)return this.menuOpened=!0,void m.p8.to(this.$refs.aside,.2,{x:"0"});this.closeAside()},closeAside(){this.menuOpened=!1,m.p8.to(this.$refs.aside,.2,{x:"-120%"})}}},d=p,C=(0,l.Z)(d,s,o,!1,null,"004d9068",null),b=C.exports}}]);
//# sourceMappingURL=components.01f72c55.js.map