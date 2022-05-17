<template>
	
</template>

<script setup>
	const props=defineProps({
		range:Array
	})
   
</script>

<style scoped>
	@font-face {
		font-family:Semibold ;
		src: url('../../static/fonts/Semibold.ttf');
	}
	.top{
		position: relative;
		font-family: Semibold;
		/* 单行显示 */
		white-space: nowrap; 
		font-weight: bold;
		overflow: hidden;
		color:brown;
	}
	#top-image{
		position: absolute;
	}
	#top-word{
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
</style>