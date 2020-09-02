const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/logo.vue") }
      // {
      //   path: "login",
      //   name: "login",
      //   component: () => import("pages/login.vue")
      // }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/MainAll.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("pages/login.vue")
      }
    ]
  },

  {
    path: "/Barber",
    component: () => import("layouts/Barber.vue"),
    children: [
      {
        path: "startpage",
        name: "startpage",
        component: () => import("pages/barber/startpage.vue")
      },
      {
        path: "login",
        name: "loginbarber",
        component: () => import("pages/barber/login.vue")
      },
      {
        path: "main",
        name: "mainbarber",
        component: () => import("pages/barber/main.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
