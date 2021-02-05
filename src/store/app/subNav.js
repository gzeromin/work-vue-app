const axios = require("axios");
import router from "../../router";

export const subNav = {
  namespaced: true,
  state: {
    activeKey: ""
  },
  mutations: {
    SET_ACTIVE_KEY(state, value) {
      state.activeKey = value;
      router.push(value);
    }
  },
  actions: {
    subNavHandler(context, payload) {
      payload.map(selectedKey => {
        if (context.state.activeKey !== selectedKey) {
          context.commit("SET_ACTIVE_KEY", selectedKey);
        }
      });
    }
  }
};
