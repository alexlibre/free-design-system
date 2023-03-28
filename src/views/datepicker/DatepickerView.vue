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
        {
          attr: 'label',
          values: ['any string'],
          types: ['string'],
          default: '',
        },
      ]"
    />

    <components-block id="compact" title="compact">
      <div class="flex flex-column flex-start gap-16">
        <v-datepicker label="Compact" compact />
        <v-datepicker label="Default" />
      </div>
    </components-block>
    <components-block id="disabled" title="disabled">
      <div class="flex flex-column flex-start gap-16">
        <v-datepicker />
        <v-datepicker disabled />
      </div>
    </components-block>
    <components-block id="label" title="label">
      <div class="flex flex-column flex-start gap-16">
        <v-datepicker label="Custom label" />
      </div>
    </components-block>
  </div>
</template>

<script>
import VDatepicker from "@/components/Datepicker/VDatepicker";

import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VDatepicker,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>

<style lang="scss" scoped></style>
