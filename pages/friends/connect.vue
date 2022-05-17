<template>
	<view class="mirror-top">
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" :delta="1">
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
				 <view class="mid-nine">
				 	<view @click="choose(ind)" v-for="(item,ind) in arr" class="word">
				 		{{item}}
				 	</view>
				 </view>
				 <view class="mid-four">
				 	<view v-for="item in arrTrue" class="word">
				 		{{item}}
				 	</view>
				 </view>
			 	<view v-show="right==1" class="mid-ans">
			 		{{review}}
			 	</view>
			 </view>
			 <view class="mirror-top-main-right">
				 <view v-show="right==1" class="right">
				 	<view class="right-title">
				 		回答正确！O(∩_∩)O点击继续
				 	</view>
				 	<view class="right-score">
				 		得分: {{score}}
				 	</view>
				 	<view class="right-continue">
				 		继续
				 	</view>
				 </view>
				 <view v-show="right==-1" class="wrong">
				 	<view class="right-title">
				 		回答错误！O(∩_∩)O
				 	</view>
				 	<view class="right-score">
				 		得分: {{score}}
				 	</view>
				 	<view @click="retry" class="right-continue">
				 		{{right==1?'继续':'重来'}}
				 	</view>
				 </view>
			 </view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const score=80
	const arr=['心','亦','烈','忧','我','之','何','止','孔',]
	const arrTrue=ref(new Array(4).fill(''))
	const ans=['心','亦','忧','止']
	const review=`
	  采薇采薇，薇亦柔止。回归回归，心亦忧止。（《小雅·采薇》）
	`
	let index=0
	let right=ref(0)
	function choose(ind){
		if(index>=4) return;
		arrTrue.value[index++]=arr[ind]
		if(index==4){
			if(JSON.stringify(arrTrue.value)==JSON.stringify(ans)){
				right.value=1;
			}else{
				right.value=-1;
			}
		}
	}
	function retry(){
		arrTrue.value=new Array(4).fill('')
		index=0;
		right.value=0;
	}
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
	width: 50%;
}
.mid-nine{
	overflow: hidden;
	height: 70%;
	display: flex;
	flex-wrap: wrap;
	margin-left: 10vw;
	margin-right: 10vw;
}
.mid-four{
	height: 20%;
	display: flex;
	justify-content: center;
}
.mid-ans{
	font-size: 0.4rem;
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
.right-score{
	font-family: jy;
	color: red;
	font-size: 0.7rem;
	margin-top: 10vh;
}
.right-title{
	margin-top: 10vh;
}
.right-continue{
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.4rem;
	margin-top: 15vh;
	margin-left: 5vw;
	width: 2rem;
	height: 0.6rem;
	box-shadow: inset 0 0 1rem rgba(59, 200, 94, 0.6);
	color: green;
	border: 3rpx solid rgba(59, 200, 94, 0.6);
}
.word{
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.6rem;
	height: 0.8rem;
	width: 0.8rem;
	margin: 0.4rem;
	border: 3rpx solid rgba(200, 37, 39, 0.6);
}
</style>
