<template>
  <div>
    <components-table
      class="mb-24"
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
          default: '',
        },
      ]"
    />
    <div class="components-block mb-24">
      <h2 class="components-block__title">Size</h2>
      <div class="flex gap-16">
        <v-button size="s" :onClick="logClick">Small</v-button>
        <v-button :onClick="logClick">Medium</v-button>
        <v-button size="l" :onClick="logClick">Large</v-button>
      </div>
    </div>
    <div class="components-block mb-24">
      <h2 class="components-block__title">View</h2>
      <div class="flex gap-16">
        <v-button :onClick="logClick">Primary</v-button>
        <v-button view="secondary" :onClick="logClick">Secondary</v-button>
        <v-button view="outline" :onClick="logClick">Outline</v-button>
        <v-button view="text" :onClick="logClick">Text</v-button>
        <v-button view="rounded" :onClick="logClick">Rounded</v-button>
        <v-button view="square" :onClick="logClick">Square</v-button>
      </div>
    </div>

    <div class="flex gap-16">
      <v-button size="s" view="secondary" :onClick="logClick"
        >secondary</v-button
      >
      <v-button view="secondary" :onClick="logClick">secondary</v-button>
      <v-button view="secondary" :onClick="logClick" icon="heart"></v-button>
      <v-button size="l" view="secondary" :onClick="logClick"
        >secondary</v-button
      >
    </div>

    <div class="flex gap-16">
      <v-button size="s" view="outline" :onClick="logClick">outline</v-button>
      <v-button view="outline" :onClick="logClick">outline</v-button>
      <v-button view="outline" :onClick="logClick" icon="heart"></v-button>
      <v-button size="l" view="outline" :onClick="logClick">outline</v-button>
    </div>

    <div class="flex gap-16">
      <v-button size="s" view="text" :onClick="logClick">text</v-button>
      <v-button view="text" :onClick="logClick">text</v-button>
      <v-button view="text" :onClick="logClick" icon="heart"></v-button>
      <v-button size="l" view="text" :onClick="logClick">text</v-button>
    </div>

    <div class="flex gap-16">
      <v-button size="s" view="rounded" :onClick="logClick">rounded</v-button>
      <v-button view="rounded" :onClick="logClick">rounded</v-button>
      <v-button view="rounded" :onClick="logClick" icon="heart"></v-button>
      <v-button size="l" view="rounded" :onClick="logClick">rounded</v-button>
    </div>

    <div class="flex gap-16">
      <v-button size="s" view="square" :onClick="logClick">square</v-button>
      <v-button view="square" :onClick="logClick">square</v-button>
      <v-button view="square" :onClick="logClick" icon="heart"></v-button>
      <v-button size="l" view="square" :onClick="logClick">square</v-button>
    </div>
  </div>
</template>

<script lang="ts">
import vButton from "@/components/Button/VButton.vue";
import ComponentsTable from "@/components/ui/components-table.vue";

export default {
  components: {
    vButton,
    ComponentsTable,
  },
  methods: {
    logClick() {
      console.log("click");
    },
  },
};
</script>
