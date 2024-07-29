import { Button } from 'antd'
import { memo } from 'react'

function Buttons({ label, clickHandle }: { label: string, clickHandle: () => void }) {
  console.log('update:', label)
  return (
    <Button type="primary" onClick={clickHandle}>{label}</Button>
  )
}

export default memo(Buttons)