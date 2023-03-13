<template>
  <div class="button-group">
    <div class="button-group__inner">
      <div class="button-group__item" v-for="(item, idx) in list" :key="idx">
        <v-button
          :icon="item.icon"
          :active="item.active"
          :size="size"
          :view="item.active ? 'primary' : 'secondary'"
          @click="selectItem(idx, $event)"
          >{{ item.name }}</v-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/Button/VButton.vue";

export default {
  components: {
    VButton,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: "m",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    mandatory: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      list: this.items,
    };
  },
  methods: {
    selectItem(val) {
      const arr = this.items.map((item) => {
        if (!this.multiple) item.active = false;
        return item;
      });

      if (this.mandatory) {
        const actives = arr.filter((item) => item.active === true).length > 1;
        if (!actives) {
          arr[val].active = true;
        } else {
          arr[val].active = !arr[val].active;
        }
      } else {
        arr[val].active = !arr[val].active;
      }

      this.list = arr;
    },
  },
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
