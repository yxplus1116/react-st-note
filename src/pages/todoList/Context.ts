import { createContext } from "react";
import { todoContextProps } from './types'

const TodoContext = createContext<todoContextProps | null>(null)
 
export default TodoContext