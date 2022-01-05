import React from "react"


class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.increment = this.increment.bind(this);
    }

    // useEffect
    componentDidMount() {
        this.setState((state) => {return {counter: 10}} )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.counter === 12) {
            alert('上次计数到达了12！')
        }
    }

    componentWillUnmount() {
        alert('我这个类组件卸载了！')
    }
    
    // useState
    increment() {
        this.setState((state, props) => {
              return {counter: state.counter + 1};
        });
    }

    render() {
        return(
            <div style={{backgroundColor: 'pink', width: '200px'}}>
                <div>class组件：{this.state.counter}</div>
                <button onClick={()=>{this.increment()}}>增加</button>
            </div>
        )
    }
}

export default ClassComponent