<template>
  <div
    class="tag"
    :class="{
      tag_has_close: hasClose,
      tag_has_border: hasBorder,
      tag_type_primary: type === 'primary',
      tag_type_danger: type === 'danger',
      tag_type_info: type === 'info',
      tag_type_success: type === 'success',
      tag_type_warning: type === 'warning',
      tag_type_disabled: type === 'disabled',
    }"
  >
    <button class="tag__close" @click="close" v-if="hasClose">
      <SvgIcon name="close-circle" :size="[18]" />
    </button>
    <slot></slot>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

import { gsap } from "gsap";

export default {
  props: {
    type: {
      type: String,
      default: "primary",
    },
    hasClose: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
  },
  components: { SvgIcon },
  methods: {
    close() {
      this.$destroy();

      if (this.$el !== null && this.$el.parentNode !== null) {
        gsap.to(this.$el, {
          scale: 0,
          y: -120,
          x: 320,
          rotation: "720deg",
          duration: 0.5,
          onComplete: () => {
            this.$el.parentNode.removeChild(this.$el);
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  $c: &;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 8px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1;

  &_type {
    &_primary {
      background: var(--color-orange-1);
      color: var(--color-orange-6);
    }

    &_disabled {
      background: var(--color-gray--1);
      color: var(--color-gray-3);
      pointer-events: none;

      #{$c}__close {
        color: var(--color-gray-0);
      }
    }

    &_danger {
      background: var(--color-red-0-5);
      color: var(--color-red-6);
    }

    &_info {
      background: var(--color-blue-0-5);
      color: var(--color-blue-6);
    }

    &_success {
      background: var(--color-green-0-5);
      color: var(--color-green-9-5);
    }

    &_warning {
      background: var(--color-yellow-0-5);
      color: var(--color-yellow-7);
    }
  }

  &_has {
    &_close {
      padding: 3px 8px 3px 6px;
    }
    &_border {
      &#{$c}_type {
        &_primary {
          box-shadow: inset 0 0 0 1px var(--color-orange-3);
        }

        &_disabled {
          box-shadow: inset 0 0 0 1px var(--color-gray-0);
        }

        &_danger {
          box-shadow: inset 0 0 0 1px var(--color-red-6);
        }

        &_info {
          box-shadow: inset 0 0 0 1px var(--color-blue-4);
        }

        &_success {
          box-shadow: inset 0 0 0 1px var(--color-green-6);
        }

        &_warning {
          box-shadow: inset 0 0 0 1px var(--color-yellow-5);
        }
      }
    }
  }

  &__close {
    display: flex;
    align-items: center;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    & svg path {
      fill: currentColor;
    }
  }
}
</style>
