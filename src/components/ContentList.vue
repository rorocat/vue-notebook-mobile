<template>
  <div class="content-list">
    <p class="count" v-html="recordCount" v-if="list.length!=0"></p>
    <ul>
      <li v-if="list.length==0">
        <p class="null">你还没开始记录呢！</p>
        <p class="null">点击底部按钮记录美好的一天吧！</p>
      </li>
      <li class="item" v-for="(item, index) in filterList" :key="index" @click="jumpView(item.id)">
        <div class="content-date">
          <p class="date-day">{{ item.day }}</p>
          <p class="date-month">{{ item.month }}月/<small v-text="item.week"></small></p>
        </div>
        <div class="content-box">
          <p class="content-title">{{ splitTitle(item.content) }}</p>
          <span class="content-type" v-html="item.category"></span>
          <span class="content-time" v-html="item.time"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getStorage } from '../assets/js/storage.js'

  export default {
    name: '',
    data() {
      return {
        list: [],
        duration: 0
      }
    },
    created() {
      this.getDate()
    },
    computed: {
      splitTitle() {
        return function (value) {
          if (value.length > 36) {
            return value.substr(0, 36) + '...';
          }
          return value;
        }
      },
      recordCount() {
        return `已记录&nbsp;${this.duration}&nbsp;天（共&nbsp;${this.filterList.length}&nbsp;篇）`
      },
      getFilter(){
        return this.$store.state.filterList;        
      },
      filterList(){
        return this.list.filter(item => {
          if(this.getFilter == '全部') {
            return item;
          }
          return item.category == this.getFilter;
        });
      }
    },
    methods: {
      init() {
        console.log(1);

        localStorage.setItem('record', '{ "data": [], "start":1565242187173}')
      },
      //获取全部数据
      getDate() {
        const current = new Date().valueOf();
        const storage = getStorage('record');
        const start = storage.start;
        this.list = storage.data;
        this.duration = parseInt((current - start) / 1000 / 60 / 60 / 24) + 1;
      },
      jumpView(id){
        this.$router.push({
          path: '/item',
          query: {
            id
          },
          meta: {
            title: '喜爱'
          }
        });
      }
    },
  }
</script>

<style scoped>
  .content-list {
    width: 100%;
    position: relative;
    top: 49px;
    box-sizing: border-box;
  }

  .content-list {
    padding: 5px 10px;
  }

  .count {
    text-align: center;
    font-size: 12px;
    padding: 5px;
    color: rgb(124, 124, 121);
  }

  .content-list ul {
    width: 100%;
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .item {
    display: flex;
    justify-content: space-around;
    max-height: 100px;
    min-height: 56px;
    margin-bottom: 1em;
  }

  .content-date {
    width: 20%;
    text-align: center;
  }

  .date-day {
    font-size: 20px;
    margin-top: .2em;
  }

  .date-month {
    font-size: .8em;
    color: rgb(124, 124, 121);
  }

  .content-box {
    width: 75%;
    display: block;
    border-radius: 2px;
    box-shadow: 0 0 5px rgb(124, 124, 121);
  }

  .content-title {
    padding: 5px 10px;
    overflow: hidden;
    word-break: break-all;
    color: #37474f;
    font-size: 16px;
  }

  .content-time,
  .content-type {
    color: rgb(124, 124, 121);
    font-size: 12px;
    margin: 5px 10px;
  }

  .content-time {
    float: right;
  }

  .null {
    text-align: center;
    color: #37474f;
    line-height: 1.5em
  }
</style>