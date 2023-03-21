<template>
  <div class="modal">
    <div class="modal__cloak" @click="close"></div>
    <div class="modal__wrapper" ref="modal">
      <div class="modal__inner">
        <div class="modal__header">
          <slot name="header">
            <v-button
              size="l"
              class="modal__close-btn"
              view="text"
              @click="close"
              icon="close-circle"
            />
          </slot>
        </div>
        <div v-if="body" class="modal__body">
          <slot name="body"></slot>
        </div>
        <div v-if="footer" class="modal__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/Button/VButton";

import { gsap } from "gsap";

export default {
  components: {
    VButton,
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
  },
  computed: {
    body() {
      return this.$slots.body;
    },
    footer() {
      return this.$slots.footer;
    },
  },
  mounted() {
    gsap.from(this.$refs.modal, {
      scale: 0.5,
      y: "-100%",
      opacity: 0,
      duration: 0.3,
    });
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__cloak {
    background-color: var(--color-gray-8);
    opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-white);
    padding: 2rem;
  }

  &__header {
    min-height: 20px;
  }

  &__close-btn {
    position: absolute;
    top: 0;
    right: 0;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }
}
</style>
