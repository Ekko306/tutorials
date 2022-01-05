import {useEffect, useState} from "react"

function FunctionComponent(props) {


    console.log(123)
    // this.setState
    const [counter, setCounter] = useState(0)    
    const increment = () => {
        setCounter(counter + 1)
    }


    // Component啥啥声明周期
    useEffect(()=>{

        setCounter(10)
        return () => {
            alert('这个函数组件卸载了！')
        }
    }, []) // 依赖数组




    useEffect(()=>{
        if(counter === 12) {
            alert('这次计数到达了12！')
        }
    }, [counter])


    

    return (
        <div style={{backgroundColor: 'lightblue', width: '200px'}}>
        <div>Function组件：{counter}</div>
        <button onClick={()=>{increment()}}>增加</button>
        </div>
    )
}

export default FunctionComponent