import { useContext } from 'react'
import Context from './context'
import { Button } from 'antd'

function Child() {
  const [, countDispatch] = useContext(Context)
  return (
    <>
      <Button type="primary" onClick={() => countDispatch({ type: 'add', params: Math.random() })}>Add</Button>
      <Button style={{ margin: '0 10px' }} danger type="primary" onClick={() => countDispatch({ type: 'minus', params: Math.random() })}>Sub</Button>
    </>
  )
}

export default Child