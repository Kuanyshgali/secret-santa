const theme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : '';

export default {
  namespaced: true,
  state: {
    theme: theme
  },
  mutations: {
    setNewBackground(state, background) {
      state.theme = background;
      localStorage.setItem(
          "theme",
          background
      )
    }
  },
  actions: {
    setBack({ commit }, back) {
      commit('setNewBackground', back)
    }
  }
}