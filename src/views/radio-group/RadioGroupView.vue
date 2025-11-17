<template>
  <div>
    <v-radio-group
      :items="[
        {
          label: 'Label 1',
          checked: true,
        },
        {
          label: 'Label 2',
        },
        {
          label: 'Label 3',
        },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import VRadioGroup from "@/components/RadioGroup/VRadioGroup.vue";
</script>

<style lang="scss" scoped></style>
