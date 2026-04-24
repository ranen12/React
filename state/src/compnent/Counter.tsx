import { useState } from "react";


interface CounterProps{
    init: number;
}

export default function Counter({init}:CounterProps) {
    const [count,setCount] = useState<number>(init);
    const handleClick = ():void =>{
       setCount((prev)=>prev +2);
    };    


return(
    <div>
        <h1>클릭카운터</h1>
        <p>현태 클릭수:{count}</p>
        <button onClick={handleClick}>클릭하세요</button>
    </div>
    
)}