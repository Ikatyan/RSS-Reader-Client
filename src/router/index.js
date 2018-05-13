import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import wassyoi from '@/components/wassyoi';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wassyoi',
      name: 'wassyoi',
      component: wassyoi
    }
  ]
});
