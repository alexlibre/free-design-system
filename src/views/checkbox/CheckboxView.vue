<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'checked',
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
    >
    </components-table>
    <components-block title="Checked" id="checked">
      <div class="flex flex-start gap-16">
        <v-checkbox label="label" checked />
        <v-checkbox label="label" />
      </div>
    </components-block>
    <components-block title="Disabled" id="disabled">
      <div class="flex flex-start gap-16">
        <v-checkbox label="label" checked disabled />
        <v-checkbox label="label" disabled />
        <v-checkbox checked disabled />
        <v-checkbox disabled />
      </div>
    </components-block>
    <components-block title="Label" id="label">
      <div class="flex flex-start gap-16">
        <v-checkbox label="label text" checked />
        <v-checkbox label="label another" disabled />
        <v-checkbox label="label" checked disabled />
        <v-checkbox />
      </div>
    </components-block>
  </div>
</template>

<script>
import VCheckbox from "@/components/Checkbox/VCheckbox.vue";

import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VCheckbox,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>
