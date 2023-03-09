<template>
  <div class="grid" :class="`grid-${cols}`">
    <div class="grid__col" v-for="col in cols" :key="col">1/{{ cols }}</div>
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

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-column-gap: 16px;

  @for $i from 1 through 12 {
    &-#{$i} {
      grid-template-columns: repeat($i, 1fr);
    }
  }

  &__col {
    background-color: var(--color-main-colors-orange-5);
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
  }
}
</style>
