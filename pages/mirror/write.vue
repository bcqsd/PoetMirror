<template>
	<view class="mirror-top">
		<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
	    <view class="mirror-top-title">
	    	<image src="/static/texturePics/poetMirror.png" id="title"/>
	    </view>
		<view class="mirror-top-main">
			<view class="mirror-top-main-title">
				请在田字格内依次手写出正确的诗句（每个田字格一个字）
			</view>
			<view class="mirror-top-main-poet">
				{{arrToShow.join('')}}
			</view>
			<view class="mirror-top-main-write">
				<image class="mirror-top-main-write-img" v-for="item in towrite"  src="/static/patterns/tzg.png" mode=""></image>
			</view>
			<view class="mirror-top-main-ans">
				正确答案：{{ans}}
			</view>
			<view class="mirror-top-main-continue">
				<artFont content="继续"/>
			</view>
			<view class="mirror-top-main-return">
				<artFont content="返回"/>
			</view>
	    </view>
	</view>	
</template>

<script setup>
	const picStyle={
		width:'45vw',
		height:'55vh'
	}
	const poet=`参差荇菜，
	            左右采之。
				窈窕淑女，
				琴瑟友之。`
	const arr=poet.split('\n').map(p=>p.trim())
	let rand=Math.floor(Math.random()*arr.length)
	const arrToShow=[...arr]
	const ans=arr[rand].slice(0,arr[rand].length-1)
	const towrite=new Array(arr[rand].length-1).fill('_')
	arrToShow[rand]=towrite.join('')+arr[rand][arr[rand].length-1]
</script>

<style lang="scss" scoped>
	@font-face {
		font-family:Semibold ;
		src: url('@/static/fonts/Semibold.ttf');
	}
	#mirror-top-image1{
		width: 5vw;
		height: 10vh;
		position: absolute;
		top:10vh;
		right:3rem;
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
 }
 .mirror-top-main{
	 box-sizing: border-box;
	 width: 90vw;
	 height: 70vh;
	 margin-left: 5vw;
	 margin-right: 5vw;
	 overflow: hidden;
 }
 .mirror-top-main-write-img{
	 width: 2rem;
	 height: 2rem;
 }
 .mirror-top-main-title{
	 margin-top: 0.5rem;
	 display: flex;
	 justify-content: center;
 }
 .mirror-top-main-poet{
	 margin-top: 0.5rem;
	 display: flex;
	 justify-content: center;
 }
 .mirror-top-main-write{
	 margin-top: 0.5rem;
	 display: flex;
	 justify-content: center;
 }
 .mirror-top-main-ans{
	 margin-top: 0.5rem;
	 display: flex;
	 justify-content: center;
 }
	 
 .mirror-top-main-continue{
	 display: flex;
	 justify-content: center;
 }
  .mirror-top-main-return {
	  display: flex;
	  justify-content: end;
	  margin-right: 5vw;
  }
 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }

</style>
