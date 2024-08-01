import React, { useContext, useState, useRef } from 'react'
import { Checkbox, Button, Tooltip, Input, Modal, message } from "antd";
import { ExclamationCircleFilled, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { itemProps } from './types'
import TodoContext from "./Context";
import { InputRef, } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { isRepeat } from './util'

function Item({ item, index }: itemProps) {
  const { list, dispatchTodoList } = useContext(TodoContext) || {};
  const [title, setTitle] = useState(item.title)
  const inpRef = useRef<InputRef | null>(null)
  // 删除
  const delHandle = () => {
    Modal.confirm({
      title: `是否确认删除【${item.title}】此事项?`,
      icon: <ExclamationCircleFilled />,
      content: '删除成功后将无法恢复，请谨慎操作！',
      okText: '确认删除',
      okType: 'danger',
      cancelText: '算了吧',
      centered: true,
      onOk() {
        dispatchTodoList && dispatchTodoList({ type: 'DELETE_TODO', payload: item.id })
        message.success('删除成功');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  // 编辑
  const toggleEditHandle = () => {

    dispatchTodoList && dispatchTodoList({ type: 'TOGGLE_TODO', payload: item.id })
    setTimeout(() => {
      inpRef.current && inpRef.current.focus()
    })
  }
  // 提交修改
  const updateTodoHandle = () => {
    if (title.trim() === '') {
      message.error('事项名称不能为空');
      return;
    }
    // 不能有重复事项
    // if (isRepeat(list, title.trim())) {
    //   message.error('该事项已存在，尝试添加其他事项哦:)')
    //   return;
    // }

    dispatchTodoList && dispatchTodoList({ type: 'UPDATE_TODO', payload: { id: item.id, title } })
    message.success('修改成功');
    cancelHandle()
  }
  // 取消编辑
  const cancelHandle = () => {
    dispatchTodoList && dispatchTodoList({ type: 'RESET_EDIT_STATUS' })
  }
  // 置为【已完成】｜【待办】
  const toggleCompleted = (e: CheckboxChangeEvent) => {
    dispatchTodoList && dispatchTodoList({ type: 'TOGGLE_TODO_COMPLETE', payload: { id: item.id, completed: e.target.checked } })
  }

  return (
    <div className="list_item">
      <Tooltip title={item.completed ? '置为待办' : '标记为已完成'}>
        <Checkbox checked={item.completed} disabled={item.editStatus} onChange={toggleCompleted} className="list_item_checkbox" />
      </Tooltip>
      <>
        {
          item.editStatus ? (
            <>
              <Input ref={inpRef} placeholder="请输入事项名称" value={title} onChange={e => setTitle(e.target.value)} />
              <Button type="primary" onClick={updateTodoHandle} style={{ margin: '0 5px' }} >保存</Button>
              <Button type="default" onClick={cancelHandle} >取消</Button>
            </>

          ) :
            <>
              <div className="list_item_content">
                <p className={`list_item_title ${item.completed ? 'completed' : ''}`}>{item.title}</p>
              </div>
              {
                // 未完成状态，显示编辑、删除按钮
                !item.completed ? (
                  <div className="list_item_btns">
                    <Tooltip title="编辑">
                      <Button size="small" onClick={toggleEditHandle} shape="circle" icon={<FormOutlined />} />
                    </Tooltip>
                    <Tooltip title="删除">
                      <Button size="small" onClick={delHandle} shape="circle" icon={<DeleteOutlined />} />
                    </Tooltip>
                  </div>
                ) :
                  ''
              }
            </>
        }
      </>
    </div>
  )
}
export default Item