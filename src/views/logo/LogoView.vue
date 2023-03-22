<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'icon',
          values: ['any'],
          types: ['string'],
          default: '',
          required: true,
        },
        {
          attr: 'size',
          values: ['s', 'm', 'l'],
          types: ['string'],
          default: 'l',
        },
        {
          attr: 'color',
          values: ['positive', 'negative', 'colored', 'white', 'colored-only'],
          types: ['string'],
          default: 'positive',
        },
        {
          attr: 'name',
          values: ['any'],
          types: ['string'],
          default: '',
        },
      ]"
    />

    <components-block id="icon" title="icon">
      <v-logo icon="7spaces" name="7spaces" />
    </components-block>

    <components-block id="size" title="size">
      <div class="flex gap-16">
        <v-logo icon="7spaces" name="7spaces" />
        <v-logo icon="7spaces" name="7spaces" size="m" />
        <v-logo icon="7spaces" name="7spaces" size="s" />
      </div>
    </components-block>

    <components-block id="color" title="color">
      <div class="flex gap-16">
        <v-logo icon="7spaces" name="7spaces" />
        <v-logo icon="7spaces" name="7spaces" color="negative" />
        <v-logo icon="7spaces" name="7spaces" color="colored" />
        <div class="add-bg">
          <v-logo icon="7spaces" name="7spaces" color="white" />
        </div>
        <v-logo icon="7spaces" name="7spaces" color="colored-only" />
      </div>
    </components-block>

    <components-block id="icon" title="icon">
      <div class="flex gap-16">
        <v-logo icon="7spaces" />
        <v-logo icon="7spaces" name="7spaces" />
      </div>
    </components-block>
  </div>
</template>

<script>
import VLogo from "@/components/Logo/VLogo.vue";
import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VLogo,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>

<style lang="scss" scoped>
.add-bg {
  position: relative;
  z-index: 2;

  &:before {
    content: "";
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: var(--color-gray-10);
    position: absolute;
    z-index: -1;
  }
}
</style>
