import { useReducer } from "react"
import { Button, Statistic } from 'antd'

interface action {
  type: string
  payload?: any
  error?: any
  meta?: any
}

function reducer(state: any, action: action): any {
  console.log(action)
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'db':
      return { count: state.count * 2 }
    case 'reset':
      return { count: 0 }
    case 'random':
      return { count: state.count + action.payload }
    default:
      throw new Error('未知操作')
  }
}

function UseReducerBaseComponents() {
  const initialState = {
    count: 0
  }
  function getRandom() {
    return Math.floor(Math.random() * 10);
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <pre>
        <h3>- useReducer是来解决什么问题的？</h3>
        <pre>
          useReducer是useState的升级版(实际上应该是原始版)，可以实现复杂逻辑修改，而不是像useState那样只是直接赋值修改。<br />
          在React源码中，实际上useState就是由useReducer实现的，所以useReducer准确来说是useState的原始版。<br />
          无论哪一个Hook函数，本质上都是通过事件驱动来实现视图层更新的。
        </pre>
      </pre>
      <Statistic title="最新的值" value={state.count} />
      <Button type="primary" onClick={() => dispatch({ type: 'increment' })} >+1</Button>
      <Button danger style={{ margin: '0 10px' }} type="primary" onClick={() => dispatch({ type: 'decrement' })} >-1</Button>
      <Button type="primary" onClick={() => dispatch({ type: 'db' })}>X2</Button>
      <Button style={{ margin: '0 10px' }} type="primary" onClick={() => dispatch({ type: 'reset', payload: 0 })}>重置</Button>
      <Button type="primary" onClick={() => dispatch({ type: 'random', payload: getRandom() })}>随机增加</Button>
    </>
  )
}
export default UseReducerBaseComponents