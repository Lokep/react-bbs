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
