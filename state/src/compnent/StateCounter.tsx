//자식임

interface StateCounterPorps{
    step:number;
    onUpdate:(val:number)=>void

}


export function StateCounter({step, onUpdate}: StateCounterPorps) {
    const handleClick =() => onUpdate(step);

    return(
        <button className="cnt" onClick = {handleClick}>
            <span>{step}</span>
        </button>
    )
    
}

interface ResetCounterProp{
    reset:()=>void;

}

export function ResetCounter({reset}:ResetCounterProp){
    return(
        <>
        <button onClick ={reset}>Reset하기</button>
        </>
    )

}
