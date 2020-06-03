import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
import store from '../redux/index'
import App from '../app'
import Edit from '../pages/editor/index'
import { Provider } from 'react-redux';
const Index =  asyncComponent(() => import('../pages/index/index'))

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/index" exact component={Index} />
            <Route path="/edit" exact component={Edit} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}