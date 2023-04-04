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

<script>
import VButton from "@/components/Button/VButton";

export default {
  components: { VButton },
  props: {
    cols: {
      type: Number,
      default: 10,
    },
    rows: {
      type: Number,
      default: 20,
    },
    size: {
      type: Array,
      default: () => [300, 600],
    },
    colors: {
      type: Array,
      default: () => [
        "cyan",
        "orange",
        "blue",
        "yellow",
        "red",
        "green",
        "purple",
      ],
    },
    shapes: {
      type: Array,
      default: () => [
        [1, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [1, 1, 1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1, 1],
        [0, 1, 0, 0, 1, 1, 1],
      ],
    },
  },
  data() {
    return {
      ctx: null,
      block_w: this.size[0] / this.cols,
      block_h: this.size[1] / this.rows,
      board: [],
      lose: false,
      interval: null,
      intervalRender: null,
      current: [],
      currentX: null,
      currentY: null,
      freezed: false,
      game: false,
    };
  },
  methods: {
    newShape() {
      const key = Math.floor(Math.random() * this.shapes.length);
      const shape = this.shapes[key];

      this.current = [];
      for (let y = 0; y < 4; ++y) {
        this.current[y] = [];
        for (let x = 0; x < 4; ++x) {
          const i = 4 * y + x;
          if (typeof shape[i] !== "undefined" && shape[i]) {
            this.current[y][x] = key + 1;
          } else {
            this.current[y][x] = 0;
          }
        }
      }

      this.freezed = false;
      this.currentX = Math.floor(this.cols / 2 - 1);
      this.currentY = 0;
    },
    drawBlock(x, y) {
      this.ctx.fillRect(
        x * this.block_w,
        y * this.block_h,
        this.block_w - 1,
        this.block_h - 1
      );
    },
    render() {
      this.ctx.clearRect(0, 0, this.size[0], this.size[1]);
      this.ctx.strokeStyle = "#000";

      for (let x = 0; x < this.cols; ++x) {
        for (let y = 0; y < this.rows; ++y) {
          if (this.board[y][x]) {
            this.ctx.strokeStyle = this.colors[this.board[y][x] - 1];
            this.drawBlock(x, y);
          }
        }
      }

      this.ctx.fillStyle = "red";

      for (let y = 0; y < 4; ++y) {
        for (let x = 0; x < 4; ++x) {
          if (this.current[y][x]) {
            this.ctx.fillStyle = this.colors[this.current[y][x] - 1];
            this.drawBlock(this.currentX + x, this.currentY + y);
          }
        }
      }
    },
    init() {
      for (let y = 0; y < this.rows; ++y) {
        this.board[y] = [];
        for (let x = 0; x < this.cols; ++x) {
          this.board[y][x] = 0;
        }
      }
    },
    tick() {
      if (this.valid(0, 1)) {
        ++this.currentY;
      } else {
        this.freeze();
        this.valid(0, 1);
        this.clearLines();

        if (this.lose) {
          this.clearAllIntervals();
          this.game = false;
          return false;
        }

        this.newShape();
      }
    },
    freeze() {
      for (let y = 0; y < 4; ++y) {
        for (let x = 0; x < 4; ++x) {
          if (this.current[y][x]) {
            this.board[y + this.currentY][x + this.currentX] =
              this.current[y][x];
          }
        }
      }

      this.freezed = true;
    },
    rotate(current) {
      const newCurrent = [];
      for (let y = 0; y < 4; ++y) {
        newCurrent[y] = [];
        for (let x = 0; x < 4; ++x) {
          newCurrent[y][x] = current[3 - x][y];
        }
      }

      return newCurrent;
    },
    clearLines() {
      for (let y = this.rows - 1; y >= 0; --y) {
        let rowFilled = true;

        for (let x = 0; x < this.cols; ++x) {
          if (this.board[y][x] === 0) {
            rowFilled = false;
            break;
          }
        }

        if (rowFilled) {
          for (let yy = y; yy > 0; --yy) {
            for (let x = 0; x < this.cols; ++x) {
              this.board[yy][x] = this.board[yy - 1][x];
            }
          }
          ++y;
        }
      }
    },
    valid(offsetX = 0, offsetY = 0, newCurrent) {
      offsetX = this.currentX + offsetX;
      offsetY = this.currentY + offsetY;
      newCurrent = newCurrent || this.current;

      for (let y = 0; y < 4; ++y) {
        for (let x = 0; x < 4; ++x) {
          if (newCurrent[y][x]) {
            if (
              typeof this.board[y + offsetY] == "undefined" ||
              typeof this.board[y + offsetY][x + offsetX] == "undefined" ||
              this.board[y + offsetY][x + offsetX] ||
              x + offsetX < 0 ||
              y + offsetY >= this.rows ||
              x + offsetX >= this.cols
            ) {
              if (offsetY == 1 && this.freezed) {
                this.lose = true;
              }
              return false;
            }
          }
        }
      }
      return true;
    },

    newGame() {
      this.clearAllIntervals();
      this.intervalRender = setInterval(this.render, 30);
      this.init();
      this.newShape();
      this.lose = false;
      this.interval = setInterval(this.tick, 400);
    },
    clearAllIntervals() {
      clearInterval(this.interval);
      clearInterval(this.intervalRender);
    },
    keyPress(key) {
      switch (key) {
        case "left":
          if (this.valid(-1)) {
            --this.currentX;
          }
          break;
        case "right":
          if (this.valid(1)) {
            ++this.currentX;
          }
          break;
        case "down":
          if (this.valid(0, 1)) {
            ++this.currentY;
          }
          break;
        case "rotate":
          // eslint-disable-next-line no-case-declarations
          let rotated = this.rotate(this.current);
          if (this.valid(0, 0, rotated)) {
            this.current = rotated;
          }
          break;
        case "drop":
          while (this.valid(0, 1)) {
            ++this.currentY;
          }
          this.tick();
          break;
      }
    },
    onKeyPress(e) {
      console.log(e);
      const keys = {
        37: "left",
        39: "right",
        40: "down",
        38: "rotate",
        32: "drop",
      };
      if (typeof keys[e.keyCode] !== "undefined") {
        this.keyPress(keys[e.keyCode]);
        this.render();
      }
    },
    start(e) {
      e.target.blur();
      this.game = true;
      this.newGame();
    },
    stop() {
      this.clearAllIntervals();
      this.game = false;
      this.lose = true;
    },
  },
  mounted() {
    document.body.onkeydown = (e) => {
      var keys = {
        37: "left",
        39: "right",
        40: "down",
        38: "rotate",
        32: "drop",
      };
      if (typeof keys[e.keyCode] != "undefined") {
        this.keyPress(keys[e.keyCode]);
        this.render();
      }
    };
    this.ctx = this.$refs.canvas.getContext("2d");
  },
};
</script>

<style lang="scss" scoped></style>
