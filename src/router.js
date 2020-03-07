import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import Habit from "./pages/Habit.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: Home },
	{ path: "/habit/:id", component: Habit },
	{ path: "/register", component: Register },
	{ path:"/login", component: Login}
];

export default new VueRouter({
	mode: "history",
	routes: routes
});
