import { useState, useEffect } from 'react'
import { Button } from 'antd'

function useEffectHighComponnets() {
  const [count, setCount] = useState<number>(0)
  const [obj, setObj] = useState({ a: 1, b: 2 })
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    console.log(obj.a)
  }, [obj.a])


  return (
    <>
      <pre>
        简而言之：
        依赖项不传值：组建挂载后、组建更新<br />
        传空数组：仅仅挂载后执行一次<br />
        传依赖项：依赖项更新时执行<br />
        <h4>注意：卸载后会不会执行取决于有没有传递 return 清理函数<br />当 count 发生变化时，React 会先调用上一次 useEffect 返回的清理函数，然后再调用新的 useEffect 函数。</h4>
      </pre>
      <pre>useEffect函数的第2个参数表示该依赖关系，将useEffect的第2个参数，设置为空数组 []，即表示告诉React，这个useEffect不依赖任何变量的更新所引发的组件重新渲染，以后此组件再更新也不需要调用此useEffect。</pre>
      <p>{count}</p>
      <pre>
        {JSON.stringify(obj)}
      </pre>
      <Button type="primary" onClick={() => setObj({ ...obj, a: obj.a + 1 })}>a+1</Button>
      <Button type="primary" onClick={() => setObj({ ...obj, b: obj.b + 1 })}>b+1</Button>
    </>
  )
}

export default useEffectHighComponnets