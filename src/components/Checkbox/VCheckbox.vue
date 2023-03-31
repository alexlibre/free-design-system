<template>
  <label
    class="checkbox"
    :class="{ checkbox_disabled: disabled, checkbox_checked: checkboxChecked }"
  >
    <div class="checkbox__inner">
      <input
        class="checkbox__input"
        :checked="checkboxChecked"
        type="checkbox"
        :id="guid"
        @change="onChecked($event.target.checked)"
      />
      <span class="checkbox__box">
        <SvgIcon name="check" :size="[10, 8]" />
      </span>
      <span v-if="label" class="checkbox__label" :for="guid">{{ label }}</span>
    </div>
  </label>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },
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
      checkboxChecked: this.checked,
    };
  },
  computed: {
    guid() {
      return (Math.random() + 1).toString(36).substring(2);
    },
  },
  methods: {
    onChecked(val) {
      this.checkboxChecked = val;
      this.$emit("checked", val);
    },
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

  &__inner {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  &__label {
    color: var(--color-gray-4);
  }

  &__input {
    display: none;

    &:checked + #{$c} {
      &__box {
        background: var(--color-blue-5);

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
    box-shadow: inset 0 0 0 2px var(--color-blue-5);
    width: 18px;
    height: 18px;
    position: relative;
    z-index: 1;
    border-radius: 4px;

    & svg {
      opacity: 0;
      transform: rotate(270deg);
      transition: opacity 0.2s linear, transform 0.2s linear;
    }
  }
}
</style>
