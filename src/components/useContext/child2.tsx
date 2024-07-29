import { useContext } from 'react';
import myContext from './context'
import { Button } from 'antd'

function Child2() {
  const context = useContext(myContext)
  if (context === undefined) throw new Error('child1: context is undefined')
  const { value, updateValue } = context
  return (
    <div>
      <h1>child2:{value}</h1> {/* <h1>child1</h1> */}
      <Button type='primary' style={{ margin: '10px' }} onClick={() => updateValue(value + Math.random())}>更新</Button>
    </div>
  )
}

export default Child2;