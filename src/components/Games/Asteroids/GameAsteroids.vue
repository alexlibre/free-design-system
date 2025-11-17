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

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
  width?: number;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 150,
});

interface Ship {
  x: number;
  y: number;
  radius: number;
  angle: number;
}

const canvasAsteroids = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const game = ref(false);
const lives = ref(1);
const asteroids = ref<unknown[]>([]);
const thrusting = ref(false);
const thrustSpeed = 0.1;
const thrust = ref({ x: 0, y: 0 });
const ship = ref<Ship>({
  x: props.width / 2,
  y: props.height / 2,
  radius: 15,
  angle: (90 / 180) * Math.PI,
});

const addBorderless = (obj: Ship) => {
  if (obj.y < 0) {
    obj.y = props.height + obj.y;
  }

  if (obj.x < 0) {
    obj.x = props.width + obj.x;
  }

  if (obj.y >= props.height) {
    obj.y = obj.y - props.height;
  }

  if (obj.x >= props.width) {
    obj.x = obj.x - props.width;
  }
};

const init = () => {
  if (!ctx.value) return;
  ctx.value.fillStyle = "#fff";
  ctx.value.fillRect(0, 0, props.width, props.height);

  ctx.value.strokeStyle = "#42a5f0";
  ctx.value.lineWidth = 1;
  ctx.value.beginPath();
  ctx.value.moveTo(
    ship.value.x + (4 / 3) * ship.value.radius * Math.cos(ship.value.angle),
    ship.value.y - (4 / 3) * ship.value.radius * Math.sin(ship.value.angle)
  );
  ctx.value.lineTo(
    ship.value.x -
      ship.value.radius *
        ((2 / 3) * Math.cos(ship.value.angle) + Math.sin(ship.value.angle)),
    ship.value.y +
      ship.value.radius *
        ((2 / 3) * Math.sin(ship.value.angle) - Math.cos(ship.value.angle))
  );
  ctx.value.lineTo(
    ship.value.x -
      ship.value.radius *
        ((2 / 3) * Math.cos(ship.value.angle) - Math.sin(ship.value.angle)),
    ship.value.y +
      ship.value.radius *
        ((2 / 3) * Math.sin(ship.value.angle) + Math.cos(ship.value.angle))
  );
  ctx.value.closePath();
  ctx.value.stroke();

  ctx.value.fillStyle = "#42a5f0";
  ctx.value.fillRect(ship.value.x - 0.5, ship.value.y - 0.5, 1, 1);

  addBorderless(ship.value);

  window.requestAnimationFrame(init);
};

const keyDown = (char: string) => {
  if (char === "d") {
    ship.value.angle -= 0.2;
  }
  if (char === "a") {
    ship.value.angle += 0.2;
  }
  if (char === "w") {
    thrusting.value = true;
  }
  if (char === "s") {
    thrusting.value = false;
  }
};

let keyDownHandler: ((e: KeyboardEvent) => void) | null = null;

onMounted(() => {
  if (canvasAsteroids.value) {
    ctx.value = canvasAsteroids.value.getContext("2d");
  }

  keyDownHandler = (e: KeyboardEvent) => {
    keyDown(e.key);
  };

  document.addEventListener("keydown", keyDownHandler);

  if (ctx.value) {
    window.requestAnimationFrame(init);
  }
});

onUnmounted(() => {
  if (keyDownHandler) {
    document.removeEventListener("keydown", keyDownHandler);
  }
});
</script>

<style lang="scss" scoped></style>
