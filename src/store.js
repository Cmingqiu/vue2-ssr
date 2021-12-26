import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  let store = new Vuex.Store({
    state: {
      count: 0
    },
    getters: {
      getCount: state => state.count
    },
    mutations: {
      setCount(state, payload) {
        state.count = payload
      }
    },
    actions: {
      fetchInitialCount({ commit }) {
        return new Promise(resolve => {
          setTimeout(() => {
            commit('setCount', 100)
            resolve()
          }, 3000)
        })
      }
    }
  })

  return store
}
