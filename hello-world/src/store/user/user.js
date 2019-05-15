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

        commit('setUser', res.data.user)
        commit('setToken', res.data.token)

        Cookie.set("token", res.data.token)

        return Promise.resolve(true)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  },
  async register ( { commit }, payload) {
      try {
          let res = await axios.post('/auth/register', {
						email: payload.email,
						name: payload.name,
						password: payload.password
          })
			} catch (e) {
				console.log(e)
			}
  },

	async me ( { commit } ) {
		try {
			await axios.post('/auth/me', { headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
		} catch (e) {
			Cookie.set('token', null)
			commit('setUser', null)
			commit('setToken', null)
			console.log(e)
		}
	}

}
