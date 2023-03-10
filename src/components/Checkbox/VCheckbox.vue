<template>
  <label :for="id" class="checkbox" :class="{ checkbox_disabled: disabled }">
    <div class="checkbox__inner">
      <input
        class="checkbox__input"
        :checked="checked ? true : false"
        type="checkbox"
        :id="id"
      />
      <span class="checkbox__box">
        <SvgIcon name="check" :size="[10, 8]" />
      </span>
      <span v-if="label" class="checkbox__label">{{ label }}</span>
    </div>
  </label>
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
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SvgIcon,
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  $c: &;

  &_disabled {
    pointer-events: none;

    #{$c} {
      &__box {
        background: var(--color-gray--1) !important;
        box-shadow: 0 0 0 2px var(--color-gray--1) !important;
      }

      &__label {
        color: var(--color-gray-0) !important;
      }
    }
  }

  &:not(&_diabled) {
    cursor: pointer;
  }

  &__inner {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  &__label {
    color: var(--color-gray-4);
  }

  &__input {
    display: none;

    &:checked + #{$c} {
      &__box {
        background: var(--color-orange-5);

        & svg {
          opacity: 1;
          transform: rotate(0);
        }
      }
    }
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 2px var(--color-orange-5);
    width: 18px;
    height: 18px;
    position: relative;
    z-index: 1;
    border-radius: 4px;

    & svg {
      opacity: 0;
      transform: rotate(270deg);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
  }
}
</style>
