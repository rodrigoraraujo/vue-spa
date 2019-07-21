import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from './theme/AppCategory.vue';
import Login from './theme/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/category/front-end'
    },
    {
      path: '/category/:id',
      component: Category,
      name: 'category'
    },
    {
      path: '/login',
      component: Login
    }
  ]
});

export default router;
