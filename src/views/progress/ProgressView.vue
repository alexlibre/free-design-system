<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'percent',
          values: ['Any number 0 - 100'],
          types: ['number'],
          required: true,
        },
        {
          attr: 'view',
          values: ['primary', 'rounded', 'blob'],
          types: ['string'],
          default: 'primary',
        },
        {
          attr: 'color',
          values: ['red', 'orange', 'yellow', 'green', 'orange', 'violet'],
          types: ['string'],
          default: 'blue',
        },
        // {
        //   attr: 'showPercent',
        //   values: [true, false],
        //   types: ['boolean'],
        //   default: 'false',
        // },
      ]"
    />
    <components-block id="percent" title="Percent">
      <div class="flex flex-column flex-start gap-16">
        <v-progress percent="50" />
        <v-progress percent="73" />
        <v-progress percent="21" />
        <v-progress percent="37" />
        <v-progress percent="80" />
      </div>
    </components-block>
    <components-block id="view" title="View">
      <div class="flex flex-column flex-start gap-16">
        <v-progress percent="50" />
        <v-progress percent="50" view="rounded" />
        <v-progress percent="50" view="blob" />
      </div>
    </components-block>
    <components-block id="color" title="Color">
      <div class="flex flex-column flex-start gap-16">
        <v-progress percent="50" color="red" />
        <v-progress percent="50" color="blue" />
        <v-progress percent="50" color="yellow" />
        <v-progress percent="50" color="green" />
        <v-progress percent="50" color="orange" />
      </div>
    </components-block>
    <!-- <components-block id="showPercent" title="Show percent">
      <div class="flex flex-column flex-start gap-16">
        <v-progress percent="50" show-percent />
        <v-progress percent="50" view="blob" show-percent />
      </div>
    </components-block> -->
  </div>
</template>

<script>
import VProgress from "@/components/Progress/VProgress.vue";
import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VProgress,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>

<style lang="scss" scoped></style>
