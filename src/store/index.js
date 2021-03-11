import { createStore } from 'vuex'
import state from './state.js'
import * as getters from  './getters'
import * as mutations from  './mutations'
import * as actions from  './actions'


export default createStore({
  state,
  getters,
  mutations,
  actions,
})
