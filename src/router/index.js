import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Chall1 from '@/components/chall1.vue';
import Chall2 from '@/components/chall2.vue';
import Chall3 from '@/components/chall3.vue';
import Auth from '@/views/auth.vue';
import classement from '@/views/auth.vue';

const routes = [
    {
        name:'auth',
        path: '/',
        component: Auth,
       
      },
      {
        name:'Home',
        path: '/Home',
        component: Home
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
        
      },
      {
        name: 'classement',
        path: '/classement',
        component: classement,
        
      }
     
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
