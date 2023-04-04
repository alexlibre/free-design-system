"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[519],{3641:function(t,e,i){i.d(e,{Z:function(){return h}});var r=function(){var t=this,e=t._self._c;return e("button",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button",class:{button_view_primary:"primary"===t.view,button_view_secondary:"secondary"===t.view,button_view_outline:"outline"===t.view,button_view_text:"text"===t.view,button_view_rounded:"rounded"===t.view,button_view_square:"square"===t.view,button_color_red:"red"===t.color,button_color_orange:"orange"===t.color,button_color_yellow:"yellow"===t.color,button_color_green:"green"===t.color,button_color_blue:"blue"===t.color,button_color_gray:"gray"===t.color,button_icon:t.noText,button_size_s:"s"===t.size,button_size_m:"m"===t.size,button_size_l:"l"===t.size,button_is_active:t.active,button_empty:t.empty},on:{click:t.onClick}},[t.noText?t._e():e("span",{staticClass:"button__text"},[t._t("default")],2),t.icon?e("svg-icon",{staticClass:"button__icon",attrs:{name:t.icon,size:t.iconSize}}):t._e()],1)},s=[],l=i(2415),o={props:{size:{type:String,default:"m"},view:{type:String,default:"primary"},icon:{type:String,default:""},active:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},color:{type:String,default:"blue"}},components:{SvgIcon:l.Z},computed:{noText(){return!this.$slots.default},iconSize(){switch(this.size){case"s":return[14];case"l":return[20];default:return[16]}}},methods:{onClick(t){this.$emit("click",t)}}},n=o,a=i(1001),c=(0,a.Z)(n,r,s,!1,null,"369bdb1b",null),h=c.exports},6426:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var r=function(){var t=this,e=t._self._c;return e("div",[e("v-canvas")],1)},s=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"canvas"},[e("div",{ref:"canvas",staticClass:"canvas__inner"})])},o=[],n={props:{size:{type:Array,default:()=>[500,500]}},data(){return{tetraminos:["I","J","L","O","S","T","Z"],PIXEL_RATIO:null}},methods:{createHiDPICanvas(t=this.size[0],e=this.size[1],i){i||(i=this.PIXEL_RATIO);const r=document.createElement("canvas");r.style.cssText="border: 1px solid #333",r.width=t*i,r.height=e*i,r.style.width=t+"px",r.style.height=e+"px",r.getContext("2d").setTransform(i,0,0,i,0,0),this.$refs.canvas.appendChild(r)},selectRandom(){const t=Math.floor(7*Math.random());return this.tetraminos[t]},createTetramino(t){const e=this.selectRandom();switch(e){case"I":t.fillStyle="rgb(0,0,200)",t.fillRect(1,1,29,29),t.fillRect(1,31,29,29),t.fillRect(1,61,29,29),t.fillRect(1,91,29,29);break;case"J":t.fillStyle="rgb(0,150,200)",t.fillRect(31,1,29,29),t.fillRect(31,31,29,29),t.fillRect(1,61,29,29),t.fillRect(31,61,29,29);break;case"L":t.fillStyle="rgb(100,0,200)",t.fillRect(1,1,29,29),t.fillRect(1,31,29,29),t.fillRect(1,61,29,29),t.fillRect(31,61,29,29);break;case"O":t.fillStyle="rgb(200,0,0)",t.fillRect(1,1,29,29),t.fillRect(31,1,29,29),t.fillRect(1,31,29,29),t.fillRect(31,31,29,29);break;case"S":t.fillStyle="rgb(0,200,0)",t.fillRect(31,1,29,29),t.fillRect(61,1,29,29),t.fillRect(1,31,29,29),t.fillRect(31,31,29,29);break;case"T":t.fillStyle="rgb(100,100,0)",t.fillRect(31,1,29,29),t.fillRect(1,31,29,29),t.fillRect(31,31,29,29),t.fillRect(61,31,29,29);break;case"Z":t.fillStyle="rgb(255,200,0)",t.fillRect(1,1,29,29),t.fillRect(31,1,29,29),t.fillRect(31,31,29,29),t.fillRect(61,31,29,29);break}}},mounted(){this.PIXEL_RATIO=function(){var t=document.createElement("canvas").getContext("2d"),e=window.devicePixelRatio||1,i=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return e/i}(),this.createHiDPICanvas(300,600);const t=this.$refs.canvas.querySelector("canvas").getContext("2d");this.createTetramino(t),console.log(this.canvas)}},a=n,c=i(1001),h=(0,c.Z)(a,l,o,!1,null,"f9c9dfc4",null),u=h.exports,d={components:{VCanvas:u}},f=d,b=(0,c.Z)(f,r,s,!1,null,"0dc3d92c",null),v=b.exports},8891:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",[e("game-tetris")],1)},s=[],l=function(){var t=this,e=t._self._c;return e("div",[e("canvas",{ref:"canvas",style:`width: ${t.size[0]}px; height: ${t.size[1]}px; border: 1px solid #333`,attrs:{width:t.size[0],height:t.size[1]}}),t.game?e("v-button",{attrs:{color:"red"},on:{click:t.stop}},[t._v(" Stop ")]):e("v-button",{on:{click:t.start}},[t._v(" New game ")])],1)},o=[],n=i(3641),a={components:{VButton:n.Z},props:{cols:{type:Number,default:10},rows:{type:Number,default:20},size:{type:Array,default:()=>[300,600]},colors:{type:Array,default:()=>["cyan","orange","blue","yellow","red","green","purple"]},shapes:{type:Array,default:()=>[[1,1,1,1],[1,1,1,0,1],[1,1,1,0,0,0,1],[1,1,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1],[0,1,0,0,1,1,1]]}},data(){return{ctx:null,block_w:this.size[0]/this.cols,block_h:this.size[1]/this.rows,board:[],lose:!1,interval:null,intervalRender:null,current:[],currentX:null,currentY:null,freezed:!1,game:!1}},methods:{newShape(){const t=Math.floor(Math.random()*this.shapes.length),e=this.shapes[t];this.current=[];for(let i=0;i<4;++i){this.current[i]=[];for(let r=0;r<4;++r){const s=4*i+r;"undefined"!==typeof e[s]&&e[s]?this.current[i][r]=t+1:this.current[i][r]=0}}this.freezed=!1,this.currentX=Math.floor(this.cols/2-1),this.currentY=0},drawBlock(t,e){this.ctx.fillRect(t*this.block_w,e*this.block_h,this.block_w-1,this.block_h-1)},render(){this.ctx.clearRect(0,0,this.size[0],this.size[1]),this.ctx.strokeStyle="#000";for(let t=0;t<this.cols;++t)for(let e=0;e<this.rows;++e)this.board[e][t]&&(this.ctx.strokeStyle=this.colors[this.board[e][t]-1],this.drawBlock(t,e));this.ctx.fillStyle="red";for(let t=0;t<4;++t)for(let e=0;e<4;++e)this.current[t][e]&&(this.ctx.fillStyle=this.colors[this.current[t][e]-1],this.drawBlock(this.currentX+e,this.currentY+t))},init(){for(let t=0;t<this.rows;++t){this.board[t]=[];for(let e=0;e<this.cols;++e)this.board[t][e]=0}},tick(){if(this.valid(0,1))++this.currentY;else{if(this.freeze(),this.valid(0,1),this.clearLines(),this.lose)return this.clearAllIntervals(),this.game=!1,!1;this.newShape()}},freeze(){for(let t=0;t<4;++t)for(let e=0;e<4;++e)this.current[t][e]&&(this.board[t+this.currentY][e+this.currentX]=this.current[t][e]);this.freezed=!0},rotate(t){const e=[];for(let i=0;i<4;++i){e[i]=[];for(let r=0;r<4;++r)e[i][r]=t[3-r][i]}return e},clearLines(){for(let t=this.rows-1;t>=0;--t){let e=!0;for(let i=0;i<this.cols;++i)if(0===this.board[t][i]){e=!1;break}if(e){for(let e=t;e>0;--e)for(let t=0;t<this.cols;++t)this.board[e][t]=this.board[e-1][t];++t}}},valid(t=0,e=0,i){t=this.currentX+t,e=this.currentY+e,i=i||this.current;for(let r=0;r<4;++r)for(let s=0;s<4;++s)if(i[r][s]&&("undefined"==typeof this.board[r+e]||"undefined"==typeof this.board[r+e][s+t]||this.board[r+e][s+t]||s+t<0||r+e>=this.rows||s+t>=this.cols))return 1==e&&this.freezed&&(this.lose=!0),!1;return!0},newGame(){this.clearAllIntervals(),this.intervalRender=setInterval(this.render,30),this.init(),this.newShape(),this.lose=!1,this.interval=setInterval(this.tick,400)},clearAllIntervals(){clearInterval(this.interval),clearInterval(this.intervalRender)},keyPress(t){switch(t){case"left":this.valid(-1)&&--this.currentX;break;case"right":this.valid(1)&&++this.currentX;break;case"down":this.valid(0,1)&&++this.currentY;break;case"rotate":let t=this.rotate(this.current);this.valid(0,0,t)&&(this.current=t);break;case"drop":while(this.valid(0,1))++this.currentY;this.tick();break}},onKeyPress(t){console.log(t);const e={37:"left",39:"right",40:"down",38:"rotate",32:"drop"};"undefined"!==typeof e[t.keyCode]&&(this.keyPress(e[t.keyCode]),this.render())},start(t){t.target.blur(),this.game=!0,this.newGame()},stop(){this.clearAllIntervals(),this.game=!1,this.lose=!0}},mounted(){document.body.onkeydown=t=>{var e={37:"left",39:"right",40:"down",38:"rotate",32:"drop"};"undefined"!=typeof e[t.keyCode]&&(this.keyPress(e[t.keyCode]),this.render())},this.ctx=this.$refs.canvas.getContext("2d")}},c=a,h=i(1001),u=(0,h.Z)(c,l,o,!1,null,"8dcd415c",null),d=u.exports,f={components:{GameTetris:d}},b=f,v=(0,h.Z)(b,r,s,!1,null,"e15690fe",null),p=v.exports}}]);
//# sourceMappingURL=canvas.7710d4a4.js.map