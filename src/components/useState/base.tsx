import { Button, Statistic } from "antd";
import { useState, } from "react";

const UseBaseStateComponent = () => {
  const [count, setCount] = useState<number>(0)
  const add = () => {
    setCount(preCount => {
      const newCount = preCount + 1
      return newCount
    })
  }
  // 减
  const reduce = () => setCount(count - 1)
  return (
    <div>
      <>
        <pre>函数组件本身是一个函数，不是类，因此没有构造函数constructor(props)；<br />
          任何你想定义的变量都可以单独拆分出去，独立定义，互不影响；<br />
          对比之下，你就会发现使用Hook的useState后，会让我们定义的变量相对独立，清晰简单，便于管理。<br />
          useState(value)函数会返回一个数组，该数组包含2个元素：第1个元素为我们定义的变量，第2个元素为修改该变量对应的函数名称<br />
        </pre>
        <pre>const [variable,setVariable] = useState(value);<br />
          setVariable(newValue);//修改variable的值</pre>
        <pre>'newValue'补充说明(非常重要)：<br />
          setVariable采用 “异步直接赋值” 的形式，并不会像类组件中的setState()那样做“异步对比累加赋值”。
        </pre>
        <pre>在Hook中，对于简单类型数据，比如number、string类型，可以直接通过setVariable(newValue)直接进行赋值。<br />
          但对于复杂类型数据，比如array、object类型，若想修改其中某一个属性值而不影响其他属性，则需要先复制出一份，修改某属性后再整体赋值。</pre>
      </>
      <div className="useState" style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <p>基础用法：</p>
        <Button danger type="primary" onClick={reduce}>-</Button>
        <Statistic value={count} />
        <Button type="primary" onClick={add}>+</Button>
      </div>
    </div>
  )
}

export default UseBaseStateComponent