import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import asyncComponent from '../utils/asyncComponent';
import loadable from '../utils/loadable'
import store from '../redux/index'
// import renderRoutes from '../utils/renderRoutes'
import { renderRoutes } from 'react-router-config'
// import routes from './routes.js'
import { Provider } from 'react-redux';
// const Index =  asyncComponent(() => import('../pages/index/index'))
// const Index = loadable(() => import('../pages/index/index'))

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，
// 子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
import Index from '../pages/index/index'
import Edit from '../pages/edit/edit'
import App from '../app'
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
export default class RouteConfig extends Component{
  render(){
    console.log(routes)
    return(
      <Provider store={store}>
        <HashRouter>
          <Switch>
            {/* <Route path="/" exact component={App} />
            <Route path="/index" exact component={Index} />
            <Route path="/edit" exact component={Edit} /> */}
            { renderRoutes(routes) }
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}
