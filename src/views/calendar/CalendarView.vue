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
        <v-calendar compact hasLabel :month="0" />
        <v-calendar compact hasLabel :month="1" />
        <v-calendar compact hasLabel :month="2" />
        <v-calendar compact hasLabel :month="3" />
        <v-calendar compact hasLabel :month="4" />
        <v-calendar compact hasLabel :month="5" />
        <v-calendar compact hasLabel :month="6" />
        <v-calendar compact hasLabel :month="7" />
        <v-calendar compact hasLabel :month="8" />
        <v-calendar compact hasLabel :month="9" />
        <v-calendar compact hasLabel :month="10" />
        <v-calendar compact hasLabel :month="11" />
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
        <v-calendar compact daysSelectable @selectedDay="alertDay" />
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
    alertDay(val) {
      alert(val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
