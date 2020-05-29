import axios from '../utils/axios'
import { message } from 'antd'

export const submit = (params) => {
  return new Promise((resolve, reject) =>{
    axios.post('/api/v1/article/submit',params).then(res =>{
      if (res.code === 0) {
        resolve(res)
      } else {
        message.error(res.message)
      }
    })
  })
}