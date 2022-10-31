<template>
  <div class="game-list">
    <input
        v-model="newPlayerName"
        type="text"
        class="game-list__input"
        placeholder="Enter player name"
    >
    <button
        @click="createPlayer"
        class="game-list__btn"
    >
      Add
    </button>
    <button
        @click="startGame"
        class="game-list__btn"
    >
      Start
    </button>
    <button
        @click="clearGame"
        class="game-list__btn"
    >
      Clear
    </button>
    <div v-if="players.length" class="game-list__players">
      <h3>Players:</h3>
      <santa-player
          v-for="player in players"
          :key="player.id"
          :name="player.name"
      />
    </div>
    <div v-if="showBind">
      <h3>List of santa: </h3>
      <div
          v-for="player in players"
          :key="player.id">
        {{ player.name }} => {{ players.find(i => i.id === player.bindPlayer).name }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SantaPlayer from "@/components/player/SantaPlayer";

export default {
  name: 'GamePage',
  components: {
    SantaPlayer
  },
  data() {
    return {
      newPlayerName: '',
      showBind: localStorage.getItem('showBind') ? JSON.parse(localStorage.getItem('showBind')) : false
    }
  },
  computed: {
    ...mapState({
      players: state => state.players.players,
    })
  },
  methods: {
    ...mapActions('players', ['addPlayer', 'bindPlay', 'clearPlayers']),
    createPlayer() {
      if (this.newPlayerName) {
        this.addPlayer(this.newPlayerName)
        this.newPlayerName = ''
      }
    },
    startGame() {
      this.bindPlay(this.players);
      this.showBind = true
      localStorage.setItem('showBind', JSON.stringify(true))
    },
    clearGame() {
      this.showBind = false
      localStorage.setItem('showBind', JSON.stringify(false))
      this.clearPlayers()
    }
  }
}
</script>

<style scoped lang="scss">
.game-list {
  margin-top: 30px;

  &__input {
    outline: none;
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: floralwhite;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 10px;
  }

  &__btn {
    border: 1px solid black;
    background: coral;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
  }

  &__btn + &__btn {
    margin-left: 15px;
  }

  &__btn:hover {
    cursor: pointer;
    scale: 1.1;
    transition: 0.3s;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
    -23px 0 20px -23px rgba(0, 0, 0, .8),
    23px 0 20px -23px rgba(0, 0, 0, .8),
    0 0 40px rgba(0, 0, 0, .1) inset;
  }

  &__players {
    margin-top: 10px;
  }
}

</style>