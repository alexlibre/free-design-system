<template>
  <div
    class="avatar-group"
    :class="{
      'avatar-group_size_s': size === 's',
      'avatar-group_size_m': size === 'm',
      'avatar-group_size_l': size === 'l',
    }"
  >
    <div class="avatar-group__inner">
      <v-avatar
        class="avatar-group__item"
        v-for="item in list"
        :key="item.name"
        :name="item.name"
        :image="item.image"
        :size="size"
        :rounded="rounded"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import VAvatar from "@/components/Avatar/VAvatar.vue";

interface AvatarItem {
  name: string;
  image?: string;
}

interface Props {
  list: AvatarItem[];
  size?: "s" | "m" | "l";
  rounded?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "m",
  rounded: true,
});
</script>

<style lang="scss" scoped>
.avatar-group {
  $c: &;
  &_size {
    &_s {
      #{$c} {
        &__item {
          &:not(:first-child) {
            margin-left: -21px;
          }
        }
      }
    }
    &_m {
      #{$c} {
        &__item {
          &:not(:first-child) {
            margin-left: -30px;
          }
        }
      }
    }
    &_l {
      #{$c} {
        &__item {
          &:not(:first-child) {
            margin-left: -48px;
          }
        }
      }
    }
  }
  &__inner {
    display: flex;
  }

  &__item {
    &:first-child {
      z-index: 5;
    }

    &:nth-child(2) {
      z-index: 4;
    }
    &:nth-child(3) {
      z-index: 3;
    }
    &:nth-child(4) {
      z-index: 2;
    }
    &:nth-child(5) {
      z-index: 1;
    }
  }
}
</style>
