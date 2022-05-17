<template>
	<view class="mirror-top">
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
	    <view class="mirror-top-title">
	    	<image src="/static/texturePics/connect.png" id="title"/>
			<view class="mirror-top-title-text">
				请从以下九个字中识别一句《诗经》中四个字的诗句:
			</view>
	    </view>
		<view class="mirror-top-main">
	          <image class="mirror-top-main-left" src="/static/illustration/suneye.png" mode="scaleToFill"/>
			 <view class="mirror-top-main-mid">
			 	
			 </view>
			 <view class="mirror-top-main-right">
			 	 
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
 	 width: 90vw;
 	 height: 65vh;
 	 margin-left: 5vw;
 	 margin-right: 5vw;
	 display: flex;
	 
 }
 .mirror-top-title-text{
	 font-size: 0.4rem;
	 display: flex;
	 justify-content: center;
 }
.mirror-top-main-left{
	padding-top: 10vh;
	margin-left: 5vw;
	width: 20%;
	height: 60%;
	overflow: hidden;
}
.mirror-top-main-mid{
	flex:1
}
.mirror-top-main-right{
	flex:1
}
 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }

</style>
