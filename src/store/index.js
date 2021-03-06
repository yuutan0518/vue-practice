import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態AuthとBoardをVuexのstateで一元管理できるように定義する
const state = {
	auth: {
		token: null, // tokenはnullで初期化
		userId: null // UserIdはnullで初期化
	},
	board: {
		lists: [] // 状態TaskListは空で初期化
	}
}


export default new Vuex.Store({
	state, // 定義したstateをstateオプションに指定
	getters,
	actions,
	mutations,
	strict: process.env.NODE_ENV !== 'production'
})