/*
 * @Description: 
 * @Author: lokep
 * @Date: 2020-05-27 21:15:03
 * @LastEditTime: 2020-05-29 00:33:57
 */
import React, { Component, Fragment } from "react"
import Editor from 'for-editor'
import { Button, Upload, message, Popover, Avatar } from 'antd'
import { upload as uploadNative } from '../../apis/upload'
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
    const { status } = info.file;
    console.log(info)
    console.log(info.file)
    if (status !== 'uploading') {
      const { code, data: imgUrl, message: msg } = info.fileList[0].response
      if (code === 0) {
        message.success(`${info.file.name} file uploaded successfully.`)
        return imgUrl
      } else {
        message.error(`${msg} file upload failed.`);
      }
    }
  }

  uploadHeadImg = (info) => {
    let imgUrl = this.upload(info)
    this.setState({
      headImg: imgUrl
    })
  }
  
  content = () => (
    <Dragger {...config} onChange={this.uploadHeadImg}>
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
          ref={this.$vm}
          value={value}
          toolbar={toolbar}
          addImg={($file) => this.editorAddImg($file)}
          onChange={value => this.handleChange(value)} />
        <div className="footer">
          <Button className="draft" onClick={this.showModal}>保存至草稿</Button>
          <Button className="submit" type="primary" onClick={this.showModal}>发布</Button>
        </div>


      </div>
    )
  }
  editorAddImg = async ($file) => {
    const { data: imgUrl } = await uploadNative($file)
    this.$vm.current.$img2Url($file.name, imgUrl)
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

  componentDidMount() {
    
  }
}
