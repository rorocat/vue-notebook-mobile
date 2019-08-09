import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const Edit = () => import('../views/Edit.vue')
const Single = () => import('../views/Single.vue')
const NavPage = () => import('../views/NavPage.vue')

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    },
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
  },
  {
    path: '/navpage',
    component: NavPage,
    meta: {
      title: "引导页"
    },
    beforeEnter: (to, from, next) => {
      const nav = localStorage.getItem('record');
      if(nav != null){
        next({
          path: '/'
        })
        return;
      }
      next();
    }
  }
];

const router = new Router({
  // mode: 'history',
  routes
})



router.beforeEach((to, from, next) => {
  const nav = localStorage.getItem('record');
  document.title = to.meta.title;
  if(to.fullPath == '/navpage'){
    next();
  }else{
    if(nav==null){
      next({
        path: '/navpage'
      });
      return;
    }
    next();
  }
})

export default router;
