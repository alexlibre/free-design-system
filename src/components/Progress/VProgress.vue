<template>
  <div
    class="progress"
    :class="{
      progress_view_primary: view === 'primary',
      progress_view_rounded: view === 'rounded',
      progress_view_blob: view === 'blob',
      progress_color_red: color === 'red',
      progress_color_orange: color === 'orange',
      progress_color_yellow: color === 'yellow',
      progress_color_green: color === 'green',
      progress_color_blue: color === 'blue',
      progress_color_gray: color === 'gray',
      progress_show_percent: showPercent,
    }"
  >
    <span class="progress__bar" :style="fillPercent"></span>
    <span class="progress__percent" v-if="showPercent">{{ percent }}%</span>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      required: true,
    },
    view: {
      type: String,
      default: "primary",
    },
    color: {
      type: String,
      default: "blue",
    },
    showPercent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    fillPercent() {
      return "width: " + this.percent + "%";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
$colors: "orange", "red", "yellow", "green", "blue", "violet", "gray";
.progress {
  $c: &;

  width: 100%;
  position: relative;

  &_color {
    @include repeatColorBlock($colors) {
      &_#{$color} {
        &#{$c} {
          &_view {
            &_primary {
              background: var(--color-#{$color}-0-5);
            }

            &_blob {
              background: var(--color-gray--1);
            }
          }
        }

        #{$c} {
          &__bar {
            background: var(--color-#{$color}-5);
          }
        }
      }
    }
  }

  &_view {
    &_primary {
      height: 4px;
    }

    &_rounded {
      display: none;
    }

    &_blob {
      width: 320px;
      height: 24px;
      border-radius: 24px;
      overflow: hidden;

      #{$c} {
        &__percent {
          right: 4px;
          top: 2px;
        }
      }
    }
  }

  &__bar {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__percent {
    position: absolute;
    z-index: 2;
  }
}
</style>
