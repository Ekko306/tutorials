import { useState } from 'react';
import './App.css';
import ClassComponent from './components/Class';
import FunctionComponent from './components/Function';

function App() {
  const [flag1, setFlag1] = useState(true)
  const [flag2, setFlag2] = useState(true)

  
  return (
    <>
    {flag1 && <ClassComponent/>}
    <button onClick={()=>{setFlag1(false)}}>卸载类组件</button>

    <br/>
    <br/>
    <br/>

    {flag2 && <FunctionComponent/>}
    <button onClick={()=>{setFlag2(false)}}>卸载函数组件</button>
    </>
  )
}

export default App;
