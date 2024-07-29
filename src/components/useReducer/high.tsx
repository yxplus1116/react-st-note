import { useReducer } from 'react'
import { Button, Spin, Result, Statistic } from 'antd'
import Context from './context'
import Child from './child'

interface state {
  loading: boolean,
  res?: string,
  error?: boolean,
}

interface action {
  type: string,
  payload?: string
}

const initialState = { loading: false, res: '', error: false }
function reducer(state: state, action: action) {
  switch (action.type) {
    case 'start':
      return { loading: true, res: '', error: false }
    case 'success':
      return { loading: false, res: action.payload || '', error: false }
    case 'error':
      return { loading: false, error: true, err_res: action.payload || '' }
    default:
      throw new Error()
  }
}
function countReducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      return state + action.params
    case 'minus':
      return state - action.params
    default:
      throw new Error()
  }
}
function useReducerHighComponnets() {
  const initCount = 0
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, countDispatch] = useReducer(countReducer, initCount)
  const fetchData = () => {
    dispatch({ type: 'start' })
    setTimeout(() => {
      dispatch({ type: 'success', payload: '成功请求数据回来了～！！！' })
    }, 2000)
  }

  const fetchDataError = () => {
    dispatch({ type: 'start' })
    setTimeout(() => {
      dispatch({ type: 'error', payload: '这是响应给你的失败原因！！！' })
    }, 2000)
  }

  return (
    <>
      {state.loading ? <Spin /> : state.error ?
        <Result
          status="error"
          title="请求失败啦！！～～"
          subTitle={state.err_res}
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        >
        </Result>
        :
        <Result
          status="success"
          title="数据请求成功啦！！"
          subTitle={state.res}
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      }
      <Button loading={state.loading} type='primary' onClick={fetchData}>模拟开始请求</Button>
      <Button style={{ margin: '0 10px' }} loading={state.loading} danger type='primary' onClick={fetchDataError}>模拟请求失败</Button>
      <h1>使用useContext + useReducer实现操作全局共享数据</h1>
      <pre>
        利用 Context 传递 状态 和 状态修改事件 <br />
        利用 Reducer 创建状态 和 状态修改事件<br />
        - 什么时候用useState？什么时候用useReducer？<br />
        组件自己内部的简单逻辑变量用useState、多个组件之间共享的复杂逻辑变量用useReducer。<br />
        - 结论<br />
        useReducer可以让我们实现复杂逻辑的数据修改，结合useContext更能做到全局数据共享和修改。
      </pre>
      <Statistic value={count} />
      <Context.Provider value={[count, countDispatch]}>
        <Child />
      </Context.Provider>
    </>
  )
}

export default useReducerHighComponnets