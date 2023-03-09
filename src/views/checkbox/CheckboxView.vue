<template>
  <div>
    <div class="flex flex-start gap-16">
      <v-checkbox id="check-1" label="label" checked />
      <v-checkbox id="check-2" label="label" />
      <v-checkbox id="check-3" label="label" disabled />
      <v-checkbox id="check-4" label="label" checked disabled />
      <v-checkbox id="check-5" />
    </div>
  </div>
</template>

<script>
import VCheckbox from "@/components/Checkbox/VCheckbox.vue";

export default {
  components: {
    VCheckbox,
  },
};
</script>
