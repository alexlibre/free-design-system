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
      button_color_red: color === 'red',
      button_color_orange: color === 'orange',
      button_color_yellow: color === 'yellow',
      button_color_green: color === 'green',
      button_color_blue: color === 'blue',
      button_color_gray: color === 'gray',
      button_icon: noText,
      button_size_s: size === 's',
      button_size_m: size === 'm',
      button_size_l: size === 'l',
      button_is_active: active,
      button_empty: empty,
      button_condensed: condensed,
    }"
    v-ripple
  >
    <span v-if="!noText" class="button__text">
      <slot></slot>
    </span>
    <svg-icon class="button__icon" v-if="icon" :name="icon" :size="iconSize" />
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
    condensed: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "blue",
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
@import "@/assets/styles/mixins";
$colors: "orange", "red", "yellow", "green", "blue", "violet", "gray";

.button {
  $c: &;
  border: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 1;
  font-family: "Gotham Pro";
  font-weight: 400;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: 2px solid var(--color-orange-0-5);
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &_icon {
    padding: 8px;
  }

  &_color {
    @include repeatColorBlock($colors) {
      &_#{$color} {
        &#{$c} {
          &::selection {
            background-color: #{$color} !important;
          }
          &:focus {
            outline: 2px solid var(--color-#{$color}-0-5);
          }

          &_view {
            &_primary {
              background: var(--color-#{$color}-5);
              border-radius: 4px;
              color: var(--color-white);

              &:hover {
                background: var(--color-#{$color}-4);
              }
            }

            &_secondary {
              background: var(--color-#{$color}-1);
              border-radius: 4px;
              color: var(--color-#{$color}-6);

              &:hover {
                background: var(--color-#{$color}-1-5);
              }
            }

            &_outline {
              background: var(--color-#{$color}-1);
              border-radius: 4px;
              box-shadow: inset 0 0 0 1px var(--color-#{$color}-6);
              color: var(--color-#{$color}-6);

              &:hover {
                background: var(--color-#{$color}-1-5);
              }
            }

            &_text {
              background: transparent;
              color: var(--color-#{$color}-6);
            }

            &_rounded {
              background: var(--color-#{$color}-5);
              border-radius: 30px;
              color: var(--color-white);

              &:hover {
                background: var(--color-#{$color}-4);
              }
            }

            &_square {
              background: var(--color-#{$color}-5);
              color: var(--color-white);

              &:hover {
                background: var(--color-#{$color}-4);
              }
            }
          }
        }
      }
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    #{$c} {
      &__inner {
        pointer-events: none;
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

      & .icon {
        width: 18px;
        height: 18px;
      }
    }

    &_m {
      font-size: 16px;
      gap: 8px;
      padding: 10px 24px;

      &#{$c}_icon {
        padding: 10px;
      }

      & .icon {
        width: 20px;
        height: 20px;
      }
    }

    &_l {
      font-size: 20px;
      gap: 8px;
      padding: 14px 32px;

      &#{$c}_icon {
        padding: 14px;
      }

      & .icon {
        width: 24px;
        height: 24px;
      }
    }
  }

  &_empty {
    padding: 0 !important;
  }

  &_condensed {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  &__text {
    margin: 0 auto;
    padding: 2px 0;
    pointer-events: none;
  }

  &__icon {
    pointer-events: none;
  }
}
</style>
