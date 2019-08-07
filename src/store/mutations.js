export default {
  switchStatus(state,payload){
    state[payload.key] = payload.value;
  }
}
