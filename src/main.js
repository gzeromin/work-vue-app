import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./scss/index.scss";

Vue.config.productionTip = false;
// role
//  guest: -1 (not login)
//  employee: 0
//  manager: 1
//  admin: 2
router.beforeEach(async (to, from, next) => {
  let role = await store.dispatch("user/auth");
  if (to.matched.some(record => record.meta.guest)) {
    next();
  } else if (to.matched.some(record => record.meta.is_admin)) {
    next();
  } else {
    // normal: login_required
    if (role < 0) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
