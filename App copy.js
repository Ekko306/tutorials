import { useState } from 'react';
import './App.css';
import TriggerEvent from './components/TriggerEvent';

function App() {


  const [textFlag1, setTextFlag1] = useState(false)
  function gotFocus() {
    console.log('点击');
    setTextFlag1(true)
    setTextFlag2(false)
    setTextFlag3(false)
  }

  
  const [inputValue, setInputValue] = useState()
  const [textFlag2, setTextFlag2] = useState()
  const [textFlag3, setTextFlag3] = useState()
  function lostFocus() {
    console.log('失焦')
    if(!inputValue) {
      setTextFlag2(true)
    } 
    
    
    if(!inputValue || inputValue.length < 2) {
      setTextFlag3(true)
    } else if(true) {
      window.open('https://www.baidu.com/s?wd=%E9%A1%B5%E9%9D%A2%E4%B8%80')
    }
  }

  return (
    <div className="App">
      {textFlag1 && <div>输入姓名后自动跳转到页面二</div>}

      <label>姓名：
        <input
          onFocus={()=>{gotFocus()}}
          onBlur={()=>{lostFocus()}} 
          onChange={(e)=>setInputValue(e.target.value)}
          style={{backgroundColor: 'pink'}}>
        </input>
      </label>

      {textFlag2 && <div>你没有输入名字！</div>}

      {textFlag3 && <div>名字少于两个汉字！</div>}
    </div>
  );
}

export default App;
