<template>
  <div>
    <h4 class="mb-16">Gray</h4>
    <div class="flex flex-start gap-16 flex-3 cols">
      <color-sample
        v-for="weight in grayWeights"
        :key="weight"
        :color="getCSSVariableValue(`--color-gray-${weight}`)"
        :name="`color-gray-${weight}`"
      />
    </div>
    <div
      class="flex flex-start flex-col gap-16"
      v-for="color in colorNames"
      :key="color"
    >
      <h4 class="mb-16 mt-24">
        {{ color.charAt(0).toUpperCase() + color.slice(1) }}
      </h4>
      <div class="flex flex-start gap-16 cols" :key="color">
        <color-sample
          v-for="weight in colorWeights"
          :key="weight"
          :color="getCSSVariableValue(`--color-${color}-${weight}`)"
          :name="`color-${color}-${weight}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ColorSample from "@/components/ui/color-sample.vue";
import { gsap } from "gsap";

export default {
  components: {
    ColorSample,
  },
  data() {
    return {
      colorNames: ["red", "orange", "yellow", "green", "blue", "violet"],
      colorWeights: [
        "10",
        "9-5",
        "9",
        "8-5",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1-5",
        "1",
        "0-5",
      ],
      grayWeights: [
        "10",
        "9-5",
        "9",
        "8-5",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1-5",
        "1",
        "0-5",
        "0",
        "-1",
      ],
    };
  },
  methods: {
    getCSSVariableValue(variable) {
      return getComputedStyle(document.documentElement).getPropertyValue(
        variable
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";

.cols {
  @include cols(1);

  @include md-block {
    @include cols(2);
  }

  @include lg-block {
    @include cols(3);
  }
}
</style>
