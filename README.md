# Redux and Thunk in React 教程
React + Redux + React-Router 完整例子。
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

## 演示
[demo](http://www.iamsuperman.cn/react-douban/)(请用 chrome 的手机模式预览)

**移动端请扫描下方二维码**

![](./public/qrcode.png)

## 构建及发布
```bash
//单独构建
npm run build
// 如果需要发布到GitHub pages
// 设置 package.json 中的 "homepage": "http://superman.github.io/react-douban", 将其替换成你自己的 repository 地址即可
npm run deploy
```

## 项目分析
React 的深入学习每个人都有各自的方式，但是对于入门而言，却是相似的。先看文档，掌握基本概念后，再通过项目驱动学习，深入理解和掌握。
在开始这个项目之前，已经假设了你对于 React 和 redux 已经有简单的基础能力。关于 redux 部分，可以再看看下面这篇文章再回复一遍 redux 的基础、核心概念：
* [redux学习总结笔记](./redux-summary.md) 

### 项目结构
该项目的结构如下：
```
.
├── README.md
├── build                       // 构建build生成的文件夹，用于发布
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   └── static
│       ├── css
│       ├── js
│       └── media
├── node-proxy                  // node 转发 豆瓣api 服务，用于解决跨域问题
│   └── index.js
├── package.json
├── public                      // 公共文件夹
│   ├── favicon.ico
│   ├── index.html
│   └── qrcode.png
├── redux-summary.md
├── src                         // 业务代码文件夹
│   ├── App.css
│   ├── actions                 // actions 文件夹
│   │   ├── header.js
│   │   ├── movie.js
│   │   ├── movieList.js
│   │   └── search.js
│   ├── components              // component ui组件集合地
│   │   ├── About.js
│   │   ├── App.js
│   │   ├── GoBackBar.js
│   │   ├── Header.js
│   │   ├── Loading.js
│   │   ├── Search.js
│   │   ├── SideBar.js
│   │   └── movie
│   ├── constants               // 定义常量文件夹
│   │   ├── API.js
│   │   └── actionTypes.js
│   ├── containers              // 容器组件集合地
│   │   ├── header.js
│   │   ├── movie.js
│   │   ├── movieList.js
│   │   └── search.js
│   ├── index.css
│   ├── index.js
│   ├── loading-bars.svg
│   ├── logo.svg
│   ├── reducers                // reducer 集合地
│   │   ├── index.js
│   │   ├── movie.js                  //
│   │   ├── movieList.js
│   │   └── search.js
│   ├── routes                  // 路由文件夹
│   │   └── index.js
│   └── store                   // reduxt store 文件夹
│       └── configureStore.js
└── tree.md
```

