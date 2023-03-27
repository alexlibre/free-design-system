<template>
  <div
    class="select"
    :class="{
      select_compact: compact,
      select_opened: opened,
      select_disabled: disabled,
    }"
    @blur="looseFocus"
    tabindex="0"
  >
    <div class="select__inner">
      <label class="select__label" v-if="label" @click="toggleOptions">{{
        label
      }}</label>
      <div
        class="select__box"
        :class="{ select__box_opened: opened }"
        @click="toggleOptions"
      >
        <div
          class="select__value"
          :class="{ select__value_selected: selected !== placeholder }"
        >
          {{ selected }}
        </div>
        <div class="select__icon" ref="selectArrow">
          <svg-icon name="arrow-down" :size="[20]" />
        </div>
      </div>
      <transition appear>
        <div class="select__options" v-if="opened" ref="selectList">
          <div
            class="select__option"
            v-for="option in options"
            :key="option"
            @click="selectOption(option)"
          >
            {{ option }}
          </div>
        </div>
      </transition>
    </div>
    <select aria-hidden="true" v-model="selected">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";
import { gsap, Elastic, Bounce } from "gsap";

export default {
  components: {
    SvgIcon,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "Select option",
    },
    compact: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: this.placeholder,
      opened: false,
    };
  },
  watch: {
    opened() {
      if (this.opened) {
        this.animateIn();
        return;
      }

      this.animateOut();
    },
  },
  methods: {
    selectOption(val) {
      this.selected = val;
      this.opened = false;
    },
    toggleOptions() {
      this.opened = !this.opened;
    },
    looseFocus() {
      this.opened = false;
    },
    animateIn() {
      gsap.to(this.$refs.selectArrow, 1, {
        rotate: "180deg",
        ease: Elastic.easeOut.config(1, 0.3),
      });

      this.$nextTick(() => {
        gsap.from(this.$refs.selectList, 0.2, {
          opacity: 0,
        });
        gsap.from(this.$refs.selectList, 0.5, {
          y: "-40px",
          ease: Bounce.easeOut,
        });
      });
    },
    animateOut() {
      gsap.killTweensOf(this.$refs.selectArrow);
      gsap.fromTo(
        this.$refs.selectArrow,
        0.2,
        {
          rotate: "180deg",
        },
        {
          rotate: "0",
        }
      );
      gsap.to(this.$refs.selectList, 0.2, {
        opacity: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  $c: &;

  width: 100%;
  font-size: 14px;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  &_disabled {
    pointer-events: none;
    opacity: 0.66;

    #{$c} {
      &__box {
        box-shadow: inset 0 0 0 1px var(--color-gray-0) !important;
        background: var(--color-gray-0);
      }
    }
  }

  &_compact {
    max-width: 308px;
  }

  &_opened {
    z-index: 1;
  }

  &__inner {
    min-width: 170px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &__label {
    align-self: flex-start;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    line-height: 1;
    cursor: pointer;
    margin: 0 0 8px;
    flex-shrink: 0;
    height: 16px;
  }

  &__box {
    padding: 10px 14px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 0 0 1px var(--color-gray--1);
    border-radius: 8px;
    transition: box-shadow 0.2s linear;
    color: var(--color-gray-2);
    background: var(--color-white);
    overflow: hidden;
    cursor: pointer;

    &:hover {
      box-shadow: inset 0 0 0 1px var(--color-blue-1-5),
        0px 4px 8px rgba(22, 109, 203, 0.08);
    }
    &_opened {
      box-shadow: 0px 4px 8px rgba(22, 109, 203, 0.08);
    }
  }

  &__value {
    &_selected {
      color: var(--color-gray-4);
    }
  }

  &__icon {
    flex-shrink: 0;
    transform-origin: center;
    height: 20px;
    color: var(--color-gray-2);
  }

  &__options {
    padding: 8px 0 0;
    background-color: var(--color-white);
    position: absolute;
    width: 100%;
    z-index: -1;
    top: calc(100% - 8px);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 4px 8px rgba(22, 109, 203, 0.08);
    overflow-y: auto;
    max-height: 188px;
  }

  &__option {
    padding: 10px 14px;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      color: var(--color-blue-8);
      background-color: var(--color-blue-0-5);
    }
  }

  & select {
    display: none;
  }

  .v-fade-enter,
  .v-fade-leave-to {
    opacity: 0;
  }

  .v-fade-enter-active,
  .v-fade-leave-active {
    transition: opacity 0.5s ease;
  }
}
</style>
