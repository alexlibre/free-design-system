<template>
  <div
    class="card"
    :class="`${size ? 'card_size_' + size : ''} card_theme_${
      themeDark ? 'dark' : 'light'
    } ${shadow ? 'card_has_shadow' : ''}`"
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
    shadow: {
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
        &__inner {
          box-shadow: 0px 4px 8px rgba(41, 41, 41, 0.08);
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
