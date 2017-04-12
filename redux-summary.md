# Redux 学习总结笔记
该笔记主要是下面三部分：
* Redux 介绍、基本概念和API和工作流程
* 中间件原理介绍及使用
* redux-thunk 的用法

# Redux 介绍
## Redux是什么？有什么作用？
Redux是一个管理状态容器，将整个前端应用的状态都统一到一个地方管理。通过单一数据流操作，来实现单一状态。使得前端应用更加方便的管理状态。
## 核心概念
整个state就是一个object，可以将store理解为前端的数据库，没有setter，不能直接更改。
如果要更改state，则需要dispatch an action。而 action 则是一个对象，用于描述提交了什么操作，而不涉及对 state 具体的操作。
强制使用action来改变每一次的state，可以让我们更加容易追踪到每次state的变化。
而 Reducer 则是用来将 Action 和 State 串起来的一个函数。用于具体处理对 state 的改变。

以上的过程差不多就是整个 Redux 的思想。

## Redux 三大原则
#### Single source of truth（单一数据源）
在你的应用中state存储在一个 object tree，而且这个object tree 在该应用中是唯一一个的。
将所有state存在于应用中唯一一个object tree 带来的好处是：可以实现开发环境下的保存状态的历史状态，实现Undo/Redo等功能。
#### State is read-only(State 只读性)
改变 state 的唯一方式就是触发一个 action（action 是一个用于描述发生了什么的对象）
### Changes are made with pure functions(使用纯函数进行更改)
为了描述action 如何具体改变 state tree，你需要编写reducers。Reducer 只是一些纯函数。
Reducer 接收 state 和 action 作为参数，并返回新的 state。


## 基本概念和api
### Store
Store就是保存数据的地方，可以看出是一个容器，整个应用就只能有一个store。Redux提供`createStore()`函数来生成store
```javascript
import {createStore} from 'redux'

const store = createStore(app);
```
### State
store 某个节点对应的数据集合就是state。可以通过`store.getState()`获得。
Redux 规定，一个state对应一个View。State相同，则View相同。

### Action
State 的变化会导致 View 的变化。但是用户接触不到State，只能接触到View。所以State的变化必须是View导致的。Action就是View发出的通知，表示State要发生改变了。
Action是一个对象，其中type属性是必须的，表示Action的名称。其他属性随意。
### Action Creator
用于生成Action 的函数。

### store.dispatch()
`store.dispatch()`是View发出Actiion 的唯一办法。
```javascript
import {createStore} from 'redux'
const store = createStore(fn);
store.dispatch(addTodo(text))
```

### Reducer
Store 收到Action之后，必须给出一个新的State，这样才能使View发生变化。这种State的计算过程叫做Reducer。
Reducer 是一个函数，它接受Action和当前的state作为参数，返回一个新的state。
整个应用的初始状态，可以作为state的默认值。

Reducer还可以进行拆分，然后通过`combineReducers`方法，结合成一个大的Reducer。

## Redux工作流程
首先用户发出Action。
```javascript
store.dispatch(action)
```
然后store自动调用Reducer，并且传入两个参数：**当前的state** 和 **收到的Action**. Reducer 会返回新的state。
```javascript
let nextState = reducer(previousState, action)
```
State一旦变化，Store就会调用监听函数。Listener可以通过`store.getState()`得到当前状态。

# 第二部分：redux 中间件
# 中间件与异步操作
Redux解决了同步状态更新的问题，但是异步操作却没有解决。
如果要 **使Reducer在异步操作结束后自动执行**，必须使用中间件。

## applyMiddleware
`createStore()`方法包含了参数`applyMiddleware()`,
它是Redux的原生方法，作用是 **将所有的中间件组成一个数组，依次执行**

## 异步操作的基本思路
异步操作需要发出三种Action
* 请求发起时的Action
* 请求成功时的Action
* 请求失败时的Action

所以流程也很清楚：
1. 操作开始时，dispatch action，触发State更新为正在操作状态
2. 操作结束后 再次 dispatch action,获取结果

解决方案：
写出一个返回函数的 Action Creator，然后使用`redux-thunk`中间件改造`store.dispatch`。
```javascript
import {createStore, applyMiddleware} from 'redux'
import thunk from 'react-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export function fetchPost() {

}
export function requestPost(){}

export function receivePost(){}

export function handleError(err) {

}

export function requstAync() {
  return function(dispatch){
    // 请求发起时 dispatch action
    dispatch(requestPost())
    // 这里的fetchPost 是一个Promise
    return fetchPost()
    .then(response => response.json())
    .then(json =>
     // 请求成功时 dispatch action
      dispatch(receivePost())
    )
    .catch(err =>
     // 请求错误时 dispatch action
      dispatch(handleError(err))
    )
  }
}
```


# 第三部分：redux-thunk用法
React-Redux将组件分为两种：
* UI组件（纯组件）
* 容器组件

## UI组件特点
* 只负责UI显示，不带任何逻辑
* 无状态组件
* 所有数据都是通过props提供
* 不使用任何Redux的API

## 容器组件
* 负责管理数据和业务逻辑，不负责UI显示
* 带有内部状态
* 使用Redux API

如果遇到一个组件既有UI和业务逻辑时，需要拆分成下面的结构：
外面是一个容器组件，里面包含若干个UI组件。容器组件负责与外部的通信、传递数据给UI组件。
UI组件则负责页面显示。

## connect
用于从UI组件生成容器组件。可以这么来理解 connect 的作用。
connect 就是将 state 上的 props（属性）和 方法（dispatch）添加到对应的 UI组件上。
```javascript
import {connect} from 'react-redux'
import {TodoList} from './TodoList'
export default connect()(TodoList)
```
上面的代码就将UI组件 TodoList 转换为一个容器组件。
每个容器组件需要定义两方面的信息：
* 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的props
* 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去

完整的`connect` 方法的API如下：
```javascript
import {connect} from 'react-redux'
import {TodoList} from './TodoList'

function mapStateToProps(state){
  return{
    // do something
  }
}

function mapDispatchToProps(dispatch){
  return{
    // do something
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
```
