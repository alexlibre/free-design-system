<template>
  <div>
    <components-block
      id="cols"
      title="number"
      desc="Число задает количество столбцов из дочерних элементов."
    >
      <div class="grid grid-12">
        <div v-for="(item, idx) in Array(12)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-11">
        <div v-for="(item, idx) in Array(11)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-10">
        <div v-for="(item, idx) in Array(10)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-9">
        <div v-for="(item, idx) in Array(9)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-8">
        <div v-for="(item, idx) in Array(8)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-7">
        <div v-for="(item, idx) in Array(7)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-6">
        <div v-for="(item, idx) in Array(6)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-5">
        <div v-for="(item, idx) in Array(5)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-4">
        <div v-for="(item, idx) in Array(4)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-3">
        <div v-for="(item, idx) in Array(3)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-2">
        <div v-for="(item, idx) in Array(2)" :key="idx">{{ idx + 1 }}</div>
      </div>
      <div class="grid grid-1">
        <div v-for="(item, idx) in Array(1)" :key="idx">{{ idx + 1 }}</div>
      </div>
    </components-block>
  </div>
</template>

<script>
// import VGrid from "@/components/ui/VGrid";

import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    // VGrid,
    ComponentsBlock,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";

.grid {
  @for $i from 1 through 12 {
    &-#{$i} {
      @include cols($i);

      & > * {
        background-color: var(--color-orange-5);
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-white);
      }
    }
  }

  & + & {
    margin-top: 1rem;
  }
}
</style>
