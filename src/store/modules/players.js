import {v4 as uuidv4} from 'uuid'

const players = localStorage.getItem("players")
    ? JSON.parse(localStorage.getItem("players"))
    : [];

export default {
  namespaced: true,
  state: {
    players: players,
  },
  mutations: {
    addNewPlayer(state, name) {
      const newPlayer = {
        id: uuidv4(),
        name
      }
      state.players.push(newPlayer)
      localStorage.setItem(
          "players",
          JSON.stringify(state.players.map((item) => item))
      )
    },
    clearPlayers(state){
      state.players = []
      localStorage.setItem("players", '')
    },
    bindPlayers(state, players) {
      const plCopy = players.slice()

      for (let i = plCopy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [plCopy[i], plCopy[j]] = [plCopy[j], plCopy[i]];
      }

      plCopy.forEach(i => console.log(i.name))

      for (let i = 0; i < plCopy.length - 1; i++){
        plCopy[i].bindPlayer = plCopy[i + 1].id
      }
      plCopy[plCopy.length - 1].bindPlayer = plCopy[0].id

      state.players.forEach(i => {
        i.bindPlayer = plCopy.find(j => j.id === i.id).bindPlayer
      })

      localStorage.setItem(
          "players",
          JSON.stringify(state.players.map((item) => item))
      )

    }
  },
  actions: {
    addPlayer({ commit }, name) {
      commit('addNewPlayer', name)
    },
    bindPlay({ commit }, players) {
      commit('bindPlayers', players)
    },
    clearPlayers({ commit }) {
      commit('clearPlayers')
    }
  }
}