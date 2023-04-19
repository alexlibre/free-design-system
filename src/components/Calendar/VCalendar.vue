<template>
  <div
    class="calendar"
    :class="{
      calendar_compact: compact,
      calendar_days_selectable: daysSelectable,
    }"
  >
    <div class="calendar__inner">
      <div class="calendar__grid">
        <div class="calendar__head">
          <label v-if="hasLabel" class="calendar__month-label">{{
            monthName
          }}</label>
        </div>
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
            v-for="(day, idx) in monthArr"
            :class="{
              calendar__day: day,
              calendar__day_current: todayCase(day),
              calendar__day_selected: day === selectedDayLocal,
            }"
            :ref="day === selectedDayLocal ? 'selected' : ''"
            @click="selectDay(day, $event)"
            :key="idx"
          >
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Elastic } from "gsap";

export default {
  props: {
    month: {
      type: Number,
      default: new Date().getMonth(),
    },
    hasLabel: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    daysSelectable: {
      type: Boolean,
      default: false,
    },
    selectedDay: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      selectedDate: "",
      selectedDayLocal: this.selectedDay,
      monthArr: [],
    };
  },
  computed: {
    monthName() {
      const monthNamesArr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      return monthNamesArr[this.month];
    },
    currentMonth() {
      return new Date().getMonth();
    },
    date() {
      return new Date(new Date().getFullYear(), this.month);
    },
    firstDay() {
      return (
        new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDay() +
        1
      );
    },
    daysInMonth() {
      return new Date(new Date().getFullYear(), this.month + 1, 0).getDate();
    },
    today() {
      return new Date().getDate();
    },
  },
  methods: {
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

      this.monthArr = arr;
    },
    getDay(date) {
      let day = date.getDay();
      if (day === 0) day = 7;
      return day - 1;
    },
    selectDay(val, $event) {
      if (!this.daysSelectable || !val) return;

      this.selectedDayLocal = val;
      this.selectedDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        val
      ).toLocaleDateString();

      gsap.fromTo(
        $event.target,
        0.1,
        {
          "--scale": "0%",
        },
        {
          "--scale": "200%",
        }
      );
      gsap.fromTo(
        $event.target,
        0.6,
        {
          "--scale": "0%",
        },
        {
          "--scale": "100%",
          delay: 0.1,
          ease: Elastic.easeOut.config(1, 0.3),
          onComplete: () => {
            this.$emit("selected", {
              day: this.selectedDayLocal,
              date: this.selectedDate,
            });
          },
        }
      );
    },
    todayCase(day) {
      return this.month === this.currentMonth && day === this.today;
    },
  },
  mounted() {
    this.buildMonth();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.calendar {
  $c: &;
  width: 100%;

  &_compact {
    max-width: 308px;
  }

  &_days_selectable {
    #{$c} {
      &__day {
        cursor: pointer;
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }

  &__grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__head {
    padding-top: 8px;
    display: flex;
    justify-content: center;
  }

  &__month-label {
    text-align: center;
    font-weight: 700;
    text-align: center;
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
      font-size: 14px;
      color: var(--color-gray-0);
      cursor: default;

      &:nth-child(6),
      &:nth-child(7) {
        color: var(--color-blue-0-5);
      }
    }
  }

  &__month {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  &__day {
    --scale: 100%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 8px;
    position: relative;
    z-index: 1;
    transition: color 0.2s linear;
    color: var(--color-gray-8);
    cursor: default;
    font-size: 16px;
    -webkit-tap-highlight-color: transparent;

    &:before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      background-color: transparent;
      height: 32px;
      width: 32px;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      translate: -16px -16px;
      scale: var(--scale);
      transition: background-color 0.2s linear;
      pointer-events: none;
    }

    &_current {
      &:before {
        box-shadow: inset 0 0 0 2px var(--color-blue-5);
      }
    }

    &_selected {
      pointer-events: none;
      color: var(--color-white) !important;

      &:before {
        background-color: var(--color-blue-5) !important;
      }
    }

    &:hover {
      color: var(--color-blue-8);

      &:before {
        background-color: var(--color-blue-0-5);
      }
    }

    &:nth-child(7n-1),
    &:nth-child(7n) {
      color: var(--color-blue-8);
    }
  }
}
</style>
