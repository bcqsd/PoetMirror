<template>
	<view class="mirror-top" :style="top_main_style">
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" :delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
	    <view class="mirror-top-title">
	    	<image src="/static/texturePics/poetMirror.png" id="title"/>
	    </view>
		<view class="mirror-top-main">
			<view class="top-main-left">
				<ArtFont class="top-main-font" content="原文"/>
				<ArtFont class="top-main-font" content="注释"/>
				<ArtFont class="top-main-font" content="翻译"/>
				<ArtFont class="top-main-font" content="赏析"/>
				<image class="top-main-font" src="/static/buttons/returnToMenu.png" mode=""></image>
			</view>
			<view class="top-main-middle">
				<view class="top-main-middle-title">
					{{title}}
				</view>
				<view class="top-main-middle-content">
					{{poet}}
				</view>
			</view>
			<view class="top-main-right">
					<image src="/static/buttons/music.png" class="top-main-font" mode=""></image>
					<image src="/static/buttons/sound.png" class="top-main-font" mode=""></image>
					<image src="/static/buttons/delete.png" class="top-main-font" mode=""></image>
					<navigator url="/pages/mirror/write">
						<image src="/static/buttons/write.png" class="top-main-font" mode=""></image>
					</navigator>
			</view>
	    </view>
	</view>	
</template>

<script setup>
	import {computed,ref} from 'vue'
	import {useStore} from  'vuex'
	const store=useStore()
	const theme=computed(()=>store.state.theme.backgroundImage)
	const top_main_style=ref({
		backgroundImage:theme
	})
	const picStyle={
		width:'45vw',
		height:'55vh'
	}
	const poet=`
	   关关雎鸠，在河之洲。
	   窈窕淑女，君子好逑。
	   参差荇菜，左右流之。
	   窈窕淑女，寤寐求之。
	   求之不得，寤寐思服。
	   悠哉悠哉，辗转反侧。
	   参差荇菜，左右采之。
	   窈窕淑女，琴瑟友之。
	   参差荇菜，左右芼之。
	   窈窕淑女，钟鼓乐之。
	`
	const title=`国风·周南·关雎`
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
	  @include bg($bg1);
	 background-size: 100vw 100vh;
	 color: brown;
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
	 display: flex;
 }
 .top-main-left{
	 width: 10vw;
	 margin-top: 0.5rem;
	 margin-bottom: 0.5rem;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-around;
 }
 .top-main-font{
	 padding-top: 2vh;
	 width: 5vw;
	 height: 10vh;
 }
 .top-main-middle{
	 width: 70vw;
	 color:black;
 }
 .top-main-middle-title{
	 display: flex;
    justify-content: center;
	font-size: 0.8rem;
 }
 .top-main-middle-content{
	 font-size: 0.6rem;
	 padding: 5vw 8vw;
	 background-color: rgba(218, 220, 210, 0.5);
 }
 .top-main-right{
	 width: 10vw;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	 display: flex;
	 align-items: center;
	 flex-direction: column;
	 justify-content: space-around;
 }
 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }

</style>
