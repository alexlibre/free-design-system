<template>
  <button
    @click="onClick"
    class="button"
    :class="{
      button_view_primary: view === 'primary',
      button_view_secondary: view === 'secondary',
      button_view_outline: view === 'outline',
      button_view_text: view === 'text',
      button_view_rounded: view === 'rounded',
      button_view_square: view === 'square',
      button_icon: noText,
      button_size_s: size === 's',
      button_size_m: size === 'm',
      button_size_l: size === 'l',
      button_is_active: active,
      button_empty: empty,
    }"
  >
    <span v-if="!noText" class="button__text">
      <slot></slot>
    </span>
    <svg-icon v-if="icon" :name="icon" :size="iconSize" />
  </button>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";

export default {
  props: {
    size: {
      type: String,
      default: "m",
    },
    view: {
      type: String,
      default: "primary",
    },
    icon: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
    empty: {
      type: Boolean,
      default: false,
    },
  },
  components: { SvgIcon },
  computed: {
    noText() {
      return !this.$slots.default;
    },
    iconSize() {
      switch (this.size) {
        case "s":
          return [14];
        case "l":
          return [20];
        default:
          return [16];
      }
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  $c: &;
  border: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 1;
  font-family: "Gotham Pro";
  font-weight: 400;

  &:focus {
    outline: 2px solid var(--color-orange-0-5);
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &_icon {
    padding: 8px;
  }

  &_view {
    &_primary {
      background: var(--color-orange-5);
      border-radius: 4px;
      color: var(--color-white);

      &:hover {
        background: var(--color-orange-4);
      }

      &:active {
        background: var(--color-orange-7);
      }
    }

    &_secondary {
      background: var(--color-orange-1);
      border-radius: 4px;
      color: var(--color-orange-6);

      &:hover {
        background: var(--color-orange-1-5);
      }

      &:active {
        background: var(--color-orange-1);
        color: var(--color-orange-8-5);
      }
    }

    &_outline {
      background: var(--color-orange-1);
      border-radius: 4px;
      box-shadow: inset 0 0 0 1px var(--color-orange-6);
      color: var(--color-orange-6);

      &:hover {
        background: var(--color-orange-1-5);
      }

      &:active {
        background: var(--color-orange-1);
        box-shadow: inset 0 0 0 1px var(--color-orange-8-5);
        color: var(--color-orange-8-5);
      }
    }

    &_text {
      background: transparent;
      color: var(--color-orange-6);

      &:active {
        color: var(--color-orange-8-5);
      }
    }

    &_rounded {
      background: var(--color-orange-5);
      border-radius: 30px;
      color: var(--color-white);

      &:hover {
        background: var(--color-orange-4);
      }

      &:active {
        background: var(--color-orange-7);
      }
    }

    &_square {
      background: var(--color-orange-5);
      color: var(--color-white);

      &:hover {
        background: var(--color-orange-4);
      }

      &:active {
        background: var(--color-orange-7);
      }
    }
  }
  &_size {
    &_s {
      font-size: 14px;
      gap: 4px;
      padding: 8px 16px;

      &#{$c}_icon {
        padding: 8px;
      }
    }

    &_m {
      font-size: 16px;
      gap: 8px;
      padding: 12px 24px;

      &#{$c}_icon {
        padding: 12px;
      }
    }

    &_l {
      font-size: 20px;
      gap: 8px;
      padding: 16px 32px;

      &#{$c}_icon {
        padding: 8px;
      }
    }
  }

  &_empty {
    padding: 0 !important;
  }

  &__text {
    margin: 0 auto;
  }
}
</style>
