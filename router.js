import Vue from 'vue';
import Router from 'vue-router';

import Home from '~/pages/home';
import About from '~/pages/about';

Vue.use(Router);
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'home',
        path: '/',
        component: Home,
      },
      {
        name: 'about',
        path: '/about',
        component: About,
      },
    ],
    scrollBehavior() {
      return {
        x: 0,
        y: 0,
      };
    },
  });
}

export const k = null;
