export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: { layout: "LayoutOrder" },
  },
  {
    path: "/orders",
    name: "Cart",
    component: () => import("../views/Orders.vue"),
    meta: { layout: "LayoutSidebar" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { layout: "LayoutSidebar" },
  },
];
