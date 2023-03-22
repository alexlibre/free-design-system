<template>
  <div>
    <v-button @click="toggleModal">Show modal</v-button>
    <v-modal v-if="showModal" @closeModal="toggleModal">
      <template #body>
        <v-card class="modal-form">
          <template #cardBody>
            <div class="form">
              <div class="form__inner">
                <h4>Send Invitation</h4>
                <v-input
                  id="card-input"
                  label="Email"
                  type="email"
                  text="hello.mail.cristian.com"
                  placeholder="hello@mail.com"
                />
                <v-textarea label="Message" placeholder="Placeholder" isFixed />
                <v-button>Continue</v-button>
              </div>
            </div>
          </template>
        </v-card>
      </template>
    </v-modal>
  </div>
</template>

<script>
import VModal from "@/components/Modal/VModal.vue";
import { mapState, mapActions } from "vuex";

import VButton from "@/components/Button/VButton.vue";
import VInput from "@/components/Input/VInput.vue";
import VCard from "@/components/Card/VCard.vue";
import VTextarea from "@/components/Textarea/VTextarea.vue";

export default {
  components: {
    VModal,
    VButton,
    VInput,
    VCard,
    VTextarea,
  },
  data() {
    return {
      name: "modal-1",
    };
  },
  computed: {
    ...mapState({
      showModal: (state) => state.modal.showModal,
    }),
  },
  methods: {
    ...mapActions("modal", ["updateModal"]),
    toggleModal() {
      this.updateModal();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.modal-form {
  width: calc(100vw - 96px);
  max-width: 500px;
}
</style>
