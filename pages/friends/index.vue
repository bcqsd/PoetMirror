<template>
	<view class="mirror-top">
		<image id="yishihuiyou" src="/static/background/yishihuiyou.png" mode=""></image>
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
	    <view class="mirror-top-title">
	    	<image src="/static/texturePics/meetfriends.png" id="title"/>
	    </view>
		<view class="mirror-top-main">
			<view class="pic-container">
				<image class="pic" src="/static/contest/lianzichengshi.png" mode=""></image>
				连字成诗
			</view>
			<view class="pic-container">
				<image class="pic" src="/static/contest/shiqingpeidui.png" mode=""></image>
				诗情配对
			</view>
			<view class="pic-container">
				<image class="pic" src="/static/contest/feihualing.png" mode=""></image>
				飞花令
			</view>
			<view class="pic-container">
				<image class="pic" src="/static/contest/xiaoshijiaju.png" mode=""></image>
				小拾佳句
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
 	 margin-left: 5vw;
 	 margin-right: 5vw;
	 display: flex;
	 
 }
 .pic-container{
	 display: flex;
	 flex-direction: column;
	 width: 100%;
	 height: 100%;
	 align-items: center;
 }
.pic{
	width: 15vw;
	height: 30vh;
}
 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }
#viewKnowledge{
	margin-left: 70%;
}
#yishihuiyou{
	position: absolute;
	top:20vh;
	left: 15vw;
	width: 50vw;
	height: 70vh;
}
</style>
