<template>
  <svg
    :class="className"
    :width="size[0]"
    :height="size[1] ? size[1] : size[0]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name: string;
  title?: string;
  size?: [number, number?];
}

const props = withDefaults(defineProps<Props>(), {
  title: null,
  size: () => [18, 18],
});

const iconPath = computed(() => {
  return `#icon-${props.name}`;
});

const className = computed(() => {
  return "icon icon_" + props.name;
});
</script>

<style>
.icon {
  fill: currentColor;
}
</style>
