<template>
  <div>
    <game-asteroids :width="width" :height="height" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GameAsteroids from "@/components/Games/Asteroids/GameAsteroids.vue";

const width = ref(800);
const height = ref(600);
</script>

<style lang="scss" scoped></style>
