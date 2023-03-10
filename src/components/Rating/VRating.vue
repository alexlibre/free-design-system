<template>
  <div
    class="rating"
    :class="`rating_view_${view} rating_color_${color}`"
    :id="guid"
  >
    <div class="rating__inner">
      <div class="rating__points">
        <template v-if="!static">
          <label
            class="rating__label"
            :for="`${guid}-${idx}`"
            :key="`${guid}-${idx}`"
            v-for="(item, idx) in Array(range)"
          >
            <input
              type="radio"
              :id="`${guid}-${idx}`"
              :name="guid"
              @change="select(idx + 1)"
            />
            <div class="rating__control" :class="{ checked: idx + 1 <= rate }">
              <svg-icon :name="view" :size="[size]" />
            </div>
          </label>
        </template>
        <template v-else>
          <div
            class="rating__item"
            v-for="(item, idx) in Array(range)"
            :key="guid + '-' + idx"
          >
            <svg-icon :name="view" :size="[size]" />
          </div>
        </template>
      </div>
      <span class="rating__qty" v-if="small">{{ initial }}</span>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  props: {
    static: {
      type: Boolean,
      default: false,
    },
    view: {
      type: String,
      default: "star",
    },
    small: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Number,
      default: 5,
    },
    size: {
      type: Number,
      default: 20,
    },
    color: {
      type: String,
      default: "yellow",
    },
    initial: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      rate: this.initial,
    };
  },
  components: {
    SvgIcon,
  },
  computed: {
    guid() {
      return (Math.random() + 1).toString(36).substring(2);
    },
  },
  methods: {
    select(val) {
      this.rate = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.rating {
  $c: &;

  &_color {
    &_yellow {
      #{$c} {
        &__control {
          color: var(--color-yellow-1-5);
          &.checked {
            color: var(--color-yellow-4);
          }
        }

        &__points {
          color: var(--color-yellow-4);
        }
      }
    }

    &_red {
      #{$c} {
        &__control {
          color: var(--color-red-1-5);
          &.checked {
            color: var(--color-red-5);
          }
        }

        &__points {
          color: var(--color-red-5);
        }
      }
    }

    &_blue {
      #{$c} {
        &__control {
          color: var(--color-blue-1);
          &.checked {
            color: var(--color-blue-6);
          }
        }

        &__points {
          color: var(--color-blue-6);
        }
      }
    }

    &_green {
      #{$c} {
        &__control {
          color: var(--color-green-2);
          &.checked {
            color: var(--color-green-9-5);
          }
        }

        &__points {
          color: var(--color-green-9-5);
        }
      }
    }

    &_orange {
      #{$c} {
        &__control {
          color: var(--color-orange-1-5);
          &.checked {
            color: var(--color-orange-5);
          }
        }

        &__points {
          color: var(--color-orange-5);
        }
      }
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  &__points {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  & input {
    display: none;
  }

  &__control {
    cursor: pointer;
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__qty {
    font-size: 16px;
    line-height: 1;
    color: var(--color-gray-4);
  }
}

@media (prefers-color-scheme: dark) {
  .rating {
    &__qty {
      color: var(--color-hite);
    }
  }
}
</style>
