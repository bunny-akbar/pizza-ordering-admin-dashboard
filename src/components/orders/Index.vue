<template>
  <v-container>
    <!-- Note: about the directory structure, I bundle modules together. Here, orders are one of the major modules for the project 
    The partials folder has code that can be used throughout the project in complete or part-->

    <!-- This is how I structure the orders page. Widgets followed by the order list -->
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
      // sets the global loader
      this.$store.commit("TOGGLE_LOADER", true);

      const ordersFromDatabase = require("../../database.json");

      setTimeout(() => {
        // just to give a feelinf that data is loaded from the database
        this.$store.commit("SET_ORDERS", ordersFromDatabase);

        this.$store.commit("TOGGLE_LOADER", false);
      }, 1500);
    },
  },
};
</script>