<template>
  <div id="app">
    <transition name="page-flip">
      <router-view />
    </transition>
    <help></help>
  </div>
</template>
<script>
  import Home from './views/Home'
  import Help from './components/Help.vue'

  export default {
    components: {
      Home,
      Help
    },
  }
</script>
<style> 
  @import './assets/css/base.css';

  /* 过度开始前 */
  .page-flip-enter {
    /* 缩放 */
    /* transform: scale(0); */

    /* 翻转 */
    transform: rotateY(180deg);

    /* 平移 */
    /* transform: translate(-100%); */
  }
  /* 过度时 */
  .page-flip-enter-active {
    transition: all .8s ease;
  }

</style>