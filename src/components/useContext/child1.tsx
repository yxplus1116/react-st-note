import Child2 from './child2'
import { useContext } from 'react';
import myContext from './context'
import { Button } from 'antd'

function Child1() {
  const context = useContext(myContext)
  if (context === undefined) throw new Error('child1: context is undefined')
  const { value, updateValue } = context
  return (
    <div>
      <h1>child1：{value}</h1> {/* <h1>child1</h1> */}
      <Button type='primary' onClick={() => updateValue('新的值' + Math.random())}>更新</Button>
      <Child2 />
    </div>
  )
}

export default Child1;