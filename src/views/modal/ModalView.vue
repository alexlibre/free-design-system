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
                <v-switch
                  :checked="!stateEnabled"
                  @checked="onChecked"
                  label="Switch to enable fields"
                />
                <v-input
                  :disabled="stateEnabled"
                  id="card-input"
                  label="Email"
                  type="email"
                  text="hello.mail.cristian.com"
                  placeholder="hello@mail.com"
                />
                <v-textarea
                  :disabled="stateEnabled"
                  label="Message"
                  placeholder="Placeholder"
                  isFixed
                />
                <v-button :disabled="stateEnabled">Continue</v-button>
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
import VSwitch from "@/components/Switch/VSwitch.vue";
import VInput from "@/components/Input/VInput.vue";
import VCard from "@/components/Card/VCard.vue";
import VTextarea from "@/components/Textarea/VTextarea.vue";

export default {
  components: {
    VModal,
    VButton,
    VSwitch,
    VInput,
    VCard,
    VTextarea,
  },
  data() {
    return {
      name: "modal-1",
      stateEnabled: true,
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
    onChecked(val) {
      console.log(val);
      this.stateEnabled = !val;
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
