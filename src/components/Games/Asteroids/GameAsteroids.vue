<template>
  <div>
    <canvas
      ref="canvasAsteroids"
      :width="width"
      :height="height"
      :style="`width: ${width}px; height: ${height}px; border: 1px solid #42a5f0`"
    ></canvas>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 150,
    },
  },
  data() {
    return {
      ctx: null,
      game: false,
      lives: 1,
      asteroids: [],
      thrusting: false,
      thrustSpeed: 0.1,
      thrust: {
        x: 0,
        y: 0,
      },
      ship: {
        x: this.width / 2,
        y: this.height / 2,
        radius: 15,
        angle: (90 / 180) * Math.PI,
      },
    };
  },
  methods: {
    init() {
      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(0, 0, this.width, this.height);

      this.ctx.strokeStyle = "#42a5f0";
      this.ctx.linewidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(
        this.ship.x + (4 / 3) * this.ship.radius * Math.cos(this.ship.angle),
        this.ship.y - (4 / 3) * this.ship.radius * Math.sin(this.ship.angle)
      );
      this.ctx.lineTo(
        this.ship.x -
          this.ship.radius *
            ((2 / 3) * Math.cos(this.ship.angle) + Math.sin(this.ship.angle)),
        this.ship.y +
          this.ship.radius *
            ((2 / 3) * Math.sin(this.ship.angle) - Math.cos(this.ship.angle))
      );
      this.ctx.lineTo(
        this.ship.x -
          this.ship.radius *
            ((2 / 3) * Math.cos(this.ship.angle) - Math.sin(this.ship.angle)),
        this.ship.y +
          this.ship.radius *
            ((2 / 3) * Math.sin(this.ship.angle) + Math.cos(this.ship.angle))
      );
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.fillStyle = "#42a5f0";
      this.ctx.fillRect(this.ship.x - 0.5, this.ship.y - 0.5, 1, 1);

      this.addBorderless(this.ship);

      //   this,
      //     asteroids.forEach((asteroid) => {
      //       this.addBorderless(asteroid);
      //     });

      window.requestAnimationFrame(this.init);
    },
    addBorderless(obj) {
      if (obj.y < 0) {
        obj.y = this.height + obj.y;
      }

      if (obj.x < 0) {
        obj.x = this.width + obj.x;
      }

      if (obj.y >= this.height) {
        obj.y = obj.y - this.height;
      }

      if (obj.x >= this.width) {
        obj.x = obj.x - this.width;
      }
    },
    keyDown(char) {
      if (char === "d") {
        this.ship.angle -= 0.2;
      }
      if (char === "a") {
        this.ship.angle += 0.2;
      }
      if (char === "w") {
        this.thrusting = true;
      }
      if (char === "s") {
        this.thrusting = false;
      }
    },
  },
  mounted() {
    const canv = this.$refs.canvasAsteroids;
    this.ctx = canv.getContext("2d");

    document.addEventListener("keydown", (e) => {
      this.keyDown(e.key);
    });

    // this.addBorderless(this.ship);
    window.requestAnimationFrame(this.init);
  },
};
</script>

<style lang="scss" scoped></style>
