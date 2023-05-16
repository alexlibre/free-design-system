<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'label',
          values: ['any string'],
          types: ['string'],
          default: '',
          to: 'label',
        },
        {
          attr: 'labelSecond',
          values: ['any string'],
          types: ['string'],
          default: '',
        },
        {
          attr: 'placeholder',
          values: ['any string'],
          types: ['string'],
          default: '',
        },
        {
          attr: 'helper',
          values: ['any string'],
          types: ['string'],
          default: '',
        },
        {
          attr: 'state',
          values: ['default', 'success', 'error'],
          types: ['string'],
          default: 'default',
        },
        {
          attr: 'type',
          values: ['any html input type'],
          types: ['string'],
          default: 'text',
        },
        {
          attr: 'disabled',
          values: [true, false],
          types: ['boolean'],
          default: 'false',
        },
        {
          attr: 'restrict',
          values: ['int', 'float'],
          types: ['string'],
          default: '',
        },
        {
          attr: 'compact',
          values: [true, false],
          types: ['boolean'],
          default: 'false',
        },
      ]"
    />
    <components-block title="Label" id="label">
      <v-input label="Label" />
    </components-block>
    <components-block title="Secondary label" id="labelSecond">
      <v-input labelSecond="Secondary label" />
    </components-block>
    <components-block title="Placeholder" id="placeholder">
      <v-input placeholder="Placeholder" />
    </components-block>
    <components-block
      title="Helper"
      id="helper"
      desc="Can be used as additional label or helper message or as success or error validation message."
    >
      <div class="flex gap-16">
        <v-input helper="Helper" />
        <v-input helper="Success message" state="success" />
        <v-input helper="Error message" state="error" />
      </div>
    </components-block>
    <components-block title="State" id="'state'">
      <div class="flex gap-16">
        <v-input />
        <v-input state="success" />
        <v-input state="error" />
      </div>
    </components-block>
    <components-block title="Type" id="type">
      <div class="flex gap-16">
        <v-input label="Text" />
        <v-input label="Email" type="email" />
        <v-input label="Password" type="password" />
      </div>
    </components-block>
    <components-block
      title="Restrict"
      id="restrict"
      desc="Input values can be restricted to integer or floating numbers by filtering pressed keys. Besides any ctrl actions and navigation is allowed."
    >
      <div class="flex gap-16">
        <v-input
          restrict="int"
          label="Accept only digits"
          label-second="Keyboard controls also allowed"
          helper="Add only digits"
        />
        <v-input
          restrict="float"
          label="Accept floats"
          label-second="Keyboard controls also allowed"
          helper="Add floating number"
        />
      </div>
    </components-block>
    <components-block title="Disabled" id="disabled">
      <div class="flex gap-16">
        <v-input />
        <v-input disabled />
      </div>
    </components-block>
    <components-block title="Compact" id="compact">
      <div class="flex gap-16">
        <v-input label="Compact" compact />
        <v-input label="Default" />
      </div>
    </components-block>
  </div>
</template>

<script>
import VInput from "@/components/Input/VInput.vue";
import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VInput,
    ComponentsTable,
    ComponentsBlock,
  },
  methods: {},
};
</script>
