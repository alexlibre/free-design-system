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
      cellWidth: 10,
      cellHeight: 10,
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
    draw({ alive, gridX, gridY, strength }) {
      if (strength > 1) strength = 1;
      this.ctx.fillStyle = alive
        ? `rgb(${Math.floor(255 * strength)},127,127)`
        : "#fff";
      this.ctx.beginPath();
      this.ctx.arc(
        gridX * this.cellWidth + this.cellWidth / 2,
        gridY * this.cellHeight + this.cellHeight / 2,
        this.cellWidth / 2,
        0,
        this.cellWidth * Math.PI
      );
      this.ctx.fill();
    },
    makeCell({ gridX, gridY, alreadyAlive, strength }) {
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

      this.draw({ alive, gridX, gridY, strength });

      return {
        alive,
        gridX,
        gridY,
        nextAlive: null,
        strength: strengthNext,
      };
    },
    clean() {
      this.gameObjects = [];
      this.ctx.clearRect(0, 0, this.width, this.height);

      this.makeGrid(true);
    },
    makeGrid(allDead) {
      this.gameObjects = [];

      this.evolution = false;
      clearTimeout(this.frame);

      if (allDead) {
        for (let y = 0; y < this.numRows; y++) {
          for (let x = 0; x < this.numColumns; x++) {
            this.gameObjects.push(
              this.makeCell({
                gridX: x,
                gridY: y,
                alreadyAlive: "dead",
                strength: 0.5,
              })
            );
          }
        }
      } else {
        for (let y = 0; y < this.numRows; y++) {
          for (let x = 0; x < this.numColumns; x++) {
            this.gameObjects.push(
              this.makeCell({ gridX: x, gridY: y, strength: 0.5 })
            );
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

      this.$nextTick(() => {
        cancelAnimationFrame(this.frame);
      });
    },
    gameLoop() {
      this.checkSurrounding();

      this.ctx.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.gameObjects.length; i++) {
        const { alive, gridX, gridY, strength } = this.gameObjects[i];
        this.draw({
          alive,
          gridX,
          gridY,
          strength,
        });
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
            this.gameObjects[centerIndex].strength += 0.002;
          } else if (numAlive === 3) {
            this.gameObjects[centerIndex].nextAlive = true;
            this.gameObjects[centerIndex].strength += 0.001;
          } else {
            this.gameObjects[centerIndex].nextAlive = false;
            this.gameObjects[centerIndex].strength = 0.5;
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
      const rect = this.$refs.conwayCanvas.getBoundingClientRect();
      this.canvasCoords = {
        left: rect.left,
        top: rect.top,
      };
      const x = Math.floor(
        ($event.x - this.canvasCoords.left) / this.cellWidth
      );
      const y = Math.floor(
        ($event.y - this.canvasCoords.top) / this.cellHeight
      );

      const born = this.isAlive(x, y);

      this.gameObjects[this.gridToIndex(x, y)] = this.makeCell({
        gridX: x,
        gridY: y,
        alreadyAlive: born ? "dead" : "alive",
        strength: 0.5,
      });
    },
  },
  mounted() {
    this.ctx = this.$refs.conwayCanvas.getContext("2d");

    this.makeGrid(true);
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
