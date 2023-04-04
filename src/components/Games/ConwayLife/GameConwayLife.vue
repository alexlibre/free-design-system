<template>
  <div>
    <canvas
      ref="conwayCanvas"
      :width="width"
      :height="height"
      :style="`width: ${width}px; height: ${height}px; border: 1px solid #42a5f0`"
    ></canvas>
    <div class="flex gap-16 mt-16">
      <v-button :view="evolution ? 'secondary' : 'primary'" @click="start"
        >Run Life</v-button
      >
      <v-button :view="evolution ? 'primary' : 'secondary'" @click="stop"
        >Stop</v-button
      >
      <v-button view="secondary" @click="makeGrid">Make random world</v-button>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/Button/VButton";

export default {
  components: { VButton },
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
      cellWidth: 10,
      cellHeight: 10,
      gameObjects: [],
      frame: null,
      evolution: false,
    };
  },
  computed: {
    numRows() {
      return this.height / this.cellHeight;
    },
    numColumns() {
      return this.width / this.cellWidth;
    },
  },
  methods: {
    draw(alive, gridX, gridY) {
      this.ctx.fillStyle = alive ? "#42a5f0" : "#fff";
      this.ctx.fillRect(
        gridX * this.cellWidth,
        gridY * this.cellHeight,
        this.cellWidth,
        this.cellHeight
      );
    },
    makeCell(gridX, gridY) {
      const alive = Math.random() > 0.5;

      this.draw(alive, gridX, gridY);
      return {
        alive,
        gridX,
        gridY,
        nextAlive: null,
      };
    },
    makeGrid() {
      this.evolution = false;
      this.gameObjects = [];
      clearTimeout(this.frame);

      for (let y = 0; y < this.numRows; y++) {
        for (let x = 0; x < this.numColumns; x++) {
          this.gameObjects.push(this.makeCell(x, y));
        }
      }
    },
    start() {
      this.evolution = true;
      this.runLoop();
    },
    runLoop() {
      window.requestAnimationFrame(this.gameLoop);
    },
    stop() {
      this.evolution = false;

      this.$nextTick(() => {
        clearTimeout(this.frame);
      });
    },
    gameLoop() {
      this.checkSurrounding();

      this.ctx.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.gameObjects.length; i++) {
        const { alive, gridX, gridY, nextAlive } = this.gameObjects[i];
        this.draw(alive, gridX, gridY, nextAlive);
      }

      this.frame = setTimeout(this.runLoop, 20);
    },
    checkSurrounding() {
      for (let x = 0; x < this.numColumns; x++) {
        for (let y = 0; y < this.numRows; y++) {
          let numAlive =
            this.isAlive(x - 1, y - 1) +
            this.isAlive(x, y - 1) +
            this.isAlive(x + 1, y - 1) +
            this.isAlive(x - 1, y) +
            this.isAlive(x + 1, y) +
            this.isAlive(x - 1, y + 1) +
            this.isAlive(x, y + 1) +
            this.isAlive(x + 1, y + 1);

          let centerIndex = this.gridToIndex(x, y);

          if (numAlive == 2) {
            this.gameObjects[centerIndex].nextAlive =
              this.gameObjects[centerIndex].alive;
          } else if (numAlive == 3) {
            this.gameObjects[centerIndex].nextAlive = true;
          } else {
            this.gameObjects[centerIndex].nextAlive = false;
          }
        }
      }

      for (let i = 0; i < this.gameObjects.length; i++) {
        this.gameObjects[i].alive = this.gameObjects[i].nextAlive;
      }
    },

    isAlive(x, y) {
      if (x < 0 || x >= this.numColumns || y < 0 || y >= this.numRows) {
        return false;
      }

      return this.gameObjects[this.gridToIndex(x, y)].alive ? 1 : 0;
    },

    gridToIndex(x, y) {
      return x + y * this.numColumns;
    },
  },
  mounted() {
    this.ctx = this.$refs.conwayCanvas.getContext("2d");
  },
};
</script>

<style lang="scss" scoped></style>
