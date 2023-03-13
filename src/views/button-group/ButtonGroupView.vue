<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'items',
          values: ['any object with name prop'],
          types: ['array'],
          default: '—',
          required: true,
        },
        {
          attr: 'size',
          values: ['s', 'm', 'l'],
          types: ['string'],
          default: 'm',
        },
        {
          attr: 'multiple',
          values: [true, false],
          types: ['boolean'],
          default: false,
        },
        {
          attr: 'mandatory',
          values: [true, false],
          types: ['boolean'],
          default: false,
        },
      ]"
    />
    <components-block
      title="Items"
      desc="Array of items. Every item must include <code>name</code> or <code>icon</code> property."
    >
      <div class="flex gap-16">
        <v-button-group
          :items="[
            {
              name: 'Button 1',
              active: true,
            },
            {
              name: 'Button 2',
            },
            {
              name: 'Button 3',
            },
          ]"
        />
      </div>
    </components-block>
    <components-block
      title="Size"
      desc="Select from different sizes: 's', 'm', 'l'. Default is medium."
    >
      <v-button-group
        class="mb-24"
        :items="[
          {
            name: 'Button 1',
            active: true,
          },
          {
            name: 'Button 2',
          },
          {
            name: 'Button 3',
          },
        ]"
        size="s"
      />
      <v-button-group
        class="mb-24"
        :items="[
          {
            name: 'Button 1',
            active: true,
          },
          {
            name: 'Button 2',
          },
          {
            name: 'Button 3',
          },
        ]"
      />
      <v-button-group
        class="mb-24"
        :items="[
          {
            name: 'Button 1',
            active: true,
          },
          {
            name: 'Button 2',
          },
          {
            name: 'Button 3',
          },
        ]"
        size="l"
      />
    </components-block>
    <components-block title="Multiple" desc="Use for multiselect.">
      <div class="flex gap-16">
        <v-button-group
          :items="[
            {
              name: 'Button 1',
            },
            {
              name: 'Button 2',
            },
            {
              name: 'Button 3',
            },
          ]"
          multiple
        />
      </div>
    </components-block>
    <components-block
      title="Mandatory"
      desc="Use case for minimum one item as required."
    >
      <div class="flex gap-16">
        <v-button-group
          :items="[
            {
              name: 'Button 1',
              active: true,
            },
            {
              name: 'Button 2',
            },
            {
              name: 'Button 3',
            },
          ]"
          multiple
          mandatory
        />
        <v-button-group
          :items="[
            {
              name: 'Button 1',
            },
            {
              name: 'Button 2',
            },
            {
              name: 'Button 3',
            },
          ]"
          mandatory
        />
      </div>
    </components-block>
  </div>
</template>

<script>
import VButtonGroup from "@/components/ButtonGroup/VButtonGroup.vue";
import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VButtonGroup,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>
