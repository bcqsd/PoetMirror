<template>
	<view class="mirror-top">
		<img src="" alt="">
		<img src="" alt="">
	    <view class="mirror-top-title">
	    	<img src="../../assets/texturePics/“诗经小镜”.png" id="title">
	    </view>
		<view class="mirror-top-main">
			<view class="mirror-top-main-left">
				<view class="mirror-top-main-left-content">
					内容
					<view class="mirror-top-main-left-content-main">
						<artFont content="风"></artFont>
						<artFont content="雅"></artFont>
						<artFont content="颂"></artFont>
					</view>
				</view>
				<view class="mirror-top-main-left-style">
					体裁
					<view class="mirror-top-main-left-style-main">
						<artFont v-for="item in poetStyles" :content="item"></artFont>
					</view>
				</view>
			</view>
			<view class="mirror-top-main-right">
				<view class="mirror-top-main-right-content">
					<view>当前标签:周南</view>
					<view class="mirror-top-main-right-content-main">
						<artFont v-for="item in tags" :content="item"></artFont>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const poetStyles=['婚恋诗','战争诗','行役诗','怨刺诗','农事诗','宗庙诗','赞颂诗']
	const tags=['国风.周南.关睱','国风.周南.关睱','国风.周南.关睱']
</script>

<style lang="scss" scoped>
	@font-face {
		font-family:Semibold ;
		src: url('../../assets/fonts/杨任东竹石体-Semibold.ttf');
	}
 .mirror-top{
	 width: 100%;
     height: 100vh;
	 overflow: hidden;
	 background-image: url('../../assets/textures/卷轴底色(1280×720).jpg');
	 background-size: 100vw 100vh;
	 color: brown;
	 font-family: Semibold;
	 font-size: 0.35rem;
 }
 .mirror-top-main{
	 display: flex;
 }
 #title{
	width:4rem;
	margin-left: 2rem;
	margin-top: 1rem;
 }
 .mirror-top-main-left{
	 width: 40vw;
	 margin-left: 2.2rem;
	 margin-top: 0.6rem;
	 border: 1px solid red;
 }
 .mirror-top-main-right{
	 margin-left: 1.6rem;
	 margin-right: 0.8rem;
 }
 .mirror-top-main-right-content{
	 margin-top: 0.6rem;
 }
 .mirror-top-main-right-content-main{
	 margin-top: 0.2rem;
	 width: 60vw;
	 height: 55vh;
	border: 1px solid red;
	background-image: url('@/assets/patterns/中国风边框1.png');
	background-size: 10rem 6rem;
	background-repeat: no-repeat;
	display: flex;
 }
 .mirror-top-main-left-content-main{
	 display: flex;
	 margin-top: 0.2rem;
 }
 .mirror-top-main-left-style{
	 margin-top: 0.3rem;
 }
 .mirror-top-main-left-style-main{
	 display: flex;
	 flex-wrap: wrap;
 }
</style>
