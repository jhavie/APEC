import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fid:'',
    pid:'',
    page:'',
    industry:[],
    country:[],
    rawIndustry:[]
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
    },
    SETINDUSTRY(state,industry){
      state.industry = industry
    },
    SETCOUNTRY(state,country){
      state.country = country
    },
    SETRAWINDUSTRY(state,rawIndustry){
      state.rawIndustry = rawIndustry
    }
  },
  getters:{
    getRawIndustry: state =>{
      return state.rawIndustry;
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
    setindustry({commit},industry){
      commit('SETINDUSTRY',industry)
    },
    setcountry({commit},country){
      commit('SETCOUNTRY',country)
    },
    setRawIndustry({commit},rawIndustry){
      commit('SETRAWINDUSTRY',rawIndustry)
    },
  }
})
