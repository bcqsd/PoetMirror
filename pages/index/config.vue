<template>
	<view class="mirror-top">
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
		<view class="mirror-top-main">
		     <view class="mirror-top-main-title">
		     	主题修改
		     </view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	@font-face {
		font-family:Semibold ;
		src: url('@/static/fonts/Semibold.ttf');
	}
	#mirror-top-image1{
		width: 1rem;
		height: 1rem;
		position: absolute;
		top:1.2rem;
		right:3rem;
	}
	#mirror-top-image2{
		width: 1rem;
		height: 1rem;
		position: absolute;
		top:1.2rem;
		right:1.5rem;
	}
 .mirror-top{
	 width: 100%;
     height: 100vh;
	 overflow: hidden;
	 background-image: url('/static/textures/relumeBack.jpg');
	 background-size: 100vw 100vh;
	 font-family: Semibold;
	 font-size: 0.35rem;
 }
 .mirror-top-main{
	 box-sizing: border-box;
	 padding: 10vh 10vw;
 	 width: 90vw;
 	 height: 60vh;
	 margin-top: 20vh;
 	 margin-left: 5vw;
 	 margin-right: 5vw;
 }
 .mirror-top-main-title{
	 font-size: 0.6rem;
 }
 
</style>
