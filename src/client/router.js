import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: Home },
	{ path: "/register", component: Register }
];

export default new VueRouter({
	mode: "history",
	routes: routes
});
