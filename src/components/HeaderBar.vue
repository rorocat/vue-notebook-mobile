<template>
  <div class="header">
    <!--  -->
    <div class="header-bar">
      <!-- 更多按钮 -->
      <div class="flex-item" @click="switchStatus('slideStatus',slide)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
      <!-- 时间显示 -->
      <div class="flex-item current-time" @click="switchStatus('calendarStatus',calendar)">
        <div>
          <i :class="statusStyle"></i>
          <transition name="fade">
            <span v-show="!calendar">{{ month }}月{{ day }}日</span>
          </transition>
        </div>
      </div>
      <!-- 查询按钮 -->
      <div class="flex-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
      <!-- 帮助按钮 -->
      <div class="flex-item" id="help">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bangzhu"></use>
        </svg>
      </div>
      <!-- 装饰按钮 -->
      <div class="flex-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-im_gengduo_b"></use>
        </svg>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
  import {month,day} from '../assets/js/date.js'

  export default {
    name: '',
    data() {
      return {
        month,
        day
      }
    },
    computed: {
      calendar(){
        return this.$store.state.calendarStatus;
      },
      slide(){
        return this.$store.state.slideStatus;
      },
      statusStyle() {
        return this.calendar ? 'open' : 'close';
      }
    },
    methods: {
      switchStatus(key,value){
       this.$store.commit({
         type: 'switchStatus',
         key: key,
         value: !value
       }); 
      },
    },
  }
</script>

<style scoped>
  .header-bar {
    width: 100%;
    display: flex;
    height: 49px;
    background-color: #6EB9FF;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
  }

  .flex-item {
    text-align: center;
    flex: 1;
    color: white;
    padding: 15px 5px;
  }

  .current-time {
    flex: 8;
    text-align: left;
  }

  i {
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin: 0 8px;
    transition: 0.6s;
  }

  .close {
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  .open {
    margin-bottom: 3px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }


</style>