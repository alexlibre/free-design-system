<template>
  <div>
    <v-grid :cols="3">
      <template #0>
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
      </template>
      <template #1>
        <v-card size="s" theme-dark>
          <template v-slot:header>
            <img src="@/assets/img/pizza.jpg" alt="pizza" />
          </template>
          <template v-slot:body>
            <div class="flex justify-between mb-4">
              <h5>Пицца Карбонара</h5>
              <v-rating :initial="5" small :range="1" />
            </div>
            <p>650₽</p>
          </template>
        </v-card>
      </template>
    </v-grid>
  </div>
</template>

<script>
import VButton from "@/components/Button/VButton.vue";
import VInput from "@/components/Input/VInput.vue";
import VCard from "@/components/Card/VCard.vue";
import VTextarea from "@/components/Textarea/VTextarea.vue";
import VRating from "@/components/Rating/VRating.vue";
import VGrid from "@/components/ui/VGrid.vue";

export default {
  components: {
    VButton,
    VInput,
    VCard,
    VTextarea,
    VRating,
    VGrid,
  },
  methods: {
    logClick() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";

h5 {
  @include h5();
}
</style>
