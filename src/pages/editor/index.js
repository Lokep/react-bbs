/*
 * @Description: 
 * @Author: lokep
 * @Date: 2020-05-27 21:15:03
 * @LastEditTime: 2020-05-28 00:14:56
 */
import React, { Component } from "react"
import Editor from 'for-editor'
import { Button, Upload, message, Popover, Avatar } from 'antd'

import './index.css'

import { InboxOutlined, PictureOutlined, UserOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const toolbar = {
  h1: true, // h1
  h2: true, // h2
  h3: true, // h3
  h4: true, // h4
  img: true, // 图片
  link: true, // 链接
  code: true, // 代码块
  preview: true, // 预览
  expand: true, // 全屏
  /* v0.0.9 */
  undo: true, // 撤销
  redo: true, // 重做
  save: false, // 保存
  /* v0.2.3 */
  subfield: true, // 单双栏模式
}

const content = (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
  </Dragger>
)

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
  }

  showModal() {
    this.submit()
  }

  submit() {
    
  }

  render() {
    const {
      value,
      title
    } = this.state

    return (
      <div className="container">
        <div className="header">
          <input className="title" value={title} placeholder="请输入标题" onChange={e => this.handleTitle(e)} />
          <div className="header-rightbar">
            <Popover placement="bottomRight" title={"添加封面大图"} content={content} trigger="hover">
              <PictureOutlined style={{ marginRight: '35px', fontSize: '30px', color: '#909090' }} />
            </Popover>
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
        </div>
        <Editor
          value={value}
          toolbar={toolbar}
          onChange={value => this.handleChange(value)} />
        <div className="footer">
          <Button className="draft" onClick={this.showModal}>保存至草稿</Button>
          <Button className="submit" type="primary" onClick={this.showModal}>发布</Button>
        </div>


      </div>
    )
  }
}
