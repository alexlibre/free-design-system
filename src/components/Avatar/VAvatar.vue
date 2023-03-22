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
    <div class="avatar__inner">
      <img :src="require(`@/assets/img/${image}`)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "placeholder.png",
    },
    size: {
      type: String,
      default: "m",
    },
    name: {
      type: String,
      required: true,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    currentImage() {
      return "/assets/img/placeholder.png";
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  $c: &;
  padding: 4px;
  background: var(--color-white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &_size {
    &_s {
      width: 56px;
      height: 56px;
    }

    &_m {
      width: 80px;
      height: 80px;
    }

    &_l {
      width: 128px;
      height: 128px;
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

    & img {
      display: block;
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
}
</style>
