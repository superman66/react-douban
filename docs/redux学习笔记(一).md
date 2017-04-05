# Redux 学习总结笔记（一）
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
