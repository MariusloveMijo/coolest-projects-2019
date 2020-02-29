<template>
	<section>
		<h1>Welcome to {{ name }}</h1>
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/register">Register</router-link>
			<router-link to="/habits">Habits</router-link>
		</nav>
		<router-view></router-view>
	</section>
</template>

<script>
import Vue from "vue";

export default {
	data() {
		return {
			name: "Layt"
		};
	}
};
</script>

<style lang="scss" scoped>
h1 {
	color: green;
}
</style>
