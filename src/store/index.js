import Vue from "vue";
import Vuex from "vuex";
import { user } from "./app/user";
import { dialog } from "./app/dialog";
import { subNav } from "./app/subNav";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    dialog,
    subNav
  },
  state: {
    isLoading: false
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    }
  }
});
