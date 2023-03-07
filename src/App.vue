<template>
  <div id="app">
    <header class="header">
      <nav class="header__nav">
        <router-link class="header__link" exact to="/">Home</router-link>
        <router-link class="header__link" to="/components"
          >Components</router-link
        >
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";

.header {
  padding: 30px;
  flex-shrink: 0;

  &__nav {
    display: flex;
    gap: 16px;
  }

  &__link {
    color: var(--color-main-colors-gray-6);
    text-decoration: none;

    &.router-link-exact-active,
    &.router-link-active {
      color: var(--color-main-colors-orange-6);
    }
  }
}
</style>
