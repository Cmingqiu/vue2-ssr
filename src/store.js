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
          }, 1000)
        })
      }
    }
  })

  // 客户端会执行到这里 用服务端状态替换客户端状态
  // if (typeof window !== undefined && window.__INITIAL_STATE__) {
  //   store.replaceState(window.__INITIAL_STATE__)
  // }
  return store
}
