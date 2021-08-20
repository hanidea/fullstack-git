import { createStore } from 'vuex'

export default createStore({
  state: {
    routerParams: {}
  },
  mutations: {
    // changeView (state, url) {
    //   state.url = url
    // }
    changeView (state, payload) {
      state.routerParams = payload.routerParams
    }
  },
  actions: {
  },
  modules: {
  }
})
