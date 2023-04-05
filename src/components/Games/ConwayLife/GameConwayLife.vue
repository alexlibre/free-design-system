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
      cellWidth: 8,
      cellHeight: 8,
      gameObjects: [],
      frame: null,
      evolution: false,
      canvasCoords: {},
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
    makeCell(gridX, gridY, alreadyAlive) {
      let alive = false;
      if (alreadyAlive === "alive") {
        alive = true;
      } else if (alreadyAlive === "dead") {
        alive = false;
      } else {
        alive = Math.random() > 0.5;
      }

      this.draw(alive, gridX, gridY);
      return {
        alive,
        gridX,
        gridY,
        nextAlive: null,
      };
    },
    clean() {
      this.gameObjects = [];
      this.ctx.clearRect(0, 0, this.width, this.height);

      this.makeGrid(true);
    },
    makeGrid(allDead) {
      this.gameObjects = [];

      console.log("makeGrid(), allDead", allDead);
      this.evolution = false;
      clearTimeout(this.frame);

      if (allDead) {
        for (let y = 0; y < this.numRows; y++) {
          for (let x = 0; x < this.numColumns; x++) {
            this.gameObjects.push(this.makeCell(x, y, "dead"));
          }
        }
      } else {
        for (let y = 0; y < this.numRows; y++) {
          for (let x = 0; x < this.numColumns; x++) {
            this.gameObjects.push(this.makeCell(x, y));
          }
        }
      }
    },
    start() {
      if (this.evolution) return;
      this.evolution = true;
      this.runLoop();
    },
    runLoop() {
      window.requestAnimationFrame(this.gameLoop);
    },
    stop() {
      this.evolution = false;

      //   this.$nextTick(() => {
      cancelAnimationFrame(this.frame);
      //   });
    },
    gameLoop() {
      this.checkSurrounding();

      this.ctx.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.gameObjects.length; i++) {
        const { alive, gridX, gridY, nextAlive } = this.gameObjects[i];
        this.draw(alive, gridX, gridY, nextAlive);
      }

      this.frame = requestAnimationFrame(this.runLoop);
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

          if (numAlive === 2) {
            this.gameObjects[centerIndex].nextAlive =
              this.gameObjects[centerIndex].alive;
          } else if (numAlive === 3) {
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
      let newX = x;
      let newY = y;

      if (x < 0) {
        newX = this.numColumns + x;
      }

      if (x >= this.numColumns) {
        newX = x - this.numColumns;
      }

      if (y < 0) {
        newY = this.numRows + y;
      }

      if (y >= this.numRows) {
        newY = y - this.numRows;
      }

      return this.gameObjects[this.gridToIndex(newX, newY)].alive ? 1 : 0;
    },

    gridToIndex(x, y) {
      return x + y * this.numColumns;
    },

    createLife($event) {
      const x = Math.floor(
        ($event.clientX - this.canvasCoords.left) / this.cellWidth
      );
      const y = Math.floor(
        ($event.clientY - this.canvasCoords.top) / this.cellHeight
      );

      const born = this.isAlive(x, y);
      console.log(x, y);

      this.gameObjects[this.gridToIndex(x, y)] = this.makeCell(
        x,
        y,
        born ? "dead" : "alive"
      );
    },
  },
  mounted() {
    this.ctx = this.$refs.conwayCanvas.getContext("2d");

    this.makeGrid(true);

    const rect = this.$refs.conwayCanvas.getBoundingClientRect();
    this.canvasCoords = {
      left: rect.left,
      top: rect.top,
    };
  },
};
</script>

<style lang="scss" scoped>
.life {
  width: 100%;
  overflow-x: auto;
  padding-bottom: 24px;
}
</style>
