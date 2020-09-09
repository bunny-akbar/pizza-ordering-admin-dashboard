<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <widgets />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <order-details />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Orders",
  components: {
    Widgets: () => import("./Widgets.vue"),
    OrderDetails: () => import("./OrderDetails.vue"),
  },
  created() {
    // since we have no dependencies for DOM painting yet, we will set the data on component create
    this.setData();
  },
  methods: {
    setData() {
      this.$store.commit("TOGGLE_LOADER", true);

      const ordersFromDatabase = require("../../database.json");

      setTimeout(() => {
        this.$store.commit("SET_ORDERS", ordersFromDatabase);

        this.$store.commit("TOGGLE_LOADER", false);
      }, 1500);
    },
  },
};
</script>