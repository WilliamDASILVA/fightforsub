import Vue from 'vue';
import Router from 'vue-router';

import Home from '~/pages/home';
import Ranking from '~/pages/ranking';
import Legal from '~/pages/legal';

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
        name: 'ranking',
        path: '/ranking',
        component: Ranking,
      },
      {
        name: 'legal',
        path: '/legal',
        component: Legal,
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
