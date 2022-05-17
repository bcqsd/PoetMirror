<template>
	<view class="mirror-top" :style="top_main_style">
		<navigator url="/pages/index/index">
			<image id="mirror-top-image1" src="/static/buttons/return.png" alt=""/>
		</navigator>
		<navigator open-type="navigateBack" delta="1">
			<image id="mirror-top-image2" src="/static/buttons/exit.png" alt=""/>
		</navigator>
	    <view class="mirror-top-title">
	    	<image src="/static/texturePics/poetMirror.png" id="title"/>
	    </view>
		<view class="mirror-top-main">
			<view class="mirror-top-main-left">
				<view class="mirror-top-main-left-content">
					内容
					<view class="mirror-top-main-left-content-main">
						<ArtFont content="风"/>
						<ArtFont content="雅"/>
						<ArtFont content="颂"/>
					</view>
				</view>
				<view class="mirror-top-main-left-style">
					体裁
					<view class="mirror-top-main-left-style-main">
						<ArtFont v-for="item in poetStyles" :content="item" size=0.5 />
					</view>
				</view>
			</view>
			<view class="mirror-top-main-right">
				<view class="mirror-top-main-right-content">
					<view>当前标签:周南</view>
					<view class="mirror-top-main-right-content-main">
						<image src="/static/patterns/chineseBord.png" mode="scaleToFill"
						:style="picStyle"
						id="mirror-top-main-right-content-main-pic"
						/>
						<view class="mirror-top-main-right-content-main-content">
							<ArtFont v-for="item in tags" :content="item" size=0.5 @click="jumptoPoet()"/>
						</view>
					</view>
				</view>
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
	const poetStyles=['婚恋诗','战争诗','行役诗','怨刺诗','农事诗','宗庙诗','赞颂诗']
	const tags=['国风.周南.关睱','国风.周南.寒光',
	'国风.周南.关睱','国风.周南.免置','国风.周南.关睱',
	'国风.周南.关睱','国风.周南.关睱']
	const picStyle={
		width:'45vw',
		height:'55vh'
	}
	function jumptoPoet(){
		uni.navigateTo({
			url:'/pages/mirror/poet'
		})
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
	 background-size: 100vw 100vh;
	 color: brown;
	 font-family: Semibold;
	 font-size: 0.35rem;
 }
 .mirror-top-main{
	 display: flex;
 }
 #title{
	width:4rem;
	height: 1rem;
	margin-left: 2rem;
	margin-top: 1.5rem;
 }
 .mirror-top-main-left{
	 width: 40vw;
	 margin-left: 2.2rem;
	 margin-top: 0.6rem;
 }
 .mirror-top-main-left-content-main{
 	 display: flex;
 	 margin-top: 0.2rem;
 }
 .mirror-top-main-left-style{
 	 margin-top: 0.3rem;
	 height: 100%;
	 &-main{
		 height: 60%;
		 width: 80%;
		 display: flex;
		 flex-wrap: wrap;
		 margin:0.3rem 0;
		 justify-content: space-between;
	 }
 }

 .mirror-top-main-right{
	 box-sizing: border-box;
	 width: 60vw;
	 overflow: hidden;
	 margin-left: 0.6rem;
	 margin-right: 2rem;
	 
 }
 .mirror-top-main-right-content{
	 margin-top: 0.6rem;
 }
 .mirror-top-main-right-content-main-content{
	 display: flex;
	 flex-wrap: wrap;
	 padding: 0.5rem;
	 justify-content: space-between;
 }
 .mirror-top-main-right-content-main{
	 margin-top: 0.2rem;
	 position: relative;
	 box-sizing: border-box;
	 padding: 0.6rem 0.5rem;
	 height: 55vh;
	 display: flex;
	flex-wrap: wrap;
 }
 #mirror-top-main-right-content-main-pic{
	 position: absolute;
	 top:0;
	 left: 0;
 }
</style>
