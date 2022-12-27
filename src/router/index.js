import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewsIndex from '../views/News/Index.vue'
import NewsDetail from '../views/News/Show.vue'
import OnAir from '../views/OnAir.vue'
import Story from '../views/Story.vue'
import StaffCast from '../views/StaffCast/Index.vue'
import Character from '../views/Character/Index.vue'
import Music from '../views/Music/Index.vue'
import Movie from '../views/Movie/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsIndex,
    },
    {
      path: '/news/:id',
      name: 'news.show',
      component: NewsDetail,
      props: true,
    },
    {
      path: '/onair',
      name: 'onair',
      component: OnAir,
    },
    {
      path: '/story',
      name: 'story',
      component: Story,
    },
    {
      path: '/staffcast',
      name: 'staffcast',
      component: StaffCast,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie,
    },
  ]
})

export default router
