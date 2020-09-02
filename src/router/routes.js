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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
