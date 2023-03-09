<template>
  <div>
    <div class="flex flex-start gap-16">
      <v-textarea
        label="Textarea with resize and counter"
        placeholder="Placeholder"
        helper="Helper text"
        :limit="1000"
      />
      <div>
        <v-textarea
          class="mb-24"
          label="Error message"
          placeholder="Placeholder"
          helper="Error text"
          fixed
          hasError
        />
        <v-textarea
          label="Custom rows count (10)"
          placeholder="Placeholder"
          helper="Error text"
          fixed
          :rows="10"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VTextarea from "@/components/Textarea/VTextarea.vue";

export default {
  components: {
    VTextarea,
  },
};
</script>
