import Vue from 'vue'
import Vuex from 'vuex'
import players from "@/store/modules/players";
import customization from "@/store/modules/customization";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    players,
    customization
  }
})