<template>
  <div>
    <div class="flex gap-16 flex-start">
      <v-card size="m">
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
              <v-button @click="logClick">Continue</v-button>
            </div>
          </div>
        </template>
      </v-card>

      <v-card size="s" theme-dark class="menu-card">
        <template #cardHeader>
          <img src="@/assets/img/pizza.jpg" alt="pizza" />
        </template>
        <template #cardBody>
          <div class="flex justify-between mb-4">
            <h5>Пицца Карбонара</h5>
            <v-rating :initial="5" small :range="1" static />
          </div>
          <p>650₽</p>
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
import VRating from "@/components/Rating/VRating.vue";

export default {
  components: {
    VButton,
    VInput,
    VCard,
    VTextarea,
    VRating,
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

.menu-card {
  max-width: 400px;
}
</style>
