"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[582],{5270:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("button",{staticClass:"button",class:{button_view_primary:"primary"===t.view,button_view_secondary:"secondary"===t.view,button_view_outline:"outline"===t.view,button_view_text:"text"===t.view,button_view_rounded:"rounded"===t.view,button_view_square:"square"===t.view,button_color_red:"red"===t.color,button_color_orange:"orange"===t.color,button_color_yellow:"yellow"===t.color,button_color_green:"green"===t.color,button_color_blue:"blue"===t.color,button_color_gray:"gray"===t.color,button_icon:t.noText,button_size_s:"s"===t.size,button_size_m:"m"===t.size,button_size_l:"l"===t.size,button_is_active:t.active,button_empty:t.empty},on:{click:t.onClick}},[t.noText?t._e():e("span",{staticClass:"button__text"},[t._t("default")],2),t.icon?e("svg-icon",{attrs:{name:t.icon,size:t.iconSize}}):t._e()],1)},o=[],r=s(2415),l={props:{size:{type:String,default:"m"},view:{type:String,default:"primary"},icon:{type:String,default:""},active:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},color:{type:String,default:"blue"}},components:{SvgIcon:r.Z},computed:{noText(){return!this.$slots.default},iconSize(){switch(this.size){case"s":return[14];case"l":return[20];default:return[16]}}},methods:{onClick(t){this.$emit("click",t)}}},i=l,n=s(1001),c=(0,n.Z)(i,a,o,!1,null,"4587fbc9",null),u=c.exports},5865:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",class:`${t.size?"card_size_"+t.size:""} card_theme_${t.themeDark?"dark":"light"} ${t.shadow?"card_has_shadow":""}`},[e("div",{staticClass:"card__inner"},[t.hasHeader?e("div",{staticClass:"card__header"},[t._t("cardHeader")],2):t._e(),t.hasBody?e("div",{staticClass:"card__body",class:{card__body_pt:!t.hasHeader}},[t._t("cardBody")],2):t._e(),t.hasFooter?e("div",{staticClass:"card__footer"},[t._t("cardFooter")],2):t._e()])])},o=[],r={props:{size:{type:String,default:""},themeDark:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},computed:{hasHeader(){return!!this.$scopedSlots.cardHeader},hasBody(){return!!this.$scopedSlots.cardBody},hasFooter(){return!!this.$scopedSlots.cardFooter}}},l=r,i=s(1001),n=(0,i.Z)(l,a,o,!1,null,"332515ff",null),c=n.exports},3214:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"input",class:{input_disabled:t.disabled,input_focus:t.hasFocus,input_compact:t.compact,input_success:"success"===t.state,input_error:"error"===t.state}},[e("div",{staticClass:"input__inner"},[t.label||t.labelSecond?e("div",{staticClass:"input__head"},[t.label?e("label",{staticClass:"input__label",attrs:{for:t.guid}},[t._v(t._s(t.label))]):t._e(),t.labelSecond?e("span",{staticClass:"input__label-second"},[t._v(t._s(t.labelSecond))]):t._e()]):t._e(),e("div",{staticClass:"input__box"},[e("input",{staticClass:"input__input",attrs:{id:t.guid,type:t.inputType,placeholder:t.placeholder},domProps:{value:t.text},on:{input:t.updateValue,focus:t.onFocus,blur:t.onBlur}}),"password"===t.type?[e("v-button",{staticClass:"input__icon-btn",attrs:{color:t.currentColor,view:"text",empty:""},on:{click:t.switchPasswordVisibility}},[e("svg-icon",{staticClass:"input__icon",attrs:{name:t.currentIcon,size:[16]}})],1)]:[t.icon?e("svg-icon",{staticClass:"input__icon",attrs:{name:t.icon,size:[16]}}):t._e()]],2),t.helper?e("span",{staticClass:"input__helper"},[t._v(t._s(t.helper))]):t._e()])])},o=[],r=s(2415),l=s(5270),i={props:{label:{type:String,default:""},labelSecond:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},helper:{type:String,default:""},state:{type:String,default:"default"},type:{type:String,default:"text"},controls:{type:Array,default:()=>[]},hasError:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},icon:{type:String,default:""},initial:{type:String,default:""}},components:{SvgIcon:r.Z,VButton:l.Z},data(){return{text:this.initial,inputType:this.type,hasFocus:!1,showPassword:!1,currentIcon:this.icon||"eye"}},watch:{showPassword:function(){this.inputType=this.showPassword?"text":"password",this.currentIcon=this.showPassword?"eye-slash":"eye"}},computed:{guid(){return(Math.random()+1).toString(36).substring(2)},currentColor(){switch(this.state){case"success":return"green";case"error":return"red";default:return"blue"}}},methods:{updateValue(t){const e=t.target.value;this.text=e,this.$forceUpdate()},onFocus(){this.hasFocus=!0},onBlur(){this.hasFocus=!1},switchPasswordVisibility(){"password"===this.type&&(this.showPassword=!this.showPassword)}}},n=i,c=s(1001),u=(0,c.Z)(n,a,o,!1,null,"dca53e1a",null),d=u.exports},7912:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"textarea",class:{textarea_focus:t.hasFocus,textarea_error:t.hasError,textarea_fixed:t.isFixed,textarea_compact:t.compact}},[e("div",{staticClass:"textarea__inner"},[e("label",{staticClass:"textarea__label",attrs:{for:t.guid}},[t._v(t._s(t.label))]),e("div",{staticClass:"textarea__box"},[t.controls.length?e("div",{staticClass:"textarea__controls"},[t._l(t.controls,(function(t,s){return["divider"===t.name?[e("span",{key:s,staticClass:"textarea__control textarea__control_divider"},[e("SvgIcon",{attrs:{name:"divider",size:[16]}})],1)]:[e("v-button",{key:s,attrs:{view:"text",size:"s",color:"gray",icon:t.name},on:{click:t.cb}})]]}))],2):t._e(),e("textarea",{attrs:{id:t.guid,placeholder:t.placeholder,rows:t.rows},domProps:{value:t.text},on:{input:t.updateValue,focus:t.onFocus,blur:t.onBlur}})]),e("div",{staticClass:"textarea__footer"},[t.helper?e("p",{staticClass:"textarea__helper"},[t._v(t._s(t.helper))]):t._e(),t.limit?e("p",{staticClass:"textarea__limit"},[t._v(" "+t._s(t.limitRest)+" / "+t._s(t.limit)+" ")]):t._e()])])])},o=[],r=s(2415),l=s(5270),i={props:{label:{type:String,default:""},placeholder:{type:String,default:""},helper:{type:String,default:""},limit:{type:Number,default:0},rows:{type:Number,default:6},controls:{type:Array,default:()=>[]},hasError:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1},compact:{type:Boolean,default:!1}},components:{SvgIcon:r.Z,VButton:l.Z},data(){return{text:"",hasFocus:!1}},computed:{guid(){return(Math.random()+1).toString(36).substring(2)},limitRest(){return this.text.length}},methods:{updateValue(t){const e=t.target.value;(!this.limit||String(e).length<=this.limit)&&(this.text=e),this.$forceUpdate()},onFocus(){this.hasFocus=!0},onBlur(){this.hasFocus=!1}}},n=i,c=s(1001),u=(0,c.Z)(n,a,o,!1,null,null,null),d=u.exports},8161:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var a=function(){var t=this,e=t._self._c;return e("div",[e("v-button",{on:{click:t.toggleModal}},[t._v("Show modal")]),t.showModal?e("v-modal",{on:{closeModal:t.toggleModal},scopedSlots:t._u([{key:"body",fn:function(){return[e("v-card",{staticClass:"modal-form",scopedSlots:t._u([{key:"cardBody",fn:function(){return[e("div",{staticClass:"form"},[e("div",{staticClass:"form__inner"},[e("h4",[t._v("Send Invitation")]),e("v-input",{attrs:{id:"card-input",label:"Email",type:"email",text:"hello.mail.cristian.com",placeholder:"hello@mail.com"}}),e("v-textarea",{attrs:{label:"Message",placeholder:"Placeholder",isFixed:""}}),e("v-button",[t._v("Continue")])],1)])]},proxy:!0}],null,!1,4142065893)})]},proxy:!0}],null,!1,833515051)}):t._e()],1)},o=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{ref:"cloak",staticClass:"modal__cloak",on:{click:t.close}}),e("div",{ref:"modal",staticClass:"modal__wrapper"},[e("div",{staticClass:"modal__inner"},[e("div",{staticClass:"modal__header"},[t._t("header",(function(){return[e("v-button",{staticClass:"modal__close-btn",attrs:{size:"l",view:"text",color:"gray",icon:"close-circle"},on:{click:t.close}})]}))],2),t.body?e("div",{staticClass:"modal__body"},[t._t("body")],2):t._e(),t.footer?e("div",{staticClass:"modal__footer"},[t._t("footer")],2):t._e()])])])},l=[],i=s(5270),n=s(477),c=s(4037),u={components:{VButton:i.Z},methods:{close(){this.$emit("closeModal")}},computed:{body(){return this.$slots.body},footer(){return this.$slots.footer}},mounted(){n.p8.from(this.$refs.cloak,{opacity:0,duration:.5}),n.p8.fromTo(this.$refs.modal,.5,{opacity:0,y:"-100vh",delay:.5},{opacity:1,y:"-100%"}),n.p8.fromTo(this.$refs.modal,.9,{y:"-100%",delay:1},{y:"0",ease:c.sm.easeOut})}},d=u,_=s(1001),p=(0,_.Z)(d,r,l,!1,null,"713daf2e",null),h=p.exports,f=s(3822),y=s(3214),m=s(5865),v=s(7912),b={components:{VModal:h,VButton:i.Z,VInput:y.Z,VCard:m.Z,VTextarea:v.Z},data(){return{name:"modal-1"}},computed:{...(0,f.rn)({showModal:t=>t.modal.showModal})},methods:{...(0,f.nv)("modal",["updateModal"]),toggleModal(){this.updateModal()}}},g=b,w=(0,_.Z)(g,a,o,!1,null,"490506bc",null),x=w.exports}}]);
//# sourceMappingURL=modal.71887513.js.map