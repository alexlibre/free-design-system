<template>
  <div>
    <div class="flex flex-start gap-16">
      <v-card>
        <template #head> Head </template>
        <template #body>
          <div class="form">
            <div class="form__inner">
              <h4>Send Invitation</h4>
              <v-textarea label="Message" placeholder="Placeholder" />
              <v-button>Continue</v-button>
            </div>
          </div>
        </template>
      </v-card>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/Button/VButton.vue";
import VCard from "@/components/Card/VCard.vue";
import VTextarea from "@/components/Textarea/VTextarea.vue";

export default {
  components: {
    VButton,
    VCard,
    VTextarea,
  },
};
</script>

<style lang="scss" scoped></style>
