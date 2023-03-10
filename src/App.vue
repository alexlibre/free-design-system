<template>
  <div id="app">
    <header class="header">
      <nav class="header__nav">
        <router-link class="header__link" exact to="/">Home</router-link>
        <router-link class="header__link" to="/components"
          >Components</router-link
        >
        <v-button
          icon="mask"
          view="text"
          :onClick="switchTheme"
          style="margin-left: auto"
        />
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import VButton from "@/components/Button/VButton.vue";

export default {
  components: { VButton },
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
  padding: 30px;
  flex-shrink: 0;

  &__nav {
    display: flex;
    gap: 16px;
  }

  &__link {
    color: var(--color-gray-6);
    text-decoration: none;

    &.router-link-exact-active,
    &.router-link-active {
      color: var(--color-orange-6);
    }
  }
}
</style>
