import { Button, Statistic, InputNumber, Input, Avatar, List } from "antd";
import { useState } from 'react'

interface listItem {
  title: string
}
const data = [
  {
    title: 'Ant Design Title ',
  },
];

const UseHighStateComponnets = () => {
  const initCount = 0
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(initCount)
  const [person, setPerson] = useState({ name: "张三", age: 18 })
  const [dataList, setDataList] = useState<listItem[]>(data)
  const add = () => {
    for (let i = 0; i < step; i++) {
      // 1、prevData为我们定义的一个形参，指当前count应该的值；
      // 2、{return prevData+1} 中，将 prevData+1，并将运算结果return出去。当然也非常推荐使用更加简化的写法：setCount(prevData => prevData+1)；
      // 3、最终将prevData赋值给count；

      // 补充说明：你可以将prevData修改成任意你喜欢的变量名称，比如prev，只需要确保和后面return里的一致即可。
      setCount(prevCount => {
        return prevCount + 1
      })
    }
  }
  const stepCHange = (val: number | null) => {
    if (val !== null) {
      setStep(val)
    }
  }

  const ageAdd = () => {
    setPerson({ ...person, age: person.age + 1 })
  }
  const addListItem = () => {
    setDataList([...dataList, { title: "Ant Design Title " }])
  }
  const delListItem = ({ index }: { index: number }) => {
    setDataList(dataList.filter((item, i) => i !== index))
  }
  return (
    <>
      <pre>在类组件中，setState是执行的是“异步对比累加赋值”，何为“对比”？ 就是先对比之前数据属性中是否有age，如果有则修改age值，同时不会影响到其他属性的值。我猜测react是使用ES6中新增加的Object.assign()这个函数来实现这一步的。<br />
        但是，用useState定义的修改函数 setXxxx，例如setPerson中，执行的是 “异步直接赋值”。</pre>
      <h4>性能优化</h4>

      <pre>
        对于简单类型的值，例如String、Number 新旧值一样的情况下是不会引起重新渲染的；<br />
        对于复杂类型的值，即使新旧值 “看上去是一样的” 也会引起重新渲染。除非新旧值指向同一个对象，或者可以说成新旧值分别是同一个对象的引用；<br />
        采用复杂类型的值不是不可以用，很多场景下都需要用到，但是请记得上面的测试结果。<br />
        为了可能存在的性能问题，如果可以，最好避免使用复杂类型的值。</pre>
      <div className="useState" style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <p>异步修改用法：</p>
        <Button danger type="primary" >-</Button>
        <Statistic value={count} />
        <InputNumber addonBefore="+" defaultValue={step} onChange={stepCHange} />
        <Button onClick={add} type="primary" >+{step}</Button>
        <Button>重置</Button>
      </div>
      <h3>修改对象</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <Button type="primary" onClick={ageAdd} >年龄+1</Button>
      <Input style={{ width: "200px", margin: '0 20px' }} value={person.name} onChange={(e) => { setPerson({ ...person, name: e.target.value }) }} />
      <Input style={{ width: "200px" }} value={person.age} onChange={(e) => { setPerson({ ...person, age: Number(e.target.value) }) }} />
      <h3>修改数组</h3>
      <pre>{JSON.stringify(dataList, null, 2)}</pre>
      <List
        itemLayout="horizontal"
        dataSource={dataList}
        renderItem={(item, index) => (
          <List.Item actions={[
            <Button type="link" danger onClick={() => delListItem({ index })}>
              删除
            </Button>
          ]}>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item.title}{index}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      <Button type="primary" onClick={addListItem} >新增一项</Button>
    </>
  )
}

export default UseHighStateComponnets