import List from "../../views/admin/employee/List.vue";
import Create from "../../views/admin/employee/Create.vue";
import Upload from "../../views/admin/employee/Upload.vue";
import HolidayList from "../../views/admin/workSheet/HolidayList.vue";
import Settings from "../../views/admin/workSheet/Settings.vue";

export const admin = [
  {
    path: "/admin/employee/list",
    name: "List",
    component: List
  },
  {
    path: "/admin/employee/create",
    name: "Create",
    component: Create
  },
  {
    path: "/admin/employee/upload",
    name: "Upload",
    component: Upload
  },
  {
    path: "/admin/workSheet/holidayList",
    name: "HolidayList",
    component: HolidayList
  },
  {
    path: "/admin/workSheet/settings",
    name: "Settings",
    component: Settings
  },
];