<template>
  <div class="components-block">
    <h2 class="components-block__title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.components-block {
  & + & {
    margin-top: 48px;
  }

  &__title {
    margin-bottom: 24px;
  }
}
</style>
