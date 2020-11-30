const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/customer/logo.vue") }]
  },

  {
    path: "/customer",
    component: () => import("layouts/MainAll.vue"),
    meta: { authRequired: false },
    children: [
      {
        path: "logincustomer",
        name: "logincustomer",
        component: () => import("pages/customer/login.vue"),
        meta: { authRequired: false }
      },
      {
        path: "registcustomer",
        name: "registcustomer",
        component: () => import("pages/customer/registcustomer.vue"),
        meta: { authRequired: true }
      },
      {
        path: "Maincustomer",
        name: "Maincustomer",
        component: () => import("pages/customer/Main.vue"),
        meta: { authRequired: true }
      },
      {
        path: "findHaircut",
        name: "findHaircut",
        component: () => import("pages/customer/findHaircut.vue"),
        meta: { authRequired: true }
      },
      {
        path: "EditprofileCustomer",
        name: "EditprofileCustomer",
        component: () => import("pages/customer/editprofileCustomer.vue"),
        meta: { authRequired: true }
      },
      {
        path: "DetailsCustomer",
        name: "DetailsCustomer",
        component: () => import("pages/customer/Details.vue"),
        meta: { authRequired: true },
      },
      {
        path: "ReserveCustomer",
        name: "ReserveCustomer",
        component: () => import("pages/customer/Reserve.vue"),
        meta: { authRequired: true },
      },
      {
        path: "TimereserveCustomer",
        name: "TimereserveCustomer",
        component: () => import("pages/customer/timeReserve.vue"),
        meta: { authRequired: true },
      },
      {
        path: "bill",
        name: "bill",
        component: () => import("pages/customer/bill.vue"),
        meta: { authRequired: true },

      },{
        path: "upcomingc",
        name: "upcomingc",
        component: () => import("pages/customer/upcoming.vue"),
        meta: { authRequired: true },
      },
      {
        path: "favorite",
        name: "favorite",
        component: () => import("pages/customer/favorite.vue"),
        meta: { authRequired: true },
      },
    ]
  },
  {
    path: "/barber",
    component: () => import("layouts/Barber.vue"),
    meta: { authRequired: false },
    children: [
      // {
      //   path: "",
      //   name: "startpage",
      //   component: () => import("pages/barber/start.vue"),
      //   meta: { authRequired: false }
      // },
      {
        path: "login",
        name: "loginbarber",
        component: () => import("pages/barber/login.vue"),
        meta: { authRequired: false }
      }, 
      {
        path: "register",
        name: "registerbarber",
        component: () => import("pages/barber/register.vue"),
        meta: { authRequired: true }
      },
      {
        path: "waiting",
        name: "waitingbarber",
        component: () => import("pages/barber/waiting.vue"),
        meta: { authRequired: true }
      },
      {
        path: "main",
        name: "mainbarber",
        component: () => import("pages/barber/main.vue"),
        meta: { authRequired: true }
      } ,
      {
        path: "profile",
        name: "profilebarber",
        component: () => import("pages/barber/profile.vue"),
        meta: { authRequired: true }
      },
      {
        path: "portfolio",
        name: "portfoliobarber",
        component: () => import("pages/barber/portfolio.vue"),
        meta: { authRequired: true },
      },
      {
        path: "addportfolio",
        name: "addportfoliobarber",
        component: () => import("pages/barber/addportfolio.vue"),
        meta: { authRequired: true },
      },
      {
        path: "upcoming",
        name: "upcoming",
        component: () => import("pages/barber/upcoming.vue"),
        meta: { authRequired: true },
      }
    
      
    ]
  },
  {
    path: "/admin",
    component: () => import("layouts/Admin.vue"),
    // meta: { authRequired: false },
    children: [
      {
        path: "login",
        name: "loginadmin",
        component: () => import("pages/admin/login.vue"),
        // meta: { authRequired: false },
      },
      {
        path: "main",
        name: "mainadmin",
        component: () => import("pages/admin/main.vue"),
        // meta: { authRequired: false },
      },
      {
        path: "editbarber",
        name: "editbarber",
        component: () => import("pages/admin/editbarber.vue"),
        // meta: { authRequired: false },
      },
      {
        path: "editcustomer",
        name: "editcustomer",
        component: () => import("pages/admin/editcustomer.vue"),
        // meta: { authRequired: false },
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
