import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import TimetableTask from '@/views/TimetableTask.vue'
import Timetable from '@/views/Timetable.vue'

Vue.use(VueRouter)
  
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/timetabletask',
      name: 'TimetableTask',
      component: TimetableTask,
    },
    {
      path: '/timetable',
      name: 'Timetable',
      component: Timetable,
    }, 
  ]
})
