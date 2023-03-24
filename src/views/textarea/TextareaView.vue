<template>
  <div>
    <components-table
      :items="[
        { attr: 'label', values: ['any'], types: ['string'], default: '' },
        {
          attr: 'placeholder',
          values: ['any'],
          types: ['string'],
          default: '',
        },
        {
          attr: 'helper',
          values: ['any'],
          types: ['string'],
          default: '',
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
          types: ['Object'],
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
        {
          attr: 'compact',
          values: ['true', 'false'],
          types: ['boolean'],
          default: 'false',
        },
      ]"
    />

    <components-block id="label" title="label">
      <v-textarea label="Textarea label" />
    </components-block>

    <components-block id="placeholder" title="placeholder">
      <v-textarea placeholder="Textarea placeholder" />
    </components-block>

    <components-block id="helper" title="helper">
      <v-textarea helper="Textarea helper" />
    </components-block>

    <components-block id="limit" title="limit">
      <v-textarea :limit="1000" />
    </components-block>

    <components-block id="rows" title="rows">
      <div class="flex flex-start gap-16">
        <v-textarea helper="15 rows" :rows="15" />
        <v-textarea helper="3 rows" :rows="3" />
        <v-textarea helper="8 rows" :rows="8" />
      </div>
    </components-block>

    <components-block id="controls" title="controls">
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

    <components-block id="hasError" title="has-error">
      <div class="flex flex-start gap-16">
        <v-textarea has-error helper="Error" />
      </div>
    </components-block>

    <components-block id="isFixed" title="is-fixed">
      <div class="flex flex-start gap-16">
        <v-textarea label="Fixed" is-fixed />
        <v-textarea label="Not fixed" />
      </div>
    </components-block>
    <components-block id="compact" title="compact">
      <div class="flex flex-start gap-16">
        <v-textarea label="Compact" compact />
        <v-textarea label="Default" />
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
      alert("Will set text to bold");
    },
    cb2() {
      alert("Will set text to italic");
    },
    cb3() {
      alert("Will set text to underline");
    },
    cb4() {
      alert("Will add link");
    },
  },
};
</script>
