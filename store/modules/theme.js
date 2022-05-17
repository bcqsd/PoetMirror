const state={
	backgroundImage:'/static/textures/relumeBack.jpg',
	RefScrollTop:0
}
const mutations={
	changeBackgroundImage(state,url){
		state.backgroundImage=url
	},
	changeScrollTop(state,num){
		state.RefScrollTop=num
	}
}
export default {
	namespaced:true,
	state,
	mutations
}
