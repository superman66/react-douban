# Redux and Thunk in React 教程
通过豆瓣电影提供的 api 来学习如何在 React 中使用 Redux 和 Redux-Thunk。 

查看 Demo：

![](./public/qrcode.png)
## 安装
在项目根目录下运行 `npm install` 安装依赖

## 运行
**第一步：执行 `npm start` 命令**

```bash
npm start
```
**第二步：开启 node API 代理服务**

```bash
// 在根目录下，进入node-proxy 文件夹
cd node-proxy
// 开启 node 代理 API 服务
node index.js 
```
浏览器将自动打开`localhost:3000/#/`，便可以访问应用。

## 构建及发布
```bash
//单独构建
npm run build
// 如果需要发布到GitHub pages
npm run deploy
```
## 总结
* [redux学习笔记(一)](https://github.com/superman66/react-douban/blob/master/docs/redux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0(%E4%B8%80).md)
* [redux学习笔记(二)](https://github.com/superman66/react-douban/blob/master/docs/redux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0(%E4%BA%8C).md)
* [redux学习笔记(三)](https://github.com/superman66/react-douban/blob/master/docs/redux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%EF%BC%88%E4%B8%89%EF%BC%89.md)
