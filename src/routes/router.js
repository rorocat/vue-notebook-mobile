import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const Edit = () => import('../views/Edit.vue')
const Single = () => import('../views/Single.vue')

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/edit',
    component: Edit,
    meta: {
      title: '记录新的一天'
    }
  },
  {
    path: '/item',
    component: Single,
    meta: {
      title: '详情页'
    }
  }
];

const router = new Router({
  mode: 'history',
  routes
})



router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
})

export default router;
