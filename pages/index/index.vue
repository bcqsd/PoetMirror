<template>
	<view class="mirror-top">
		<navigator open-type="navigateBack" delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
	    	<view class="mirror-top-main">
				<image id="title" src="/static/texturePics/indexpoet.png" mode=""></image>
				<navigator url="/pages/index/entry">
					<view class="mirror-top-intro">
						<artFont size=1 content="走进《诗经》"/>
					</view>
				</navigator>
				<view class="mirror-top-intro-words">
					{{intro}}
				</view>
	    	</view>
		     <image class="pic1 pic" src="/static/illustration/butterfly.png" mode="scaleToFill"></image>
			<image class="pic2 pic" src="/static/illustration/grass.png" mode="scaleToFill"></image>
			<image class="pic3 pic" src="/static/patterns/blackdrow.png" mode="scaleToFill"></image>
			<image class="pic4 pic" src="/static/illustration/flower.png" mode="scaleToFill"></image>
	</view>	
</template>

<script setup>
	const picStyle={
		width:'45vw',
		height:'55vh'
	}
	const intro=`
	 子曰 : “小子何莫学夫诗？诗可以兴，可以观，
	 可以群，可以怨。迩之事父，远之事君，多识于鸟兽草木之名。”
	———— 《论语·阳货》
	`
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
 	 width: 90vw;
 	 height: 70vh;
 	 margin-left: 5vw;
 	 margin-right: 5vw;
 	 overflow: hidden;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
 }
 .mirror-top-intro{
	 margin-top: 1rem; 
 }
 .mirror-top-intro-words{
	 box-sizing: border-box;
	 font-size: 0.5rem;
	 padding: 0 5rem;
	 margin-top: 1rem;
 }
 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }
	.pic{
		position: absolute;
	}
	.pic1{
		left:10vw;
		top:20vh;
		width:10vw;
		height:15vh;
		transform: rotate(60deg);
	}
	.pic2{
		left:10vw;
		bottom:10vh;
		width:10vw;
		height:10vh;
	}
	.pic3{
		right:10vw;
		top:20vh;
		width:10vw;
		height:20vh;
	}
	.pic4{
		right:10vw;
		bottom:10vh;
		width:10vw;
		height:20vh;
	}
</style>
