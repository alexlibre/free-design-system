<template>
  <div class="canvas">
    <div class="canvas__inner" ref="canvas"></div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Array,
      default: () => [500, 500],
    },
  },
  data() {
    return {
      tetraminos: ["I", "J", "L", "O", "S", "T", "Z"],
      PIXEL_RATIO: null,
    };
  },
  methods: {
    createHiDPICanvas(w = this.size[0], h = this.size[1], ratio) {
      if (!ratio) {
        ratio = this.PIXEL_RATIO;
      }
      const can = document.createElement("canvas");
      can.style.cssText = "border: 1px solid #333";
      can.width = w * ratio;
      can.height = h * ratio;
      can.style.width = w + "px";
      can.style.height = h + "px";
      can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
      this.$refs.canvas.appendChild(can);
    },
    selectRandom() {
      const key = Math.floor(Math.random() * 7);
      return this.tetraminos[key];
    },
    createTetramino(ctx) {
      const char = this.selectRandom();

      switch (char) {
        case "I":
          ctx.fillStyle = "rgb(0,0,200)";
          ctx.fillRect(1, 1, 29, 29);
          ctx.fillRect(1, 31, 29, 29);
          ctx.fillRect(1, 61, 29, 29);
          ctx.fillRect(1, 91, 29, 29);
          break;

        case "J":
          ctx.fillStyle = "rgb(0,150,200)";
          ctx.fillRect(31, 1, 29, 29);
          ctx.fillRect(31, 31, 29, 29);
          ctx.fillRect(1, 61, 29, 29);
          ctx.fillRect(31, 61, 29, 29);
          break;

        case "L":
          ctx.fillStyle = "rgb(100,0,200)";
          ctx.fillRect(1, 1, 29, 29);
          ctx.fillRect(1, 31, 29, 29);
          ctx.fillRect(1, 61, 29, 29);
          ctx.fillRect(31, 61, 29, 29);
          break;

        case "O":
          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect(1, 1, 29, 29);
          ctx.fillRect(31, 1, 29, 29);
          ctx.fillRect(1, 31, 29, 29);
          ctx.fillRect(31, 31, 29, 29);
          break;

        case "S":
          ctx.fillStyle = "rgb(0,200,0)";
          ctx.fillRect(31, 1, 29, 29);
          ctx.fillRect(61, 1, 29, 29);
          ctx.fillRect(1, 31, 29, 29);
          ctx.fillRect(31, 31, 29, 29);
          break;

        case "T":
          ctx.fillStyle = "rgb(100,100,0)";
          ctx.fillRect(31, 1, 29, 29);
          ctx.fillRect(1, 31, 29, 29);
          ctx.fillRect(31, 31, 29, 29);
          ctx.fillRect(61, 31, 29, 29);
          break;

        case "Z":
          ctx.fillStyle = "rgb(255,200,0)";
          ctx.fillRect(1, 1, 29, 29);
          ctx.fillRect(31, 1, 29, 29);
          ctx.fillRect(31, 31, 29, 29);
          ctx.fillRect(61, 31, 29, 29);
          break;
      }
    },
  },
  mounted() {
    this.PIXEL_RATIO = (function () {
      var sctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr =
          sctx.webkitBackingStorePixelRatio ||
          sctx.mozBackingStorePixelRatio ||
          sctx.msBackingStorePixelRatio ||
          sctx.oBackingStorePixelRatio ||
          sctx.backingStorePixelRatio ||
          1;

      return dpr / bsr;
    })();

    //Create canvas with the device resolution.
    this.createHiDPICanvas(300, 600);

    const ctx = this.$refs.canvas.querySelector("canvas").getContext("2d");

    this.createTetramino(ctx);

    console.log(this.canvas);
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  width: 100%;

  &__inner {
    width: 100%;

    & > canvas {
      border: 1px solid var(--color-gray-0);
    }
  }
}
</style>
