import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : 'http://http://121.196.17.194:8888'


axios.interceptors.response.use(function (response) {
  let { data } = response
  return data
})

export default axios