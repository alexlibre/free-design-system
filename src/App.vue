<template>
  <div id="app">
    <header class="header">
      <nav class="header__nav">
        <router-link class="header__link" exact to="/">Home</router-link>
        <router-link class="header__link" to="/components"
          >Components</router-link
        >
        <!-- <v-button
          icon="mask"
          view="text"
          :onClick="switchTheme"
          style="margin-left: auto"
        /> -->
      </nav>
    </header>
    <transition appear name="nested" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
    };
  },
  methods: {
    switchTheme() {
      this.darkTheme = !this.darkTheme;
    },
  },
  watch: {
    darkTheme: function (val) {
      document.body.style = `color-scheme: ${val ? "light" : "dark"}`;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.header {
  padding: 16px;
  flex-shrink: 0;

  @include lg-block {
    padding: 30px;
  }

  &__nav {
    display: flex;
    gap: 16px;
  }

  &__link {
    color: var(--color-gray-6);
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    &.router-link-exact-active,
    &.router-link-active {
      color: var(--color-blue-6);
    }
  }
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.5s linear;
}
.nested-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.nested-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
