<template>
  <div
    class="select"
    :class="{ select_compact: compact, select_opened: opened }"
    @blur="looseFocus"
    tabindex="0"
  >
    <div class="select__inner">
      <div
        class="select__box"
        :class="{ select__box_opened: opened }"
        @click="openOptions"
      >
        <div
          class="select__value"
          :class="{ select__value_selected: selected !== placeholder }"
        >
          {{ selected }}
        </div>
        <div class="select__open" ref="selectArrow">
          <svg-icon name="arrow-down" :size="[20]" />
        </div>
      </div>
      <div class="select__options" v-if="opened">
        <div
          class="select__option"
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
    <select>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";
import { gsap, Elastic } from "gsap";

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
      defaault: false,
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
        gsap.to(this.$refs.selectArrow, 1, {
          rotate: "180deg",
          ease: Elastic.easeOut.config(1, 0.3),
        });
        return;
      }
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
    },
  },
  methods: {
    selectOption(val) {
      this.selected = val;
      this.opened = false;
    },
    openOptions() {
      this.opened = true;
    },
    looseFocus() {
      console.log("got here");
      this.opened = false;
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

  &:not(&_disabled) {
    cursor: pointer;
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

  &__open {
    flex-shrink: 0;
    transform-origin: center;
    height: 20px;
    color: var(--color-gray-2);
  }

  &__options {
    padding: 8px 0;
    background-color: var(--color-white);
    position: absolute;
    width: 100%;
    z-index: -1;
    top: calc(100% - 8px);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 4px 8px rgba(22, 109, 203, 0.08);
  }

  &__option {
    padding: 8px 14px;
    transition: all 0.2s linear;

    &:hover {
      color: var(--color-blue-8);
      background-color: var(--color-blue-0-5);
    }
  }

  & select {
    display: none;
  }
}
</style>
