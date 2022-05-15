<template>
	<view class="top" :style="topStyle">
		<image id="top-image"
		 src="/static/buttons/buttonBorder.png" mode="aspectFill"
		  :style="picStyle"
		 />
		<view id="top-word" :style="wordStyle">
			{{props.content}}
		</view>
	</view>
</template>

<script setup>
	import {computed} from 'vue'
	const props=defineProps({
		content:String,
		size:String
	})
    const fontSize=props.size||'0.5rem';
	const NfontSize=parseFloat(fontSize)
	const picStyle={
		width:'100%',
		height:`100%`
	}
	const topStyle={
		width:`${props.content.length*NfontSize}rem`,
		height:`${NfontSize}rem`
	}
	const wordStyle={
		fontSize,
	}
</script>

<style scoped>
	@font-face {
		font-family:Semibold ;
		src: url('../../static/fonts/Semibold.ttf');
	}
	.top{
		position: relative;
		font-family: Semibold;
		margin: 0.2rem;
		padding: 0.1rem;
		/* 单行显示 */
		white-space: nowrap; 
		font-weight: bold;
	}
	#top-image{
		position: absolute;
	}
	#top-word{
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>