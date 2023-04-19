<template>
  <div
    class="card"
    :class="`${size ? 'card_size_' + size : ''} card_theme_${
      themeDark ? 'dark' : 'light'
    } ${hasShadow ? 'card_has_shadow' : ''} ${
      hasBorder ? 'card_has_border' : ''
    } ${hasRound ? 'card_has_round' : ''}`"
  >
    <div class="card__inner">
      <div v-if="hasHeader" class="card__header">
        <slot name="cardHeader"></slot>
      </div>
      <div
        v-if="hasBody"
        class="card__body"
        :class="{ card__body_pt: !hasHeader }"
      >
        <slot name="cardBody"></slot>
      </div>
      <div v-if="hasFooter" class="card__footer">
        <slot name="cardFooter"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "",
    },
    themeDark: {
      type: Boolean,
      default: false,
    },
    hasShadow: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
    hasRound: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasHeader() {
      return !!this.$scopedSlots.cardHeader;
    },
    hasBody() {
      return !!this.$scopedSlots.cardBody;
    },
    hasFooter() {
      return !!this.$scopedSlots.cardFooter;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  $c: &;

  &_has {
    &_shadow {
      #{$c} {
        box-shadow: 0px 4px 8px var(--color-shadow-light-gray);
      }
    }

    &_border {
      #{$c} {
        &__inner {
          border: 1px solid var(--color-shadow-light-gray);
        }
      }
    }
    &_round {
      #{$c} {
        &__inner {
          border-radius: 4px;
          overflow: hidden;
        }
      }
    }
  }

  &_size {
    &_s {
      #{$c} {
        &__body {
          padding: 14px 12px;
        }
      }
    }

    &_m {
      #{$c} {
        &__body {
          padding: 40px 30px;
        }
      }
    }
  }

  &_theme {
    &_dark {
      #{$c} {
        &__inner {
          background: var(--color-gray-10);
          color: var(--color-white);
        }
      }
    }

    &_light {
      #{$c} {
        &__inner {
          background: var(--color-white);
        }
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    & > * {
      flex-shrink: 0;
    }
  }

  &__header {
    & img {
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      overflow: hidden;
    }
  }
}
</style>
