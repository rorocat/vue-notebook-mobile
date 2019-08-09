<template>
  <v-touch tag="div" v-on:swipeleft="nextPage" v-on:swiperight="prePage" class="nav-page">
    <div class="title">
      <h1>生活如此美好</h1>
      <h2>动动手指头记录一下吧</h2>
    </div>
    <div class="phone" :class="{ phoneBg : three }">
      <div class="screen" :class="{ screenSkew : page > 1 }">
        <div class="content" :class="{ contentDisp : three }">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="page-count">
      <div :class="{ p: page===1 }"></div>
      <div :class="{ p: page===2 }"></div>
      <div :class="{ p: page===3 }"></div>
    </div>
    <button class="start-btn" v-show="three" @click="startRecord">开始记录</button>
    <div class="windmill">
      <div class="fans">
        <div class="fan fan-orange"></div>
        <div class="fan fan-blue"></div>
        <div class="fan fan-yellow"></div>
        <div class="fan fan-green"></div>
      </div>
    </div>
  </v-touch>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        page: 1
      }
    },
    computed: {
      three() {
        return this.page == 3;
      }
    },
    methods: {
      nextPage() {
        this.page++;
        if (this.page > 3) {
          this.page = 3;
        }
      },
      prePage() {
        this.page--;
        if (this.page < 1) {
          this.page = 1;
        }
      },
      startRecord() {
        const joinTime = new Date().valueOf();
        //初始化数据存储配置
        const config = {
          data: [],
          start: joinTime
        }
        localStorage.setItem('record', JSON.stringify(config));
        this.$router.push({
          path: '/'
        })
      }
    },
  }
</script>

<style scoped>
  .nav-page {
    background-image: url('../assets/img/bg.jpg');
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .title {
    width: 100%;
    color: #7e7e7e;
    text-align: center;
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translate(-50%, -20%);
    transition: all 1s ease;
  }

  .title>h2 {
    margin-top: .1em;
    font-style: italic;
  }


  .phone {
    width: 55%;
    height: 50vh;
    max-width: 320px;
    max-height: 450px;
    border: 5px solid #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    border-radius: 12px;
    padding: 5px;
    transition: 2s ease;
    box-sizing: border-box;
  }

  .phoneBg {
    background-color: #5d5d5d;
  }

  .phone::after {
    content: ' ';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fff;
    left: 35%;
    top: .5%;
  }

  .phone::before {
    content: ' ';
    position: absolute;
    width: 45px;
    height: 4px;
    top: .7%;
    background-color: #fff;
    border-radius: 5px;
    left: 43%;
  }

  .screen {
    width: 100%;
    height: 99%;
    border-radius: 5px;
    position: relative;
    top: 1%;
    transition: all 1s ease-in-out;
  }

  /* 第二页 */
  .screenSkew {
    background-color: #fff;
    transform: skewX(180deg) rotate(0deg);
    /* transform: scale(0) rotate(720deg); */
    /* transform: skewX(0deg) rotate(180deg); */
  }

  .content {
    height: 60%;
    width: 90%;
    transform: translate(-50%, -60%) scale(0);
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    position: relative;
    transition: all 1s ease;
    border-radius: 5px;
    padding: 10px 5px;
  }

  /* 第三页 */
  .contentDisp {
    transform: translate(-50%, -60%) scale(1);
  }

  .content>div {
    width: 100%;
    height: 0.5em;
    padding-top: 20px;
    background:
      linear-gradient(135deg, transparent, transparent 45%, #5d5d5d, transparent 55%, transparent 100%),
      linear-gradient(45deg, transparent, transparent 45%, #5d5d5d, transparent 55%, transparent 100%);
    background-size: 0.5em 0.5em;
    background-repeat: repeat-x, repeat-x;
    transition: 2s;
    opacity: 1;
  }

  .page-count {
    position: absolute;
    bottom: 20vh;
    left: 50%;
    transform: translateX(-50%)
  }

  .page-count>div {
    width: 1em;
    height: 1em;
    background-color: #b4b3b3;
    display: inline-block;
    margin: 20px;
    border-radius: 50%;
  }

  .p {
    background-color: #C4E0C9 !important;
  }


  .start-btn {
    position: absolute;
    bottom: 15vh;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0;
    background-color: #c4e0c9; 
    color: white;
    display: block;
    width: 200px;
    height: 35px;
    border-radius: 5px;
  }

  /* 风车 */
  .windmill {
    width: 80px;
    height: 120px;
    bottom: 0;
    left: .5em;
    position: absolute;
    transition: 1s;
  }

  .fans {
    position: relative;
    width: 80px;
    height: 80px;
    transition: 2s ease;
    animation: rotate 1.5s linear infinite;
    z-index: 1;
  }

  .windmill::after {
    content: ' ';
    position: absolute;
    width: 5px;
    height: 60px;
    background-color: #d3d3d3;
    bottom: 10px;
    left: 50%;
    margin-left: -2.5px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }


  .fan {
    position: absolute;
  }

  .fan-blue {
    height: 0;
    width: 20px;
    border-bottom: 20px solid #b39df1;
    border-left: 20px solid transparent;
    top: 20px;
  }

  .fan-orange {
    width: 0;
    height: 20px;
    border-left: 20px solid #EE99A7;
    border-top: 20px solid transparent;
    top: 0px;
    left: 40px;
  }

  .fan-yellow {
    height: 0;
    width: 20px;
    border-top: 20px solid #FAD578;
    border-right: 20px solid transparent;
    left: 40px;
    top: 40px;
  }

  .fan-green {
    width: 0;
    height: 20px;
    border-right: 20px solid rgb(151, 238, 94);
    border-bottom: 20px solid transparent;
    top: 40px;
    left: 20px;
  }
</style>