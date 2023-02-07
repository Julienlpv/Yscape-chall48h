import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Chall1 from '@/components/chall1.vue';
import Chall2 from '@/components/chall2.vue';
import Chall3 from '@/views/chall3.vue';
import Auth from '@/views/auth.vue';
import cub from '@/components/cub.vue';

const routes = [
    {
        name:'Home',
        path: '/',
        component: Home,
        props: {value: 'false'}
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
      ,
      {
        name: 'cub',
        path: '/cub',
        component: Cub,
        
      }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
