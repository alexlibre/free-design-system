<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'month',
          values: ['0 to 11'],
          types: ['Number'],
          default: 'Current month',
          required: true,
        },
        {
          attr: 'hasLabel',
          values: [true, false],
          types: ['Boolean'],
          default: false,
        },
        {
          attr: 'compact',
          values: [true, false],
          types: ['Boolean'],
          default: false,
        },
        {
          attr: 'daysSelectable',
          values: [true, false],
          types: ['Boolean'],
          default: false,
        },
        {
          attr: 'selectedDay',
          values: ['any day number'],
          types: ['Number'],
          default: '',
        },
      ]"
    />
    <components-block id="month" title="Month">
      <div class="flex flex-start flex-3 gap-16">
        <v-calendar
          hasLabel
          daysSelectable
          :month="0"
          :selectedDays="[1, 2, 3, 4, 5, 6]"
        />
        <v-calendar hasLabel daysSelectable :month="1" />
        <v-calendar hasLabel daysSelectable :month="2" />
        <v-calendar hasLabel daysSelectable :month="3" />
        <v-calendar hasLabel daysSelectable :month="4" />
        <v-calendar hasLabel daysSelectable :month="5" />
        <v-calendar hasLabel daysSelectable :month="6" />
        <v-calendar hasLabel daysSelectable :month="7" />
        <v-calendar hasLabel daysSelectable :month="8" />
        <v-calendar hasLabel daysSelectable :month="9" />
        <v-calendar hasLabel daysSelectable :month="10" />
        <v-calendar hasLabel daysSelectable :month="11" />
      </div>
    </components-block>

    <components-block id="hasLabel" title="Has label">
      <div class="flex flex-end gap-16">
        <v-calendar hasLabel />
        <v-calendar />
      </div>
    </components-block>

    <components-block id="compact" title="Compact">
      <div class="flex flex-start flex-col gap-16">
        <v-calendar compact />
        <v-calendar />
      </div>
    </components-block>

    <components-block id="daysSelectable" title="Days selectable">
      <div class="flex flex-start flex-col gap-16">
        <v-calendar compact daysSelectable @selected="alertDay" />
      </div>
    </components-block>

    <components-block id="selectedDay" title="Selected day">
      <div class="flex flex-start flex-col gap-16">
        <v-calendar compact :selectedDay="8" />
      </div>
    </components-block>
  </div>
</template>

<script>
import VCalendar from "@/components/Calendar/VCalendar";

import ComponentsTable from "@/components/ui/components-table";
import ComponentsBlock from "@/components/ui/components-block";

export default {
  components: {
    VCalendar,
    ComponentsTable,
    ComponentsBlock,
  },
  methods: {
    alertDay() {
      // setTimeout(() => {
      //   alert(val.date);
      // }, 500);
    },
  },
};
</script>

<style lang="scss" scoped></style>
