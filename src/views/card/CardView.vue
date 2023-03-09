<template>
  <div>
    <div class="flex flex-start gap-16">
      <v-card>
        <template v-slot:body>
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
              <v-button :onClick="logClick">Continue</v-button>
            </div>
          </div>
        </template>
      </v-card>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/Button/VButton.vue";
import VInput from "@/components/Input/VInput.vue";
import VCard from "@/components/Card/VCard.vue";
import VTextarea from "@/components/Textarea/VTextarea.vue";

export default {
  components: {
    VButton,
    VInput,
    VCard,
    VTextarea,
  },
  methods: {
    logClick() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss" scoped></style>
