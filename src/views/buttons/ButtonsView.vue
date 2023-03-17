<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'size',
          values: ['s', 'm', 'l'],
          types: ['string'],
          default: 'm',
        },
        {
          attr: 'view',
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
          attr: 'icon',
          values: ['any'],
          types: ['string'],
          default: '—',
        },
        {
          attr: 'color',
          values: ['red', 'orange', 'yellow', 'green', 'blue', 'violet'],
          types: ['string'],
          default: 'orange',
        },
        {
          attr: 'disabled',
          values: [true, false],
          types: ['boolean'],
          default: false,
        },
      ]"
    />

    <components-block
      id="size"
      title="size"
      desc="Select from different sizes: <code>s</code>, <code>m</code>, <code>l</code>. Default is medium."
    >
      <div class="flex gap-16">
        <v-button size="s" @click="logClick">Small</v-button>
        <v-button size="s" @click="logClick" icon="heart">Small</v-button>
        <v-button size="s" @click="logClick" icon="heart"></v-button>
        <v-button @click="logClick">Medium</v-button>
        <v-button @click="logClick" icon="heart">Medium</v-button>
        <v-button @click="logClick" icon="heart"></v-button>
        <v-button size="l" @click="logClick">Large</v-button>
        <v-button size="l" @click="logClick" icon="heart">Large</v-button>
        <v-button size="l" @click="logClick" icon="heart"></v-button>
      </div>
    </components-block>

    <components-block id="view" title="view">
      <div class="flex gap-16">
        <v-button @click="logClick">Primary</v-button>
        <v-button view="secondary" @click="logClick">Secondary</v-button>
        <v-button view="outline" @click="logClick">Outline</v-button>
        <v-button view="text" @click="logClick">Text</v-button>
        <v-button view="rounded" @click="logClick">Rounded</v-button>
        <v-button view="square" @click="logClick">Square</v-button>
      </div>
    </components-block>

    <components-block id="icon" title="icon">
      <div class="flex gap-16">
        <v-button @click="logClick" icon="heart">Like</v-button>
        <v-button view="secondary" @click="logClick" icon="eye">View</v-button>
        <v-button view="outline" @click="logClick" icon="link-2">Link</v-button>
        <v-button view="text" @click="logClick" icon="task">Tasks</v-button>
        <v-button view="rounded" @click="logClick" icon="info-circle"
          >Info</v-button
        >
        <v-button view="square" @click="logClick" icon="attach-square"
          >Attach</v-button
        >
      </div>
      <div class="flex gap-16">
        <v-button @click="logClick" icon="heart"></v-button>
        <v-button view="secondary" @click="logClick" icon="eye"></v-button>
        <v-button view="outline" @click="logClick" icon="link-2"></v-button>
        <v-button view="text" @click="logClick" icon="task"></v-button>
        <v-button
          view="rounded"
          @click="logClick"
          icon="info-circle"
        ></v-button>
        <v-button
          view="square"
          @click="logClick"
          icon="attach-square"
        ></v-button>
      </div>
    </components-block>

    <components-block id="color" title="color">
      <div class="flex gap-16">
        <v-button color="red">Primary</v-button>
        <v-button icon="info-circle" color="red"></v-button>
        <v-button>Primary</v-button>
        <v-button icon="close-circle"></v-button>
        <v-button color="yellow">Primary</v-button>
        <v-button color="yellow" icon="heart"></v-button>
        <v-button color="green">Primary</v-button>
        <v-button color="green" icon="tick-circle"></v-button>
        <v-button color="blue">Primary</v-button>
        <v-button color="blue" icon="mask"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button view="secondary" color="red">Secondary</v-button>
        <v-button view="secondary" icon="info-circle" color="red"></v-button>
        <v-button view="secondary">Secondary</v-button>
        <v-button view="secondary" icon="close-circle"></v-button>
        <v-button view="secondary" color="yellow">Secondary</v-button>
        <v-button view="secondary" icon="heart" color="yellow"></v-button>
        <v-button view="secondary" color="green">Secondary</v-button>
        <v-button view="secondary" icon="tick-circle" color="green"></v-button>
        <v-button view="secondary" color="blue">Secondary</v-button>
        <v-button view="secondary" icon="mask" color="blue"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button view="outline" color="red">Outlined</v-button>
        <v-button view="outline" icon="info-circle" color="red"></v-button>
        <v-button view="outline">Outlined</v-button>
        <v-button view="outline" icon="close-circle"></v-button>
        <v-button view="outline" color="yellow">Outlined</v-button>
        <v-button view="outline" icon="heart" color="yellow"></v-button>
        <v-button view="outline" color="green">Outlined</v-button>
        <v-button view="outline" icon="tick-circle" color="green"></v-button>
        <v-button view="outline" color="blue">Outlined</v-button>
        <v-button view="outline" icon="mask" color="blue"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button view="text" color="red">Text</v-button>
        <v-button view="text" icon="info-circle" color="red"></v-button>
        <v-button view="text">Text</v-button>
        <v-button view="text" icon="close-circle"></v-button>
        <v-button view="text" color="yellow">Text</v-button>
        <v-button view="text" icon="heart" color="yellow"></v-button>
        <v-button view="text" color="green">Text</v-button>
        <v-button view="text" icon="tick-circle" color="green"></v-button>
        <v-button view="text" color="blue">Text</v-button>
        <v-button view="text" icon="mask" color="blue"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button view="rounded" color="red">Rounded</v-button>
        <v-button view="rounded" icon="info-circle" color="red"></v-button>
        <v-button view="rounded">Rounded</v-button>
        <v-button view="rounded" icon="close-circle"></v-button>
        <v-button view="rounded" color="yellow">Rounded</v-button>
        <v-button view="rounded" icon="heart" color="yellow"></v-button>
        <v-button view="rounded" color="green">Rounded</v-button>
        <v-button view="rounded" icon="tick-circle" color="green"></v-button>
        <v-button view="rounded" color="blue">Rounded</v-button>
        <v-button view="rounded" icon="mask" color="blue"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button view="square" color="red">Square</v-button>
        <v-button view="square" icon="info-circle" color="red"></v-button>
        <v-button view="square">Square</v-button>
        <v-button view="square" icon="close-circle"></v-button>
        <v-button view="square" color="yellow">Square</v-button>
        <v-button view="square" icon="heart" color="yellow"></v-button>
        <v-button view="square" color="green">Square</v-button>
        <v-button view="square" icon="tick-circle" color="green"></v-button>
        <v-button view="square" color="blue">Square</v-button>
        <v-button view="square" icon="mask" color="blue"></v-button>
      </div>
    </components-block>

    <components-block id="disabled" title="disabled">
      <div class="flex gap-16">
        <v-button disabled color="red">Primary</v-button>
        <v-button disabled icon="info-circle" color="red"></v-button>
        <v-button disabled>Primary</v-button>
        <v-button disabled icon="close-circle"></v-button>
        <v-button disabled color="yellow">Primary</v-button>
        <v-button disabled color="yellow" icon="heart"></v-button>
        <v-button disabled color="green">Primary</v-button>
        <v-button disabled color="green" icon="tick-circle"></v-button>
        <v-button disabled color="blue">Primary</v-button>
        <v-button disabled color="blue" icon="mask"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button disabled view="secondary" color="red">Secondary</v-button>
        <v-button
          disabled
          view="secondary"
          icon="info-circle"
          color="red"
        ></v-button>
        <v-button disabled view="secondary">Secondary</v-button>
        <v-button disabled view="secondary" icon="close-circle"></v-button>
        <v-button disabled view="secondary" color="yellow">Secondary</v-button>
        <v-button
          disabled
          view="secondary"
          icon="heart"
          color="yellow"
        ></v-button>
        <v-button disabled view="secondary" color="green">Secondary</v-button>
        <v-button
          disabled
          view="secondary"
          icon="tick-circle"
          color="green"
        ></v-button>
        <v-button disabled view="secondary" color="blue">Secondary</v-button>
        <v-button disabled view="secondary" icon="mask" color="blue"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button disabled view="outline" color="red">Outlined</v-button>
        <v-button
          disabled
          view="outline"
          icon="info-circle"
          color="red"
        ></v-button>
        <v-button disabled view="outline">Outlined</v-button>
        <v-button disabled view="outline" icon="close-circle"></v-button>
        <v-button disabled view="outline" color="yellow">Outlined</v-button>
        <v-button
          disabled
          view="outline"
          icon="heart"
          color="yellow"
        ></v-button>
        <v-button disabled view="outline" color="green">Outlined</v-button>
        <v-button
          disabled
          view="outline"
          icon="tick-circle"
          color="green"
        ></v-button>
        <v-button disabled view="outline" color="blue">Outlined</v-button>
        <v-button disabled view="outline" icon="mask" color="blue"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button disabled view="text" color="red">Text</v-button>
        <v-button
          disabled
          view="text"
          icon="info-circle"
          color="red"
        ></v-button>
        <v-button disabled view="text">Text</v-button>
        <v-button disabled view="text" icon="close-circle"></v-button>
        <v-button disabled view="text" color="yellow">Text</v-button>
        <v-button disabled view="text" icon="heart" color="yellow"></v-button>
        <v-button disabled view="text" color="green">Text</v-button>
        <v-button
          disabled
          view="text"
          icon="tick-circle"
          color="green"
        ></v-button>
        <v-button disabled view="text" color="blue">Text</v-button>
        <v-button disabled view="text" icon="mask" color="blue"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button disabled view="rounded" color="red">Rounded</v-button>
        <v-button
          disabled
          view="rounded"
          icon="info-circle"
          color="red"
        ></v-button>
        <v-button disabled view="rounded">Rounded</v-button>
        <v-button disabled view="rounded" icon="close-circle"></v-button>
        <v-button disabled view="rounded" color="yellow">Rounded</v-button>
        <v-button
          disabled
          view="rounded"
          icon="heart"
          color="yellow"
        ></v-button>
        <v-button disabled view="rounded" color="green">Rounded</v-button>
        <v-button
          disabled
          view="rounded"
          icon="tick-circle"
          color="green"
        ></v-button>
        <v-button disabled view="rounded" color="blue">Rounded</v-button>
        <v-button disabled view="rounded" icon="mask" color="blue"></v-button>
      </div>
      <div class="flex gap-16">
        <v-button disabled view="square" color="red">Square</v-button>
        <v-button
          disabled
          view="square"
          icon="info-circle"
          color="red"
        ></v-button>
        <v-button disabled view="square">Square</v-button>
        <v-button disabled view="square" icon="close-circle"></v-button>
        <v-button disabled view="square" color="yellow">Square</v-button>
        <v-button disabled view="square" icon="heart" color="yellow"></v-button>
        <v-button disabled view="square" color="green">Square</v-button>
        <v-button
          disabled
          view="square"
          icon="tick-circle"
          color="green"
        ></v-button>
        <v-button disabled view="square" color="blue">Square</v-button>
        <v-button disabled view="square" icon="mask" color="blue"></v-button>
      </div>
    </components-block>

    <components-block id="click" title="click">
      <div class="flex gap-16">
        <v-button @click="alertClick">Make alert</v-button>
      </div>
    </components-block>
  </div>
</template>

<script lang="ts">
import vButton from "@/components/Button/VButton.vue";
import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    vButton,
    ComponentsTable,
    ComponentsBlock,
  },
  methods: {
    logClick() {
      console.log("click");
    },
    alertClick() {
      alert("Clicked!");
    },
  },
};
</script>
