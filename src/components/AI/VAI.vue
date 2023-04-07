<template>
  <div>
    <canvas
      ref="canvasAI"
      :width="width"
      :height="height"
      :style="`width: ${width}px; height=${height}px; border: 1px solid #42a5f0`"
      @click="clickCell"
    ></canvas>
    <br />
    <p>Alive: {{ alive }}</p>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      ctx: null,
      cellWidth: this.width / 10,
      cellHeight: this.height / 10,
      radius: this.width / 20,
      fps: 60,
      timer: null,
      cells: [],
    };
  },
  methods: {
    distance(x1, y1, x2, y2) {
      const xDist = x2 - x1;
      const yDist = y2 - y1;

      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    },
    rotate(velocity, angle) {
      const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
      };

      return rotatedVelocities;
    },
    resolveCollision(particle, otherParticle) {
      console.log("resolver");
      const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
      const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

      const xDist = otherParticle.x - particle.x;
      const yDist = otherParticle.y - particle.y;

      // Prevent accidental overlap of particles
      if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        // Grab angle between the two colliding particles
        const angle = -Math.atan2(
          otherParticle.y - particle.y,
          otherParticle.x - particle.x
        );

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = this.rotate(particle.velocity, angle);
        const u2 = this.rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = {
          x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
          y: u1.y,
        };
        const v2 = {
          x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
          y: u2.y,
        };

        // Final velocity after rotating axis back to original location
        const vFinal1 = this.rotate(v1, -angle);
        const vFinal2 = this.rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
      }
    },
    fill({ x, y, color, radius }) {
      if (radius < 0) {
        return;
      }
      this.ctx.fillStyle = color;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, 2 * radius * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
    },

    clickCell($event) {
      const rect = this.$refs.canvasAI.getBoundingClientRect();
      const canvasCoords = {
        left: rect.left,
        top: rect.top,
      };
      const mass = 1;
      const radius = mass * 2;
      const x = $event.x - canvasCoords.left;
      const y = $event.y - canvasCoords.top;
      const newCell = {
        x,
        y,
        color: "#888888",
        velocity: {
          x: Math.random() * 10 - 5,
          y: Math.random() * 10 - 5,
        },
        mass,
        radius,
      };

      if (x < radius || x >= this.width - radius) {
        return false;
      }
      if (y < radius || y >= this.height - radius) {
        return false;
      }

      this.fill(newCell);
      this.cells.push(newCell);
    },
    render() {
      this.timer = setTimeout(() => {
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.width, this.height);

        for (let i = 0; i < this.cells.length; i++) {
          for (let j = 0; j < this.cells.length; j++) {
            const particleA = this.cells[i];
            const particleB = this.cells[j];

            if (particleA === particleB) {
              continue;
            }
            if (
              this.distance(
                particleA.x,
                particleA.y,
                particleB.x,
                particleB.y
              ) <=
              particleA.radius + particleB.radius
            ) {
              this.resolveCollision(particleA, particleB);

              if (particleA.mass < particleB.mass) {
                particleA.mass -= particleA.mass > 0.03 ? 0.002 : 0;
                particleB.mass += particleB.mass < 3 ? 0.002 : 0;
              } else {
                particleB.mass -= particleB.mass > 0.03 ? 0.002 : 0;
                particleA.mass += particleA.mass < 3 ? 0.002 : 0;
              }

              particleA.radius = particleA.mass * 2;
              particleB.radius = particleB.mass * 2;
            }
          }
        }

        this.cells.forEach((cell) => {
          const { x, y, velocity } = cell;
          let newX = x + velocity.x;
          let newY = y + velocity.y;

          // hit left border
          if (newX < cell.radius) {
            newX = cell.radius;
            cell.velocity.x = -cell.velocity.x;
          }

          //hit right border
          if (newX >= this.width - cell.radius) {
            newX = this.width - cell.radius;
            cell.velocity.x = -cell.velocity.x;
          }

          // hit top border
          if (newY < cell.radius) {
            newY = cell.radius;
            cell.velocity.y = -cell.velocity.y;
          }

          //hit bottom border
          if (newY >= this.height - cell.radius) {
            newY = this.height - cell.radius;
            cell.velocity.y = -cell.velocity.y;
          }

          cell.x = newX;
          cell.y = newY;
          cell.velocity.x = cell.velocity.x > 3 ? 3 : cell.velocity.x;
          cell.velocity.y = cell.velocity.y > 3 ? 3 : cell.velocity.y;
          this.fill(cell);

          if (cell.mass < 0.3) {
            this.cells = this.cells.filter((item) => item !== cell);
          }
        });

        window.requestAnimationFrame(this.render);
      }, 1000 / this.fps);
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    generateRandom(num) {
      for (let i = 0; i < num; i++) {
        const mass = 1;
        const radius = mass * 2;
        const x = this.randomIntFromInterval(
          this.cellWidth,
          this.width - this.cellWidth
        );
        const y = this.randomIntFromInterval(
          this.cellHeight,
          this.height - this.cellHeight
        );
        const newCell = {
          x,
          y,
          color: "#888888",
          velocity: {
            x: Math.random() * 10 - 5,
            y: Math.random() * 10 - 5,
          },
          mass,
          radius,
        };

        if (x < radius || x >= this.width - radius) {
          return false;
        }
        if (y < radius || y >= this.height - radius) {
          return false;
        }

        this.fill(newCell);
        this.cells.push(newCell);
      }
    },
  },
  mounted() {
    this.ctx = this.$refs.canvasAI.getContext("2d");

    this.generateRandom(200);
    this.render();
  },
  computed: {
    alive() {
      return this.cells.length;
    },
  },
};
</script>

<style lang="scss" scoped></style>
