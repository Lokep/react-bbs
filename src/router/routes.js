import loadable from '../utils/loadable'
// const Index = loadable(() => import('../pages/index/index'))
 import Index from '../pages/index/index'
 import Edit from '../pages/edit/edit'
 import App from '../app'
// const Edit  = loadable(() => import('../pages/edit/edit'))
const routes = [
  { path: '/',
      exact: true,
      component: App,
  },
  // {
  //     path: '/login',
  //     component: Login,
  // },
  {
      path: '/index',
      component: Index,
  },
  {
    path: '/edit',
    component: Edit,
},
  {
      path: '*',
      component: loadable(() => import('../pages/error/error'))
  }
]

export default routes