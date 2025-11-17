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
              calendar__day_selected: selectedDaysLocal.includes(day),
            }"
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

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { gsap, Elastic } from "gsap";

interface Props {
  month?: number;
  hasLabel?: boolean;
  compact?: boolean;
  daysSelectable?: boolean;
  selectedDays?: number[];
}

const props = withDefaults(defineProps<Props>(), {
  month: new Date().getMonth(),
  hasLabel: false,
  compact: false,
  daysSelectable: false,
  selectedDays: () => [],
});

const emit = defineEmits<{
  selected: [data: { days: number[]; dates: string[] }];
}>();

const selectedDates = ref<string[]>([]);
const selectedDaysLocal = ref<number[]>([...props.selectedDays]);
const monthArr = ref<(number | undefined)[]>([]);

const monthName = computed(() => {
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

  return monthNamesArr[props.month];
});

const currentMonth = computed(() => {
  return new Date().getMonth();
});

const date = computed(() => {
  return new Date(new Date().getFullYear(), props.month);
});

const daysInMonth = computed(() => {
  return new Date(new Date().getFullYear(), props.month + 1, 0).getDate();
});

const today = computed(() => {
  return new Date().getDate();
});

const getDay = (date: Date) => {
  let day = date.getDay();
  if (day === 0) day = 7;
  return day - 1;
};

const buildMonth = () => {
  let arr: (number | undefined)[] = [];

  for (let i = 0; i < getDay(date.value); i++) {
    arr.push(undefined);
  }

  for (let i = 1; i <= daysInMonth.value; i++) {
    arr.push(i);
  }

  const fullWeeks = Math.ceil(arr.length / 7);
  const rest = fullWeeks * 7 - arr.length;

  arr.push(...Array(rest));

  monthArr.value = arr;
};

const selectDay = (val: number | undefined, event: MouseEvent) => {
  if (!props.daysSelectable || !val) return;

  const dateVal = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    val
  ).toLocaleDateString();

  if (selectedDaysLocal.value.includes(val)) {
    selectedDaysLocal.value = selectedDaysLocal.value.filter((item) => {
      return item !== val;
    });
    selectedDates.value = selectedDates.value.filter((item) => {
      return item !== dateVal;
    });
  } else {
    selectedDaysLocal.value.push(val);
    selectedDates.value.push(dateVal);
  }

  const target = event.target as HTMLElement;
  gsap.fromTo(
    target,
    0.1,
    {
      "--scale": "0%",
    },
    {
      "--scale": "200%",
    }
  );
  gsap.fromTo(
    target,
    0.6,
    {
      "--scale": "0%",
    },
    {
      "--scale": "100%",
      delay: 0.1,
      ease: Elastic.easeOut.config(1, 0.3),
      onComplete: () => {
        emit("selected", {
          days: selectedDaysLocal.value,
          dates: selectedDates.value,
        });
      },
    }
  );
};

const todayCase = (day: number | undefined) => {
  return props.month === currentMonth.value && day === today.value;
};

onMounted(() => {
  buildMonth();
});
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
