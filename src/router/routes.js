import loadable from '../utils/loadable'
import App from '../app'
const Index  = loadable(() => import('../pages/index/index'))
const Edit  = loadable(() => import('../pages/editor/index'))
const Sign  = loadable(() => import('../pages/sign/index'))

const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/sign',
    component: Sign
  },
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