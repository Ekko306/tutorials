function TriggerEvent(props) {
    const {action1, action2} = props;
    return (
        <>
        <div style={{backgroundColor: 'lightblue', marginTop: '20px'}} onClick={()=>{action1()}}>点我触发事件1</div>
        <div style={{backgroundColor: 'lightyellow'}} onClick={()=>{action2()}}>点我触发事件2</div>
        </>
    )
}

export default TriggerEvent