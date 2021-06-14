import Vue from 'vue'
import Vuex from 'vuex'

import museos from './modules/museos'
import organismos from './modules/organismos'
import tramites from './modules/tramites'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{     
  },
  getters:{
  },
  mutations:{
  },
  actions:{
  },
  modules:{
      museos,
      organismos,
      tramites
  }
})

export default store;