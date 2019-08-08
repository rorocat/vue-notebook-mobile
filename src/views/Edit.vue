<template>
  <div class="edit">
    <div class="edit-head">
      <div class="head-item" @click="back">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <div class="head-item time">
        <span v-html="getTimeTitle"></span>
        <span style="padding-left: 1em;font-size: .8em" v-show="getLength > 0">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Font_Linear"></use>
          </svg>
          <small>
            {{ getLength }} 字</small>
        </span>
      </div>
      <div class="head-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bangzhu"></use>
        </svg>
      </div>
      <div class="head-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-im_gengduo_b"></use>
        </svg>
      </div>
    </div>
    <div class="edit-body">
      <!-- 文本输入框 -->
      <div class="text-box">
        <textarea placeholder="记录美好的一天" v-model="content"></textarea>
      </div>
      <!-- 编辑快捷工具 -->
      <div class="edit-tool">
        <!--  -->
        <div class="tool-item" @click="tools('标题')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibiaoti9"></use>
          </svg>
        </div>
        <!--  -->
        <div class="tool-item" @click="tools('粗体')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-703bianjiqi_Bjiacu"></use>
          </svg>
        </div>
        <!--  -->
        <div class="tool-item" @click="tools('斜体')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon--xieti"></use>
          </svg>
        </div>
        <!--  -->
        <div class="tool-item" @click="tools('缩进')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-suojinindent2"></use>
          </svg>
        </div>
        <!--  -->
        <div class="tool-item" @click="tools('时间')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ai253"></use>
          </svg>
        </div>
      </div>
      <!-- 保存 -->
      <div class="save">
        <select class="category" v-model="category">
          <option value="生活">生活</option>
          <option value="学习">学习</option>
        </select>
        <span class="save-btn" @click="save">保存</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    month,
    day,
    hours,
    minutes,
    year,
    week
  } from '../assets/js/date.js'
  import {setStorage} from '../assets/js/storage.js'

  export default {
    name: '',
    data() {
      return {
        month,
        day,
        hours,
        minutes,
        content: '',
        category: '生活',
        year
      }
    },
    computed: {
      //返回拼接的时间
      getTimeTitle() {
        return `${this.month}月${this.day}日 <small>/${this.hours}:${this.minutes} ${this.getWeek}</small>`
      },
      //输出输入长度
      getLength() {
        return this.content.length;
      },
      getWeek(){
        return week(this.year,this.month,this.day)
      }
    },
    methods: {
      //返回上一页
      back() {
        // this.$router.go(-1)
        this.$router.push({
          path: '/'
        })
      },
      //保存
      save() {
        const content = this.content;
        if(content.length == 0){
          alert('你还没有记录啦')
          return;
        }
        const category = this.category;
        const date = new Date().valueOf();
        const item = {
          category,
          content,
          id: date,
          time: `${this.hours}:${this.minutes}`,
          month: this.month,
          day: this.day,
          week: week(this.year,this.month,this.day),
          year: `${year}`,
        }
        //保存数据
        setStorage(item);

        //跳转回首页
        this.$router.push({
          path: '/'
        });
      },
      //快捷工具
      tools(type) {
        switch (type) {
          case '标题':
            this.content += '#';
            break;
          case '粗体':
            this.content += '** 粗体 **';
            break;
          case '斜体':
            this.content += '*** 斜体 ***';
            break;
          case '缩进':
            this.content += '  ';
            break;
          case '时间':
            const h = new Date().getHours();
            const m = new Date().getMinutes() < 10 ? 0+new Date().getMinutes():new Date().getMinutes();
            this.content += `[${h}:${m}]`;
            break;
          default:
            break;
        }
      },
    },
  }
</script>

<style scoped>
  .edit {
    background-color: red;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .edit-head {
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

  .time {
    flex: 8;
    text-align: left;
    text-indent: .5em
  }

  /* 主体部分 */
  .edit-body {
    position: absolute;
    width: 100%;
    top: 49px;
    bottom: 0;
    left: 0;
    background-color: white;
  }

  .text-box {
    width: 100%;
    position: absolute;
    bottom: 5.5em;
    top: 0;
  }

  .text-box>textarea {
    padding: 5px 10px;
    width: 100%;
    resize: none;
    box-sizing: border-box;
    margin-top: 1px;
    /* min-height: 60vh; */
    height: 100%;
    border-width: 0;
    font-size: 14.7px;
    color: #37474f;
  }

  .text-box>textarea::placeholder {
    font-size: 14.7px;
  }

  .edit-tool {
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 3.5em;
    height: 30px;
  }

  .tool-item {
    flex: 1;
    text-align: center;
    font-size: 1.5em;
  }

  .save {
    position: fixed;
    bottom: .5em;
    height: 2.5em;
    width: 96%;
    line-height: 2.5em;
    color: #37474f;
    margin-left: -48%;
    left: 50%;
    box-shadow: 0 0 2px #37474f;
    border-radius: 5px;
  }

  .category {
    width: 30%;
    height: 100%;
    background-color: #8FC7FC;
    border-width: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-indent: 40%;
    color: white;
  }

  .category option {
    background-color: #fff;
    color: #37474f;
  }

  .save-btn {
    width: 70%;
    display: inline-block;
    text-align: center;
  }
</style>