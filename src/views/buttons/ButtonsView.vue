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
      ]"
    />

    <components-block
      title="size"
      desc="Select from different sizes: 's', 'm', 'l'. Default is medium."
    >
      <div class="flex gap-16">
        <v-button size="s" @click="logClick">Small</v-button>
        <v-button @click="logClick">Medium</v-button>
        <v-button size="l" @click="logClick">Large</v-button>
        <v-button size="l" @click="logClick"></v-button>
      </div>
    </components-block>

    <components-block title="view">
      <div class="flex gap-16">
        <v-button @click="logClick">Primary</v-button>
        <v-button view="secondary" @click="logClick">Secondary</v-button>
        <v-button view="outline" @click="logClick">Outline</v-button>
        <v-button view="text" @click="logClick">Text</v-button>
        <v-button view="rounded" @click="logClick">Rounded</v-button>
        <v-button view="square" @click="logClick">Square</v-button>
      </div>
    </components-block>

    <components-block title="icon">
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

    <components-block title="click">
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
