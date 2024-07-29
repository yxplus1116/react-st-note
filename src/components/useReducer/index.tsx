import UseReducerBaseComponents from './base'
import UseReducerHighComponnets from './high'

function UseReducerComponents() {
  return (
    <div>
      <h1>基础用法</h1>
      <UseReducerBaseComponents />
      <h1>高级用法</h1>
      <UseReducerHighComponnets />
    </div>
  )
}

export default UseReducerComponents