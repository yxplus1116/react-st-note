import { useState, forwardRef, useImperativeHandle } from 'react';
import { Button } from 'antd'

const Child = forwardRef((props, ref) => {
  console.log(props, ref)
  useImperativeHandle(ref, () => ({ add }))
  const [count, setCount] = useState<number>(0);
  const add = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <Button type='primary' onClick={add}>Add</Button>
    </div>
  )
})

export default Child;