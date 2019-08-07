<template>
  <div class="home">
    <header-bar></header-bar>
    <calendar></calendar>
    <slide-bar></slide-bar>
    <content-list></content-list>
    <div class="edit-btn" @click="openEdit">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiezi"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import Calendar from '../components/Calendar.vue'
  import SlideBar from '../components/SlideBar.vue'
  import ContentList from '../components/ContentList.vue'

  export default {
    name: '',
    components: {
      HeaderBar,
      Calendar,
      SlideBar,
      ContentList
    },
    methods: {
      openEdit(){
        this.$router.push({
          path: '/edit'
        });
      },
      openSlideBar(){
        this.$store.commit({
          type: 'switchStatus',
          key: 'slideStatus',
          value: !this.$store.state.slideStatus
        });
      }
    },
  }
</script>

<style scoped>
  .home {
    /* height: 100vh; */
    overflow: hidden;
  }
  .home-body{
    height: 100%;
  }
  .edit-btn {
    width: 3em;
    height: 3em;
    background-color: #6eb9ff;
    border-radius: 50%;
    text-align: center;
    line-height: 3.5em;
    position: fixed;
    bottom: 1em;
    right: 1em;
    z-index: 1;
  }

  .edit-btn svg {
    font-size: 1.5em;
    color: white;
  }
</style>