
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import UseStateComponent from '../../components/useState';
import Demo from '../../components/demo'
import UseEffectComponents from '../../components/useEffect'
import UseContextComponents from '../../components/useContext'
import UseReducerComponents from '../../components/useReducer';
import UseCallback from '../../components/useCallback'
import UseMemoComponents from '../../components/useMemo'
import UseRefComponents from '../../components/useRef'
import UseImperativeHandleComponents from '../../components/useImperativeHandle'

function HooksComponents() {
  const onChange = (key: string) => {
    // console.log(key);
  };
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'demo',
      children: <Demo />,
    },
    {
      key: '2',
      label: 'UseStateComponent',
      children: <UseStateComponent />,
    },
    {
      key: '3',
      label: 'UseEffectComponents',
      children: <UseEffectComponents />,
    },
    {
      key: '4',
      label: 'UseContextComponents',
      children: <UseContextComponents />,
    },
    {
      key: '5',
      label: 'UseReducerComponents',
      children: <UseReducerComponents />,
    },
    {
      key: '6',
      label: 'UseCallback',
      children: <UseCallback />,
    },
    {
      key: '7',
      label: 'UseMemoComponents',
      children: <UseMemoComponents />,
    },
    {
      key: '8',
      label: 'UseRefComponents',
      children: <UseRefComponents />,
    },
    {
      key: '9',
      label: 'UseImperativeHandleComponents',
      children: <UseImperativeHandleComponents />,
    },
  ];
  return (
    <div >
      <Tabs destroyInactiveTabPane defaultActiveKey="0" centered items={items} onChange={onChange} />
    </div>
  );
}

export default HooksComponents;