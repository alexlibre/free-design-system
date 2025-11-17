<template>
  <div class="button-group">
    <div class="button-group__inner">
      <div class="button-group__item" v-for="(item, idx) in list" :key="idx">
        <v-button
          :icon="item.icon"
          :active="item.active"
          :size="size"
          :view="item.active ? activeView : inactiveView"
          :color="color"
          @click="selectItem(idx, $event)"
          >{{ item.name }}</v-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import VButton from "@/components/Button/VButton.vue";

interface ButtonItem {
  name: string;
  icon?: string;
  active?: boolean;
}

interface Props {
  items: ButtonItem[];
  size?: "s" | "m" | "l";
  multiple?: boolean;
  mandatory?: boolean;
  color?: string;
  activeView?: string;
  inactiveView?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  size: "m",
  multiple: false,
  mandatory: false,
  color: "blue",
  activeView: "primary",
  inactiveView: "secondary",
});

const emit = defineEmits<{
  selected: [items: ButtonItem[]];
}>();

const list = ref([...props.items]);

watch(
  () => props.items,
  (newItems) => {
    list.value = [...newItems];
  },
  { deep: true }
);

const selectItem = (idx: number) => {
  const arr = props.items.map((item) => {
    if (!props.multiple) item.active = false;
    return { ...item };
  });

  if (props.mandatory) {
    const actives = arr.filter((item) => item.active === true).length > 1;
    if (!actives) {
      arr[idx].active = true;
    } else {
      arr[idx].active = !arr[idx].active;
    }
  } else {
    arr[idx].active = !arr[idx].active;
  }

  list.value = arr;

  emit(
    "selected",
    arr.filter((item) => item.active === true)
  );
};
</script>

<style lang="scss" scoped>
.button-group {
  &__inner {
    display: flex;
    gap: 2px;
  }
}
</style>
