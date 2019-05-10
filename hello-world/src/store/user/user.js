import axios from '../../main'
import Cookie from 'js-cookie'
export default {
  namespaced: true,

  state: {
    user: {},
    token: ""
  },
  getters: {
    user (state) {
      return state.user
    },
    token (state) {
        return state.token
    }
  },
  mutations: {
    setUser(state, payload) {
        state.user = payload
    },
    setToken(state, payload) {
        state.token = payload
    }
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        let res = await axios.post('/auth/login', {
            email: payload.email,
            password: payload.password
        })

        commit('serUser', res.data.user)
        commit('serToken', res.data.token)

        Cookie.set("token", res.data.token)

        return Promise.resolve(true)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  },
  async register ( { commit }, payload) {
      try {
          let res = await axios.post('/auth/login', {
              
          })
      }
  }

}
