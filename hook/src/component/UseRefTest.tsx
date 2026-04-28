import { useRef } from "react";


export default function UseRefTest(){
    const inputRef =useRef<HTMLInputElement>(null);//dom접근용
    const clickCountRef =useRef<number>(0);//표시할필요없는값저장용
    const handleClick = () =>{
        inputRef.current?.focus();
        clickCountRef.current +=1;
        console.log(`클릭 횟수: ${clickCountRef.current}`);
    
    };
    return(
        <div>
            <input ref ={inputRef} placeholder="입력하세요"/>
            <button onClick ={handleClick}>포커스 및 카운트 증가</button>
        </div>
    )
}