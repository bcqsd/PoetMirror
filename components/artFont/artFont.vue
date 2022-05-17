<template>
	<view class="top" :style="topStyle">
		<image id="top-image"
		 src="/static/buttons/buttonBorder.png" mode="scaleToFill"
		  :style="picStyle"
		 />
		<view id="top-word"  :style="fontStyle" >
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
    const width=(props.size ||1)*props.content.length +'rem'
    const height=(props.size ||1)+'rem'
	const picStyle={
		width:'100%',
		height:`100%`
	}
	const topStyle={
		width,
		height
	}
	const fontSize=parseFloat(props.size)*0.7
	const fontStyle={
		fontSize:fontSize+'rem'
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