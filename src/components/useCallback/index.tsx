import { useState, useCallback } from 'react'
import Buttons from './Button'


function UseCallback() {
  const [count1, setCount1] = useState<number>(1)
  const [count2, setCount2] = useState<number>(2)

  const clickHandle01 = useCallback(() => {
    setCount1(count1 + 1)
  }, [count1])

  const clickHandle02 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])


  return (
    <>
      <div>
        <h1>useCallback</h1>
        <pre>理解 useCallback 在 React 中的用途对优化组件性能非常重要。useCallback 是一个 React Hook，它返回一个记忆的回调函数，这个回调函数只有在其依赖项发生变化时才会更新。它的主要作用是避免在组件重新渲染时创建新的回调函数，从而减少不必要的子组件重新渲染。</pre>
        <pre>

          useCallback 会返回一个函数引用，并且根据第二个依赖参数对比，第二次渲染如果依赖项发生变化了，那么会重新创建一份处理函数并替换React底层原型链上原有的处理函数<br />
          实际组件运用中，如果父组件中只有1个子组件，那其实完全没有必要使用useCallback。只有父组件同时有多个子组件时，才有必要去做性能优化，防止某一个子组件引发的重新渲染也导致其他子组件跟着重新渲染。
        </pre>
      </div>
      <h3>{count1}</h3>
      <Buttons label="button01" clickHandle={clickHandle01} />
      <h3>{count2}</h3>
      <Buttons label="button02" clickHandle={clickHandle02} />
    </>
  )
}

export default UseCallback