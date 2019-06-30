import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'

export default new Vuex.Store({
  // Estados der mi app
	state: {
      selectedUser: [],
      users: []
  },
  getters: {
    // Obtener todos los usarios, guardados en mi state
    getAllUsers (state) {
      return state.users
    },
  	getSelectedUser(state) {
  		return state.selectedUser
  	}
  },
  // Mutaciones que alteran el estado
  mutations: {
    // Guarda en el estado "users", el arreglo de usuarios que venga por parametros
    setAllUsers(state, users) {
      state.users = users
    },
    // Guarda en el estado "setSelectedUser", el usuario seleccionado
  	setSelectedUser(state, user) {
  		state.selectedUser = user
  	},
    setUser(state, user) {
      state.users.data.push(user)
    }
  },
  // Acciones para llamar a las APIs y devolver la respuesta
  actions: {
    async getUsers(context, perPage) {
        const num = parseInt(perPage)
        const url = `https://reqres.in/api/users?page=1&per_page=${num}`
        try {
          // se guarda la respuesta de la consulta a la API, en la constante {data}, que sería como guardar response.data
          const { data } = await axios.get(url)
          context.commit('setAllUsers', data)
          return true 

        } catch(e) {
          // statements
          console.log(e);
        }
    }
  }
})
