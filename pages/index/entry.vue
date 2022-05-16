<template>
	<view class="mirror-top">
		<navigator open-type="navigateBack" delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
	    	<view class="mirror-top-main">
				<image id="title" src="/static/texturePics/indexpoet.png" mode=""></image>
				<view class="main-div">
					<navigator url="/pages/mirror/index">
						 <image class="div-img"  src="/static/bookmark/first.jpg" mode=""></image>
					</navigator>
				    <navigator url="/pages/day/index">
						 <image class="div-img" src="/static/bookmark/second.jpg" mode=""></image>
					</navigator>
				    <navigator url="/pages/friends/index">
						<image class="div-img" src="/static/bookmark/third.jpg" mode=""></image>
					</navigator>
				</view>
				<image class="pic2 pic" src="/static/patterns/blackdrow.png" mode="scaleToFill"></image>
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
	 font-family: Semibold;
	 font-size: 0.35rem;
	 color:brown;
 }
 .mirror-top-main{
 	 box-sizing: border-box;
	 margin-top: 10vh;
 	 width: 90vw;
 	 height: 80vh;
 	 margin-left: 5vw;
 	 margin-right: 5vw;
 	 overflow: hidden;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
 }
 .main-div{
	 box-sizing: border-box;
	 width: 60%;
	 margin-top: 1rem;
	 display: flex;
	 flex-wrap: nowrap;
	 justify-content: space-around;
 }
 .div-img{
	 width: 2rem;
	 height: 5rem;
 }
 .pic{
 	position: absolute;
 }
.pic2{
		left:10vw;
		bottom:10vh;
		width:10vw;
		height:20vh;
}
 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 0.3rem;
 }
</style>
