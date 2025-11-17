<template>
  <div class="canvas">
    <div class="canvas__inner" ref="canvas"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  size?: [number, number];
}

const props = withDefaults(defineProps<Props>(), {
  size: () => [500, 500],
});

const canvas = ref<HTMLElement | null>(null);
const tetraminos = ["I", "J", "L", "O", "S", "T", "Z"];
const PIXEL_RATIO = ref<number | null>(null);

const createHiDPICanvas = (w = props.size[0], h = props.size[1], ratio?: number) => {
  if (!ratio) {
    ratio = PIXEL_RATIO.value || 1;
  }
  const can = document.createElement("canvas");
  can.style.cssText = "border: 1px solid #333";
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  const ctx = can.getContext("2d");
  if (ctx) {
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  if (canvas.value) {
    canvas.value.appendChild(can);
  }
};

const selectRandom = () => {
  const key = Math.floor(Math.random() * 7);
  return tetraminos[key];
};

const createTetramino = (ctx: CanvasRenderingContext2D) => {
  const char = selectRandom();

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
};

onMounted(() => {
  PIXEL_RATIO.value = (function () {
    const sctx = document.createElement("canvas").getContext("2d");
    if (!sctx) return 1;
    const dpr = window.devicePixelRatio || 1;
    const bsr =
      (sctx as any).webkitBackingStorePixelRatio ||
      (sctx as any).mozBackingStorePixelRatio ||
      (sctx as any).msBackingStorePixelRatio ||
      (sctx as any).oBackingStorePixelRatio ||
      (sctx as any).backingStorePixelRatio ||
      1;

    return dpr / bsr;
  })();

  //Create canvas with the device resolution.
  createHiDPICanvas(300, 600);

  if (canvas.value) {
    const canvasElement = canvas.value.querySelector("canvas");
    if (canvasElement) {
      const ctx = canvasElement.getContext("2d");
      if (ctx) {
        createTetramino(ctx);
      }
    }
  }
});
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
