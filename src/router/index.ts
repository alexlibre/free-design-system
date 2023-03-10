import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/components",
    name: "Components",
    children: [
      {
        path: "buttons",
        name: "Button",
        component: () =>
          import(
            /* webpackChunkName: "buttons" */ "../views/buttons/ButtonsView.vue"
          ),
      },
      {
        path: "tags",
        name: "Tag",
        component: () =>
          import(/* webpackChunkName: "tags" */ "../views/tags/TagsView.vue"),
      },
      {
        path: "inputs",
        name: "Input",
        component: () =>
          import(
            /* webpackChunkName: "inputs" */ "../views/inputs/InputsView.vue"
          ),
      },
      {
        path: "checkbox",
        name: "Checkbox",
        component: () =>
          import(
            /* webpackChunkName: "checkbox" */ "../views/checkbox/CheckboxView.vue"
          ),
      },
      {
        path: "textarea",
        name: "Textarea",
        component: () =>
          import(
            /* webpackChunkName: "textareas" */ "../views/textarea/TextareaView.vue"
          ),
      },
      {
        path: "card",
        name: "Card",
        component: () =>
          import(/* webpackChunkName: "card" */ "../views/card/CardView.vue"),
      },
      {
        path: "colors",
        name: "Colors",
        component: () =>
          import(
            /* webpackChunkName: "colors" */ "../views/colors/ColorsView.vue"
          ),
      },
      {
        path: "grids",
        name: "Grids",
        component: () =>
          import(
            /* webpackChunkName: "colors" */ "../views/grids/GridsView.vue"
          ),
      },
      {
        path: "logo",
        name: "Logo",
        component: () =>
          import(/* webpackChunkName: "logo" */ "../views/logo/LogoView.vue"),
      },
      {
        path: "rating",
        name: "Rating",
        component: () =>
          import(
            /* webpackChunkName: "rating" */ "../views/rating/RatingView.vue"
          ),
      },
    ],
    component: () =>
      import(
        /* webpackChunkName: "components" */ "../views/ComponentsView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
