<template>
  <section class="components-block" :id="id">
    <fieldset class="components-block__example">
      <legend>
        <h2 class="components-block__title">{{ capitalize(title) }}</h2>
      </legend>
      <p class="components-block__desc" v-if="desc" v-html="desc"></p>
      <slot></slot>
    </fieldset>
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
    variants: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    capitalize(str) {
      return (str.charAt(0).toUpperCase() + str.slice(1)).split("-").join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.components-block {
  background-color: var(--color-white);
  & + & {
    margin-top: 48px;
  }

  &__desc {
    @include p1();
    margin-bottom: 24px;
  }

  &__example {
    max-width: 100%;
    border: 0;
    padding: 24px 8px 8px;

    @include sm-block {
      border-radius: 8px;
      border: 1px solid var(--color-gray--1);

      & legend {
        padding: 0 24px;
      }
    }

    @include lg-block {
      max-width: 900px;
      padding: 24px;
    }
  }
}
</style>
