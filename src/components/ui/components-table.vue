<template>
  <div class="wrap">
    <table class="components-table">
      <thead>
        <tr>
          <th class="components-table__attributes">Attributes</th>
          <th class="components-table__values">Values</th>
          <th class="components-table__types">Types</th>
          <th class="components-table__default">Default</th>
          <th class="components-table__required">Required</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.attr">
          <td class="components-table__attributes">
            <router-link :to="`#${item.attr}`">{{ item.attr }}</router-link>
          </td>
          <td class="components-table__values" v-html="value(item.values)"></td>
          <td class="components-table__types">{{ item.types.join(" | ") }}</td>
          <td class="components-table__default">{{ item.default }}</td>
          <td class="components-table__required">
            <span class="components-table__icon" v-if="item.required">
              <svg-icon name="tick-circle" :size="[18]"
            /></span>
            <span v-else></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    SvgIcon,
  },
  methods: {
    value(val) {
      return val.join(" | ");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  overflow-x: auto;
  margin-bottom: 48px;
}
.components-table {
  $c: &;

  max-width: 1140px;

  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;

  thead {
    border-bottom: 1px solid var(--color-gray--1);
    background: var(--color-white);
  }

  tbody tr {
    background: var(--color-white);
    transition: background 0.2s linear;
    &:hover {
      background: var(--color-gray--1);
    }
  }

  th {
    min-width: 150px;
  }

  th,
  td {
    padding: 1rem;
  }

  td {
    color: var(--color-gray-8);
    & {
      #{$c}__icon {
        color: var(--color-blue-5);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      a {
        color: inherit;
        text-decoration: none;
        font-family: monospace;
        font-size: 1rem;
        line-height: 1rem;
      }
    }
  }

  &__attributes,
  &__values {
    text-align: left;
  }

  &__required,
  &__default,
  &__types {
    text-align: center;
  }
}
</style>
