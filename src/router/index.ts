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
        path: "input",
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
      {
        path: "button-group",
        name: "Button group",
        component: () =>
          import(
            /* webpackChunkName: "button-group" */ "../views/button-group/ButtonGroupView.vue"
          ),
      },
      {
        path: "modal",
        name: "Modal",
        component: () =>
          import(
            /* webpackChunkName: "modal" */ "../views/modal/ModalView.vue"
          ),
      },
      {
        path: "avatar",
        name: "Avatar",
        component: () =>
          import(
            /* webpackChunkName: "avatar" */ "../views/avatar/AvatarView.vue"
          ),
      },
      {
        path: "avatar-group",
        name: "AvatarGroup",
        component: () =>
          import(
            /* webpackChunkName: "avatar-group" */ "../views/avatar-group/AvatarGroupView.vue"
          ),
      },
      {
        path: "select",
        name: "Select",
        component: () =>
          import(
            /* webpackChunkName: "select" */ "../views/select/SelectView.vue"
          ),
      },
      {
        path: "switch",
        name: "Switch",
        component: () =>
          import(
            /* webpackChunkName: "switch" */ "../views/switch/SwitchView.vue"
          ),
      },
      {
        path: "datepicker",
        name: "Datepicker",
        component: () =>
          import(
            /* webpackChunkName: "datepicker" */ "../views/datepicker/DatepickerView.vue"
          ),
      },
      {
        path: "calendar",
        name: "Calendar",
        component: () =>
          import(
            /* webpackChunkName: "calendar" */ "../views/calendar/CalendarView.vue"
          ),
      },
      {
        path: "tetris",
        name: "Tetris",
        component: () =>
          import(
            /* webpackChunkName: "canvas" */ "../views/games/TertisGameView.vue"
          ),
      },
      {
        path: "canvas",
        name: "Canvas",
        component: () =>
          import(
            /* webpackChunkName: "canvas" */ "../views/canvas/CanvasView.vue"
          ),
      },
      {
        path: "conway",
        name: "Game of Life",
        component: () =>
          import(
            /* webpackChunkName: "conway" */ "../views/conway/ConwayLifeView.vue"
          ),
      },
      {
        path: "asteroids",
        name: "",
        component: () =>
          import(
            /* webpackChunkName: "asteroids" */ "../views/asteroids/AsteroidsView.vue"
          ),
      },
      {
        path: "radio-group",
        name: "Radio group",
        component: () =>
          import(
            /* webpackChunkName: "radio-group" */ "../views/radio-group/RadioGroupView.vue"
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
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
