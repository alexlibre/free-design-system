<template>
  <div>
    <game-conway-life :width="width" :height="height" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GameConwayLife from "@/components/Games/ConwayLife/GameConwayLife.vue";

const width = ref(1280);
const height = ref(640);
</script>

<style lang="scss" scoped></style>
