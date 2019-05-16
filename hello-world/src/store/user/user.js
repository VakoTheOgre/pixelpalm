import axios from '../../main'
import Cookie from 'js-cookie'
export default {
  namespaced: true,

  state: {
    user: null,
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
      return new Promise(async (resolve,reject) => {
        try {
          let res = await axios.post('/auth/login', {
              email: payload.email,
              password: payload.password
          })
  
          commit('setUser', res.data.user)
          commit('setToken', res.data.token)
  
          Cookie.set("token", res.data.token)
  
          resolve(true)
        } catch (e) {
          reject(e)
        }
      })
    },
		async register ( { commit }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.post('/auth/register', {
              email: payload.email,
              name: payload.name,
              password: payload.password
            })
            resolve('Account Created')
        } catch (e) {
          console.log(e)
          reject(e)
        }
      })
		},

		async me ( { commit } ) {
      if (Cookie.get('token')) {
        try {
          let res = await axios.post('/auth/me', {}, { headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
          commit('setToken', Cookie.get('token'))
          commit('setUser', res.data.user)
          return Promise.resolve(true)
        } catch (e) {
          Cookie.set('token', null)
          commit('setUser', null)
          commit('setToken', null)
          console.log(e)
          return Promise.resolve(false)
        }
      }
		}
  }
}
