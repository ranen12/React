import { useState } from "react"
import Child1 from "./Child1";
import Child2 from "./Child2";



export default function ParentComponent(){
    const [inputValue,setInputValue]=useState<string>('');

    const handleInputChange =(value:string)=>{
        setInputValue(value);
    };
    return(
        <div>
            <h1>State 올리기</h1>
            {}
            <Child1 onInputChange={handleInputChange}/>
            <Child2 value={inputValue}/>

        </div>
    )

}


