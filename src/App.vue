<template>
  <v-app id="app">
    <!-- Nav -->
    <Nav id="nav" />

    <!-- Show Messages -->
    <Dialog />

    <!-- Progress Bar -->
    <v-progress-linear
      :indeterminate="isLoading"
      :color="isLoading ? '#043458' : ''"
    ></v-progress-linear>

    <!-- Body -->
    <div id="body">
      <!-- SubNav -->
      <SubNav v-if="isLogin" id="subNav" />

      <!-- View -->
      <router-view id="view" />
    </div>

    <!-- Footer -->
    <Footer id="footer" />

    <!-- Overlay -->
    <v-overlay v-if="isLoading" />
  </v-app>
</template>
<script>
import Nav from "./components/app/Nav.vue";
import Dialog from "./components/app/Dialog.vue";
import SubNav from "./components/app/SubNav.vue";
import Footer from "./components/app/Footer.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      isLogin: state => state.user.isLogin
    })
  },
  components: {
    Nav,
    Dialog,
    SubNav,
    Footer
  }
};
</script>
<style lang="scss">
@import "./scss/abstracts/variables";
@import "./scss/abstracts/extends";
@import "./scss/abstracts/mixins";

#app {
  color: #2c3e50;
  #nav {
    height: $nav-height;
    background-color: $color-app;
  }

  #body {
    display: flex;
    height: $body-height;
    #subNav {
      width: $subNavi-width;
      @include mq-w("large") {
        max-width: $subNavi-max-width;
      }
      @include mq-w("small") {
        min-width: $subNavi-min-width;
      }
      border-right: 0.01rem solid rgba(0, 0, 0, 0.07);
    }
    #view {
      width: 100%;
    }
  }

  #footer {
    height: $footer-height;
    background-color: $color-app;
    width: 100vw;
    line-height: $footer-height;
    padding: 0.1rem 3rem 0.1rem 3rem;
    @extend %clearfix;
  }
}
</style>
