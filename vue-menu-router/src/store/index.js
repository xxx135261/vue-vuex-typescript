import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  menulist:[]
}
const	getters = {
	menulist: state => {
		return state.menulist;
	}
}
const	mutations = {
	setMenulist:(state,payLoad) => {
		state.menulist = payLoad
	}
}
export default new Vuex.Store({
	state,
	getters,
	mutations
})
