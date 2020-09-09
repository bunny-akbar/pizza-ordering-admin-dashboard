import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

function init() {
  // to add any init code, to execute before the app is rendered
}

new Vue({
  router,
  store,
  vuetify,
  components: { App },
  created() {
    init.call(this);
  },
  template: "<App/>",
}).$mount("#app");
