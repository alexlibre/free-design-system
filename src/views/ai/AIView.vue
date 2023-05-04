<template>
  <div>
    <v-ai :width="350" :height="450" :particles="10" />
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
