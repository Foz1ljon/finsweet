import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: import("../components/AboutUs/AboutUs.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: import("../components/Pricing/Pricing.vue"),
  },

  {
    path: "/work",
    name: "Work",
    component: import("../components/Work/Work.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: import("../components/Blog/Blog.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: import("../components/Contact/Contact.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
