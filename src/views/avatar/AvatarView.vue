<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'image',
          values: ['any image from <code>/assets/img/</code>'],
          types: ['string'],
          default: '',
        },
        {
          attr: 'name',
          values: ['any string for <code>alt</code> property'],
          types: ['string'],
          default: '',
          required: true,
        },
        {
          attr: 'size',
          values: ['s', 'm', 'l'],
          types: ['string'],
          default: 'm',
        },
        {
          attr: 'rounded',
          values: [true, false],
          types: ['boolean'],
          default: 'true',
        },
      ]"
    />

    <components-block
      id="image"
      title="image"
      desc="Image for avatar item. If no image provided it will be replaced with initials created from the name. In initials case avatar will be randomly colored in one of 4 predefined colors: red, yellow, green or blue."
    >
      <div class="flex gap-16">
        <v-avatar image="user-1.png" name="image-1" />
        <v-avatar name="Alex" />
        <v-avatar name="Alex Poskorkov" />
      </div>
    </components-block>
    <components-block id="size" title="size">
      <div class="flex gap-16 flex-start">
        <v-avatar image="user-1.png" name="size-s" size="s" />
        <v-avatar image="user-1.png" name="size-m" />
        <v-avatar image="user-1.png" name="size-l" size="l" />
      </div>
    </components-block>
    <components-block id="rounded" title="rounded">
      <div class="flex gap-16">
        <v-avatar image="user-1.png" name="rounded-true" />
        <v-avatar image="user-1.png" :rounded="false" name="rounded-false" />
      </div>
    </components-block>
  </div>
</template>

<script>
import VAvatar from "@/components/Avatar/VAvatar";

import ComponentsTable from "@/components/ui/components-table.vue";
import ComponentsBlock from "@/components/ui/components-block.vue";

export default {
  components: {
    VAvatar,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>
