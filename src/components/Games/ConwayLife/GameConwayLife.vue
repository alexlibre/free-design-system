<template>
  <div class="life">
    <canvas
      ref="conwayCanvas"
      :width="width"
      :height="height"
      :style="`width: ${width}px; height: ${height}px; border: 1px solid #42a5f0`"
      @click="createLife"
    ></canvas>
    <div class="flex gap-16 mt-16">
      <v-button
        class="ml-4"
        :disabled="evolution || gameObjects.length === 0"
        :view="evolution ? 'text' : 'primary'"
        @click="start"
        >Run Life</v-button
      >
      <v-button :view="evolution ? 'primary' : 'text'" @click="stop"
        >Stop</v-button
      >
    </div>
    <div class="flex gap-16 mt-16">
      <v-button class="ml-4" view="text" @click="clean">Clean world</v-button>
      <v-button view="text" @click="makeGrid(false)"
        >Make random world</v-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import VButton from "@/components/Button/VButton.vue";

interface Props {
  width?: number;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 150,
});

interface GameObject {
  alive: boolean;
  gridX: number;
  gridY: number;
  nextAlive: boolean | null;
  strength: number;
}

const conwayCanvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const cellWidth = 10;
const cellHeight = 10;
const gameObjects = ref<GameObject[]>([]);
let frame: number | null = null;
const evolution = ref(false);
const canvasCoords = ref<{ left: number; top: number }>({ left: 0, top: 0 });

const numRows = computed(() => {
  return props.height / cellHeight;
});

const numColumns = computed(() => {
  return props.width / cellWidth;
});

const draw = ({ alive, gridX, gridY, strength }: { alive: boolean; gridX: number; gridY: number; strength: number }) => {
  if (!ctx.value) return;
  let s = strength;
  if (s > 1) s = 1;
  ctx.value.fillStyle = alive
    ? `rgb(${Math.floor(255 * s)},127,127)`
    : "#fff";
  ctx.value.beginPath();
  ctx.value.arc(
    gridX * cellWidth + cellWidth / 2,
    gridY * cellHeight + cellHeight / 2,
    cellWidth / 2,
    0,
    cellWidth * Math.PI
  );
  ctx.value.fill();
};

const makeCell = ({ gridX, gridY, alreadyAlive, strength }: { gridX: number; gridY: number; alreadyAlive?: string; strength?: number }): GameObject => {
  let alive = false;
  let strengthNext = strength || 0.5;

  if (alreadyAlive === "alive") {
    alive = true;
    strengthNext += 0.01;
  } else if (alreadyAlive === "dead") {
    alive = false;
    strengthNext -= 0.01;
  } else {
    alive = Math.random() < strengthNext;
  }

  draw({ alive, gridX, gridY, strength: strengthNext });

  return {
    alive,
    gridX,
    gridY,
    nextAlive: null,
    strength: strengthNext,
  };
};

const clean = () => {
  gameObjects.value = [];
  if (ctx.value) {
    ctx.value.clearRect(0, 0, props.width, props.height);
  }

  makeGrid(true);
};

const makeGrid = (allDead: boolean) => {
  gameObjects.value = [];

  evolution.value = false;
  if (frame !== null) {
    cancelAnimationFrame(frame);
  }

  if (allDead) {
    for (let y = 0; y < numRows.value; y++) {
      for (let x = 0; x < numColumns.value; x++) {
        gameObjects.value.push(
          makeCell({
            gridX: x,
            gridY: y,
            alreadyAlive: "dead",
            strength: 0.5,
          })
        );
      }
    }
  } else {
    for (let y = 0; y < numRows.value; y++) {
      for (let x = 0; x < numColumns.value; x++) {
        gameObjects.value.push(makeCell({ gridX: x, gridY: y, strength: 0.5 }));
      }
    }
  }
};

const start = () => {
  if (evolution.value) return;
  evolution.value = true;
  runLoop();
};

const runLoop = () => {
  if (frame !== null) {
    cancelAnimationFrame(frame);
  }
  frame = requestAnimationFrame(gameLoop);
};

const stop = () => {
  evolution.value = false;

  nextTick(() => {
    if (frame !== null) {
      cancelAnimationFrame(frame);
      frame = null;
    }
  });
};

const gameLoop = () => {
  checkSurrounding();

  if (ctx.value) {
    ctx.value.clearRect(0, 0, props.width, props.height);
  }

  for (let i = 0; i < gameObjects.value.length; i++) {
    const { alive, gridX, gridY, strength } = gameObjects.value[i];
    draw({
      alive,
      gridX,
      gridY,
      strength,
    });
  }

  if (evolution.value) {
    frame = requestAnimationFrame(runLoop);
  }
};

const checkSurrounding = () => {
  for (let x = 0; x < numColumns.value; x++) {
    for (let y = 0; y < numRows.value; y++) {
      let numAlive =
        isAlive(x - 1, y - 1) +
        isAlive(x, y - 1) +
        isAlive(x + 1, y - 1) +
        isAlive(x - 1, y) +
        isAlive(x + 1, y) +
        isAlive(x - 1, y + 1) +
        isAlive(x, y + 1) +
        isAlive(x + 1, y + 1);

      let centerIndex = gridToIndex(x, y);

      if (numAlive === 2) {
        gameObjects.value[centerIndex].nextAlive =
          gameObjects.value[centerIndex].alive;
        gameObjects.value[centerIndex].strength += 0.002;
      } else if (numAlive === 3) {
        gameObjects.value[centerIndex].nextAlive = true;
        gameObjects.value[centerIndex].strength += 0.001;
      } else {
        gameObjects.value[centerIndex].nextAlive = false;
        gameObjects.value[centerIndex].strength = 0.5;
      }
    }
  }

  for (let i = 0; i < gameObjects.value.length; i++) {
    gameObjects.value[i].alive = gameObjects.value[i].nextAlive as boolean;
  }
};

const isAlive = (x: number, y: number) => {
  let newX = x;
  let newY = y;

  if (x < 0) {
    newX = numColumns.value + x;
  }

  if (x >= numColumns.value) {
    newX = x - numColumns.value;
  }

  if (y < 0) {
    newY = numRows.value + y;
  }

  if (y >= numRows.value) {
    newY = y - numRows.value;
  }

  return gameObjects.value[gridToIndex(newX, newY)].alive ? 1 : 0;
};

const gridToIndex = (x: number, y: number) => {
  return x + y * numColumns.value;
};

const createLife = ($event: MouseEvent) => {
  if (!conwayCanvas.value) return;
  const rect = conwayCanvas.value.getBoundingClientRect();
  canvasCoords.value = {
    left: rect.left,
    top: rect.top,
  };
  const x = Math.floor(
    ($event.x - canvasCoords.value.left) / cellWidth
  );
  const y = Math.floor(
    ($event.y - canvasCoords.value.top) / cellHeight
  );

  const born = isAlive(x, y);

  gameObjects.value[gridToIndex(x, y)] = makeCell({
    gridX: x,
    gridY: y,
    alreadyAlive: born ? "dead" : "alive",
    strength: 0.5,
  });
};

onMounted(() => {
  if (conwayCanvas.value) {
    ctx.value = conwayCanvas.value.getContext("2d");
    if (ctx.value) {
      makeGrid(true);
    }
  }
});
</script>
</script>

<style lang="scss" scoped>
.life {
  width: 100%;
  overflow-x: auto;
  padding-bottom: 24px;
}
</style>
