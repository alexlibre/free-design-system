<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'compact',
          values: [true, false],
          types: ['boolean'],
          default: false,
        },
        {
          attr: 'disabled',
          values: [true, false],
          types: ['boolean'],
          default: false,
        },
      ]"
    />

    <components-block id="compact" title="compact">
      <div class="flex flex-column flex-start gap-16">
        <v-calendar compact />
        <v-calendar />
      </div>
    </components-block>
    <components-block id="disabled" title="disabled">
      <div class="flex flex-column flex-start gap-16">
        <v-calendar />
        <v-calendar disabled />
      </div>
    </components-block>
  </div>
</template>

<script>
import VCalendar from "@/components/Calendar/VCalendar";

import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VCalendar,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>

<style lang="scss" scoped></style>
