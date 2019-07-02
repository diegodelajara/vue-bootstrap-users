import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
import moment from 'moment'

export default new Vuex.Store({
  // Estados der mi app
	state: {
      selectedUser: [],
      users: [],
      gradientColor: null,
      params: {
        page: 1,
        perPage: 2
      }
  },
  getters: {
    // Obtener todos los usarios, guardados en mi state
    getAllUsers (state) {
      return state.users
    },
    getSelectedUser(state) {
      return state.selectedUser
    },
    getGradientColor(state) {
      return state.gradientColor
    },
    getPage(state) {
      return state.params.page
    },
    getPerPage(state) {
      return state.params.perPage
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
    },
    setGradientColor(state, color) {
      state.gradientColor = color
    },
    setPage(state, page) {
      state.params.page = page
    },
    setPerPage(state, perPage) {
      state.params.perPage = perPage
    }
  },
  // Acciones para llamar a las APIs y devolver la respuesta
  actions: {
    async getUsers(context) {
      const page = context.state.params.page
      const perPage = context.state.params.perPage
      const url = `https://reqres.in/api/users?page=${page}&per_page=${perPage}`
      try {
        // se guarda la respuesta de la consulta a la API, en la constante {data}, que sería como guardar response.data
        const { data } = await axios.get(url)
        context.commit('setAllUsers', data)
        return true 

      } catch(e) {
        // statements
        console.log(e);
      }
    },
    async addNewUser(context, user) {
      const url = 'https://reqres.in/api/users'
      try {
        let body = new URLSearchParams()
        body.append('first_name', user.first_name)
        body.append('last_name', user.last_name)
        body.append('image', user.email)
        body.append('avatar', user.avatar)

        const { data } = await axios.post(url, body, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }})
        if (data) {
          data.createdAt = moment(data.createdAt).format('DD MM YYYY')
        }
        return data
      } catch(e) {
        // statements
        console.log(e);
      }

    }
  }
})
