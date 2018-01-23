import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    setCart (state, payload) {
      state.count = state.count + payload
    }
  },
  actions: {
    addCart (context, payload) {
      context.commit('setCart', payload)
    }
  },
  getters: {
    getCart (state) {
      return state.count
    }
  }
})
export default store
