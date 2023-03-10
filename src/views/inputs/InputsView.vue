<template>
  <div>
    <div class="flex flex-start gap-16">
      <v-input id="input-1" label="Input" labelSecond="Second label" />
      <v-input id="input-2" label="Disabled" disabled />
      <v-input
        id="input-3"
        label="Success"
        state="success"
        icon="tick-circle"
        helper="Checked"
      />
      <v-input
        id="input-4"
        label="Error"
        state="error"
        icon="info-circle"
        helper="Error occured"
      />
    </div>
    <div class="flex flex-start gap-16">
      <v-input id="input-5" helper="Helper text" />
      <v-input id="input-6" disabled />
      <v-input id="input-7" state="success" icon="tick-circle" />
      <v-input id="input-8" state="error" icon="info-circle" />
    </div>
    <div class="flex flex-start gap-16">
      <v-input
        id="input-9"
        label="Label"
        labelSecond="Second label"
        helper="Helper text"
        icon="eye"
      />
    </div>
  </div>
</template>

<script>
import VInput from "@/components/Input/VInput.vue";

export default {
  components: {
    VInput,
  },
};
</script>
