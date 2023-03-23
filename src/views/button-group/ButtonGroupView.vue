<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'items',
          values: ['any object with name prop'],
          types: ['array'],
          default: '',
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
        {
          attr: 'color',
          values: ['red', 'orange', 'yellow', 'green', 'blue', 'gray'],
          types: ['string'],
          default: 'orange',
        },
        {
          attr: 'activeView',
          values: [
            'primary',
            'secondary',
            'outline',
            'text',
            'rounded',
            'square',
          ],
          types: ['string'],
          default: 'primary',
        },
        {
          attr: 'inactiveView',
          values: [
            'primary',
            'secondary',
            'outline',
            'text',
            'rounded',
            'square',
          ],
          types: ['string'],
          default: 'secondary',
        },
      ]"
    />
    <components-block
      id="items"
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
      id="size"
      title="Size"
      desc="Select from different sizes: <code>s</code>, <code>m</code>, <code>l</code>. Default is medium."
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
    <components-block
      id="multiple"
      title="Multiple"
      desc="Use for multiselect."
    >
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
      id="color"
      title="Color"
      desc="Select color from predefined variables."
    >
      <div class="flex flex-col flex-start gap-16">
        <v-button-group
          :items="[
            { name: 'Button 1', active: true },
            { name: 'Button 2' },
            { name: 'Button 3' },
          ]"
          color="red"
        />
        <v-button-group
          :items="[
            { name: 'Button 1', active: true },
            { name: 'Button 2' },
            { name: 'Button 3' },
          ]"
        />
        <v-button-group
          :items="[
            { name: 'Button 1', active: true },
            { name: 'Button 2' },
            { name: 'Button 3' },
          ]"
          color="yellow"
        />
        <v-button-group
          :items="[
            { name: 'Button 1', active: true },
            { name: 'Button 2' },
            { name: 'Button 3' },
          ]"
          color="green"
        />
        <v-button-group
          :items="[
            { name: 'Button 1', active: true },
            { name: 'Button 2' },
            { name: 'Button 3' },
          ]"
          color="orange"
        />
        <v-button-group
          :items="[
            { name: 'Button 1', active: true },
            { name: 'Button 2' },
            { name: 'Button 3' },
          ]"
          color="gray"
        />
      </div>
    </components-block>
    <components-block
      id="mandatory"
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
    <components-block
      id="activeView"
      title="Active view"
      desc="Button view style for active button in group."
    >
      <div class="flex flex-col flex-start gap-16">
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
          activeView="outline"
        />
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
          activeView="text"
        />
      </div>
    </components-block>
    <components-block
      id="inactiveView"
      title="inactive view"
      desc="Inactive button view style for active button in group."
    >
      <div class="flex flex-col flex-start gap-16">
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
          inactiveView="outline"
        />
        <v-button-group
          :items="[
            {
              idx: 1,
              name: 'Button 1',
              active: true,
            },
            {
              idx: 2,
              name: 'Button 2',
            },
            {
              idx: 3,
              name: 'Button 3',
            },
          ]"
          inactiveView="text"
          multiple
          @selected="check"
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
  methods: {
    check(val) {
      console.log(val);
    },
  },
};
</script>
