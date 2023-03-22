<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'options',
          values: ['any array of strings'],
          types: ['string[]'],
          default: '',
          required: true,
        },
        {
          attr: 'placeholder',
          values: ['any string'],
          types: ['string'],
          default: 'Select option',
        },
        {
          attr: 'compact',
          values: [true, false],
          types: ['boolean'],
          default: false,
        },
      ]"
    />
    <components-block id="options" title="options">
      <div class="flex gap-16">
        <v-select compact :options="['Option 1', 'Option 2', 'Option 3']" />
      </div>
    </components-block>
    <components-block id="placeholder" title="placeholder">
      <div class="flex gap-16">
        <v-select compact :options="['Option 1', 'Option 2', 'Option 3']" />
        <v-select
          compact
          :options="['Option 1', 'Option 2', 'Option 3']"
          placeholder="Custom placeholder"
        />
      </div>
    </components-block>
    <components-block id="compact" title="compact">
      <div class="flex gap-16">
        <v-select compact :options="['Option 1', 'Option 2', 'Option 3']" />
        <v-select :options="['Option 1', 'Option 2', 'Option 3']" />
      </div>
    </components-block>
  </div>
</template>

<script>
import VSelect from "@/components/Select/VSelect";

import ComponentsTable from "@/components/ui/components-table";
import ComponentsBlock from "@/components/ui/components-block";

export default {
  components: {
    VSelect,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>

<style lang="scss" scoped></style>
