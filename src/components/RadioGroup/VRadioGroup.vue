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

<script setup lang="ts">
import { ref, computed } from "vue";
import VRadio from "@/components/Radio/VRadio.vue";

interface RadioItem {
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

interface Props {
  items: RadioItem[];
  isRow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isRow: false,
});

const value = ref("");

const guid = computed(() => {
  return (Math.random() + 1).toString(36).substring(2);
});

const onChecked = (val: boolean) => {
  value.value = String(val);
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
