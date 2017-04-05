# 中间件与异步操作
Redux解决了同步状态更新的问题，但是异步操作却没有更新。
如果要 **使Reducer在异步操作结束后自动执行**，必须使用中间件。

## applyMiddleware
`createStore()`方法包含了参数`applyMiddleware()`,
它是Redux的原生方法，作用是 **将所有的中间件组成一个数组，依次执行**

## 异步操作的基本思路
异步操作需要发出三种Action
* 操作发起时的Action
* 操作成功时的Action
* 操作失败时的Action

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
    dispatch(requestPost())

    // 这里的fetchPost 是一个Promise
    return fetchPost()
    .then(response => response.json())
    .then(json =>
      dispatch(receivePost())
    )
    .catch(err =>
      dispatch(handleError(err))
    )
  }
}
```
