<template>
  <section class="components-block" :id="id">
    <h2 class="components-block__title">{{ title }}</h2>
    <p class="components-block__desc" v-html="desc"></p>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.components-block {
  & + & {
    margin-top: 48px;
  }

  &__title {
    margin-bottom: 8px;
  }

  &__desc {
    @include p1();
    margin-bottom: 24px;
  }
}
</style>
