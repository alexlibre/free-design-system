<template>
  <router-link :to="url" class="menu-item">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  font-size: 14px;
  line-height: 1;
  padding: 10px 32px;
  color: var(--color-main-colors-gray-2);
  transition: box-shadow 0.2s ease, color 0.2s ease, background 0.2s ease;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    color: var(--color-main-colors-gray-4);
    box-shadow: 0px 0px 50px -10px rgba(41, 41, 41, 0.08);
  }

  &:focus {
    outline: none;
    // outline: 2px solid var(--color-main-colors-orange-0-5);
  }

  &:active {
    box-shadow: inset 0px 0px 0 2px var(--color-main-colors-orange-5);
    color: var(--color-main-colors-orange-6);
  }

  &.disabled {
    background: var(--color-main-colors-gray--1);
    color: var(--color-main-colors-gray-0);
  }

  &.router-link-exact-active {
    background: var(--color-main-colors-orange-5);
    color: var(--color-white);
  }
}
</style>
