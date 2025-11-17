<template>
  <div>
    <canvas
      ref="canvas"
      :width="size[0]"
      :height="size[1]"
      :style="`width: ${size[0]}px; height: ${size[1]}px; border: 1px solid #333`"
    ></canvas>
    <v-button v-if="game" @click="stop" color="red"> Stop </v-button>
    <v-button v-else @click="start"> New game </v-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import VButton from "@/components/Button/VButton.vue";

interface Props {
  cols?: number;
  rows?: number;
  size?: [number, number];
  colors?: string[];
  shapes?: number[][];
}

const props = withDefaults(defineProps<Props>(), {
  cols: 10,
  rows: 20,
  size: () => [300, 600],
  colors: () => [
    "cyan",
    "orange",
    "blue",
    "yellow",
    "red",
    "green",
    "purple",
  ],
  shapes: () => [
    [1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 1, 1, 1],
  ],
});

const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const block_w = computed(() => props.size[0] / props.cols);
const block_h = computed(() => props.size[1] / props.rows);
const board = ref<number[][]>([]);
const lose = ref(false);
let interval: ReturnType<typeof setInterval> | null = null;
let intervalRender: ReturnType<typeof setInterval> | null = null;
const current = ref<number[][]>([]);
const currentX = ref<number | null>(null);
const currentY = ref<number | null>(null);
const freezed = ref(false);
const game = ref(false);

const newShape = () => {
  const key = Math.floor(Math.random() * props.shapes.length);
  const shape = props.shapes[key];

  current.value = [];
  for (let y = 0; y < 4; ++y) {
    current.value[y] = [];
    for (let x = 0; x < 4; ++x) {
      const i = 4 * y + x;
      if (typeof shape[i] !== "undefined" && shape[i]) {
        current.value[y][x] = key + 1;
      } else {
        current.value[y][x] = 0;
      }
    }
  }

  freezed.value = false;
  currentX.value = Math.floor(props.cols / 2 - 1);
  currentY.value = 0;
};

const drawBlock = (x: number, y: number) => {
  if (!ctx.value) return;
  ctx.value.fillRect(
    x * block_w.value,
    y * block_h.value,
    block_w.value - 1,
    block_h.value - 1
  );
};

const render = () => {
  if (!ctx.value) return;
  ctx.value.clearRect(0, 0, props.size[0], props.size[1]);
  ctx.value.strokeStyle = "#000";

  for (let x = 0; x < props.cols; ++x) {
    for (let y = 0; y < props.rows; ++y) {
      if (board.value[y] && board.value[y][x]) {
        ctx.value.strokeStyle = props.colors[board.value[y][x] - 1];
        drawBlock(x, y);
      }
    }
  }

  ctx.value.fillStyle = "red";

  for (let y = 0; y < 4; ++y) {
    for (let x = 0; x < 4; ++x) {
      if (current.value[y] && current.value[y][x] && currentX.value !== null && currentY.value !== null) {
        ctx.value.fillStyle = props.colors[current.value[y][x] - 1];
        drawBlock(currentX.value + x, currentY.value + y);
      }
    }
  }
};

const init = () => {
  board.value = [];
  for (let y = 0; y < props.rows; ++y) {
    board.value[y] = [];
    for (let x = 0; x < props.cols; ++x) {
      board.value[y][x] = 0;
    }
  }
};

const tick = () => {
  if (valid(0, 1) && currentY.value !== null) {
    currentY.value++;
  } else {
    freeze();
    valid(0, 1);
    clearLines();

    if (lose.value) {
      clearAllIntervals();
      game.value = false;
      return false;
    }

    newShape();
  }
};

const freeze = () => {
  if (currentY.value === null || currentX.value === null) return;
  for (let y = 0; y < 4; ++y) {
    for (let x = 0; x < 4; ++x) {
      if (current.value[y] && current.value[y][x]) {
        board.value[y + currentY.value][x + currentX.value] =
          current.value[y][x];
      }
    }
  }

  freezed.value = true;
};

const rotateShape = (currentShape: number[][]) => {
  const newCurrent: number[][] = [];
  for (let y = 0; y < 4; ++y) {
    newCurrent[y] = [];
    for (let x = 0; x < 4; ++x) {
      newCurrent[y][x] = currentShape[3 - x][y];
    }
  }

  return newCurrent;
};

const clearLines = () => {
  for (let y = props.rows - 1; y >= 0; --y) {
    let rowFilled = true;

    for (let x = 0; x < props.cols; ++x) {
      if (board.value[y] && board.value[y][x] === 0) {
        rowFilled = false;
        break;
      }
    }

    if (rowFilled) {
      for (let yy = y; yy > 0; --yy) {
        for (let x = 0; x < props.cols; ++x) {
          if (board.value[yy] && board.value[yy - 1]) {
            board.value[yy][x] = board.value[yy - 1][x];
          }
        }
      }
      ++y;
    }
  }
};

const valid = (offsetX = 0, offsetY = 0, newCurrent?: number[][]) => {
  if (currentX.value === null || currentY.value === null) return false;
  const offX = currentX.value + offsetX;
  const offY = currentY.value + offsetY;
  const shapeToCheck = newCurrent || current.value;

  for (let y = 0; y < 4; ++y) {
    for (let x = 0; x < 4; ++x) {
      if (shapeToCheck[y] && shapeToCheck[y][x]) {
        if (
          typeof board.value[y + offY] == "undefined" ||
          typeof board.value[y + offY][x + offX] == "undefined" ||
          board.value[y + offY][x + offX] ||
          x + offX < 0 ||
          y + offY >= props.rows ||
          x + offX >= props.cols
        ) {
          if (offsetY == 1 && freezed.value) {
            lose.value = true;
          }
          return false;
        }
      }
    }
  }
  return true;
};

const newGame = () => {
  clearAllIntervals();
  intervalRender = setInterval(render, 30);
  init();
  newShape();
  lose.value = false;
  interval = setInterval(tick, 400);
};

const clearAllIntervals = () => {
  if (interval) clearInterval(interval);
  if (intervalRender) clearInterval(intervalRender);
  interval = null;
  intervalRender = null;
};

const keyPress = (key: string) => {
  switch (key) {
    case "left":
      if (valid(-1)) {
        if (currentX.value !== null) currentX.value--;
      }
      break;
    case "right":
      if (valid(1)) {
        if (currentX.value !== null) currentX.value++;
      }
      break;
    case "down":
      if (valid(0, 1)) {
        if (currentY.value !== null) currentY.value++;
      }
      break;
    case "rotate":
      const rotated = rotateShape(current.value);
      if (valid(0, 0, rotated)) {
        current.value = rotated;
      }
      break;
    case "drop":
      while (valid(0, 1)) {
        if (currentY.value !== null) currentY.value++;
      }
      tick();
      break;
  }
};

const start = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  target.blur();
  game.value = true;
  newGame();
};

const stop = () => {
  clearAllIntervals();
  game.value = false;
  lose.value = true;
};

onMounted(() => {
  if (canvas.value) {
    ctx.value = canvas.value.getContext("2d");
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    const keys: Record<number, string> = {
      37: "left",
      39: "right",
      40: "down",
      38: "rotate",
      32: "drop",
    };
    if (typeof keys[e.keyCode] !== "undefined") {
      keyPress(keys[e.keyCode]);
      render();
    }
  };

  document.body.onkeydown = handleKeyDown;
});

onUnmounted(() => {
  clearAllIntervals();
});
</script>

<style lang="scss" scoped></style>
