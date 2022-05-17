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
			<view class="top-pic">
				<image class="top-pic-img" src="/static/illustration/woman.png" mode="aspectFit"/>
				<image class="top-pic-img" src="/static/illustration/man.png" mode="aspectFit"/>
			</view>
			<view class="top-word">
				<view class="top-word-desc">
					{{desc}}
				</view>
				<view class="top-word-opts">
					<view v-for="opt in opts" class="">
						{{opt}}
					</view>
				</view>
			</view>
		</view>
		<navigator url="/pages/day/interpre">
			<ArtFont id="viewKnowledge" content="查看解说"/>
		</navigator>
	</view>
</template>

<script setup>
	const desc=`清晨，新的一天开始了。妻子会对躺在身旁的丈夫说:`
	const opts=[
		`东方之日兮，彼姝者子，在我室兮。`,
		'鸡既鸣矣，朝既盈矣。',
		'子不我思，岂无他人。',
	]
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
	 margin-top: 10vh;
 	 width: 90vw;
 	 height: 40vh;
 	 margin-left: 5vw;
 	 margin-right: 5vw;
	 display: flex;
	 align-items: center;
 }
.top-pic{
	width: 50%;
	height: 100%;
	display: flex;
	
}
.top-pic-img{
	width: 50%;
	height: 5rem;
}
.top-word{
	width: 50%;
	height: 40vh;
	font-size: 0.4rem;
	position: relative;
	overflow: hidden;
}
.top-word-desc{
	height: 10%;
	overflow: hidden;
}
.top-word-opts{
	box-sizing: border-box;
	padding-top: 1rem;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
</style>
