<template>
	<view class="mirror-top" >
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" :delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
		<view class="mirror-top-main">
		     <view class="mirror-top-main-item">
				 <view>主题选择</view>
				<scroll-view @scroll="chooseTheme($event)" scroll-y="true" class="item-scroll">
					<view v-for="item in themes">{{item}}</view>
				</scroll-view>
		     </view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const themes=['卷轴','红木','木质','羊皮纸']
	const themeMap=[
	'/static/textures/relumeBack.jpg',
	'/static/textures/Wood1.jpg',
	'/static/textures/Wood2.jpg',
	'/static/textures/yangpi.jpg',
	]

	function chooseTheme(e){
         let scrollTop=e.detail.scrollTop
	     let ind=Math.floor((scrollTop)/20)+1;
		 let theme=`bg${ind}`
		 let prevTheme=localStorage.getItem('theme')
		 if(!prevTheme||prevTheme!==theme){
			 localStorage.setItem('theme',theme)
			 window.document.documentElement.setAttribute('theme',theme)
			 console.log(theme)
		 }
	}
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
	 @include bg($bg1);
	 background-size: 100vw 100vh;
	 font-family: Semibold;
	 font-size: 0.35rem;
 }
 .mirror-top-main{
	 box-sizing: border-box;
	 padding: 10vh 10vw;
 	 width: 90vw;
 	 height: 60vh;
	 margin-top: 20vh;
 	 margin-left: 5vw;
 	 margin-right: 5vw;
 }
 .mirror-top-main-item{
	 font-size: 0.6rem;
	 display: flex;
	 justify-content: space-around;
	 flex-wrap: nowrap;
	 span{
		 height: 0.6rem;
	 }
	 .item-scroll{
		 height: 0.6rem;
		 width: 3rem;
	 }
 }
</style>
