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
      <div class="flex-item" id="help" @click="switchStatus('helpStatus',false)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bangzhu"></use>
        </svg>
      </div>
      <!-- 更多选项按钮按钮 -->
      <div class="flex-item" @click="setting = !setting">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-im_gengduo_b"></use>
        </svg>
      </div>
    </div>
    <div class="setting" v-show="setting"">
      <div class="setting-item">
        <input type="radio" name="r" id="all" value="全部" v-model="display">
        <label for="all" class="icon"></label>
        <label for="all" class="icon-text">全部</label>
      </div>
      <div class="setting-item">
        <input type="radio" name="r" id="life" value="生活" v-model="display">
        <label for="life" class="icon"></label>
        <label for="life" class="icon-text">生活</label>

      </div>
      <div class="setting-item">
        <input type="radio" name="r" id="learn" value="学习" v-model="display">
        <label for="learn" class="icon"></label>
        <label for="learn" class="icon-text">学习</label>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
  import {
    month,
    day
  } from '../assets/js/date.js'

  export default {
    name: '',
    data() {
      return {
        month,
        day,
        display: '全部',
        setting: false
      }
    },
    computed: {
      calendar() {
        return this.$store.state.calendarStatus;
      },
      slide() {
        return this.$store.state.slideStatus;
      },
      statusStyle() {
        return this.calendar ? 'open' : 'close';
      }
    },
    watch: {
      display(val) {
        this.$store.commit({
          type: 'switchStatus',
          key: 'filterList',
          value: val,
        });
      }
    },
    methods: {
      switchStatus(key, value) {
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
    background-color: #C9E9CF;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 1;
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

  .setting {
    position: fixed;
    box-shadow: 0 0 2px #758086;
    background-color: #fff;
    padding: 10px;
    right: 0;
    z-index: 2;
    width: 80px;
    top: 49px;
    transform: opacity 1s;
    opacity: 1;
  }

  .transparent {
    opacity: 0;
  }

  .setting-item {
    height: 25px;
    line-height: 25px;
  }

  .setting-item>.icon {
    /* font-size: 14.7px;
    padding-left: .5em; */
    width: 10px;
    height: 10px;
    display: inline-block;
    background-color: #fff;
    box-shadow: 0 0 2px #000000;
    vertical-align: baseline;

  }

  .setting-item>.icon-text {
    display: inline-block;
    color: #758086;
    padding-left: 1em;
    font-size: 14.7px;
    vertical-align: middle;

  }

  .setting-item>input[type="radio"] {
    border-width: 0;
    position: absolute;
    visibility: hidden;
  }

  input[type="radio"]:checked+label {
    background-color: #C9E9CF;
  }
</style>