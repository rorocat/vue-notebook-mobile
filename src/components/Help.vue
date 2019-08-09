<template>
  <div class="help" v-show="getHelpStatus">
    <div class="help-head">
      <div class="head-item">Markdown常用语法</div>
      <div class="head-item close">
        <svg class="icon" aria-hidden="true"  @click="close">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
    </div>
    <div class="help-body">
      <ul>
        <li class="help-item">
          <h3>1、标题类的使用 #</h3>
          <p class="bottom-top-padding"># 效果和html里的h系列标签类似，1个#效果和h1一样，6个#效果和h6一样，
            且与h系列便签一样，最多支持到6个。字与#之间有空格。
          </p>
          <p class="bottom-top-padding">### 这个相当于h3，效果如下：</p>
          <h3>这个相当于h3</h3>
        </li>
        <li class="help-item">
          <h3>2、字体的使用</h3>
          <p class="bottom-top-padding">粗体与斜体的使用都用到*符号，左右各两个*为粗体（左右各一个*为斜体中间），
            中间为加粗（斜体）的内容，删除线的使用～，语法和斜体一样。
          </p>
          <p class="bottom-top-padding">**这是加粗的文字**,效果如下：<b>这是加粗的文字</b></p>
          <p class="bottom-top-padding">**这是斜体的文字**,效果如下：<i>这是斜体的文字</i></p>
          <p class="bottom-top-padding">***这是斜体并加粗的文字***,这是组合使用，效果如下：<b><i>这是斜体并加粗的文字</i></b></p>
          <p class="bottom-top-padding">～这是带有删除线的文字～,效果如下：<del>这是斜体的文字</del></p>
        </li>
        <li class="help-item">
          <h3>3、列表的使用</h3>
          <p>列表的分为有序列表和无序列表，无序列表用 - + * 任何一种都可以(符号跟内容之间都要有一个空格)，有序列表则是数字加点</p>
          <h4 style="padding-top: 0.5em">无序列表的使用</h4>
          <p class="left-padding">+ 列表1</p>
          <p class="left-padding">+ 列表1</p>
          <p class="left-padding">+ 列表1</p>
          <p class="bottom-top-padding">上述效果如下：</p>
          <ul style="padding-left: 10px">
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
          </ul>
          <h4 style="padding-top: 0.5em">有序列表的使用</h4>
          <p class="left-padding">1. 列表1</p>
          <p class="left-padding">2. 列表1</p>
          <p class="left-padding">3. 列表1</p>
          <p class="bottom-top-padding">上述效果如下：</p>
          <ol style="padding-left: 10px;">
            <li>1.列表1</li>
            <li>2.列表2</li>
            <li>3.列表3</li>
          </ol>
        </li>
        <li class="help-item">
          <p>想了解更多markdown语法，请点击
            <a href="https://www.jianshu.com/p/191d1e21f7ed">markdown常用语法</a>
            （外部链接）
          </p>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: '',
    computed: {
      getHelpStatus() {
        return this.$store.state.helpStatus;
      }
    },
    methods: {
      close() {
        this.$store.commit({
          type: 'switchStatus',
          key: 'helpStatus',
          value: false
        })
      }
    },
  }
</script>

<style scoped>
  .help {
    margin: 20px;
    position: absolute;
    top: .5em;
    background-color: #ffffff;
    z-index: 10;
    box-shadow: 0 0 2px #47494b;
    border-radius: 5px;
  }

  .help-head{
    display: flex;
    height: 45px;
    background-color: #6EB9FF;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: white;
  }

  .head-item {
    flex: 1;
    text-align: center;
  }

  .close {
    width: 49px;
    text-align: right;
    padding-right: .5em;
  }

  .help-body {
    margin-top: 10px;
    overflow: hidden;
    padding: 1em;
  }

  .help-body > ul{
    list-style: none;
  }

   .help-item {
    margin-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px dashed rgb(56, 56, 54);
  }

  .help-item:first-child {
    margin-top: 0;
  }

  .bottom-top-padding {
    padding: 10px 0;
  }

</style>