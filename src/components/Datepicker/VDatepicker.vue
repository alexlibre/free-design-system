<template>
  <div
    class="datepicker"
    :class="{
      datepicker_compact: compact,
      datepicker_opened: opened,
      datepicker_disabled: disabled,
    }"
    @blur="onBlur"
    tabindex="0"
  >
    <div class="datepicker__inner">
      <label
        class="datepicker__label"
        ref="label"
        v-if="label"
        @click="onFocus"
        >{{ label }}</label
      >
      <div class="datepicker__box" @click="onFocus" ref="box">
        <div class="datepicker__value">
          {{ selectedDates }}
        </div>
        <div class="datepicker__icon">
          <svg-icon name="calendar" :size="[20]" />
        </div>
        <transition appear>
          <div class="datepicker__drop" v-if="opened" ref="datepickerDrop">
            <v-calendar
              :selectedDays="selectedDays"
              @selected="selectDay"
              hasLabel
              daysSelectable
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import VCalendar from "@/components/Calendar/VCalendar";
import SvgIcon from "@/components/SvgIcon";
import { gsap, Bounce } from "gsap";

export default {
  components: { VCalendar, SvgIcon },
  props: {
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
      opened: false,
      selectedDates: [],
      selectedDays: [],
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
    onFocus(event) {
      if (
        event.target === this.$refs.label ||
        event.target === this.$refs.box
      ) {
        this.opened = !this.opened;
      }
    },
    onBlur() {
      this.opened = false;
    },
    selectDay(val) {
      if (!val) return;
      this.selectedDay = val.day;
      this.selectedDate = val.date;

      // this.opened = false;
    },

    animateIn() {
      this.$nextTick(() => {
        gsap.from(this.$refs.datepickerDrop, 0.2, {
          opacity: 0,
        });
        gsap.from(this.$refs.datepickerDrop, 0.5, {
          y: "-40px",
          ease: Bounce.easeOut,
        });
      });
    },
    animateOut() {
      gsap.to(this.$refs.datepickerDrop, 0.2, {
        opacity: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.datepicker {
  $c: &;

  width: 100%;
  font-size: 14px;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  &_compact {
    max-width: 308px;
  }

  &_opened {
    z-index: 1;
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
      }
    }
  }

  &__inner {
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
    color: var(--color-gray-4);
  }

  &__icon {
    flex-shrink: 0;
    transform-origin: center;
    height: 20px;
    color: var(--color-gray-2);
  }

  &__drop {
    padding: 8px 0 0;
    position: absolute;
    left: 0;
    width: 100%;
    background: var(--color-white);
    cursor: default;
    z-index: -1;
    top: calc(100% - 8px);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 4px 8px rgba(22, 109, 203, 0.08);
  }

  &__grid {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }

  &__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    & > span {
      padding: 10px 8px;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }
  }

  &__month {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  &__day {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 8px;
    position: relative;
    z-index: 1;
    transition: color 0.2s linear;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      background-color: transparent;
      height: 32px;
      width: 32px;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: background-color 0.2s linear;
    }

    &_current {
      &:before {
        box-shadow: inset 0 0 0 2px var(--color-blue-5);
      }
    }

    &_selected {
      pointer-events: none;
      color: var(--color-white);

      &:before {
        background-color: var(--color-blue-5);
      }
    }

    &:hover {
      color: var(--color-blue-8);

      &:before {
        background-color: var(--color-blue-0-5);
      }
    }
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
