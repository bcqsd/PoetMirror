<template>
	<view class="top" :style="topStyle">
		<image id="top-image"
		 src="../../assets/buttons/中国风花边2：1按钮边框.png" mode="scaleToFill"
		  :style="picStyle"
		 />
		<view id="top-word">
			{{props.content}}
		</view>
	</view>
</template>

<script setup>
	import {computed} from 'vue'
	const props=defineProps({
		content:String
	})

	const picStyle={
		width:`${Math.max(props.content.length/2,1.5)}rem`,
		height:`0.7rem`
	}
	const topStyle={
		width:`${Math.max(props.content.length/2,1.5)}rem`,
		height:`0.7rem`
	}
</script>

<style scoped>
	@font-face {
		font-family:Semibold ;
		src: url('../../assets/fonts/杨任东竹石体-Semibold.ttf');
	}
	.top{
		position: relative;
		font-family: Semibold;
		margin: 0.2rem;
		/* 单行显示 */
		white-space: nowrap; 
		font-weight: bold;
		overflow: hidden;
	}
	#top-image{
		position: absolute;
	}
	#top-word{
		display: flex;
		align-items: center;
		justify-content: center;
		/* 增加高度使文字垂直居中 */
		height: 0.7rem;
	}
</style>