import axios from '../../main'
export default {
    namespaced: true,


    state: {
        blogs: null
    },

    mutations: {
        setBlogs (state, payload) {
            state.blogs = payload
        }
    },

    actions: {
        GET({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await  axios.get('/blog')
                    commit('setBlogs', res.data.blogs)
                    resolve(true)
                } catch(e) {
                    console.log(e)
                    reject(e)
                }
            })
        }
    },

    getters: {
        blogs(state) {
            return state.blogs
        }
    }
}