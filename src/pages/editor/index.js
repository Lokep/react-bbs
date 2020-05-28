/*
 * @Description: 
 * @Author: lokep
 * @Date: 2020-05-27 21:15:03
 * @LastEditTime: 2020-05-29 00:33:57
 */
import React, { Component, Fragment } from "react"
import Editor from 'for-editor'
import { Button, Upload, message, Popover, Avatar } from 'antd'

import './index.css'

import { InboxOutlined, PictureOutlined, UserOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

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
const config = {
  name: 'file',
  multiple: false,
  data: {tes:'111'},
  method: 'post',
  accept: 'jpg,jpeg,png,gif',
  action: 'http://localhost:8888/api/v1/upload',
  showUploadList: false
}
export default class Edit extends Component {

   $vm = React.createRef()

  constructor() {
    super()
    this.state = {
      value: '',
      title: '',
      headImg: ''
    }
  }

  upload = (info) => {
    console.log(info)
    console.log(info.file)
    const { status } = info.file;
    if (status !== 'uploading') {
      const { code, data: headImg, message: msg } = info.fileList[0].response
      if (code === 0) {
        this.setState({
          headImg
        })
        message.success(`${info.file.name} file uploaded successfully.`)
      } else {
        message.error(`${msg} file upload failed.`);
      }
    }
  }
  content = () => (
    <Dragger {...config} onChange={this.upload}>
      <div className="ant-upload-drag-icon">
        { !this.state.headImg ? 
          <Fragment>
            <InboxOutlined /> 

            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Fragment> : 
          <img src={this.state.headImg}  alt="headImg" /> }
      </div>
      
    </Dragger>
  )
  
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
            <Popover placement="bottomRight" title={"添加封面大图"} content={this.content} trigger="hover">
              <PictureOutlined style={{ marginRight: '35px', fontSize: '30px', color: '#909090' }} />
            </Popover>
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
        </div>
        <Editor
          value={value}
          toolbar={toolbar}
          addImg={this.editorAddImg}
          onChange={value => this.handleChange(value)} />
        <div className="footer">
          <Button className="draft" onClick={this.showModal}>保存至草稿</Button>
          <Button className="submit" type="primary" onClick={this.showModal}>发布</Button>
        </div>


      </div>
    )
  }
  editorAddImg = ($file) => {
    console.log($file)
    let fileList = [$file];
    if (fileList.length > 0) {
        let file = fileList[0];
        let formData = new FormData();
        formData.append('uploadFile', file);
　　　　//你的post接口，formData发送
        this.$axios()
　　　　　　
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
    this.$axios()
  }

  
}
