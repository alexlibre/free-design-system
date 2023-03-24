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
    />
    <components-block title="Checked" id="checked">
      <div class="flex flex-start gap-16">
        <v-switch label="label" checked />
        <v-switch label="label" />
      </div>
    </components-block>
    <components-block title="Disabled" id="disabled">
      <div class="flex flex-start gap-16">
        <v-switch label="label" checked disabled />
        <v-switch label="label" disabled />
        <v-switch checked disabled />
        <v-switch disabled />
      </div>
    </components-block>
    <components-block title="Label" id="label">
      <div class="flex flex-start gap-16">
        <v-switch label="label text" checked />
        <v-switch label="label another" disabled />
        <v-switch label="label" checked disabled />
        <v-switch />
      </div>
    </components-block>
  </div>
</template>

<script>
import VSwitch from "@/components/Switch/VSwitch";
import ComponentsTable from "@/components/ui/components-table";
import ComponentsBlock from "@/components/ui/components-block";
export default {
  components: { VSwitch, ComponentsTable, ComponentsBlock },
};
</script>

<style lang="scss" scoped></style>
