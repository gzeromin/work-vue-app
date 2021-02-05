const axios = require("axios");
import router from "../../router";

export const user = {
  namespaced: true,
  state: {
    email: "",
    employeeNo: "",
    hurigana: "",
    id: "",
    managerNo: "",
    name: "",
    password: "",
    role: "",
    isLogin: false
  },
  mutations: {
    setLogin(state, value) {
      state.email = value.email;
      state.employeeNo = value.employeeNo;
      state.hurigana = value.hurigana;
      state.id = value.id;
      state.managerNo = value.managerNo;
      state.name = value.name;
      state.password = value.password;
      state.role = value.role;
      state.isLogin = true;
    },
    setLogout(state, value) {
      state.email = "";
      state.employeeNo = "";
      state.hurigana = "";
      state.id = "";
      state.managerNo = "";
      state.name = "";
      state.password = "";
      state.role = "";
      state.isLogin = false;
    }
  },
  actions: {
    login(context, payload) {
      context.commit("setIsLoading", true, { root: true });
      axios
        .post("/api/user/login", payload)
        .then(res => {
          if (res.data.success) {
            context.commit("setLogin", res.data.result);
            router.push("/");
          } else {
            context.dispatch(
              "dialog/openDialog",
              {
                show: true,
                type: "warning",
                message: res.data.err
              },
              { root: true }
            );
          }
        })
        .catch(err => {
          context.dispatch(
            "dialog/openDialog",
            {
              show: true,
              type: "error",
              message: "エラー",
              subMessage: err
            },
            { root: true }
          );
        })
        .finally(() => {
          context.commit("setIsLoading", false, { root: true });
        });
    },
    auth(context) {
      return new Promise((resolve, reject) => {
        axios.get("/api/user/auth").then(res => {
          if (res.data.success) {
            context.commit("setLogin", res.data.result);
            resolve(parseInt(res.data.result.role));
          } else {
            resolve(-1);
          }
        });
      });
    },
    logout(context) {
      context.commit("setIsLoading", true, { root: true });
      axios
        .get("/api/user/logout")
        .then(() => {
          context.commit("setLogout");
          router.push("/login");
        })
        .catch(err => {
          context.dispatch(
            "dialog/openDialog",
            {
              show: true,
              type: "error",
              message: "エラー",
              subMessage: err
            },
            { root: true }
          );
        })
        .finally(() => {
          context.commit("setIsLoading", false, { root: true });
        });
    }
  }
};
