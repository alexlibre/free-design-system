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

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    size: {
      type: Array,
      default: () => [18, 18],
    },
  },

  computed: {
    iconPath() {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.hasOwnProperty.call(icon, "default")) {
        icon = icon.default;
      }

      return icon.url;
    },

    className() {
      return "icon icon_" + this.name;
    },
  },
};
</script>

<style>
.icon {
  fill: currentColor;
}
</style>
