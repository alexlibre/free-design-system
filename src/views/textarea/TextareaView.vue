<template>
  <div>
    <components-table
      :items="[
        { attr: 'label', values: ['any'], types: ['string'], default: '—' },
        {
          attr: 'placeholder',
          values: ['any'],
          types: ['string'],
          default: '—',
        },
        {
          attr: 'helper',
          values: ['any'],
          types: ['string'],
          default: '—',
        },
        {
          attr: 'limit',
          values: ['any number'],
          types: ['number'],
          default: '0',
        },
        {
          attr: 'rows',
          values: ['any number'],
          types: ['number'],
          default: '6',
        },
        {
          attr: 'controls',
          values: ['any'],
          types: ['{[ name: string', 'cb: function ]}'],
          default: 'empty Array',
        },
        {
          attr: 'has-error',
          values: ['true', 'false'],
          types: ['boolean'],
          default: 'false',
        },
        {
          attr: 'is-fixed',
          values: ['true', 'false'],
          types: ['boolean'],
          default: 'false',
        },
      ]"
    />

    <components-block title="label">
      <v-textarea label="Textarea label" />
    </components-block>

    <components-block title="placeholder">
      <v-textarea placeholder="Textarea placeholder" />
    </components-block>

    <components-block title="helper">
      <v-textarea helper="Textarea helper" />
    </components-block>

    <components-block title="limit">
      <v-textarea :limit="1000" />
    </components-block>

    <components-block title="rows">
      <div class="flex flex-start gap-16">
        <v-textarea helper="15 rows" :rows="15" />
        <v-textarea helper="3 rows" :rows="3" />
        <v-textarea helper="8 rows" :rows="8" />
      </div>
    </components-block>

    <components-block title="controls">
      <v-textarea
        :controls="[
          {
            name: 'text-bold',
            cb: cb1,
          },
          {
            name: 'text-italic',
            cb: cb2,
          },
          {
            name: 'text-underline',
            cb: cb3,
          },
          {
            name: 'divider',
          },
          {
            name: 'link-2',
            cb: cb4,
          },
        ]"
      />
    </components-block>

    <components-block title="has-error">
      <div class="flex flex-start gap-16">
        <v-textarea has-error helper="Error" />
      </div>
    </components-block>

    <components-block title="is-fixed">
      <div class="flex flex-start gap-16">
        <v-textarea label="Fixed" is-fixed />
        <v-textarea label="Not fixed" />
      </div>
    </components-block>
  </div>
</template>

<script>
import VTextarea from "@/components/Textarea/VTextarea.vue";
import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";
export default {
  components: {
    VTextarea,
    ComponentsTable,
    ComponentsBlock,
  },
  methods: {
    cb1() {
      console.log("text-bold");
    },
    cb2() {
      console.log("text-italic");
    },
    cb3() {
      console.log("text-underline");
    },
    cb4() {
      console.log("link-2");
    },
  },
};
</script>
