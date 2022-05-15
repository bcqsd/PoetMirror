<template>
	<view class="mirror-top">
		<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
	    	<view class="mirror-top-main">
				<image id="title" src="/static/texturePics/indexpoet.png" mode=""></image>
				<view class="mirror-top-intro">
					<artFont content="走进《诗经》"/>
				</view>
				<view class="mirror-top-intro-words">
					{{intro}}
				</view>
	    	</view>
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

</style>
