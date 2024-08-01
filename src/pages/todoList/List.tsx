import { Empty, } from 'antd'
import Item from './Item'
import { listProps } from './types'


function List({ list, label }: listProps) {
  console.log('re-render:', label)
  return (
    <>
      {list && list.length > 0 ? list.map((item, index) => <Item item={item} index={index} key={item.id} />) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    </>
  )
}

export default List