(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[425],{2415:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("svg",{class:t.className,attrs:{width:t.size[0],height:t.size[1]?t.size[1]:t.size[0],xmlns:"http://www.w3.org/2000/svg"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e(),e("use",{attrs:{"xlink:href":t.iconPath,"xmlns:xlink":"http://www.w3.org/1999/xlink"}})])},r=[],n={props:{name:{type:String,required:!0},title:{type:String,default:null},size:{type:Array,default:()=>[18,18]}},computed:{iconPath(){let t=s(7254)(`./${this.name}.svg`);return Object.hasOwnProperty.call(t,"default")&&(t=t.default),t.url},className(){return"icon icon_"+this.name}}},a=n,o=s(1001),u=(0,o.Z)(a,i,r,!1,null,null,null),c=u.exports},7844:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"components-block",attrs:{id:t.id}},[e("h2",{staticClass:"components-block__title"},[t._v(t._s(t.capitalize(t.title)))]),e("p",{staticClass:"components-block__desc",domProps:{innerHTML:t._s(t.desc)}}),t._t("default")],2)},r=[],n={props:{id:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},methods:{capitalize(t){return(t.charAt(0).toUpperCase()+t.slice(1)).split("-").join(" ")}}},a=n,o=s(1001),u=(0,o.Z)(a,i,r,!1,null,"26829939",null),c=u.exports},7223:function(t,e,s){"use strict";s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("table",{staticClass:"components-table"},[t._m(0),e("tbody",t._l(t.items,(function(s){return e("tr",{key:s.attr},[e("td",{staticClass:"components-table__attributes"},[e("router-link",{attrs:{to:`#${s.attr}`}},[t._v(t._s(s.attr))])],1),e("td",{staticClass:"components-table__values",domProps:{innerHTML:t._s(t.value(s.values))}}),e("td",{staticClass:"components-table__types"},[t._v(t._s(s.types.join(" | ")))]),e("td",{staticClass:"components-table__default"},[t._v(t._s(s.default))]),e("td",{staticClass:"components-table__required"},[s.required?e("span",{staticClass:"components-table__icon"},[e("svg-icon",{attrs:{name:"tick-circle",size:[18]}})],1):e("span")])])})),0)])])},r=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"components-table__attributes"},[t._v("Attributes")]),e("th",{staticClass:"components-table__values"},[t._v("Values")]),e("th",{staticClass:"components-table__types"},[t._v("Types")]),e("th",{staticClass:"components-table__default"},[t._v("Default")]),e("th",{staticClass:"components-table__required"},[t._v("Required")])])])}],n=s(2415),a={props:{items:{type:Array,required:!0}},components:{SvgIcon:n.Z},methods:{value(t){return t.join(" | ")}}},o=a,u=s(1001),c=(0,u.Z)(o,i,r,!1,null,"1bd750fa",null),l=c.exports},8315:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return A}});var i=function(){var t=this,e=t._self._c;return e("div",[e("components-table",{attrs:{items:[{attr:"image",values:["any image from <code>/assets/img/</code>"],types:["string"],default:""},{attr:"name",values:["any string for <code>alt</code> property"],types:["string"],default:"",required:!0},{attr:"size",values:["s","m","l"],types:["string"],default:"m"},{attr:"rounded",values:[!0,!1],types:["boolean"],default:"true"}]}}),e("components-block",{attrs:{id:"image",title:"image",desc:"Image for avatar item. If no image provided it will be replaced with initials created from the name. In initials case avatar will be randomly colored in one of 4 predefined colors: red, yellow, green or blue."}},[e("div",{staticClass:"flex gap-16"},[e("v-avatar",{attrs:{image:"user-1.png",name:"image-1"}}),e("v-avatar",{attrs:{name:"Alex"}}),e("v-avatar",{attrs:{name:"Alex Poskorkov"}})],1)]),e("components-block",{attrs:{id:"size",title:"size"}},[e("div",{staticClass:"flex gap-16 flex-start"},[e("v-avatar",{attrs:{image:"user-1.png",name:"size-s",size:"s"}}),e("v-avatar",{attrs:{image:"user-1.png",name:"size-m"}}),e("v-avatar",{attrs:{image:"user-1.png",name:"size-l",size:"l"}})],1)]),e("components-block",{attrs:{id:"rounded",title:"rounded"}},[e("div",{staticClass:"flex gap-16"},[e("v-avatar",{attrs:{image:"user-1.png",name:"rounded-true"}}),e("v-avatar",{attrs:{image:"user-1.png",rounded:!1,name:"rounded-false"}})],1)])],1)},r=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"avatar",class:{avatar_rounded:t.rounded,avatar_size_s:"s"===t.size,avatar_size_m:"m"===t.size,avatar_size_l:"l"===t.size}},[e("div",{staticClass:"avatar__inner",class:{"avatar__inner_no-image":!t.image,"avatar__inner_no-image_1":1===t.randomColor,"avatar__inner_no-image_2":2===t.randomColor,"avatar__inner_no-image_3":3===t.randomColor,"avatar__inner_no-image_4":4===t.randomColor}},[t.image?[e("img",{attrs:{src:s(5459)(`./${t.image}`)}})]:e("div",{class:`avatar__initials avatar__initials_${t.randomColor}`},[t._v(" "+t._s(t.letter)+" ")])],2)])},a=[],o={props:{image:{type:String,default:""},size:{type:String,default:"m"},name:{type:String,required:!0},rounded:{type:Boolean,default:!0}},computed:{currentImage(){return"/assets/img/placeholder.png"},letter(){const t=this.name.split(" ");return t.length>=2?[t[0].split("")[0].toUpperCase(),t[1].split("")[0].toUpperCase()].join(""):this.name.split("")[0].toUpperCase()},randomColor(){return Math.floor(4*Math.random())+1}}},u=o,c=s(1001),l=(0,c.Z)(u,n,a,!1,null,"2b90ae20",null),g=l.exports,d=s(7223),v=s(7844),m={components:{VAvatar:g,ComponentsTable:d.Z,ComponentsBlock:v.Z}},f=m,p=(0,c.Z)(f,i,r,!1,null,null,null),A=p.exports},2515:function(t,e,s){"use strict";s.r(e),e["default"]={id:"7spaces-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#7spaces",toString:function(){return this.url}}},4149:function(t,e,s){"use strict";s.r(e),e["default"]={id:"arrow-circle-down-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#arrow-circle-down",toString:function(){return this.url}}},7167:function(t,e,s){"use strict";s.r(e),e["default"]={id:"arrow-down-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#arrow-down",toString:function(){return this.url}}},2802:function(t,e,s){"use strict";s.r(e),e["default"]={id:"attach-square-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.9ce09bb1.svg#attach-square",toString:function(){return this.url}}},30:function(t,e,s){"use strict";s.r(e),e["default"]={id:"check-usage",viewBox:"0 0 10 8",url:s.p+"img/icons.9ce09bb1.svg#check",toString:function(){return this.url}}},1297:function(t,e,s){"use strict";s.r(e),e["default"]={id:"close-circle-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#close-circle",toString:function(){return this.url}}},1566:function(t,e,s){"use strict";s.r(e),e["default"]={id:"divider-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.9ce09bb1.svg#divider",toString:function(){return this.url}}},898:function(t,e,s){"use strict";s.r(e),e["default"]={id:"eye-slash-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#eye-slash",toString:function(){return this.url}}},2707:function(t,e,s){"use strict";s.r(e),e["default"]={id:"eye-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#eye",toString:function(){return this.url}}},4513:function(t,e,s){"use strict";s.r(e),e["default"]={id:"heart-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#heart",toString:function(){return this.url}}},3251:function(t,e,s){"use strict";s.r(e),e["default"]={id:"info-circle-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.9ce09bb1.svg#info-circle",toString:function(){return this.url}}},7125:function(t,e,s){"use strict";s.r(e),e["default"]={id:"link-2-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.9ce09bb1.svg#link-2",toString:function(){return this.url}}},1894:function(t,e,s){"use strict";s.r(e),e["default"]={id:"mask-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#mask",toString:function(){return this.url}}},8067:function(t,e,s){"use strict";s.r(e),e["default"]={id:"menu-close-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#menu-close",toString:function(){return this.url}}},3198:function(t,e,s){"use strict";s.r(e),e["default"]={id:"menu-usage",viewBox:"0 0 24 24",url:s.p+"img/icons.9ce09bb1.svg#menu",toString:function(){return this.url}}},7858:function(t,e,s){"use strict";s.r(e),e["default"]={id:"quote-down-square-usage",viewBox:"0 0 16 17",url:s.p+"img/icons.9ce09bb1.svg#quote-down-square",toString:function(){return this.url}}},5641:function(t,e,s){"use strict";s.r(e),e["default"]={id:"star-usage",viewBox:"0 0 20 20",url:s.p+"img/icons.9ce09bb1.svg#star",toString:function(){return this.url}}},1772:function(t,e,s){"use strict";s.r(e),e["default"]={id:"task-usage",viewBox:"0 0 25 24",url:s.p+"img/icons.9ce09bb1.svg#task",toString:function(){return this.url}}},3605:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-bold-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.9ce09bb1.svg#text-bold",toString:function(){return this.url}}},8971:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-italic-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.9ce09bb1.svg#text-italic",toString:function(){return this.url}}},8558:function(t,e,s){"use strict";s.r(e),e["default"]={id:"text-underline-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.9ce09bb1.svg#text-underline",toString:function(){return this.url}}},145:function(t,e,s){"use strict";s.r(e),e["default"]={id:"tick-circle-usage",viewBox:"0 0 16 16",url:s.p+"img/icons.9ce09bb1.svg#tick-circle",toString:function(){return this.url}}},7254:function(t,e,s){var i={"./7spaces.svg":2515,"./arrow-circle-down.svg":4149,"./arrow-down.svg":7167,"./attach-square.svg":2802,"./check.svg":30,"./close-circle.svg":1297,"./divider.svg":1566,"./eye-slash.svg":898,"./eye.svg":2707,"./heart.svg":4513,"./info-circle.svg":3251,"./link-2.svg":7125,"./mask.svg":1894,"./menu-close.svg":8067,"./menu.svg":3198,"./quote-down-square.svg":7858,"./star.svg":5641,"./task.svg":1772,"./text-bold.svg":3605,"./text-italic.svg":8971,"./text-underline.svg":8558,"./tick-circle.svg":145};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=n,t.exports=r,r.id=7254},5459:function(t,e,s){var i={"./img.png":1e3,"./pizza.jpg":5049,"./placeholder.png":279,"./user-1.png":234};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=n,t.exports=r,r.id=5459},1e3:function(t,e,s){"use strict";t.exports=s.p+"img/img.5e6ecdcb.png"},5049:function(t,e,s){"use strict";t.exports=s.p+"img/pizza.3ac5a339.jpg"},279:function(t){"use strict";t.exports="data:image/png;base64,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"},234:function(t,e,s){"use strict";t.exports=s.p+"img/user-1.d01dbd80.png"}}]);
//# sourceMappingURL=avatar.db5e37ad.js.map