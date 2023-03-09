<template>
  <div>
    <v-grid :cols="12" class="mb-16" />
    <v-grid :cols="8" class="mb-16" />
    <v-grid :cols="6" class="mb-16" />
    <v-grid :cols="4" class="mb-16" />
    <v-grid :cols="3" class="mb-16" />
    <v-grid :cols="2" class="mb-16" />
    <v-grid :cols="1" class="mb-16" />
  </div>
</template>

<script>
import VGrid from "@/components/ui/VGrid";
export default {
  components: {
    VGrid,
  },
};
</script>
