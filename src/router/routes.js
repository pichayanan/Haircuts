const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/customer/logo.vue") }
    ]
  },
  {
    path: "/customer",
    component: () => import("layouts/MainAll.vue"),
    children: [
      {
        path: "",
        name: "logincustomer",
        component: () => import("pages/customer/login.vue")
      }
    ]
  },
  {
    path: "/Main",
    component: () => import("layouts/MainAll.vue"),
    children: [
      {
        path: "/customer/Main",
        name: "Maincustomer",
        component: () => import("pages/customer/Main.vue")
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
        component: () => import("pages/barber/start.vue")
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
      } ,
      {
        path: "profile",
        name: "profilebarber",
        component: () => import("pages/barber/profile.vue")
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
