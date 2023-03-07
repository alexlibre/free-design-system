<template>
  <div class="card">
    <div class="card__inner">
      <div class="card__header">
        <slot name="header"></slot>
      </div>
      <div class="card__body">
        <slot name="body"></slot>
      </div>
      <div class="card__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  &__inner {
    display: flex;
  }

  &__header {
  }

  &__body {
    padding: 40px 30px 0;
  }

  &__body {
    padding: 0 30px 40px;
  }
}
</style>
