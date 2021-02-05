<template>
  <div id="nav">
    <router-link to="/">
    </router-link>
    <v-spacer />
    <div v-if="isLogin" class="user">
      {{ userName }}様
      <v-btn
        icon
        color="#095392"
        @click="logoutHandler"
        large
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    logoutHandler() {
      this.logout();
    },
    ...mapActions("user", ["logout"])
  },
  computed: {
    ...mapState({
      userName: state => state.user.name,
      isLogin: state => state.user.isLogin
    })
  }
};
</script>
<style lang="scss" scoped>
@import "../../scss/abstracts/_variables";
#nav {
  padding: 1rem;
  display: flex;
}

.user {
  font-weight: 400;
  color: $color-secondary;
  line-height: calc(#{$nav-height} * 0.7);
}
</style>
