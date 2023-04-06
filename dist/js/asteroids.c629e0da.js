"use strict";(self["webpackChunkfree_design_system"]=self["webpackChunkfree_design_system"]||[]).push([[103],{7262:function(t,i,s){s.r(i),s.d(i,{default:function(){return x}});var h=function(){var t=this,i=t._self._c;return i("div",[i("game-asteroids",{attrs:{width:t.width,height:t.height}})],1)},e=[],a=function(){var t=this,i=t._self._c;return i("div",[i("canvas",{ref:"canvasAsteroids",style:`width: ${t.width}px; height: ${t.height}px; border: 1px solid #42a5f0`,attrs:{width:t.width,height:t.height}})])},n=[],d={props:{width:{type:Number,default:300},height:{type:Number,default:150}},data(){return{ctx:null,game:!1,lives:1,asteroids:[],thrusting:!1,thrustSpeed:.1,thrust:{x:0,y:0},ship:{x:this.width/2,y:this.height/2,radius:15,angle:.5*Math.PI}}},methods:{init(){this.ctx.fillStyle="#fff",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.strokeStyle="#42a5f0",this.ctx.linewidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.ship.x+4/3*this.ship.radius*Math.cos(this.ship.angle),this.ship.y-4/3*this.ship.radius*Math.sin(this.ship.angle)),this.ctx.lineTo(this.ship.x-this.ship.radius*(2/3*Math.cos(this.ship.angle)+Math.sin(this.ship.angle)),this.ship.y+this.ship.radius*(2/3*Math.sin(this.ship.angle)-Math.cos(this.ship.angle))),this.ctx.lineTo(this.ship.x-this.ship.radius*(2/3*Math.cos(this.ship.angle)-Math.sin(this.ship.angle)),this.ship.y+this.ship.radius*(2/3*Math.sin(this.ship.angle)+Math.cos(this.ship.angle))),this.ctx.closePath(),this.ctx.stroke(),this.ctx.fillStyle="#42a5f0",this.ctx.fillRect(this.ship.x-.5,this.ship.y-.5,1,1),this.addBorderless(this.ship),window.requestAnimationFrame(this.init)},addBorderless(t){t.y<0&&(t.y=this.height+t.y),t.x<0&&(t.x=this.width+t.x),t.y>=this.height&&(t.y=t.y-this.height),t.x>=this.width&&(t.x=t.x-this.width)},keyDown(t){"d"===t&&(this.ship.angle-=.2),"a"===t&&(this.ship.angle+=.2),"w"===t&&(this.thrusting=!0),"s"===t&&(this.thrusting=!1)}},mounted(){const t=this.$refs.canvasAsteroids;this.ctx=t.getContext("2d"),document.addEventListener("keydown",(t=>{this.keyDown(t.key)})),window.requestAnimationFrame(this.init)}},r=d,l=s(1001),o=(0,l.Z)(r,a,n,!1,null,"5d0bb881",null),p=o.exports,u={components:{GameAsteroids:p},data(){return{width:800,height:600}}},c=u,g=(0,l.Z)(c,h,e,!1,null,"3a08fc8d",null),x=g.exports}}]);
//# sourceMappingURL=asteroids.c629e0da.js.map