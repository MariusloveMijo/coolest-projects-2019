import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import Habits from "./pages/Habits.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: Home },
	{ path: "/register", component: Register },
	{ path: "/habits", component: Habits }
];

export default new VueRouter({
	mode: "history",
	routes: routes
});
