<template>
  <div>
    <game-conway-life :width="width" :height="height" />
  </div>
</template>

<script>
import GameConwayLife from "@/components/Games/ConwayLife/GameConwayLife";

export default {
  components: {
    GameConwayLife,
  },
  data() {
    return {
      width: 1280,
      height: 640,
    };
  },
};
</script>

<style lang="scss" scoped></style>
