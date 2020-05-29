import axios from '../utils/axios'
import { message } from 'antd'

export function upload($file) {
  let form = new FormData()
  form.append('file', $file)
  return new Promise((resolve, reject) => {
    axios({
      url:'/api/v1/upload', 
      data:form,
      method: 'post'
    }).then(res => {
      if (res.code === 0) {
        resolve(res)
      } else {
        message.error(res.message)
      }
    })
  })
}