<template>
  <div class="single">
    <div class="single-head">
      <div class="head-item" @click="back()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <div class="head-item category">
        <span v-html="item.category"></span>
      </div>
      <div class="head-item" @click="del(item.id)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shanchu"></use>
        </svg>
      </div>
      <div class="head-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-im_gengduo_b"></use>
        </svg>
      </div>
    </div>
    <div class="message" v-if="msg">删除失败</div>
    <div class="single-body">
      <div class="body-date">
        <div class="date-day" v-html="item.day"></div>
        <div class="date-info">
          <div class="date-ymw" v-html="formatDate"></div>
          <div class="data-time" v-html="item.time"></div>
        </div>
      </div>

      <div class="body-content">
        <div v-html="markdown(item.content)"></div>
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Font_Linear"></use>
          </svg>&nbsp;
          <span> {{ item.content.length }} 字</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getSingleRecord,
    delSingleRecord
  } from '../assets/js/storage.js'

  import marked from 'marked'

  export default {
    name: '',
    data() {
      return {
        id: 0,
        item: null,
        msg: false
      }
    },
    created() {
      this.getSingleDate();
      console.log(marked);
      
    },
    computed: {
      formatDate() {
        return `${this.item.year}年${this.item.month}月 /${this.item.week}`;
      },
      markdown(value){
        return function (value) {
          return marked(value);
        }
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      getSingleDate() {
        const id = this.$route.query.id;
        this.item = getSingleRecord(id);
      },
      del(id) {
        const del = confirm('是否要删除？')
        if (!del) {
          return;
        }
        //删除成功返回true，失败返回false
        const status =  delSingleRecord(id);
        if(status) {
          this.$router.push({
            path: '/'
          })
        }else {
          this.msg = true;
        }
      }
    },
  }
</script>

<style scoped>
  .single-head {
    height: 49px;
    display: flex;
    background-color: white;
  }

  .head-item {
    line-height: 49px;
    flex: 1;
    text-align: center;
    color: #37474f;
    font-size: 18px;
  }

  .category {
    flex: 8;
    text-align: left;
    text-indent: .5em;
    font-size: 16px;
    color: #545454;
  }

  .message {
    width: 100%;
    height: 39px;
    background-color: #F56C6C;
    color: white;
    line-height: 39px;
    text-align: center;
  }

  .single-body {
    padding: 0px 10px;
  }

  .body-date {
    display: flex;
    height: 2.5em;
    border-bottom: 1px solid #a2a2a7;
    margin: 15px 0;
  }

  .date-day {
    font-size: 2em;
    color: #a2a2a7;
    padding: 0 10px;
  }

  .date-info {
    font-size: 14.7px;
    color: #545457;
  }

  .body-content>p {
    padding: 20px 0;
  }

  .count {
    padding: 10px 2px;
  }

  .count>span {
    color: #37474f;
    font-size: 14.7px;
  }

  .count>svg {
    font-size: .5em;
  }
</style>