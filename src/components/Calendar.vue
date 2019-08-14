<template>
  <div class="calendar" :style="isDisp">
    <div class="calendar-head">
      <span>{{ getCurrentTime }} <small>{{ getWeeks }}</small></span>
    </div>
    <transition name="page-flip">
      <v-touch class="calendar-body" v-show="show" tag="ul" v-on:swipeleft="nextMonth" v-on:swiperight="preMonth">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
        <li v-for="occupy in getFirstDay">&nbsp;</li>
        <li v-for="(d, index) in getMonthNum" :key="index" :class="{cur: d == day }">{{ d }}</li>
      </v-touch>
    </transition>
  </div>
</template>

<script>
  import {
    year,
    month,
    day,
    week,
    numberDay,
    firstDay
  } from '../assets/js/date.js';

  export default {
    name: '',
    data() {
      return {
        year,
        month,
        day,
        week,
        show: true
      }
    },
    computed: {
      //获取state
      getStatus() {
        return this.$store.state.calendarStatus;
      },
      //组件是否显示
      isDisp() {
        return this.getStatus ? {
          height: '240px'
        } : {
          height: 0
        }
      },
      getYear() {
        return this.year;
      },
      getMonth() {
        return this.month;
      },
      //获取当前时间
      getCurrentTime() {
        return `${this.getYear} / ${this.getMonth} / ${day}`
      },
      getWeeks() {
        return week(this.year, this.month, this.day);
      },
      //获取当前月第一天是周几
      getFirstDay() {
        return firstDay(this.year, this.month)
      },
      //获取月天数
      getMonthNum() {
        return numberDay(this.year, this.month);
      }
    },
    methods: {
      nextMonth() {
        this.show = false;
        this.month++;
        if (this.month > 12) {
          this.month = 1;
          this.year++;
        }
        setTimeout(() => {
          this.show = true;
        }, 300);
      },
      preMonth() {
        this.show = false;
        this.month--;
        if (this.month < 1) {
          this.month = 12;
          this.year--;
        }
        setTimeout(() => {
          this.show = true;
        }, 300);
      }
    },
  }
</script>

<style scoped>
  .calendar {
    width: 100%;
    background-color: #C9E9CF;
    color: white;
    transition: all 0.5s;
    overflow: hidden;
    position: relative;
    top: 49px;
    z-index: 1;
  }

  .calendar-head {
    padding: 0 1em .6em 1em;
    text-align: center
  }

  .calendar-body {
    display: flex;
    list-style: none;
    padding-bottom: 5px;
    flex-flow: wrap;
    /* transition: all .5s; */
  }

  .calendar-body>li {
    flex: 0 0 14.2%;
    text-align: center;
    width: 1.5em;
    height: 1.5em;
    font-size: 16px;
    /* background-color: white; 
    color: #409eff; */
    line-height: 1.5em;
    margin-bottom: 5px;
    position: relative;
    z-index: 1;
  }

  .cur::after {
    content: ' ';
    width: 80%;
    height: 1.5em;
    background-color: white;
    color: #409eff;
    position: absolute;
    left: 50%;
    opacity: 0.5;
    margin-left: -40%;
    border-radius: 3px;
  }

</style>
