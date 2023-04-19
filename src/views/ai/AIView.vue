<template>
  <div>
    <v-ai :width="350" :height="550" :particles="300" />
  </div>
</template>

<script>
import VAi from "@/components/AI/VAI";

export default {
  components: {
    VAi,
  },
};
</script>

<style lang="scss" scoped></style>
