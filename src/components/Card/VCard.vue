<template>
  <div class="card">
    <div class="card__inner">
      <div v-if="hasHeader" class="card__header">
        <slot name="header"></slot>
      </div>
      <div
        v-if="hasBody"
        class="card__body"
        :class="{ card__body_pt: !hasHeader }"
      >
        <slot name="body"></slot>
      </div>
      <div v-if="hasFooter" class="card__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasHeader() {
      return !!this.$scopedSlots.header;
    },
    hasBody() {
      return !!this.$scopedSlots.body;
    },
    hasFooter() {
      return !!this.$scopedSlots.footer;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &__inner {
    display: flex;
    background: var(--color-white);
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(41, 41, 41, 0.08);
  }

  &__header {
  }

  &__body {
    padding: 40px 30px 0;
  }

  &__body {
    padding: 0 30px 40px;

    &_pt {
      padding-top: 40px;
    }
  }
}
</style>
