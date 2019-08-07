<template>
  <v-touch v-on:swipeleft="slideClose" class="slider-bar" :style="isDisp" tag="div">
    <div class="slide-head">
      <p>记录你的每一天吧</p>
    </div>
    <ul class="slide-body">
      <li>统计</li>
      <li>生活日记</li>
      <li>学习日记</li>
    </ul>
  </v-touch>
</template>

<script>
  export default {
    name: '',
    computed: {
      getStatus() {
        return this.$store.state.slideStatus;
      },
      isDisp() {
        return this.getStatus ? {
          left: '0',
          width: '70%'
        } : {
          left: '-100%',
          width: '0'
        };
      }
    },
    methods: {
      slideClose() {
        this.$store.commit({
          type: 'switchStatus',
          key: 'slideStatus',
          value: !this.getStatus
        });
      }
    },
  }
</script>

<style scoped>
  .slider-bar {
    height: 100vh;
    background-color: #f5f4f4;
    position: absolute;
    top: 0;
    left:-100%;
    max-width: 360px;
    transition: all 0.5s;
    overflow: hidden;
    z-index: 1;
  }

  .slide-head {
    width: 100%;
    height: 150px;
    background: url('../assets/img/slide-head.jpg') no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 0;
    left: 0;
  }

  .slide-head > p {
    width: 100%;
    font-size: 1em;
    position: absolute;
    bottom: .5em;
    text-align: center;
    color: #37474f;
  }

  .slide-body{
    list-style: none;
    text-indent: .8em;
  }

  .slide-body > li {
    width: 100%;
    line-height: 45px;
    color: #37474f;
    font-size: 16px;
    border-top: 1px solid #cfd8dc;
  }

  .slide-body > li:last-child{
    border-bottom: 1px solid #cfd8dc;
  }
</style>