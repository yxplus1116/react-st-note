import './index.css'
import { Input, Button, Space, message, Tag } from "antd";
import {
  CheckCircleOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { useState, useMemo, useReducer, useEffect } from 'react';
import { generateId, isRepeat } from './util'
import List from './List'
import TodoContext from './Context'
import TodoReducer from './Reducer'
import { listItem } from './types'
function TodoList() {
  const __List = JSON.parse(localStorage.getItem('todoList') as string || '[]') || []
  const [inputValue, setInputValue] = useState<string>('')
  const [list, dispatchTodoList] = useReducer(TodoReducer, __List)
  // 待办
  const todoList = useMemo(() => list.filter(item => !item.completed), [list])
  // 已办
  const doneList = useMemo(() => list.filter(item => item.completed), [list])

  useEffect(() => {
    console.log('list', list)
    localStorage.setItem('todoList', JSON.stringify(list))
  }, [list])


  const addHandle = () => {
    // 判断是否有重复的
    if (isRepeat(list, inputValue.trim())) {
      message.error('该事项已存在，尝试添加其他事项哦:)')
      return
    }
    if (inputValue && inputValue.trim()) {
      const newItem: listItem = {
        id: generateId(),
        title: inputValue,
        status: 0,
        editStatus: false,
        completed: false
      }
      dispatchTodoList({
        type: 'ADD_TODO', payload: newItem
      })
      setInputValue('')
      message.success('添加成功')
    }
  }

  return (
    <div className='todo_list_warp'>

      <div className='todo_list_box'>
        <div className='todo_list_header'>
          <h1>我的 Todo List</h1>
        </div>
        <div className='todo_list_content'>
          {/* 输入框部分 */}
          <div className='todo_list_input'>
            <Space.Compact style={{ width: '100%' }}>
              <Input size="large" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="请输入待办事项" />
              <Button size="large" onClick={addHandle} type="primary">新增</Button>
            </Space.Compact>
          </div>
          {/* 列表内容 */}
          <div className='todo_list_inner'>
            <div className='list_warp'>
              <Tag className='tag_title' icon={<PieChartOutlined />} color="#55acee">
                待办事项
              </Tag>
              <TodoContext.Provider value={{ list, dispatchTodoList }}>
                <List list={todoList} label='todo' />
              </TodoContext.Provider>
            </div>
            <div className='list_warp'>
              <Tag className='tag_title' icon={<CheckCircleOutlined />} color="#87d068">
                已完成
              </Tag>
              <TodoContext.Provider value={{ list, dispatchTodoList }}>
                <List list={doneList} label='done' />
              </TodoContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList