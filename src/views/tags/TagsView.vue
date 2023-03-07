<template>
  <div>
    <div class="flex gap-16">
      <v-tag>primary</v-tag>
      <v-tag :has-border="false">primary</v-tag>
      <v-tag :has-close="false">primary</v-tag>
      <v-tag :has-close="false" :has-border="false">primary</v-tag>
    </div>

    <div class="flex gap-16">
      <v-tag type="danger">danger</v-tag>
      <v-tag type="danger" :has-border="false">danger</v-tag>
      <v-tag type="danger" :has-close="false">danger</v-tag>
      <v-tag type="danger" :has-close="false" :has-border="false">danger</v-tag>
    </div>
    <div class="flex gap-16">
      <v-tag type="info">info</v-tag>
      <v-tag type="info" :has-border="false">info</v-tag>
      <v-tag type="info" :has-close="false">info</v-tag>
      <v-tag type="info" :has-close="false" :has-border="false">info</v-tag>
    </div>
    <div class="flex gap-16">
      <v-tag type="success">success</v-tag>
      <v-tag type="success" :has-border="false">success</v-tag>
      <v-tag type="success" :has-close="false">success</v-tag>
      <v-tag type="success" :has-close="false" :has-border="false"
        >success</v-tag
      >
    </div>
    <div class="flex gap-16">
      <v-tag type="warning">warning</v-tag>
      <v-tag type="warning" :has-border="false">warning</v-tag>
      <v-tag type="warning" :has-close="false">warning</v-tag>
      <v-tag type="warning" :has-close="false" :has-border="false"
        >warning</v-tag
      >
    </div>
    <div class="flex gap-16">
      <v-tag type="disabled">disabled</v-tag>
      <v-tag type="disabled" :has-border="false">disabled</v-tag>
      <v-tag type="disabled" :has-close="false">disabled</v-tag>
      <v-tag type="disabled" :has-close="false" :has-border="false"
        >disabled</v-tag
      >
    </div>
  </div>
</template>
<script lang="ts">
import VTag from "@/components/Tag/VTag.vue";

export default {
  components: {
    VTag,
  },
};
</script>
