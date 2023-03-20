<template>
  <div class="content">
    <Transition appear name="slide-fade" mode="out-in">
      <h1 :key="currentRouteName" class="content__header">
        {{ currentRouteName }}
      </h1>
    </Transition>
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
          <!-- <v-menu-item class="content__nav-link" url="/components"
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
          <v-menu-item class="content__nav-link" url="/components/modal"
            >Modal</v-menu-item
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
    align-self: flex-start;
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
    padding: 24px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
    min-height: 100%;
    // background: #fefefe;
    background-color: #f9f9f9;
    background-image: url(data:image/svg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMTUgMjMgNDIgLyAwLjA0KSI+ICA8cGF0aCBkPSJNMCAuNWgzMS41VjMyIi8+PC9zdmc+);
    background-position: bottom left;
    background-repeat: repeat;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s linear;
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
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
