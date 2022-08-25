<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :options.sync="options"
      :server-items-length="totalDesserts"
      :loading="loading"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      totalDesserts: 0,
      desserts: [],
      options: {},
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "FirstName", value: "firstname" },
        { text: "LastName", value: "lastname" },
        { text: "Username", value: "username" },
        { text: "Password", value: "password" },
        { text: "Status", value: "status" },
      ],
    };
  },

  /**
   * In a real application this would be a call to fetch() or axios.get()
   */
};
</script>
