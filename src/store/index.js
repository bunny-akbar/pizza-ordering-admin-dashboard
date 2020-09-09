import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // central variable, it shall store all the orders to be showed in a view (when fetching from the server, if pagination is implemented, only that number of orders will be held in this variable)
    orders: {},
    // to show global loader when required
    showLoader: false,
  },
  mutations: {
    SET_ORDERS(state, payload) {
      // updates orders on client if any status changes are made
      state.orders = payload;
    },
    TOGGLE_LOADER(state, payload) {
      state.showLoader = payload;
    },
  },
  actions: {},
  modules: {},
});
