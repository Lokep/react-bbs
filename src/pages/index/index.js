import React, { Component } from 'react';
import './index.scss'
import propTypes from 'prop-types'
import Nav from '../../components/nav/index'

class Index extends Component {  
  //如果没有传递该属性时的默认值
  static defaultProps = {
    name: 'stranger'
  }
  //如果传递该属性，该属性值必须为字符串
  static propTypes={
    name:propTypes.string
  }

  componentWillReceiveProps(nextProps){
    
  }

  shouldComponentUpdate(nextProps, nextState){
  }
  
  componentDidMount(){
    console.log(this.props)
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