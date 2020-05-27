import React, { Component } from "react"
import Editor from 'for-editor'
import { Button } from 'antd'

import './index.css'

export default class Edit extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      title: ''
    }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value
    })
    console.log(e.target.value, e,e.target, this)
  }


  render() {
    const { 
      value,
      title 
    } = this.state

    return (
      <div className="container">
        <div className="header"> 
          <input className="title" value={title} placeholder="请输入标题" onChange={e => this.handleTitle(e)}/>
          <div className="header-rightbar">

          </div>
        </div>
        <Editor value={value} subfield={true} onChange={value => this.handleChange(value)} />
        <div className="footer">
          <Button className="draft">保存至草稿</Button>
          <Button className="submit" type="primary">发布</Button>
        </div>
      </div>
    )
  }
}
