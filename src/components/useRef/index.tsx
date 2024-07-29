import { useRef, useEffect, useState } from 'react'
import { Input, Button } from 'antd'
import type { InputRef } from 'antd'
import Child from './child'

function UseRefComponents() {
  const __ref = useRef<HTMLDivElement>(null)
  const __input = useRef<InputRef>(null)
  const __childRef = useRef(null)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    console.log({ __ref, __input, __childRef })
    __input.current?.focus()
    return () => {
      console.log('unmount')
    }
  }, [])

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
    console.log(timer)
    return () => {
      Stop()
    }
  }, [])

  const Stop = () => {
    clearInterval(timer.current as ReturnType<typeof setInterval>)
  }

  return (
    <div>
      {/* <UseRefComponent /> */}
      <h1>useRef</h1>

      <pre>
        <h3>useRef是来解决什么问题的？</h3>
        - useRef可以“获取某些组件挂载完成或重新渲染完成后才拥有的某些对象”的引用，且保证该引用在组件整个生命周期内固定不变，都能准确找到我们要找的对象。
        <h3>如何“勾住”自定义组件中的“小写开头的类似原生标签的组件”？</h3>
        -使用React.forwardRef() <br />
        forwardRef 是 React 提供的一个高阶组件，用于将父组件传递的 ref 转发到子组件内部的一个 DOM 元素或另一个组件。通常情况下，普通的函数组件不能接收 ref，而 forwardRef 允许你在子组件中处理和使用 ref。
      </pre>

      <div id="ref_id" ref={__ref}>ref_id</div>
      <Input ref={__input} placeholder="使用 useRef自动聚焦" />
      <hr />
      <h2>{count}</h2>
      <Button type='primary' onClick={Stop}>Stop</Button>
      <hr />
      <h3>forwardRef</h3>
      <Child ref={__childRef} />
    </div>
  )
}
export default UseRefComponents