<template>
  <div
    class="radio-group"
    :class="{ 'radio-group_row': isRow }"
    @checked-radio="onChecked"
  >
    <div class="radio-group__inner">
      <v-radio
        v-for="(item, idx) in items"
        :name="guid"
        :key="idx"
        :label="item.label"
        :checked="item.checked"
        :disabled="item.disabled"
      ></v-radio>
    </div>
  </div>
</template>

<script>
import VRadio from "@/components/Radio/VRadio";

export default {
  components: { VRadio },
  props: {
    items: {
      type: Array,
      required: true,
    },
    isRow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    guid() {
      return (Math.random() + 1).toString(36).substring(2);
    },
  },
  methods: {
    onChecked(val) {
      this.value = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-group {
  $c: &;

  &_row {
    #{$c} {
      &__inner {
        flex-direction: row;
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>
