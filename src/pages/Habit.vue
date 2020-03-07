<template>
	<section>
		<ul>
			<li v-for="habit in habits" :key="habit.id">{{ habit.name }}</li>
		</ul>
		<input type="text" placeholder="enter your habit" v-model="habitName" />
		<button type="button" @click="saveHabit" :disabled="isLoading">save habit </button>
	</section>
</template>

<script>
import Vue from "vue";
import axios from "axios";
export default {
	data() {
		return {
			habits: [],
			habitName:"",
			isLoading: false
		};
	},
	created(){
		this.getHabits();
	},
	methods: {
		saveHabit() {
			if(this.habitName)
			{
				this.isLoading=true;
				const newHabit = {
					name: this.habitName
				}
				axios.post("http://localhost:3000/habits", newHabit)
					.then(res => {
						this.getHabits();
						this.clearHabit();
					})
					.catch(error => console.log(error))
					.then(()=>this.isLoading=false)
				
			}
		},
		getHabits(){
			axios.get("http://localhost:3000/habits")
				.then(res => {
					this.habits = res.data
				})
				.catch(error => console.log(error))
		},
		clearHabit(){
			this.habitName="";
		}
	}
};
</script>

