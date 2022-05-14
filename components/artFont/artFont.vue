<template>
	<view class="top">
		
		<pre>{{comp}}</pre>
	</view>
</template>

<script setup>
	import {computed} from 'vue'
	const props=defineProps({
		content:String
	})
	const comp=computed(()=>{
		return props.content.length<3?
		`  ${props.content}  `
		:props.content
	})
</script>

<style scoped>
	@font-face {
		font-family:Semibold ;
		src: url('../../assets/fonts/杨任东竹石体-Semibold.ttf');
	}
	.top{
		font-family: Semibold;
		background-image: url('@/assets/buttons/中国风花边2：1按钮边框.png');
		background-size: contain;
		background-repeat:no-repeat;
		padding: 0.2rem;
		margin: 0.2rem;
		/* 单行显示 */
		white-space: nowrap; 
		font-weight: bold;
		display: flex;
		height: 0.5rem;
	}
</style>