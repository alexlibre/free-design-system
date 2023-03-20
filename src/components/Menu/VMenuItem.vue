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
  color: var(--color-gray-8);
  transition: box-shadow 0.2s linear, color 0.2s linear, background 0.2s linear;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    color: var(--color-gray-9-5);
    box-shadow: 0px 0px 50px -10px rgba(41, 41, 41, 0.08);
  }

  &:focus {
    outline: none;
    // outline: 2px solid var(--color-orange-0-5);
  }

  &:active {
    box-shadow: inset 0px 0px 0 2px var(--color-orange-5);
    color: var(--color-orange-6);
  }

  &.disabled {
    background: var(--color-gray--1);
    color: var(--color-gray-0);
  }

  &.router-link-exact-active {
    background: var(--color-orange-5);
    color: var(--color-white);
    pointer-events: none;
  }
}
</style>
