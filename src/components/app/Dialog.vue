<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-system-bar :color="color">
          <v-icon small>{{ typeIcon }}</v-icon>
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-system-bar>
        <v-card-title class="headline" v-if="message">
          {{ message }}
        </v-card-title>
        <v-card-text v-if="subMessage">
          {{ subMessage }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            :color="color"
            text 
            @click="() => closeDialog(false)"
            v-if="type == 'confirm'"
          >
            {{ cancel }}
          </v-btn>
          <v-btn :color="color" text @click="okAction">
            {{ ok }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
// type: success, info, warning, error, confirm

export default {
  methods: {
    okAction() {
      switch (this.type) {
        case "confirm":
          this.closeDialog(true);
          break;
        default :
          this.closeDialog(false);
          break;
      }
    },
    ...mapMutations("dialog", ["setDialog"]),
    ...mapActions("dialog", ["closeDialog", "okDialog"])
  },
  computed: {
    dialog: {
      get() {
        return this.show;
      },
      set(value) {
        this.setDialog({ show: value });
      }
    },
    typeIcon() {
      let result = "mdi-check-circle";
      switch (this.type) {
        case "success":
          result = "mdi-check-circle";
          break;
        case "info":
          result = "mdi-information-outline";
          break;
        case "warning":
          result = "mdi-alert-outline";
          break;
        case "error":
          result = "mdi-alert-decagram-outline";
          break;
        default:
          break;
      }
      return result;
    },
    color() {
      let result = "success";
      switch (this.type) {
        case "success":
          result = "#4caf50";
          break;
        case "info":
          result = "#2196f3";
          break;
        case "warning":
          result = "#fb8c00";
          break;
        case "error":
          result = "#ff5252";
          break;
        default:
          break;
      }
      return result;
    },
    ...mapState({
      show: state => state.dialog.show,
      type: state => state.dialog.type,
      message: state => state.dialog.message,
      subMessage: state => state.dialog.subMessage,
      ok: state => state.dialog.ok,
      cancel: state => state.dialog.cancel
    })
  }
};
</script>
<style lang="scss" scoped></style>
