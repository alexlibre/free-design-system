<template>
  <div class="logo" :class="`logo_size_${size} logo_color_${color}`">
    <div class="logo__inner">
      <svg-icon class="logo__icon" :name="icon" :size="[iconSize]" />
      <span class="logo__name" v-if="name">{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

interface Props {
  icon: string;
  size?: "s" | "m" | "l";
  name?: string;
  color?: "positive" | "negative" | "colored" | "white" | "colored-only";
}

const props = withDefaults(defineProps<Props>(), {
  size: "l",
  name: "",
  color: "positive",
});

const iconSize = computed(() => {
  switch (props.size) {
    case "m":
      return 32;
    case "s":
      return 16;
    default:
      return 48;
  }
});
</script>

<style lang="scss" scoped>
.logo {
  $c: &;

  &_size {
    &_s {
      border-radius: 4px;

      #{$c}__inner {
        gap: 4px;
      }

      #{$c}__name {
        font-size: 10px;
      }
    }

    &_m {
      border-radius: 8px;

      #{$c}__inner {
        gap: 8px;
      }

      #{$c}__name {
        font-size: 16px;
      }
    }

    &_l {
      border-radius: 10px;

      #{$c}__inner {
        gap: 12px;
      }

      #{$c}__name {
        font-size: 32px;
      }
    }
  }

  &_color {
    &_positive {
      color: var(--color-gray-10);
      background: transparent;
    }

    &_negative {
      color: var(--color-white);
      background: var(--color-gray-10);
    }

    &_colored {
      color: var(--color-white);
      background: var(--color-blue-5);
    }

    &_white {
      color: var(--color-white);
      background: transparent;
    }

    &_colored-only {
      color: var(--color-blue-5);
      background: transparent;
    }
  }

  &__inner {
    padding: 10px;
    display: flex;
    align-items: center;
    color: inherit;
  }

  &__icon {
    color: inherit;
  }

  &__name {
    color: inherit;
    font-weight: 900;
  }
}
</style>
