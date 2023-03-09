<template>
  <table>
    <thead>
      <tr>
        <th>Attributes</th>
        <th>Values</th>
        <th>Types</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.attr">
        <td>{{ item.attr }}</td>
        <td>{{ item.values.join(", ") }}</td>
        <td>{{ item.types.join(", ") }}</td>
        <td>{{ item.default }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  // width: 100%;
  border-collapse: collapse;

  thead {
    border-bottom: 1px solid var(--color-main-colors-gray--1);
    background: var(--color-white);
  }

  tbody tr {
    background: var(--color-white);
    transition: background 0.2s ease;
    &:hover {
      background: var(--color-main-colors-orange-0-5);
    }
  }

  th {
    color: var(--color-main-colors-gray-4);
    text-align: left;
    min-width: 150px;
  }

  th,
  td {
    padding: 1rem;
  }

  td {
    color: var(--color-main-colors-gray-2);
  }
}
</style>
