<template>
  <!-- This component has orders listed and it shall take care of all the actions that can happen in this component -->
  <v-card min-height="100px" flat color="transparent" class="app-shadow">
    <v-card-title class="px-0">Orders</v-card-title>
    <v-list style="border-radius:8px">
      <v-list-item
        v-for="(order, id) in orders"
        style="background-color:white"
        class="my-2"
        :key="id"
      >
        <v-list-item-content align="left">
          <v-list-item-title class="subtitle-1" v-text="order.customer.name"></v-list-item-title>
          <v-list-item-subtitle class="caption pt-1 font-weight-regular">
            <v-icon size="12">mdi-phone</v-icon>
            {{order.customer.phone}}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content align="center">
          <v-list-item-title class="subtitle-1" v-text="order.items"></v-list-item-title>
          <v-list-item-subtitle class="caption pt-1 font-weight-regular" v-text="`items`" />
        </v-list-item-content>

        <v-list-item-content align="center">
          <v-list-item-title class="subtitle-1" v-text="`Rs. ${order.amount}`"></v-list-item-title>
          <v-list-item-subtitle class="caption pt-1 font-weight-regular" v-text="`amount`" />
        </v-list-item-content>

        <v-list-item-content align="right">
          <v-list-item-title>
            <v-chip dark small :color="setColor(order.status)">{{order.status}}</v-chip>
            <br />
            <v-btn
              v-if="order.status != 'ready'"
              text
              small
              @click="updateStatus(id, order.status)"
            >Mark {{ order.status === 'preparing' ? 'ready' : 'preparing'}}</v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "OrderDetails",
  data() {
    return {};
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
  methods: {
    setColor(status) {
      if (status === "received") return "red";
      if (status === "preparing") return "blue";
      if (status === "ready") return "green";
    },
    updateStatus(id, status) {
      // cloning the actual object to make sure nothing in the store is directly changed
      const allOrders = JSON.parse(JSON.stringify(this.orders));

      if (status === "received") allOrders[id].status = "preparing";
      if (status === "preparing") allOrders[id].status = "ready";

      this.$store.commit("SET_ORDERS", allOrders);
    },
  },
};
</script>