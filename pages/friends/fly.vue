<template>
	<view class="mirror-top">
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" delta=1>
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
	    <view class="mirror-top-title">
	    	<image src="/static/texturePics/feihualing.png" id="title"/>
			<view class="mirror-top-title-text">
				按住录音按钮，说出《诗经》中一句带有“人”字的诗句。
			</view>
	    </view>
		<view class="mirror-top-main">
	          <image class="mirror-top-main-left" src="/static/illustration/suneye.png" mode="scaleToFill"/>
			 <view class="mirror-top-main-mid">
				 <view class="mid-score">
				 	得分: {{score}}
				 </view>
				<view class="mid-ans">
					{{ans}}
				</view>
			 </view>
			 <view class="mirror-top-main-right">
			 	 <view class="right-text">
			 	 	按住录音按钮,说出一句符合要求的诗句吧！
			 	 </view>
				 <image id="right-img" src="/static/buttons/startLu2.png" mode=""></image>
			 </view>
		</view>
	</view>
</template>

<script setup>
	const score=67
	const ans=`
	  所谓伊人，在水一方。（《秦风·蒹葭》）
	`
</script>

<style lang="scss" scoped>
	@font-face {
		font-family:Semibold ;
		src: url('@/static/fonts/Semibold.ttf');
	}
	@font-face {
		font-family:jy ;
		src: url('@/static/fonts/jy.ttf');
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
	 @include bg($bg1);
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
	flex:1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	
}
.mid-score{
	font-family: jy;
	color: red;
	font-size: 0.7rem;
}
.mid-ans{
	padding-left: 2rem;
	font-size: 0.5rem;
}
.mirror-top-main-right{
	box-sizing: border-box;
	width: 30%;
	padding-top: 10vh;
	font-size: 0.4rem;
}
.right-text{
	margin-left: 10vw;
}
 #title{
	width:3rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }
#right-img{
	padding-top: 10vh;
	margin-left: 40%;
	width: 40%;
	height: 40%;
}
</style>
