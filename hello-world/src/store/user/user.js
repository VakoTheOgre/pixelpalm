import axios from '../../main'
import Cookie from 'js-cookie'
export default {
  namespaced: true,

  state: {
    user: null,
    token: "",
		history: []
  },
  getters: {
    user (state) {
      return state.user
    },
    token (state) {
        return state.token
    },

		history (state) {
			return state.history
		}
  },
  mutations: {
    setUser(state, payload) {
        state.user = payload
    },
    setToken(state, payload) {
        state.token = payload
    },

		setHistory(state, paylaod) {
			state.history = payload
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
    loggout ({ commit }) {
      commit('setUser', null)
      commit('setToken', null)
      Cookie.remove('token')
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
		},

		getHistory ({ commit, state }) {
			return new Promise(async (resolve,reject) => {
				try {
					let res = await axios.get(`/user/getOrders/${state.user._id}`, { headers: { 'Authorization': `Bearer ${state.token}` } })
					commit('setHistory', res.data.orders)
					resolve(true)
				} catch (e) {
					console.log(e.response.data.message)
					reject(e)
				}
			})
		}
  }
}
