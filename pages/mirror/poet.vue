<template>
	<view class="mirror-top">
		<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
	    <view class="mirror-top-title">
	    	<image src="/static/texturePics/poetMirror.png" id="title"/>
	    </view>
		<view class="mirror-top-main">
			<view class="top-main-left">
				<artFont class="top-main-font" content="原文"/>
				<artFont class="top-main-font" content="注释"/>
				<artFont class="top-main-font" content="翻译"/>
				<artFont class="top-main-font" content="赏析"/>
				<image class="top-main-font" src="/static/buttons/returnToMenu.png" mode=""></image>
			</view>
			<view class="top-main-middle">
				
			</view>
			<view class="top-main-right">
					<image src="/static/buttons/music.png" class="top-main-font" mode=""></image>
					<image src="/static/buttons/sound.png" class="top-main-font" mode=""></image>
					<image src="/static/buttons/delete.png" class="top-main-font" mode=""></image>
					<image src="/static/buttons/write.png" class="top-main-font" mode=""></image>
			</view>
	    </view>
	</view>	
</template>

<script setup>
	const picStyle={
		width:'45vw',
		height:'55vh'
	}
</script>

<style lang="scss" scoped>
	@font-face {
		font-family:Semibold ;
		src: url('@/static/fonts/Semibold.ttf');
	}
	#mirror-top-image1{
		width: 5vw;
		height: 10vh;
		position: absolute;
		top:10vh;
		right:3rem;
	}
	#mirror-top-image2{
		width: 5vw;
		height: 10vh;
		position: absolute;
		top:10vh;
		right:1.5rem;
	}
 .mirror-top{
	 width: 100%;
     height: 100vh;
	 overflow: hidden;
	 background-image: url('/static/textures/relumeBack.jpg');
	 background-size: 100vw 100vh;
	 color: brown;
	 font-family: Semibold;
	 font-size: 0.35rem;
 }
 .mirror-top-main{
	 box-sizing: border-box;
	 width: 90vw;
	 height: 70vh;
	 margin-left: 5vw;
	 margin-right: 5vw;
	 overflow: hidden;
	 display: flex;
 }
 .top-main-left{
	 width: 10vw;
	 margin-top: 0.5rem;
	 margin-bottom: 0.5rem;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-around;
 }
 .top-main-font{
	 padding-top: 2vh;
	 width: 5vw;
	 height: 10vh;
 }
 .top-main-middle{
	 width: 70vw;
 }
 .top-main-right{
	 width: 10vw;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-around;
 }
 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }

</style>
