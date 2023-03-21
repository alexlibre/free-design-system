(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[331],{6517:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("button",{staticClass:"button",class:{button_view_primary:"primary"===t.view,button_view_secondary:"secondary"===t.view,button_view_outline:"outline"===t.view,button_view_text:"text"===t.view,button_view_rounded:"rounded"===t.view,button_view_square:"square"===t.view,button_color_red:"red"===t.color,button_color_orange:"orange"===t.color,button_color_yellow:"yellow"===t.color,button_color_green:"green"===t.color,button_color_blue:"blue"===t.color,button_color_gray:"gray"===t.color,button_icon:t.noText,button_size_s:"s"===t.size,button_size_m:"m"===t.size,button_size_l:"l"===t.size,button_is_active:t.active,button_empty:t.empty},on:{click:t.onClick}},[t.noText?t._e():e("span",{staticClass:"button__text"},[t._t("default")],2),t.icon?e("svg-icon",{attrs:{name:t.icon,size:t.iconSize}}):t._e()],1)},n=[],r=s(2415),a={props:{size:{type:String,default:"m"},view:{type:String,default:"primary"},icon:{type:String,default:""},active:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},color:{type:String,default:"orange"}},components:{SvgIcon:r.Z},computed:{noText(){return!this.$slots.default},iconSize(){switch(this.size){case"s":return[14];case"l":return[20];default:return[16]}}},methods:{onClick(t){this.$emit("click",t)}}},l=a,o=s(1001),u=(0,o.Z)(l,i,n,!1,null,"3050482e",null),c=u.exports},9240:function(t,e,s){"use strict";s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"input",class:{input_disabled:t.disabled,input_focus:t.hasFocus,input_compact:t.compact,input_success:"success"===t.state,input_error:"error"===t.state}},[e("div",{staticClass:"input__inner"},[t.label||t.labelSecond?e("div",{staticClass:"input__head"},[t.label?e("label",{staticClass:"input__label",attrs:{for:t.guid}},[t._v(t._s(t.label))]):t._e(),t.labelSecond?e("span",{staticClass:"input__label-second"},[t._v(t._s(t.labelSecond))]):t._e()]):t._e(),e("div",{staticClass:"input__box"},[e("input",{staticClass:"input__input",attrs:{id:t.guid,type:t.inputType,placeholder:t.placeholder},domProps:{value:t.text},on:{input:t.updateValue,focus:t.onFocus,blur:t.onBlur}}),"password"===t.type?[e("v-button",{staticClass:"input__icon-btn",attrs:{color:t.currentColor,view:"text",empty:""},on:{click:t.switchPasswordVisibility}},[e("svg-icon",{staticClass:"input__icon",attrs:{name:t.currentIcon,size:[16]}})],1)]:[t.icon?e("svg-icon",{staticClass:"input__icon",attrs:{name:t.icon,size:[16]}}):t._e()]],2),t.helper?e("span",{staticClass:"input__helper"},[t._v(t._s(t.helper))]):t._e()])])},n=[],r=s(2415),a=s(6517),l={props:{label:{type:String,default:""},labelSecond:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},helper:{type:String,default:""},state:{type:String,default:"default"},type:{type:String,default:"text"},controls:{type:Array,default:()=>[]},hasError:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},icon:{type:String,default:""},initial:{type:String,default:""}},components:{SvgIcon:r.Z,VButton:a.Z},data(){return{text:this.initial,inputType:this.type,hasFocus:!1,showPassword:!1,currentIcon:this.icon||"eye"}},watch:{showPassword:function(){this.inputType=this.showPassword?"text":"password",this.currentIcon=this.showPassword?"eye-slash":"eye"}},computed:{guid(){return(Math.random()+1).toString(36).substring(2)},currentColor(){switch(this.state){case"success":return"green";case"error":return"red";default:return"orange"}}},methods:{updateValue(t){const e=t.target.value;this.text=e,this.$forceUpdate()},onFocus(){this.hasFocus=!0},onBlur(){this.hasFocus=!1},switchPasswordVisibility(){"password"===this.type&&(this.showPassword=!this.showPassword)}}},o=l,u=s(1001),c=(0,u.Z)(o,i,n,!1,null,"5742248e",null),d=c.exports},2415:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("svg",{class:t.className,attrs:{width:t.size[0],height:t.size[1]?t.size[1]:t.size[0],xmlns:"http://www.w3.org/2000/svg"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e(),e("use",{attrs:{"xlink:href":t.iconPath,"xmlns:xlink":"http://www.w3.org/1999/xlink"}})])},n=[],r={props:{name:{type:String,required:!0},title:{type:String,default:null},size:{type:Array,default:()=>[18,18]}},computed:{iconPath(){let t=s(7254)(`./${this.name}.svg`);return Object.hasOwnProperty.call(t,"default")&&(t=t.default),t.url},className(){return"icon icon_"+this.name}}},a=r,l=s(1001),o=(0,l.Z)(a,i,n,!1,null,null,null),u=o.exports},7844:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))]),e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}),t._t("default")],2)},n=[],r={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},a=r,l=s(1001),o=(0,l.Z)(a,i,n,!1,null,"26829939",null),u=o.exports},5732:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(s){return e("tr",{key:s.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${s.attr}`}},[t._v(t._s(s.attr))])],1),e("td",{staticClass:"components-table__values"},[t._v(t._s(s.values.join(", ")))]),e("td",{staticClass:"components-table__types"},[t._v(t._s(s.types.join(", ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(s.default))]),e("td",{staticClass:"components-table__required"},[s.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])])},n=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],r=s(2415),a={props:{items:{type:Array,required:!0}},components:{SvgIcon:r.Z}},l=a,o=s(1001),u=(0,o.Z)(l,i,n,!1,null,"4868267d",null),c=u.exports},5534:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"label",values:["any string"],types:["string"],default:"",to:"label"},{attr:"labelSecond",values:["any string"],types:["string"],default:""},{attr:"placeholder",values:["any string"],types:["string"],default:""},{attr:"helper",values:["any string"],types:["string"],default:""},{attr:"state",values:["default","success","error"],types:["string"],default:"default"},{attr:"type",values:["any html input type"],types:["string"],default:"text"},{attr:"disabled",values:[!0,!1],types:["boolean"],default:"false"}]}}),e("components-block",{attrs:{title:"Label",id:"label"}},[e("v-input",{attrs:{label:"Label",compact:""}})],1),e("components-block",{attrs:{title:"Secondary label",id:"labelSecond"}},[e("v-input",{attrs:{labelSecond:"Secondary label",compact:""}})],1),e("components-block",{attrs:{title:"Placeholder",id:"placeholder"}},[e("v-input",{attrs:{placeholder:"Placeholder",compact:""}})],1),e("components-block",{attrs:{title:"Helper",id:"helper",desc:"Can be used as additional label or helper message or as success or error validation message."}},[e("div",{staticClass:"flex gap-16"},[e("v-input",{attrs:{helper:"Helper",compact:""}}),e("v-input",{attrs:{helper:"Success message",state:"success",compact:""}}),e("v-input",{attrs:{helper:"Error message",state:"error",compact:""}})],1)]),e("components-block",{attrs:{title:"State",id:"'state'"}},[e("div",{staticClass:"flex gap-16"},[e("v-input",{attrs:{compact:""}}),e("v-input",{attrs:{state:"success",compact:""}}),e("v-input",{attrs:{state:"error",compact:""}})],1)]),e("components-block",{attrs:{title:"Type",id:"type"}},[e("div",{staticClass:"flex gap-16"},[e("v-input",{attrs:{label:"Name",compact:""}}),e("v-input",{attrs:{label:"Email",type:"email",compact:""}}),e("v-input",{attrs:{label:"Password",type:"password",compact:"",state:"error"}})],1)]),e("components-block",{attrs:{title:"Disabled",id:"disabled"}},[e("v-input",{attrs:{disabled:"",compact:""}})],1),e("div",{staticClass:"flex flex-start gap-16"},[e("v-input",{attrs:{label:"Disabled",disabled:""}}),e("v-input",{attrs:{label:"Success",state:"success",icon:"tick-circle",helper:"Checked"}}),e("v-input",{attrs:{label:"Error",state:"error",icon:"info-circle",helper:"Error occured"}})],1),e("div",{staticClass:"flex flex-start gap-16"},[e("v-input",{attrs:{helper:"Helper text"}}),e("v-input",{attrs:{disabled:""}}),e("v-input",{attrs:{state:"success",icon:"tick-circle",initial:"Good value"}}),e("v-input",{attrs:{state:"error",icon:"info-circle",initial:"Bad value"}})],1),e("div",{staticClass:"flex flex-start gap-16"},[e("v-input",{attrs:{label:"Label",labelSecond:"Second label",helper:"Helper text",initial:"Initial value",icon:"eye"}}),e("v-input",{attrs:{initial:"supersecret",label:"Password",icon:"eye",state:"error",type:"password",helper:"Passwords don't match"}})],1),e("div",{staticClass:"flex flex-start gap-16"},[e("v-input",{attrs:{label:"Label",labelSecond:"Second label",helper:"Helper text",initial:"Initial value",icon:"eye",compact:""}})],1)],1)},n=[],r=s(9240),a=s(5732),l=s(7844),o={components:{VInput:r.Z,ComponentsTable:a.Z,ComponentsBlock:l.Z}},u=o,c=s(1001),d=(0,c.Z)(u,i,n,!1,null,null,null),p=d.exports},2515:function(t,e,s){"use strict";s.r(e),e["default"]={id:"7spaces-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#7spaces",toString:function(){return this.url}}},2802:function(t,e,s){"use strict";s.r(e),e["default"]={id:"attach-square-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.6f95d2ef.svg#attach-square",toString:function(){return this.url}}},30:function(t,e,s){"use strict";s.r(e),e["default"]={id:"check-usage",viewBox:"0 0 10 8",url:s.p+"img/icons.6f95d2ef.svg#check",toString:function(){return this.url}}},1297:function(t,e,s){"use strict";s.r(e),e["default"]={id:"close-circle-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#close-circle",toString:function(){return this.url}}},1566:function(t,e,s){"use strict";s.r(e),e["default"]={id:"divider-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#divider",toString:function(){return this.url}}},898:function(t,e,s){"use strict";s.r(e),e["default"]={id:"eye-slash-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#eye-slash",toString:function(){return this.url}}},2707:function(t,e,s){"use strict";s.r(e),e["default"]={id:"eye-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#eye",toString:function(){return this.url}}},4513:function(t,e,s){"use strict";s.r(e),e["default"]={id:"heart-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#heart",toString:function(){return this.url}}},3251:function(t,e,s){"use strict";s.r(e),e["default"]={id:"info-circle-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#info-circle",toString:function(){return this.url}}},7125:function(t,e,s){"use strict";s.r(e),e["default"]={id:"link-2-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.6f95d2ef.svg#link-2",toString:function(){return this.url}}},1894:function(t,e,s){"use strict";s.r(e),e["default"]={id:"mask-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#mask",toString:function(){return this.url}}},8067:function(t,e,s){"use strict";s.r(e),e["default"]={id:"menu-close-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#menu-close",toString:function(){return this.url}}},3198:function(t,e,s){"use strict";s.r(e),e["default"]={id:"menu-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.6f95d2ef.svg#menu",toString:function(){return this.url}}},7858:function(t,e,s){"use strict";s.r(e),e["default"]={id:"quote-down-square-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.6f95d2ef.svg#quote-down-square",toString:function(){return this.url}}},5641:function(t,e,s){"use strict";s.r(e),e["default"]={id:"star-usage",viewBox:"0 0 20 20",url:s.p+"img/icons.6f95d2ef.svg#star",toString:function(){return this.url}}},1772:function(t,e,s){"use strict";s.r(e),e["default"]={id:"task-usage",viewBox:"0 0 25 24",url:s.p+"img/icons.6f95d2ef.svg#task",toString:function(){return this.url}}},3605:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-bold-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#text-bold",toString:function(){return this.url}}},8971:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-italic-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#text-italic",toString:function(){return this.url}}},8558:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-underline-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#text-underline",toString:function(){return this.url}}},145:function(t,e,s){"use strict";s.r(e),e["default"]={id:"tick-circle-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.6f95d2ef.svg#tick-circle",toString:function(){return this.url}}},7254:function(t,e,s){var i={"./7spaces.svg":2515,"./attach-square.svg":2802,"./check.svg":30,"./close-circle.svg":1297,"./divider.svg":1566,"./eye-slash.svg":898,"./eye.svg":2707,"./heart.svg":4513,"./info-circle.svg":3251,"./link-2.svg":7125,"./mask.svg":1894,"./menu-close.svg":8067,"./menu.svg":3198,"./quote-down-square.svg":7858,"./star.svg":5641,"./task.svg":1772,"./text-bold.svg":3605,"./text-italic.svg":8971,"./text-underline.svg":8558,"./tick-circle.svg":145};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=7254}}]);
//# sourceMappingURL=inputs.22338bad.js.map