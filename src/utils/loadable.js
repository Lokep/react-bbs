import React from 'react';
import Loadable from 'react-loadable';
import { LoadingOutlined } from '@ant-design/icons'

//通用的过场组件
const loadingComponent = () => {
  console.log('loading')
  return (
    <div style={{ textAlign: 'center', fontSize: '32px' }}>
      <LoadingOutlined />
    </div>
  )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = loadingComponent) => {
  console.log(loader)
  return Loadable({
    loader,
    loading
  })
}