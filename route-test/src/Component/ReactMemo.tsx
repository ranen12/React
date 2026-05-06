import { useState } from "react";
import React from "react";

export function Child({value}:{value:number}){
    console.log('child 렌더링')
    return(<div>{value}</div>)
}

export const ChildWithMemo= React.memo(
    function Child1({value,}:{value:number;}){
        console.log('ChildWithMemO렌더링');
        return <div>{value}</div>
    }
)

export default function ReactMemo(){
    const [count, setCount] =useState(0);
    const [text, setText]=useState('');
    return(
        <div>
            <Child value ={count} />
            <ChildWithMemo value ={count}/>
            <button onClick ={()=>setCount(count+1)}>count 증가</button>
            <input value ={text} onChange ={(e)=>setText(e.target.value)}/>
        </div>
    )
}