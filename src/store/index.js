import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
      selectedUser: []
  },
  getters: {
  	getSelectedUser(state) {
  		return state.selectedUser
  	}
  },
  mutations: {
  	setSelectedUser(state, user) {
  		state.selectedUser = user
  	}
  }
})
