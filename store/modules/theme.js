const state={
	backgroundImage:'/static/textures/relumeBack.jpg'
}
const mutations={
	changeBackgroundImage(url){
		state.backgroundImage=url
	}
}
export default {
	namespaced:true,
	state,
	mutations
}
