<template>
  <div
    class="calendar"
    :class="{
      calendar_compact: compact,
      calendar_opened: opened,
      calendar_disabled: disabled,
    }"
    @blur="onBlur"
    tabindex="0"
  >
    <div class="calendar__inner">
      <label class="calendar__label"></label>
      <div class="calendar__box" @click="onFocus" ref="box">
        <div class="calendar__value">
          {{ selectedDate }}
        </div>
        <div class="calendar__icon">
          <svg-icon name="calendar" :size="[20]" />
        </div>
        <transition appear>
          <div class="calendar__drop" v-if="opened" ref="calendarDrop">
            <div class="calendar__grid">
              <div class="calendar__days">
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
                <span>Su</span>
              </div>
              <div class="calendar__month">
                <div
                  v-for="(day, idx) in month"
                  :class="{
                    calendar__day: day,
                    calendar__day_current: day === today,
                    calendar__day_selected: day === selectedDay,
                  }"
                  @click="selectDay(day)"
                  :key="idx"
                >
                  {{ day }}
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";
import { gsap, Bounce } from "gsap";

export default {
  components: { SvgIcon },
  props: {
    compact: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      opened: false,
      selectedDate: "",
      selectedDay: "",
    };
  },
  computed: {
    date() {
      return new Date(new Date().getFullYear(), new Date().getMonth() - 1);
    },
    firstDay() {
      return (
        new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDay() +
        1
      );
    },
    daysInMonth() {
      return new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0
      ).getDate();
    },
    today() {
      return new Date().getDate();
    },
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
      if (event.target === this.$refs.box) {
        this.opened = !this.opened;
      }
      this.buildMonth();
    },
    onBlur() {
      this.opened = false;
    },
    buildMonth() {
      let arr = [];

      for (let i = 0; i < this.getDay(this.date); i++) {
        arr.push(undefined);
      }

      for (let i = 1; i <= this.daysInMonth; i++) {
        arr.push(i);
      }

      const fullWeeks = Math.ceil(arr.length / 7);
      const rest = fullWeeks * 7 - arr.length;

      arr.push(...Array(rest));

      this.month = arr;
    },
    getDay(date) {
      let day = date.getDay();
      if (day === 0) day = 7;
      return day - 1;
    },
    selectDay(val) {
      if (!val) return;
      this.selectedDay = val;
      this.selectedDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        val
      ).toLocaleDateString();

      this.opened = false;
    },

    animateIn() {
      this.$nextTick(() => {
        gsap.from(this.$refs.calendarDrop, 0.2, {
          opacity: 0,
        });
        gsap.from(this.$refs.calendarDrop, 0.5, {
          y: "-40px",
          ease: Bounce.easeOut,
        });
      });
    },
    animateOut() {
      gsap.to(this.$refs.calendarDrop, 0.2, {
        opacity: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar {
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
    pointer-events: none;
    opacity: 0.66;

    #{$c} {
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
