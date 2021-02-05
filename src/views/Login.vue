<template>
  <div>
    <div id="loginForm">
      <v-container>
        <v-row>
          <v-col cols="3">
            Email
          </v-col>
          <v-col cols="9">
            <input type="text" v-model="email" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            Password
          </v-col>
          <v-col cols="9">
            <input type="password" v-model="password" />
          </v-col>
        </v-row>
        <v-row id="action">
          <v-spacer />
          <v-btn class="mr-4" @click="loginHandler">
            Login
          </v-btn>
          forget password...
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
import { mapActions, mapMutations } from "vuex";

export default {
  data: () => ({
    password: "",
    email: ""
  }),
  methods: {
    loginHandler() {
      const obj = {
        email: this.email,
        password: this.password
      };
      this.login(obj);
    },
    ...mapActions("user", ["login"])
  },
};
</script>
<style lang="scss" scoped>
#loginForm {
  max-width: 40rem;
  max-height: 30rem;
  margin: 30vh auto;
}

#action {
  margin-top: 4rem;
  margin-right: 3rem;
  height: 6rem;
  line-height: 4rem;
}
</style>
