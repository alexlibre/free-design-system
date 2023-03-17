<template>
  <div
    class="card"
    :class="`card_size_${size} card_theme_${themeDark ? 'dark' : 'light'}`"
  >
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
  props: {
    size: {
      type: String,
      default: "m",
    },
    themeDark: {
      type: Boolean,
      default: false,
    },
  },
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
  $c: &;

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
  &__inner {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(41, 41, 41, 0.08);
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
