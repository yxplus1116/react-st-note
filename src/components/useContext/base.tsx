import Child1 from './child1'
import { useState } from 'react'
import myContext from './context'

function useContextBaseComponents() {
  const [val, setValue] = useState<string>('父组建传过来的')
  const updateValue = (newVal: string) => {
    setValue(newVal)
  }
  return (
    <div>
      <myContext.Provider value={{ value: val, updateValue }}>
        <Child1 />
      </myContext.Provider>

    </div>
  )
}
export default useContextBaseComponents