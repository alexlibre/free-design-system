<template>
  <div
    class="input"
    :class="{
      input_disabled: disabled,
      input_focus: hasFocus,
      input_success: state === 'success',
      input_error: state === 'error',
    }"
  >
    <div class="input__inner">
      <div class="input__head" v-if="label || labelSecond">
        <label :for="id" class="input__label" v-if="label">{{ label }}</label>
        <span class="input__label-second" v-if="labelSecond">{{
          labelSecond
        }}</span>
      </div>
      <div class="input__box">
        <input
          class="input__input"
          :id="id"
          :type="type"
          :placeholder="placeholder"
          @input="updateValue"
          @focus="onFocus"
          @blur="onBlur"
        />
        <svg-icon v-if="icon" class="input__icon" :name="icon" :size="[16]" />
      </div>
      <span class="input__helper" v-if="helper">{{ helper }}</span>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    labelSecond: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    helper: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "default",
    },
    type: {
      type: String,
      default: "text",
    },
    controls: {
      type: Array,
      default: () => [],
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    isFixed: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  components: {
    SvgIcon,
  },
  data() {
    return {
      text: "",
      hasFocus: false,
    };
  },
  methods: {
    updateValue(event) {
      const value = event.target.value;

      this.text = value;
      this.$forceUpdate();
    },
    onFocus() {
      this.hasFocus = true;
    },
    onBlur() {
      this.hasFocus = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.input {
  $c: &;

  width: 100%;

  &_focus {
    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-main-colors-orange-3) !important;
      }
    }
  }

  &_disabled {
    pointer-events: none;
    opacity: 0.33;

    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-main-colors-gray-0) !important;
        background: var(--color-main-colors-gray--1);
        color: var(--color-main-colors-gray-0) !important;
      }

      & input {
        color: var(--color-main-colors-gray-0) !important;
      }
    }
  }

  &_success {
    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-complementary-colors-green-7);
        color: var(--color-complementary-colors-green-7);

        &:hover {
          box-shadow: inset 0 0 0 1px var(--color-complementary-colors-green-7),
            0px 4px 8px rgba(34, 203, 22, 0.08);
        }
      }

      & input {
        color: var(--color-main-colors-gray-10) !important;
      }

      &__helper {
        color: var(--color-complementary-colors-green-7);
      }
    }

    &#{$c}_focus {
      #{$c} {
        &__box {
          box-shadow: inset 0 0 0 1px var(--color-complementary-colors-green-5) !important;
        }
      }
    }
  }

  &_error {
    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-complementary-colors-red-6);
        color: var(--color-complementary-colors-red-6);

        &:hover {
          box-shadow: inset 0 0 0 1px var(--color-complementary-colors-red-6),
            0px 4px 8px rgba(203, 22, 22, 0.08);
        }
      }

      & input {
        color: var(--color-main-colors-gray-10) !important;
      }

      &__helper {
        color: var(--color-complementary-colors-red-6);
      }
    }

    &#{$c}_focus {
      #{$c} {
        &__box {
          box-shadow: inset 0 0 0 1px var(--color-complementary-colors-red-3) !important;
        }
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__head {
    margin: 0 0 8px;
    flex-shrink: 0;
    display: flex;
    align-items: flex-end;
    height: 16px;
  }

  &__label {
    @include p1();
    line-height: 1;
    color: var(--color-main-colors-gray-4);
  }

  &__label-second {
    @include p2();
    line-height: 1;
    margin-left: auto;
    color: var(--color-main-colors-gray-0);
  }

  &__box {
    padding: 14px;
    box-shadow: inset 0 0 0 1px var(--color-main-colors-gray--1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: box-shadow 0.2s ease;
    color: var(--color-main-colors-gray-0);
    background: var(--color-white);

    &:hover {
      box-shadow: inset 0 0 0 1px var(--color-main-colors-orange-1-5),
        0px 4px 8px rgba(203, 87, 22, 0.08);

      #{$c} {
        & input {
          color: var(--color-main-colors-gray-7);
        }
      }
    }

    & input {
      font-size: 14px;
      line-height: 16px;
      font-family: inherit;
      border: 0;
      background: none;
      color: var(--color-main-colors-gray-2);
      width: 100%;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: var(--color-main-colors-gray--1);
      }
    }
  }

  &__icon {
    flex-shrink: 0;
  }

  &__helper {
    @include caption();
    margin: 8px 0 0;
    color: var(--color-main-colors-gray-0);
  }
}
</style>
