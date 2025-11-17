<template>
  <div
    class="input"
    :class="{
      input_disabled: disabled,
      input_focus: hasFocus,
      input_compact: compact,
      input_success: dataState === 'success',
      input_error: dataState === 'error' || dataError,
    }"
  >
    <div class="input__inner">
      <div class="input__head" v-if="label || labelSecond">
        <label :for="guid" class="input__label" v-if="label">{{ label }}</label>
        <span class="input__label-second" v-if="labelSecond">{{
          labelSecond
        }}</span>
      </div>
      <div class="input__box">
        <input
          class="input__input"
          :id="guid"
          :type="inputType"
          :placeholder="placeholder"
          :value="text"
          @input="updateValue"
          @focus="onFocus"
          @blur="onBlur"
          @keydown="keydown"
        />
        <template v-if="type === 'password'">
          <v-button
            @click.stop="switchPasswordVisibility"
            :color="currentColor"
            view="text"
            empty
            class="input__icon-btn"
          >
            <svg-icon class="input__icon" :name="currentIcon" :size="[16]" />
          </v-button>
        </template>
        <template v-else>
          <svg-icon v-if="icon" class="input__icon" :name="icon" :size="[16]" />
        </template>
      </div>
      <span class="input__helper" v-if="dataHelper">{{ dataHelper }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import VButton from "@/components/Button/VButton.vue";

interface Props {
  label?: string;
  labelSecond?: string;
  placeholder?: string;
  disabled?: boolean;
  helper?: string;
  state?: "default" | "success" | "error";
  type?: string;
  controls?: unknown[];
  hasError?: boolean;
  isFixed?: boolean;
  compact?: boolean;
  icon?: string;
  initial?: string;
  restrict?: string;
  modelValue?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  labelSecond: "",
  placeholder: "",
  disabled: false,
  helper: "",
  state: "default",
  type: "text",
  controls: () => [],
  hasError: false,
  isFixed: false,
  compact: false,
  icon: "",
  initial: "",
  restrict: "",
  modelValue: undefined,
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  hasFocus: [];
  hasBlur: [];
  keydown: [event: KeyboardEvent];
}>();

// Используем modelValue если передан, иначе initial
const text = computed({
  get: () => {
    if (props.modelValue !== undefined) {
      return props.type === "number" ? String(props.modelValue) : String(props.modelValue);
    }
    return props.initial;
  },
  set: (value: string) => {
    if (props.modelValue !== undefined) {
      const emitValue = props.type === "number" ? Number(value) || 0 : value;
      emit("update:modelValue", emitValue);
    }
  },
});
const inputType = ref(props.type);
const hasFocus = ref(false);
const showPassword = ref(false);
const currentIcon = ref(props.icon || "eye");
const dataState = ref(props.state);
const dataError = ref(props.hasError);
const dataHelper = ref(props.helper);
const dataHelperTemp = ref(props.helper);

watch(showPassword, () => {
  inputType.value = showPassword.value ? "text" : "password";
  currentIcon.value = showPassword.value ? "eye-slash" : "eye";
});


const guid = computed(() => {
  return (Math.random() + 1).toString(36).substring(2);
});

const currentColor = computed(() => {
  switch (props.state) {
    case "success":
      return "green";
    case "error":
      return "red";
    default:
      return "blue";
  }
});

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  text.value = target.value;
};

const onFocus = () => {
  hasFocus.value = true;
  emit("hasFocus");
};

const onBlur = () => {
  hasFocus.value = false;
  emit("hasBlur");
};

const switchPasswordVisibility = () => {
  if (props.type !== "password") return;
  showPassword.value = !showPassword.value;
};

const keydown = ($event: KeyboardEvent) => {
  emit("keydown", $event);

  if (props.restrict === "") return;

  const baseKeys = new Set([
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Backspace",
    "Enter",
    "Escape",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Control",
    "Home",
    "End",
    "PageUp",
    "PageDown",
  ]);

  const int = new Set([
    ...baseKeys,
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

  const float = new Set([...int, "."]);

  if (props.restrict === "int") {
    if (!int.has($event.key) && $event.ctrlKey === false) {
      $event.preventDefault();
      dataError.value = true;
      dataHelper.value = "Restricted input";
    } else {
      dataError.value = false;
      dataHelper.value = dataHelperTemp.value;
    }
  }

  if (props.restrict === "float") {
    if (!float.has($event.key) && $event.ctrlKey === false) {
      $event.preventDefault();
      dataError.value = true;
      dataHelper.value = "Restricted input";
    } else {
      dataError.value = false;
      dataHelper.value = dataHelperTemp.value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.input {
  $c: &;

  width: 100%;

  &_compact {
    max-width: 308px;
  }

  &_focus {
    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-blue-3) !important;
      }
    }
  }

  &_disabled {
    opacity: 0.66;
    cursor: not-allowed;

    #{$c} {
      &__inner {
        pointer-events: none;
      }
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-gray-0) !important;
        background: var(--color-gray-0);
        color: var(--color-gray-0) !important;
      }

      & input {
        color: var(--color-gray-1) !important;
      }
    }
  }

  &_success {
    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-green-7);
        color: var(--color-green-7);

        &:hover {
          box-shadow: inset 0 0 0 1px var(--color-green-7),
            0px 4px 8px rgba(34, 203, 22, 0.16);
        }
      }

      & input {
        color: var(--color-gray-4) !important;
      }

      &__helper {
        color: var(--color-green-7);
      }
    }

    &#{$c}_focus {
      #{$c} {
        &__box {
          box-shadow: inset 0 0 0 1px var(--color-green-5) !important;
        }
      }
    }
  }

  &_error {
    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-red-6);
        color: var(--color-red-6);

        &:hover {
          box-shadow: inset 0 0 0 1px var(--color-red-6),
            0px 4px 8px rgba(203, 22, 22, 0.16);
        }
      }

      & input {
        color: var(--color-gray-4) !important;
      }

      &__helper {
        color: var(--color-red-6);
      }
    }

    &#{$c}_focus {
      #{$c} {
        &__box {
          box-shadow: inset 0 0 0 1px var(--color-red-3) !important;
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

    @include mobile-remove {
      flex-direction: column;
      align-items: stretch;
      height: auto;
    }
  }

  &__label {
    @include p1();
    line-height: 1;
    cursor: pointer;
    align-self: flex-start;
  }

  &__label-second {
    @include p2();
    line-height: 1;
    margin-left: auto;
    color: var(--color-gray-0);

    @include mobile-remove {
      margin: 4px 0 0 0;
    }
  }

  &__box {
    padding: 10px 14px;
    box-shadow: inset 0 0 0 1px var(--color-gray--1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: box-shadow 0.2s linear;
    color: var(--color-gray-2);
    background: var(--color-white);

    &:hover {
      box-shadow: inset 0 0 0 1px var(--color-blue-1-5),
        0px 4px 8px rgba(203, 87, 22, 0.08);

      #{$c} {
        & input {
          color: var(--color-gray-7);
        }
      }
    }

    & input {
      font-size: 14px;
      line-height: 16px;
      font-family: inherit;
      border: 0;
      background: none;
      color: var(--color-gray-8);
      width: 100%;
      margin: 2px 0;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: var(--color-gray-1);
      }
    }
  }

  &__icon-btn {
    width: 20px;
    height: 20px;
    display: block;
    cursor: pointer;
    color: inherit !important;
  }

  &__icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }

  &__helper {
    @include caption();
    margin: 8px 0 0;
    color: var(--color-gray-1);
  }
}
</style>
