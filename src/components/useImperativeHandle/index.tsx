import Child from './child'
import { useRef, useEffect } from 'react'
import { Button } from 'antd'

type ChildHandle = {
  add: () => void;
};


const UseImperativeHandleComponents = () => {
  const _ref = useRef<ChildHandle | null>(null)
  useEffect(() => {
    console.log(_ref)
  }, [_ref])
  const handleClick = () => {
    if (_ref.current) {
      _ref.current.add()
    }
  }
  return (
    <div>
      <pre>
        <h1>useImperativeHandle</h1>
        <p>useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值</p>
        <p>useImperativeHandle 应该与 forwardRef 一起使用</p>
        <h2>useImperativeHandle是来解决什么问题的？</h2>
        - useImperativeHandle可以让父组件获取并执行子组件内某些自定义函数(方法)。本质上其实是子组件将自己内部的函数(方法)通过useImperativeHandle添加到父组件中useRef定义的对象中。
        <ul>
          <li>useRef创建引用变量</li>
          <li>React.forwardRef将引用变量传递给子组件</li>
          <li>useImperativeHandle将子组件内定义的函数作为属性，添加到父组件中的ref对象上。</li>
        </ul>
        <h4> 因此，如果想使用useImperativeHandle，那么还要结合useRef、React.forwardRef一起使用。</h4>
        useImperativeHandle(ref,create,[deps])函数前2个参数为必填项，第3个参数为可选项。
        <h2>useImperativeHandle基本用法</h2>
        <ul>
          <li>第1个参数为父组件通过useRef定义的引用变量；</li>
          <li>第2个参数为子组件要附加给ref的对象，该对象中的属性即子组件想要暴露给父组件的函数(方法)；</li>
          <li>第3个参数为可选参数，为函数的依赖变量。凡是函数中使用到的数据变量都需要放入deps中，如果处理函数没有任何依赖变量，可以忽略第3个参数。</li>
        </ul>
        请注意：<br />
        1、这里面说的“勾住子组件内自定义函数”本质上是子组件将内部自定义的函数添加到父组件的ref.current上面。<br />
        2、父组件若想调用子组件暴露给自己的函数，可以通过 res.current.xxx 来访问或执行。<br />

      </pre>
      <Child ref={_ref} />
      <Button type='primary' style={{ margin: '10px 0' }} onClick={handleClick}>调用子组件方法</Button>
    </div>
  )
}
export default UseImperativeHandleComponents