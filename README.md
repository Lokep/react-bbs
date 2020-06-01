## 

借鉴： [ github ](https://github.com/bailicangdu/react-pxq/blob/master/README.md)

1. 通过 ` create-my-app `创建原始项目


初次启动项目时要确保已经下载了react的脚手架 create-react-app

否则npm install会失败

在项目中使用antd，并且按需引入
需要以下操作

```javascript

npm i antd --save

npm install -D babel-plugin-import

```
然后在全局引入 `@import '~antd/dist/antd.css';`

接着就可以在项目中正常使用了

通过axios上传文件图片，使用onUploadProgress监听上传进度


create-my-app 默认会隐藏webpack配置
1.` npm run eject `命名不可逆，一旦配置文件暴露后就不可再隐藏

使用redux

1. 单一数据源

 > 整个应用的 `state` 被储存在一棵 `object tree` 中，并且这个 `object tree` 只存在于唯一一个 `store` 中。

2. `State` 是只读的

  > 唯一改变 `state` 的方法就是触发 `action`，`action` 是一个用于描述已发生事件的普通对象

3. 使用纯函数来执行修改

  > 为了描述 `action` 如何改变 `state tree` ，你需要编写 `reducers`。    
  > Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state



 ` Redux store` 仅支持同步数据流。使用 `thunk` 等中间件可以帮助在 `Redux` 应用中实现异步性