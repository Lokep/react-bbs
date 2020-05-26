/*
 * @Description: 
 * @Author: lokep
 * @Date: 2020-05-26 22:22:07
 * @LastEditTime: 2020-05-27 01:27:30
 */ 
import React, { Component } from 'react';
import './index.css'

import Nav from '../../components/nav/index'

class App extends Component {  

  componentWillReceiveProps(nextProps){
    
  }

  shouldComponentUpdate(nextProps, nextState){
  }
  
  componentWillMount(){

  }
  render() {
    return (
      <div className="container">
        <Nav />
      </div>
    );
  }
}

export default App;