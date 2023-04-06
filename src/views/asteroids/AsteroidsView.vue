<template>
  <div>
    <game-asteroids :width="width" :height="height" />
  </div>
</template>

<script>
import GameAsteroids from "@/components/Games/Asteroids/GameAsteroids.vue";

export default {
  components: { GameAsteroids },
  data() {
    return {
      width: 800,
      height: 600,
    };
  },
};
</script>

<style lang="scss" scoped></style>
