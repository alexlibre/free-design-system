<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'label',
          values: ['any string'],
          types: ['string'],
          default: '—',
          to: 'label',
        },
        {
          attr: 'labelSecond',
          values: ['any string'],
          types: ['string'],
          default: '—',
        },
        {
          attr: 'placeholder',
          values: ['any string'],
          types: ['string'],
          default: '—',
        },
        {
          attr: 'helper',
          values: ['any string'],
          types: ['string'],
          default: '—',
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
      ]"
    />
    <components-block title="Label" id="label">
      <v-input label="Label" compact />
    </components-block>
    <components-block title="Secondary label" id="labelSecond">
      <v-input labelSecond="Secondary label" compact />
    </components-block>
    <components-block title="Placeholder" id="placeholder">
      <v-input placeholder="Placeholder" compact />
    </components-block>
    <components-block
      title="Helper"
      id="helper"
      desc="Can be used as additional label or helper message or as success or error validation message."
    >
      <div class="flex gap-16">
        <v-input helper="Helper" compact />
        <v-input helper="Success message" state="success" compact />
        <v-input helper="Error message" state="error" compact />
      </div>
    </components-block>
    <components-block title="State" id="'state'">
      <div class="flex gap-16">
        <v-input compact />
        <v-input state="success" compact />
        <v-input state="error" compact />
      </div>
    </components-block>
    <components-block title="Type" id="type">
      <div class="flex gap-16">
        <v-input label="Name" compact />
        <v-input label="Email" type="email" compact />
        <v-input label="Password" type="password" compact state="error" />
      </div>
    </components-block>
    <components-block title="Disabled" id="disabled">
      <v-input disabled compact />
    </components-block>
    <div class="flex flex-start gap-16">
      <v-input label="Disabled" disabled />
      <v-input
        label="Success"
        state="success"
        icon="tick-circle"
        helper="Checked"
      />
      <v-input
        label="Error"
        state="error"
        icon="info-circle"
        helper="Error occured"
      />
    </div>
    <div class="flex flex-start gap-16">
      <v-input helper="Helper text" />
      <v-input disabled />
      <v-input state="success" icon="tick-circle" initial="Good value" />
      <v-input state="error" icon="info-circle" initial="Bad value" />
    </div>
    <div class="flex flex-start gap-16">
      <v-input
        label="Label"
        labelSecond="Second label"
        helper="Helper text"
        initial="Initial value"
        icon="eye"
      />
      <v-input
        initial="supersecret"
        label="Password"
        icon="eye"
        state="error"
        type="password"
        helper="Passwords don't match"
      />
    </div>
    <div class="flex flex-start gap-16">
      <v-input
        label="Label"
        labelSecond="Second label"
        helper="Helper text"
        initial="Initial value"
        icon="eye"
        compact
      />
    </div>
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
};
</script>
