import logo from '../../logo.svg';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';
const Demo = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary" onClick={() => { navigate(-1) }}>返回</Button>
      </header>
    </div>
  )
}

export default Demo