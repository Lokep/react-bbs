import React, { Component } from 'react';
import './index.scss'

import Nav from '../../components/nav/index'

class Index extends Component {  

  componentWillReceiveProps(nextProps){
    
  }

  shouldComponentUpdate(nextProps, nextState){
  }
  
  componentWillMount(){

  }
  render() {
    return (
      <div className="container" data-component="index">
        <Nav />
      </div>
    );
  }
}

export default Index;