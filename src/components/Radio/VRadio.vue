<template>
  <label
    :for="guid"
    class="radio"
    :class="{ radio_disabled: disabled, radio_checked: radioChecked }"
  >
    <div class="radio__inner">
      <input
        class="radio__input"
        :checked="radioChecked"
        type="radio"
        :id="guid"
        :name="name"
        :value="value"
        @change="onChecked($event.target.checked)"
      />
      <span class="radio__box">
        <span class="radio__control"></span>
      </span>
      <span v-if="label" class="radio__label">{{ label }}</span>
    </div>
  </label>
</template>

<script>
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
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      radioChecked: this.checked,
    };
  },
  computed: {
    guid() {
      return (Math.random() + 1).toString(36).substring(2);
    },
  },
  methods: {
    onChecked(val) {
      this.radioChecked = val;
      this.$emit("checkedRadio", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
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

  &:not(&_diabled) {
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

        #{$c} {
          &__control {
            opacity: 1;
          }
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
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  &__control {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-white);
    opacity: 0;
    transition: opacity 0.2s linear, transform 0.2s linear;
  }
}
</style>
