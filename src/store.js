import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fid:'',
    pid:'',
    page:''
  },
  mutations: {
    CHANGEPID(state,pid){
      state.pid = pid
    },
    CHANGEFID(state,fid){
      state.fid = fid
    },
    CHANGEPAGE(state,page){
      state.page = page
    }
  },
  actions: {
    changepid({commit},pid){
      commit('CHANGEPID',pid)
    },
    changefid({commit},fid){
      commit('CHANGEFID',fid)
    },
    changepage({commit},page){
      commit('CHANGEPAGE',page)
    },
  }
})
