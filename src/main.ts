import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.directive("ripple", {
  inserted: function (el: HTMLElement): void {
    el.addEventListener(
      "click",
      function (e): void {
        const target = el.getBoundingClientRect();
        const buttonSize =
          target.width > target.height ? target.width : target.height;
        const elements = document.getElementsByClassName("ripple");
        while (elements[0]) {
          elements[0].parentNode?.removeChild(elements[0]);
        }

        const ripple = document.createElement("span");
        ripple.setAttribute("class", "ripple");
        el.appendChild(ripple);

        requestAnimationFrame(function () {
          ripple.style.width = buttonSize + "px";
          ripple.style.height = buttonSize + "px";
          ripple.style.top = e.offsetY - buttonSize / 2 + "px";
          ripple.style.left = e.offsetX - buttonSize / 2 + "px";
          ripple.setAttribute("class", "ripple ripple-effect");
        });
      },
      false
    );
  },
});
