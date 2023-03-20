<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'static',
          values: ['true', 'false'],
          types: ['Boolean'],
          default: 'false',
        },
        {
          attr: 'view',
          values: ['any icon'],
          types: ['String'],
          default: 'star',
        },
        {
          attr: 'small',
          values: ['true', 'false'],
          types: ['Boolean'],
          default: 'false',
        },
        {
          attr: 'range',
          values: ['any number'],
          types: ['Number'],
          default: '5',
        },
        {
          attr: 'size',
          values: ['any number'],
          types: ['Number'],
          default: '20',
        },
        {
          attr: 'color',
          values: ['yellow', 'red', 'green', 'blue', 'orange'],
          types: ['String'],
          default: 'yellow',
        },
        {
          attr: 'initial',
          values: ['any between 0 and range'],
          types: ['String'],
          default: 'yellow',
          required: true,
        },
      ]"
    />
    <components-block id="static" title="static">
      <v-rating
        view="heart"
        color="red"
        :initial="3"
        static
        :size="32"
        :range="3"
      />
    </components-block>

    <components-block id="view" title="view">
      <v-rating :size="32" :initial="5" />
      <v-rating view="heart" :size="32" color="red" :initial="4" />
      <v-rating view="tick-circle" color="green" :size="32" :initial="2" />
    </components-block>

    <components-block id="small" title="small">
      <v-rating
        view="info-circle"
        color="blue"
        :size="32"
        :range="1"
        :initial="10"
        small
      />
    </components-block>

    <components-block id="range" title="range">
      <v-rating :size="32" :initial="5" :range="5" />
      <v-rating view="heart" :size="32" color="red" :initial="4" :range="10" />
      <v-rating
        view="tick-circle"
        color="green"
        :size="32"
        :initial="2"
        :range="3"
      />
    </components-block>

    <components-block id="size" title="size">
      <v-rating :size="16" :initial="5" :range="5" />
      <v-rating :size="32" :initial="5" :range="5" />
      <v-rating :size="64" :initial="5" :range="5" />
    </components-block>

    <components-block id="initial" title="initial">
      <v-rating view="heart" color="red" :size="32" :initial="1" />
      <v-rating view="heart" color="red" :size="32" :initial="5" />
      <v-rating
        view="heart"
        color="red"
        :size="32"
        :range="1"
        :initial="300"
        small
      />
    </components-block>
  </div>
</template>

<script>
import VRating from "@/components/Rating/VRating.vue";

import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VRating,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>
