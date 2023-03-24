<template>
  <div>
    <components-table
      :items="[
        {
          attr: 'list',
          values: ['array of avatar objects'],
          types: ['Array{}'],
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
    <components-block id="list" title="list">
      <div class="flex gap-16">
        <v-avatar-group
          :list="[
            {
              image: 'user-1.png',
              name: 'image-1',
            },
            {
              name: 'Alex',
            },
            {
              name: 'Alexander Poskorkov',
            },
          ]"
        />
      </div>
    </components-block>
    <components-block id="size" title="size">
      <div class="flex flex-col flex-start gap-16">
        <v-avatar-group
          :list="[
            {
              image: 'user-1.png',
              name: 'image-1',
            },
            {
              name: 'Alex',
            },
            {
              name: 'Alexander Poskorkov',
            },
          ]"
          size="s"
        />
        <v-avatar-group
          :list="[
            {
              image: 'user-1.png',
              name: 'image-1',
            },
            {
              name: 'Alex',
            },
            {
              name: 'Alexander Poskorkov',
            },
          ]"
        />
        <v-avatar-group
          :list="[
            {
              image: 'user-1.png',
              name: 'image-1',
            },
            {
              name: 'Alex',
            },
            {
              name: 'Alexander Poskorkov',
            },
          ]"
          size="l"
        />
      </div>
    </components-block>
    <components-block id="rounded" title="rounded">
      <div class="flex gap-16">
        <v-avatar-group
          :list="[
            {
              image: 'user-1.png',
              name: 'image-1',
            },
            {
              name: 'Alex',
            },
            {
              name: 'Alexander Poskorkov',
            },
          ]"
        />
        <v-avatar-group
          :rounded="false"
          :list="[
            {
              image: 'user-1.png',
              name: 'image-1',
            },
            {
              name: 'Alex',
            },
            {
              name: 'Alexander Poskorkov',
            },
          ]"
        />
      </div>
    </components-block>
  </div>
</template>

<script>
import VAvatarGroup from "@/components/AvatarGroup/VAvatarGroup";
import ComponentsTable from "@/components/ui/components-table";
import ComponentsBlock from "@/components/ui/components-block";
export default {
  components: {
    VAvatarGroup,
    ComponentsTable,
    ComponentsBlock,
  },
};
</script>

<style lang="scss" scoped></style>
