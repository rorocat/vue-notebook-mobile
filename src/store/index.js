import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  calendarStatus: false,
  slideStatus: false,
  filterList: '全部',
  helpStatus: false
};

//2、创建store对象
const store = new Vuex.Store({
  //状态
  state,
  mutations
})

//导出store对象
export default store;