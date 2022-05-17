<template>
	<view class="mirror-top">
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" :delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
	    <view class="mirror-top-title">
	    	<image src="/static/texturePics/day.png" id="title"/>
	    </view>
		<view class="mirror-top-main">
			<image src="/static/texturePics/read.png" id="jiedu" mode=""></image>
			 {{jiedu}}
		</view>
		<navigator open-type="navigateBack" delta="1">
			<ArtFont id="return" content="返回"/>
		</navigator>
	</view>
</template>

<script setup>
	// 一句解读最多200个字，用split切割
	const jiedu=`
	   出自《齐风•鸡鸣》，大意是鸡鸣就得起床，这时候朝堂上人都站满了。
	   诗经的时代没有闹钟，公鸡打鸣是人们辨别时间的方式之一，那时候还有一种名为“鸡人”的官员，专门负责国家大型仪式的计时。
	   A 出自《齐风•东方之日》，大意是像太阳一样美丽的姑娘在我的内屋里。齐国属地在山东淄博一带，这句可能是当地闹洞房的歌曲。
	   C 出自《郑风•褰裳》，大意是你要是不喜欢我，本姑娘就找别人了。郑国属地在河南新郑一带，这句可能是上巳节当地男女在小河边的调笑之语。
	`
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
 	 height: 50vh;
	 padding:0 6vw;
	 font-size: 0.5rem;
 	 margin-left: 5vw;
 	 margin-right: 5vw;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
 }

 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }
#return{
	margin-left: 50%;
}
#jiedu{
	width: 2rem;
	height: 1rem;
}
</style>
