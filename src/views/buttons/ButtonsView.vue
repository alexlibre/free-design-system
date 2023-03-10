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
          attr: 'onClick',
          values: ['function'],
          types: ['function'],
          default: '—',
          required: true,
        },
      ]"
    />

    <components-block title="size">
      <div class="flex gap-16">
        <v-button size="s" :onClick="logClick">Small</v-button>
        <v-button :onClick="logClick">Medium</v-button>
        <v-button size="l" :onClick="logClick">Large</v-button>
      </div>
    </components-block>

    <components-block title="view">
      <div class="flex gap-16">
        <v-button :onClick="logClick">Primary</v-button>
        <v-button view="secondary" :onClick="logClick">Secondary</v-button>
        <v-button view="outline" :onClick="logClick">Outline</v-button>
        <v-button view="text" :onClick="logClick">Text</v-button>
        <v-button view="rounded" :onClick="logClick">Rounded</v-button>
        <v-button view="square" :onClick="logClick">Square</v-button>
      </div>
    </components-block>

    <components-block title="icon">
      <div class="flex gap-16">
        <v-button :onClick="logClick" icon="heart">Like</v-button>
        <v-button view="secondary" :onClick="logClick" icon="eye"
          >View</v-button
        >
        <v-button view="outline" :onClick="logClick" icon="link-2"
          >Link</v-button
        >
        <v-button view="text" :onClick="logClick" icon="task">Tasks</v-button>
        <v-button view="rounded" :onClick="logClick" icon="info-circle"
          >Info</v-button
        >
        <v-button view="square" :onClick="logClick" icon="attach-square"
          >Attach</v-button
        >
      </div>
      <div class="flex gap-16">
        <v-button :onClick="logClick" icon="heart"></v-button>
        <v-button view="secondary" :onClick="logClick" icon="eye"></v-button>
        <v-button view="outline" :onClick="logClick" icon="link-2"></v-button>
        <v-button view="text" :onClick="logClick" icon="task"></v-button>
        <v-button
          view="rounded"
          :onClick="logClick"
          icon="info-circle"
        ></v-button>
        <v-button
          view="square"
          :onClick="logClick"
          icon="attach-square"
        ></v-button>
      </div>
    </components-block>

    <components-block title="onClick">
      <div class="flex gap-16">
        <v-button :onClick="alertClick">Make alert</v-button>
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
