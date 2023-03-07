<template>
  <div>
    <div class="flex gap-16">
      <v-button size="s" :onClick="logClick">primary</v-button>
      <v-button :onClick="logClick">primary</v-button>
      <v-button :onClick="logClick" icon="heart"></v-button>
      <v-button size="l" :onClick="logClick">primary</v-button>
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
export default {
  components: {
    vButton,
  },
  methods: {
    logClick() {
      console.log("click");
    },
  },
};
</script>
