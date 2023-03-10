<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'type',
          values: [
            'primary',
            'danger',
            'info',
            'success',
            'warning',
            'disabled',
          ],
          types: ['string'],
          default: 'primary',
        },
        {
          attr: 'has-border',
          values: [true, false],
          types: ['boolean'],
          default: 'false',
        },
        {
          attr: 'has-close',
          values: [true, false],
          types: ['boolean'],
          default: 'false',
        },
      ]"
    />
    <components-block title="type">
      <div class="flex gap-16">
        <v-tag>primary</v-tag>
        <v-tag type="danger">danger</v-tag>
        <v-tag type="info">info</v-tag>
        <v-tag type="success">success</v-tag>
        <v-tag type="warning">warning</v-tag>
        <v-tag type="disabled">disabled</v-tag>
      </div>
    </components-block>

    <components-block title="has-border">
      <div class="flex gap-16">
        <v-tag has-border>primary</v-tag>
        <v-tag has-border type="danger">danger</v-tag>
        <v-tag has-border type="info">info</v-tag>
        <v-tag has-border type="success">success</v-tag>
        <v-tag has-border type="warning">warning</v-tag>
        <v-tag has-border type="disabled">disabled</v-tag>
      </div>
    </components-block>

    <components-block title="has-close">
      <div class="flex gap-16">
        <v-tag has-close>primary</v-tag>
        <v-tag has-close type="danger">danger</v-tag>
        <v-tag has-close type="info">info</v-tag>
        <v-tag has-close type="success">success</v-tag>
        <v-tag has-close type="warning">warning</v-tag>
        <v-tag has-close type="disabled">disabled</v-tag>
      </div>
    </components-block>
  </div>
</template>
<script lang="ts">
import VTag from "@/components/Tag/VTag.vue";
import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VTag,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>
