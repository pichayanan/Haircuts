const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/customer/logo.vue") }
    ]
  },{
    path: "/customer",
    component: () => import("layouts/MainAll.vue"),
    children: [
      {
        path: "logincustomer",
        name: "logincustomer",
        component: () => import("pages/customer/login.vue")
      },
      {
        path: "registcustomer",
        name: "registcustomer",
        component: () => import("pages/customer/registcustomer.vue")
      },
      {
        path: "Maincustomer",
        name: "Maincustomer",
        component: () => import("pages/customer/Main.vue")
      },
      {
        path: "findHaircut",
        name: "findHaircut",
        component: () => import("pages/customer/findHaircut.vue")
      },
     
    ]
  },

  {
    path: "/Barber",
    component: () => import("layouts/barber.vue"),
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
