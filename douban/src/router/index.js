import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Movie from '../pages/Movie'
import Book from '../pages/Book'
import Home from '../pages/Home'
import Talion from '../pages/Talion'
import Status from '../pages/Status'
import Group from '../pages/Group'
import Detail from '../pages/Detail'
import MovieDetail from '../pages/MovieDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/talion',
      name: 'Talion',
      component: Talion
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/moviedetail',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ]
})
