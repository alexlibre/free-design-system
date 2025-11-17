import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
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
        component: () => import("../views/buttons/ButtonsView.vue"),
      },
      {
        path: "tags",
        name: "Tag",
        component: () => import("../views/tags/TagsView.vue"),
      },
      {
        path: "input",
        name: "Input",
        component: () => import("../views/inputs/InputsView.vue"),
      },
      {
        path: "checkbox",
        name: "Checkbox",
        component: () => import("../views/checkbox/CheckboxView.vue"),
      },
      {
        path: "textarea",
        name: "Textarea",
        component: () => import("../views/textarea/TextareaView.vue"),
      },
      {
        path: "card",
        name: "Card",
        component: () => import("../views/card/CardView.vue"),
      },
      {
        path: "colors",
        name: "Colors",
        component: () => import("../views/colors/ColorsView.vue"),
      },
      {
        path: "grids",
        name: "Grids",
        component: () => import("../views/grids/GridsView.vue"),
      },
      {
        path: "logo",
        name: "Logo",
        component: () => import("../views/logo/LogoView.vue"),
      },
      {
        path: "rating",
        name: "Rating",
        component: () => import("../views/rating/RatingView.vue"),
      },
      {
        path: "progress",
        name: "Progress",
        component: () => import("../views/progress/ProgressView.vue"),
      },
      {
        path: "button-group",
        name: "Button group",
        component: () => import("../views/button-group/ButtonGroupView.vue"),
      },
      {
        path: "modal",
        name: "Modal",
        component: () => import("../views/modal/ModalView.vue"),
      },
      {
        path: "avatar",
        name: "Avatar",
        component: () => import("../views/avatar/AvatarView.vue"),
      },
      {
        path: "avatar-group",
        name: "AvatarGroup",
        component: () => import("../views/avatar-group/AvatarGroupView.vue"),
      },
      {
        path: "select",
        name: "Select",
        component: () => import("../views/select/SelectView.vue"),
      },
      {
        path: "switch",
        name: "Switch",
        component: () => import("../views/switch/SwitchView.vue"),
      },
      {
        path: "datepicker",
        name: "Datepicker",
        component: () => import("../views/datepicker/DatepickerView.vue"),
      },
      {
        path: "calendar",
        name: "Calendar",
        component: () => import("../views/calendar/CalendarView.vue"),
      },
      {
        path: "tetris",
        name: "Tetris",
        component: () => import("../views/games/TertisGameView.vue"),
      },
      {
        path: "canvas",
        name: "Canvas",
        component: () => import("../views/canvas/CanvasView.vue"),
      },
      {
        path: "conway",
        name: "Game of Life",
        component: () => import("../views/conway/ConwayLifeView.vue"),
      },
      {
        path: "asteroids",
        name: "",
        component: () => import("../views/asteroids/AsteroidsView.vue"),
      },
      {
        path: "radio-group",
        name: "Radio group",
        component: () => import("../views/radio-group/RadioGroupView.vue"),
      },
      {
        path: "ai",
        name: "AI",
        component: () => import("../views/ai/AIView.vue"),
      },
      {
        path: "gallery",
        name: "Gallery",
        component: () => import("../views/gallery/GalleryView.vue"),
      },
    ],
    component: () => import("../views/ComponentsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
