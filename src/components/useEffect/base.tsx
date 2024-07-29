import { useEffect, useState } from "react"
import { Button } from "antd"

function UseEffectBaseComponents() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // console.log('- useEffect执行了')
    return () => {
      // console.log('- useEffect卸载了')
    }
  }, [count])
  return (
    <>
      <>
        <pre>- useEffect，他的作用是“勾住”函数组件中某些生命周期函数。都能勾住哪些生命周期函数？</pre>
        <pre>componentDidMount(组件被挂载完成后)、componentDidUpdate(组件重新渲染完成后)、componentWillUnmount(组件即将被卸载前)</pre>
        <pre>- 为什么是这3个生命周期函数？</pre>
        <pre>因为修改数据我们可以使用前面学到的useState，数据变更会触发组件重新渲染，上面3个就是和组件渲染关联最紧密的生命周期函数。</pre>
        <pre>- useEffect是来解决类组件什么问题的？</pre>
        <pre>useEffect是来解决类组件 某些执行代码被分散在不同的生命周期函数中的问题。</pre>
        <h3>useEffect基本用法</h3>
        <pre>
          useEffect(effect,[deps])函数可以传入2个参数，第1个参数为我们定义的执行函数、第2个参数是依赖关系(可选参数)。若一个函数组件中定义了多个useEffect，那么他们实际执行顺序是按照在代码中定义的先后顺序来执行的。<br />
          具体说明如下：<br />
        </pre>
        <pre>
          第1个值effect是一个function，用来编写useEffect对应的执行代码。<br />
          还记得开头提到的useEffect能勾住哪3个生命周期函数吗？<br />
          componentDidMount、componentDidUpdate、componentWillUnmount ，当上述3个生命周期函数执行后，就会触发useEffect函数，进而执行而第1个参数 effect 中的内容。<br />

          <pre>
            - 组件挂载后(componentDidMount)与组件重新渲染后(componentDidUpdate)对应的代码合并为一个函数这个容易理解，可是组件卸载前(componentWillUnmount)也能融入进来？<br />
            答：是的，通过在 effect 中 return 一个函数来实现的。<br />
          </pre>

          关于第2个参数 [deps] ，先知道这个是可选参数，是Hook用来向React表明useEffect依赖关系的即可。关于它的用法会在useEffect高级用法中有更多详细讲述。<br />
          <pre>
            - effect 函数主体内容中的代码，就是组件挂载之后和组件重新渲染之后你需要执行的代码；<br />
            - effect 函数 return 出去的返回函数主体内容中的代码，就是组件即将被卸载前你需要执行的代码；<br />
            - 第2个参数 [deps]，为可选参数，若有值则向React表明该useEffect是依赖哪些变量发生改变而触发的；
          </pre>
          <pre>
            '[effect]'补充说明<br />
            若你不需要在组件卸载前执行任何代码，那么可以忽略不写 effect 中的 return相关代码；

            <pre>
              '[deps]'补充说明：<br />
              - 若缺省，则组件挂载、组件重新渲染、组件即将被卸载前，每一次都会触发该useEffect；<br />
              - 若传值，则必须为数组，数组的内容是函数组件中通过useState自定义的变量或者是父组件传值过来的props中的变量，告诉React只有数组内的变量发生变化时才会触发useEffect；<br />
              - 若传值，但是传的是空数组 []，则表示该useEffect里的内容仅会在“挂载完成后和组件即将被卸载前”执行一次；<br />
            </pre>
            <pre>
              useEffect 执行顺序：<br />
              当 count 发生变化时，React 会先调用上一次 useEffect 返回的清理函数，然后再调用新的 useEffect 函数。<br />
              这可以确保在副作用重新执行之前，旧的副作用被适当地清理。<br />

            </pre>
          </pre>
        </pre>
      </>
      <div>
        <p>{count}</p>
        <Button type="primary" onClick={() => setCount(count + 1)}>+1</Button>

      </div>
    </>
  )
}

export default UseEffectBaseComponents