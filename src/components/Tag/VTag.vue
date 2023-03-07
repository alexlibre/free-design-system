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

export default {
  props: {
    type: {
      type: String,
      default: "primary",
    },
    hasClose: {
      type: Boolean,
      default: true,
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
  },
  components: { SvgIcon },
  methods: {
    close() {
      this.$destroy();

      if (this.$el !== null && this.$el.parentNode !== null) {
        this.$el.parentNode.removeChild(this.$el);
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
      background: var(--color-main-colors-orange-1);
      color: var(--color-main-colors-orange-6);
    }

    &_disabled {
      background: var(--color-main-colors-gray--1);
      color: var(--color-main-colors-gray-3);
      pointer-events: none;

      #{$c}__close {
        color: var(--color-main-colors-gray-0);
      }
    }

    &_danger {
      background: var(--color-complementary-colors-red-0-5);
      color: var(--color-complementary-colors-red-8);
    }

    &_info {
      background: var(--color-complementary-colors-blue-0-5);
      color: var(--color-complementary-colors-blue-8);
    }

    &_success {
      background: var(--color-complementary-colors-green-0-5);
      color: var(--color-complementary-colors-green-9-5);
    }

    &_warning {
      background: var(--color-complementary-colors-yellow-0-5);
      color: var(--color-complementary-colors-yellow-7);
    }
  }

  &_has {
    &_close {
      padding: 3px 8px 3px 6px;
    }
    &_border {
      &#{$c}_type {
        &_primary {
          box-shadow: inset 0 0 0 1px var(--color-main-colors-orange-3);
        }

        &_disabled {
          box-shadow: inset 0 0 0 1px var(--color-main-colors-gray-0);
        }

        &_danger {
          box-shadow: inset 0 0 0 1px var(--color-complementary-colors-red-6);
        }

        &_info {
          box-shadow: inset 0 0 0 1px var(--color-complementary-colors-blue-4);
        }

        &_success {
          box-shadow: inset 0 0 0 1px var(--color-complementary-colors-green-6);
        }

        &_warning {
          box-shadow: inset 0 0 0 1px var(--color-complementary-colors-yellow-5);
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

    & svg path {
      fill: currentColor;
    }
  }
}
</style>
