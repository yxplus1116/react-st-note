import { createContext } from "react";
interface MyContextType {
  value: string ;
  updateValue: (newVal: string) => void;
}

// 创建上下文，指定默认值类型为 `undefined`，后续会提供具体的值
const myContext = createContext<MyContextType | undefined>(undefined);

export default myContext;
