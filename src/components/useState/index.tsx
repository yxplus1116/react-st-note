import UseBaseStateComponent from "./base";
import UseHighStateComponnets from './high'

const useStateComponent = () => {
  return (
    <>
      <h1>基础用法</h1>
      <UseBaseStateComponent />
      <h1>高级用法</h1>
      <UseHighStateComponnets />
    </>
  )
};

export default useStateComponent  