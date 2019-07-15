
// import Profile from "views/examples/Profile.jsx";
// import Maps from "views/examples/Maps.jsx";
// import Register from "views/examples/Register.jsx";
// import Login from "views/examples/Login.jsx";
// import Tables from "views/examples/Tables.jsx";
// import Icons from "views/examples/Icons.jsx";

import Index from "views/Index.jsx";
import RCMS  from "views/rmcs.jsx";
import TASKASSIGNMENT from "./views/taskassignment.jsx";
import TASKPOINTS from "./views/taskpoints.jsx";
import VIEWREPORT from "./views/viewreport.jsx";
import VIEWTASKS from "./views/viewtasks.jsx";
import AssignTask from "./views/AssignTask.jsx";
import PREVIEW from "./views/Preview.jsx";
import MyCalendar from "./views/MyCalendar.js"
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },

  {
    path: "/rmcs",
    name: "RCMs",

    component: RCMS,
    layout: "/admin"
  },

  {
    path: "/taskassignment",
    name: "Task Assignment",

    component: TASKASSIGNMENT,
    layout: "/admin"
  },

  {
    path: "/taskpoints",
    name: "Task points",

    component: TASKPOINTS,
    layout: "/admin"
  },
  
  { 
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58",
    component: MyCalendar,
    layout: "/admin"

  },

  {
    path: "/:id/viewreport",
    // name: "View report",

    component: VIEWREPORT,
    layout: "/admin"
  },

  {
    path: "/:id/viewtasks",
    // name: "View tasks",

    component: VIEWTASKS,
    layout: "/admin"
  },

  {
    path: "/:id/assigntask",
    component: AssignTask,
    layout: "/admin"
  },

  {
    path: "/:id/preview",
    component: PREVIEW,
    layout: "/admin"
  }




  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
