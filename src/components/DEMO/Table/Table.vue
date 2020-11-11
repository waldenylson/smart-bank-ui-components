<template>
  <table class="table-container">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(td, index) in tableContent" :key="index">
        <td>{{ td.name }}</td>
        <td class="td-type">{{ td.type }}</td>
        <td :class="`td-default-${td.default}`">{{ td.default }}</td>
        <td>{{ td.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    tableContent: [ Array, Object ] ,
  },
};
</script>
<style lang="scss" src="./Table.scss"></style>