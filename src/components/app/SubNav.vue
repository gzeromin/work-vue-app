<template>
  <div>
    <v-treeview
      id="tree"
      :active="active"
      :open="initiallyOpen"
      :items="items"
      activatable
      item-key="key"
      open-on-click
      dense
      @update:active="subNavHandler"
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.icon" small>
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon v-else>
          {{ icons[item.icon] }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data: () => ({
    initiallyOpen: [
      "/employee",
      "/admin",
      "/admin/employee",
      "/admin/workSheet"
    ],
    icons: {
      list: "mdi-format-list-bulleted",
      table: "mdi-file-table-outline",
      password: "mdi-lock-reset",
      addUser: "mdi-account-plus",
      addUserList: "mdi-account-multiple-plus",
      settings: "mdi-cogs"
    },
    active: [],
    items: [
      {
        name: "社員",
        key: "/employee",
        children: [
          {
            name: "勤務表",
            key: "/employee/workSheet",
            icon: "table"
          },
          {
            name: "パスワード",
            key: "/employee/password",
            icon: "password"
          }
        ]
      },
      {
        name: "管理",
        key: "/admin",
        children: [
          {
            name: "社員",
            key: "/admin/employee",
            children: [
              {
                name: "一覧",
                key: "/admin/employee/list",
                icon: "list"
              },
              {
                name: "新規登録",
                key: "/admin/employee/create",
                icon: "addUser"
              },
              {
                name: "一括登録",
                key: "/admin/employee/upload",
                icon: "addUserList"
              }
            ]
          },
          {
            name: "勤務表",
            key: "/admin/workSheet",
            children: [
              {
                name: "休暇管理",
                key: "/admin/workSheet/holidayList",
                icon: "list"
              },
              {
                name: "設定",
                key: "/admin/workSheet/settings",
                icon: "settings"
              }
            ]
          }
        ]
      }
    ]
  }),
  methods: {
    ...mapActions("subNav", ["subNavHandler"])
  }
};
</script>
<style lang="scss" scoped>
#tree {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
