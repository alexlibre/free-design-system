<template>
  <label
    :for="guid"
    class="switch"
    :class="{ switch_disabled: disabled, switch_checked: switchChecked }"
  >
    <div class="switch__inner">
      <input
        class="switch__input"
        :checked="switchChecked"
        type="checkbox"
        :id="guid"
        @change.prevent="onChecked($event.target.checked)"
      />
      <span class="switch__box">
        <span class="switch__control" ref="control"></span>
      </span>
      <span v-if="label" class="switch__label">{{ label }}</span>
    </div>
  </label>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
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
  data() {
    return {
      switchChecked: this.checked,
    };
  },
  computed: {
    guid() {
      return (Math.random() + 1).toString(36).substring(2);
    },
  },
  methods: {
    onChecked(val) {
      this.switchChecked = val;
      this.$emit("checked", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  $c: &;

  &_disabled {
    pointer-events: none;

    #{$c} {
      &__box {
        background: var(--color-gray-0) !important;
        box-shadow: 0 0 0 2px var(--color-gray-0) !important;
      }

      &__label {
        color: var(--color-gray-0) !important;
      }
    }
  }

  &:not(&_disabled) {
    cursor: pointer;
  }

  &_checked {
    #{$c} {
      &__box {
        background: var(--color-blue-5);
      }

      &__control {
        transform: translateX(100%);
      }
    }
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
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 2px var(--color-blue-5);
    background: var(--color-gray-0);
    width: 36px;
    height: 20px;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    position: relative;
    transition: background 0.2s linear;
  }

  &__control {
    position: absolute;
    top: 2px;
    left: 2px;
    display: block;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--color-white);
    transform: translate(0);
    transition: transform 0.2s linear;
  }
}
</style>
