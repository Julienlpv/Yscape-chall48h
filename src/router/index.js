import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Chall1 from '@/views/chall1.vue';
import Chall2 from '@/views/chall2.vue';
import Chall3 from '@/views/chall3.vue';
import Auth from '@/views/auth.vue';

const routes = [
    {
        name:'Home',
        path: '/',
        component: Home,
      },
      {
        name: 'Auth',
        path: '/auth',
        component: Auth,
        
      },
      {
        name: 'Chall1',
        path: '/chall1',
        component: Chall1,
        
      },
      {
        name: 'Chall2',
        path: '/chall2',
        component: Chall2,
        
      },
      {
        name: 'Chall3',
        path: '/chall3',
        component: Chall3,
        
      }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
