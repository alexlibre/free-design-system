<template>
  <div class="content">
    <h1 class="content__header">{{ currentRouteName }}</h1>
    <hr />
    <div class="content__inner">
      <div class="content__aside">
        <nav class="content__nav">
          <span class="content__nav-title">Foundations</span>
          <v-menu-item class="content__nav-link" url="/components/grids"
            >Grid</v-menu-item
          >
          <!-- <v-menu-item class="content__nav-link" url="/components"
            >Icons</v-menu-item
          > -->
          <v-menu-item class="content__nav-link" url="/components/colors"
            >Colors</v-menu-item
          >
          <!-- <v-menu-item class="content__nav-link" url="/components"
            >Typography</v-menu-item
          > -->
          <hr class="content__nav-divider" />
          <span class="content__nav-title">Atoms</span>
          <v-menu-item class="content__nav-link" url="/components/buttons"
            >Button</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/checkbox"
            >Checkbox</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/tags"
            >Tag</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/inputs"
            >Input</v-menu-item
          >
          <!-- <v-menu-item class="content__nav-link" url="/components"
            >Switch</v-menu-item
          > -->
          <!-- <v-menu-item class="content__nav-link" url="/components"
            >Rating</v-menu-item
          > -->
          <v-menu-item class="content__nav-link" url="/components/textarea"
            >Textarea</v-menu-item
          >
          <!-- <v-menu-item class="content__nav-link" url="/components"
            >Dropdown</v-menu-item
          > -->
          <hr class="content__nav-divider" />
          <span class="content__nav-title">Molecules</span>
          <!-- <v-menu-item class="content__nav-link" url="/components"
            >Navigation bar</v-menu-item
          > -->
          <v-menu-item class="content__nav-link" url="/components/card"
            >Card</v-menu-item
          >
          <hr class="content__nav-divider" />
          <span class="content__nav-title">Organisms</span>
          <!-- <v-menu-item class="content__nav-link" url="/components"
            >Hero</v-menu-item
          > -->
          <!-- <v-menu-item class="content__nav-link" url="/components"
            >Footer</v-menu-item
          > -->
        </nav>
      </div>

      <div class="content__wrapper">
        <router-view class="content__view">
          <p>Components page</p>
        </router-view>
        <div class="content__view" v-if="isRoot">
          <p>In progress</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VMenuItem from "@/components/Menu/VMenuItem.vue";

export default {
  components: {
    VMenuItem,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    isRoot() {
      return this.$route.name === "Components";
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 30px;

  &__aside {
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 16px;
    max-height: 100%;
    flex-shrink: 0;
  }

  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    height: calc(100% - 48px);
  }

  &__header {
    margin-bottom: 24px;
    color: var(--color-main-colors-gray-4);
  }

  &__nav {
    width: 190px;
    display: flex;
    flex-direction: column;
    padding: 24px 0;

    &-title {
      font-size: 14px;
      padding: 16px;
      font-weight: 300;
      color: var(--color-main-colors-gray-0);
    }

    &-divider {
      margin: 1rem 0;
    }
  }

  &__wrapper {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
    max-height: 100%;
    min-height: 100%;
    background: #fefefe;
  }
}
</style>
