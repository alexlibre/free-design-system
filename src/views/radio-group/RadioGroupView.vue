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

<script>
import VRadioGroup from "@/components/RadioGroup/VRadioGroup";

export default {
  components: {
    VRadioGroup,
  },
};
</script>

<style lang="scss" scoped></style>
