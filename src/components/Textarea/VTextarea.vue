<template>
  <div
    class="textarea"
    :class="{
      textarea_focus: hasFocus,
      textarea_error: hasError,
      textarea_fixed: isFixed,
    }"
  >
    <div class="textarea__inner">
      <label class="textarea__label" :for="guid">{{ label }}</label>
      <div class="textarea__box">
        <div class="textarea__controls" v-if="controls.length">
          <template v-for="(control, idx) in controls">
            <template v-if="control.name === 'divider'">
              <span
                class="textarea__control textarea__control_divider"
                :key="idx"
              >
                <SvgIcon name="divider" :size="[16]" />
              </span>
            </template>
            <template v-else>
              <v-button
                view="text"
                size="s"
                color="gray"
                :icon="control.name"
                :on-click="control.cb"
                :key="idx"
              />
            </template>
          </template>
        </div>
        <textarea
          :id="guid"
          :placeholder="placeholder"
          :value="text"
          :rows="rows"
          @input="updateValue"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
      <div class="textarea__footer">
        <p class="textarea__helper" v-if="helper">{{ helper }}</p>
        <p class="textarea__limit" v-if="limit">
          {{ limitRest }} / {{ limit }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
import VButton from "@/components/Button/VButton.vue";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    helper: {
      type: String,
      default: "",
    },
    limit: {
      type: Number,
      default: 0,
    },
    rows: {
      type: Number,
      default: 6,
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
  },
  components: {
    SvgIcon,
    VButton,
  },
  data() {
    return {
      text: "",
      hasFocus: false,
    };
  },
  computed: {
    guid() {
      return (Math.random() + 1).toString(36).substring(2);
    },
    limitRest() {
      return this.text.length;
    },
  },
  methods: {
    updateValue(event) {
      const value = event.target.value;
      if (!this.limit || String(value).length <= this.limit) {
        this.text = value;
      }
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

<style lang="scss">
.textarea {
  $c: &;

  width: 100%;

  &_focus {
    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-orange-3) !important;
      }

      &__control {
        color: var(--color-orange-10) !important;
      }

      & textarea {
        color: var(--color-orange-10) !important;
      }
    }
  }

  &_error {
    #{$c} {
      &__footer {
        color: var(--color-red-6);
      }
    }
  }

  &_fixed {
    #{$c} {
      &__box {
        & textarea {
          resize: none !important;
        }
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__label {
    margin: 0 0 8px;
    align-self: start;
    flex-shrink: 0;
    cursor: pointer;
  }

  &__box {
    padding: 14px;
    box-shadow: inset 0 0 0 1px var(--color-gray--1);
    border-radius: 8px;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
    transition: box-shadow 0.2s linear;

    &:hover {
      box-shadow: inset 0 0 0 1px var(--color-orange-1-5),
        0px 4px 8px rgba(203, 87, 22, 0.08);

      #{$c} {
        &__control {
          color: var(--color-gray-0);
        }

        & textarea {
          &::placeholder {
            color: var(--color-gray-1);
          }
        }
      }
    }

    & textarea {
      min-width: 280px;
      width: 100%;
      border: 0;
      width: 100%;
      height: 100%;
      font-size: 14px;
      line-height: 1;
      font-family: inherit;
      transition: color 0.2s linear;
      resize: vertical;
      flex-grow: 1;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: var(--color-gray-1);
      }
    }
  }

  &__controls {
    display: flex;
    gap: 10px;
  }

  &__control {
    background: none;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-gray--1);
    transition: color 0.2s linear;

    &_divider {
      opacity: 0.33;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: var(--color-gray-1);
    transition: color 0.2s linear;
    flex-shrink: 0;
  }

  &__helper {
    padding: 8px 0 0;
  }

  &__limit {
    margin-left: auto;
    padding: 8px 0 0;
  }
}
</style>
