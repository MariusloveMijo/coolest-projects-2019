import Vue from "vue";
import router from "./router";
import App from "./App.vue";

new Vue({ router, render: createElement => createElement(App) }).$mount("#app");
