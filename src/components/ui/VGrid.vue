<template>
  <div class="grid" :class="`grid-${cols}`">
    <div class="grid__col" v-for="(col, idx) in Array(cols)" :key="col">
      <slot :name="idx"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cols: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-column-gap: 16px;

  @for $i from 1 through 12 {
    &-#{$i} {
      grid-template-columns: repeat($i, 1fr);
    }
  }
}
</style>
