import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home/Home.vue";
import AboutUs from "../components/AboutUs/AboutUs.vue";
import Pricing from "../components/Pricing/Pricing.vue";
import Work from "../components/Work/Work.vue";
import Blog from "../components/Blog/Blog.vue";
import Contact from "../components/Contact/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
