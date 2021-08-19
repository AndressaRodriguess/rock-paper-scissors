<template>
	<div id="app" :style="backgroundGradient" @mousemove="redefinePositions" @mouseleave="resetPositions">
		<Header />
		<RouterView />
	</div>
</template>

<script>
import { bgColorFrom, bgColorTo } from './styles/variables.scss';
import Header from '@/components/Header/Header.vue';

export default {
	name: 'App',
	components: {
		Header
	},
	data(){
		return {
			gradientX: '50%',
			gradientY: '0%',
		}
	},
	computed:{
		backgroundGradient(){
			return{
				background: `radial-gradient(circle at ${this.gradientX} ${this.gradientY}, ${bgColorFrom}, ${bgColorTo})`,
			}
		}
	},
	methods: {
		redefinePositions({clientX, clientY}){
			this.gradientX = `${clientX}px`;
			this.gradientY = `${clientY}px`;
		},
		resetPositions(){
			this.gradientX = '50%';
			this.gradientY = '0%';
		}
	}
}
</script>

<style lang="scss">
	@import './styles/reset';

	#app {
		display: flex;
		flex-direction: column;
		font-family: 'Barlow Semi Condensed', Helvetica, Arial, sans-serif;
		//background: radial-gradient(circle at top, $background-from, $background-to);
		height: 100%;
	}
</style>
