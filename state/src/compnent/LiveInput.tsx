import { useState } from "react";
import type{ ChangeEvent } from "react";

export default function LiveInput(){
    const [text, setText]=useState<string>('');
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value);
    };//e:ChangeEvent<HTMLInputElement>이것은 html에서 input태그에서 일어난 변화라는 타입임을 지정하였음
    return(
        <div>
                <input type ="text" value ={text} onChange={handleChange} placeholder="내용을 입력하시오"/>
                <p>입력한 내용: <strong>{text}</strong></p>
        </div>
    )


}