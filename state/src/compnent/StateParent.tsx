//부모임


import { useState } from "react";
import { StateCounter, ResetCounter } from "./StateCounter";



export default function StateParent(){
    const [count,setCount]=useState<number>(0);
    const update = (step:number)=>setCount((c)=> c +step);
    const reset =() =>setCount(0);

    return(
        <>
        <p>총 개수:{count}</p>
        <StateCounter step = {1} onUpdate={update}/>
        <StateCounter step = {5} onUpdate={update}/>
        <StateCounter step = {-1} onUpdate ={update}/>
        <ResetCounter reset ={reset}/>
        </>
    )
}