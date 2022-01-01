import { createStore } from 'vuex'

export default createStore({
  state: {
    user: [{
      name: null,
    }],
    stompClient: null,
    messages: [{
      name: null,
      content: null
    }],
    helloMessage: {
      message: null
    }
  },

  mutations: {
    setUser(state, payload) {
      state.user.name = payload
    },

    setupStomp(state, payload) {
      state.stompClient = payload
    },

    addMessage(state, payload) {
      state.messages.push(payload)
    },
  },

  actions: {},
  modules: {}
})
