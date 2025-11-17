<template>
  <div
    class="avatar"
    :class="{
      avatar_rounded: rounded,
      avatar_size_s: size === 's',
      avatar_size_m: size === 'm',
      avatar_size_l: size === 'l',
    }"
  >
    <div
      class="avatar__inner"
      :class="{
        'avatar__inner_no-image': !image,
        'avatar__inner_no-image_1': randomColor === 1,
        'avatar__inner_no-image_2': randomColor === 2,
        'avatar__inner_no-image_3': randomColor === 3,
        'avatar__inner_no-image_4': randomColor === 4,
      }"
    >
      <template v-if="image">
        <img :src="getImageUrl(image)" />
      </template>
      <div v-else :class="`avatar__initials avatar__initials_${randomColor}`">
        {{ letter }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  image?: string;
  size?: "s" | "m" | "l";
  name: string;
  rounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  image: "",
  size: "m",
  rounded: true,
});

const randomColor = ref(Math.floor(Math.random() * 4) + 1);

const letter = computed(() => {
  const two = props.name.split(" ");
  if (two.length >= 2) {
    return [
      two[0].split("")[0].toUpperCase(),
      two[1].split("")[0].toUpperCase(),
    ].join("");
  }
  return props.name.split("")[0].toUpperCase();
});

const getImageUrl = (imageName: string) => {
  // Vite handles dynamic imports from assets
  return new URL(`../../assets/img/${imageName}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
@use "sass:list";
$randomColors: "blue", "red", "yellow", "green";
$randomColor: list.nth($randomColors, random(4));
.avatar {
  $c: &;
  padding: 4px;
  background: var(--color-white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &_size {
    &_s {
      width: 56px;
      height: 56px;

      #{$c} {
        &__initials {
          font-size: 20px;
        }
      }
    }

    &_m {
      width: 80px;
      height: 80px;

      #{$c} {
        &__initials {
          font-size: 28px;
        }
      }
    }

    &_l {
      width: 128px;
      height: 128px;

      #{$c} {
        &__initials {
          font-size: 44px;
        }
      }
    }
  }

  &_rounded {
    border-radius: 50%;
    overflow: hidden;

    #{$c} {
      &__inner {
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }

  &__inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &_no-image {
      @for $i from 1 through 4 {
        &_#{$i} {
          background-color: var(--color-#{list.nth($randomColors, $i)}-0-5);
        }
      }
    }

    & img {
      display: block;
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }

  &__initials {
    @for $i from 1 through 4 {
      &_#{$i} {
        color: var(--color-#{list.nth($randomColors, $i)}-9);
      }
    }
  }
}
</style>
