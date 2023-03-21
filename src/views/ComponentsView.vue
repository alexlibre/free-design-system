<template>
  <div class="content">
    <div class="content__head">
      <v-button
        class="content__menu-btn"
        @click="toggleAside"
        :icon="menuOpened ? 'menu-close' : 'menu'"
      />

      <Transition appear name="slide-fade" mode="out-in">
        <h1 :key="currentRouteName" class="content__header">
          {{ currentRouteName }}
        </h1>
      </Transition>
    </div>
    <hr />
    <div class="content__inner">
      <div class="content__aside" ref="aside">
        <nav class="content__nav">
          <span class="content__nav-title">Foundations</span>
          <v-menu-item class="content__nav-link" url="/components/grids"
            >Grid</v-menu-item
          >
          <!-- <v-menu-item  class="content__nav-link" url="/components"
            >Icons</v-menu-item
          > -->
          <v-menu-item class="content__nav-link" url="/components/colors"
            >Colors</v-menu-item
          >
          <!-- <v-menu-item  class="content__nav-link" url="/components"
            >Typography</v-menu-item
          > -->
          <hr class="content__nav-divider" />
          <span class="content__nav-title">Atoms</span>
          <v-menu-item class="content__nav-link" url="/components/buttons"
            >Button</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/button-group"
            >Button group</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/checkbox"
            >Checkbox</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/input"
            >Input</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/logo"
            >Logo</v-menu-item
          >
          <!-- <v-menu-item  class="content__nav-link" url="/components"
            >Switch</v-menu-item
          > -->
          <v-menu-item class="content__nav-link" url="/components/rating"
            >Rating</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/tags"
            >Tag</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/textarea"
            >Textarea</v-menu-item
          >
          <!-- <v-menu-item  class="content__nav-link" url="/components"
            >Dropdown</v-menu-item
          > -->
          <hr class="content__nav-divider" />
          <span class="content__nav-title">Molecules</span>
          <!-- <v-menu-item  class="content__nav-link" url="/components"
            >Navigation bar</v-menu-item
          > -->
          <v-menu-item class="content__nav-link" url="/components/card"
            >Card</v-menu-item
          >
          <v-menu-item class="content__nav-link" url="/components/modal"
            >Modal</v-menu-item
          >
          <hr class="content__nav-divider" />
          <span class="content__nav-title">Organisms</span>
          <!-- <v-menu-item  class="content__nav-link" url="/components"
            >Hero</v-menu-item
          > -->
          <!-- <v-menu-item  class="content__nav-link" url="/components"
            >Footer</v-menu-item
          > -->
        </nav>
      </div>

      <div class="content__wrapper">
        <transition mode="out-in" appear>
          <router-view class="content__view">
            <p>Components page</p>
          </router-view>
        </transition>
        <div class="content__view" v-if="isRoot">
          <p>In progress</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VMenuItem from "@/components/Menu/VMenuItem.vue";
import VButton from "@/components/Button/VButton.vue";

import { gsap } from "gsap";

export default {
  components: {
    VMenuItem,
    VButton,
  },
  data() {
    return {
      menuOpened: false,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    isRoot() {
      return this.$route.name === "Components";
    },
  },
  watch: {
    $route(to, from) {
      this.closeAside();
    },
  },
  methods: {
    toggleAside() {
      if (!this.menuOpened) {
        this.menuOpened = true;
        gsap.to(this.$refs.aside, {
          x: "0",
        });
        return;
      }

      this.closeAside();
    },
    closeAside() {
      this.menuOpened = false;
      gsap.to(this.$refs.aside, {
        x: "-120%",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.content {
  padding: 16px;

  @include lg-block {
    padding: 30px;
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    justify-content: space-between;
  }

  &__aside {
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 16px;
    max-height: 100%;
    flex-shrink: 0;
    background: var(--color-white);
    position: absolute;
    z-index: 1000;
    transform: translateX(-120%);
    top: 0;
    bottom: 0;

    @include lg-block {
      position: static;
      transform: translateX(0) !important;
    }
  }

  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    height: calc(100% - 48px);
    position: relative;
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
      color: var(--color-gray-5);
    }

    &-divider {
      margin: 1rem 0;
    }
  }

  &__wrapper {
    flex: 1;
    padding: 16px;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100%;
    min-height: 100%;
    // background: #fefefe;
    background-color: #f9f9f9;
    background-image: url(data:image/svg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMTUgMjMgNDIgLyAwLjA0KSI+ICA8cGF0aCBkPSJNMCAuNWgzMS41VjMyIi8+PC9zdmc+);
    background-position: bottom left;
    background-repeat: repeat;

    @include lg-block {
      padding: 24px;
    }
  }
  &__menu-btn {
    @include lg-block {
      display: none;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}
.v-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s linear;
}
.slide-fade-enter {
  transform: translateX(50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
