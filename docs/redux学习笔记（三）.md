# React-Redux 的用法
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
用于从UI组件生成容器组件。
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
```
