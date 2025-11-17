<template>
  <div class="content">
    <div class="rotator">
      <div class="rotator__el">
        <svg-icon name="Rotator" :size="[280]" />
      </div>

      <div class="rotator__logo">
        <svg-icon name="7spaces" :size="[72]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
</script>

<style lang="scss">
.rotator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;

  &__el {
    width: 280px;
    height: 280px;
    animation: rotation 16s infinite linear;
    transform-origin: center;
  }

  &__logo {
    position: absolute;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
