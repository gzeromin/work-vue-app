export const dialog = {
  namespaced: true,
  state: {
    show: false,
    type: "success",
    message: "",
    subMessage: "",
    ok: "ok",
    cancel: "cancel",
    result: false
  },
  mutations: {
    setDialog(state, value) {
      state.show = true;
      state.type = value.type ? value.type : "success";
      state.message = value.message ? value.message : "";
      state.subMessage = value.subMessage ? value.subMessage : "";
      state.ok = value.ok ? value.ok : "ok";
      state.cancel = value.cancel ? value.cancel : "cancel";
    }
  },
  actions: {
    openDialog(context, payload) {
      context.commit("setDialog", payload);
      return new Promise((resolve, reject) => {
        context.state.result = resolve;
      });
    },
    closeDialog(context, payload) {
      context.state.result(payload);
      context.state.show = false;
    }
  }
};