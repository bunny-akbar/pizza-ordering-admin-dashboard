<template>
  <v-card flat color="transparent">
    <v-card-title class="px-0">Insights</v-card-title>
    <v-row>
      <v-col cols="12" class="pt-0" md="3">
        <widget
          title="Completed Orders"
          icon="mdi-emoticon-cool"
          info="These orders were marked ready"
          widgetThemeColor="success"
          :value="completedOrders"
        />
      </v-col>
      <v-col cols="12" class="pt-0" md="3">
        <widget
          title="Pending Orders"
          icon="mdi-av-timer"
          info="Orders received but not completed yet"
          widgetThemeColor="error"
          :value="pendingOrders"
        />
      </v-col>
      <v-col cols="12" class="pt-0" md="3">
        <widget
          title="Currently Preparing"
          icon="mdi-chef-hat"
          info="Orders currently under preparation"
          widgetThemeColor="primary"
          :value="preparingOrders"
        />
      </v-col>
      <v-col cols="12" class="pt-0" md="3">
        <widget
          title="Amount Collected"
          icon="mdi-currency-inr"
          info="The total amount of money collected from your orders"
          widgetThemeColor="#FFD700"
          :value="amount"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Orders",
  components: {
    Widget: () => import("@/components/partials/Widget.vue"),
  },
  computed: {
    completedOrders() {
      let ctr = 0;
      const orders = this.$store.state.orders;
      for (let key in orders) {
        if (orders[key].status === "ready") ctr++;
      }
      return ctr;
    },
    pendingOrders() {
      let ctr = 0;
      const orders = this.$store.state.orders;
      for (let key in orders) {
        if (orders[key].status === "received") ctr++;
      }
      return ctr;
    },
    preparingOrders() {
      let ctr = 0;
      const orders = this.$store.state.orders;
      for (let key in orders) {
        if (orders[key].status === "preparing") ctr++;
      }
      return ctr;
    },
    amount() {
      let amt = 0;
      const orders = this.$store.state.orders;
      for (let key in orders) {
        amt += orders[key].amount;
      }

      // formatting the amt to INR using JS number formatting
      const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      });
      return currencyFormatter.format(amt);
    },
  },
};
</script>