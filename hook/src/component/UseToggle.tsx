import { useState } from "react";

export function useToggle(initial:boolean = false){
    const [value, setValue]=useState<boolean>(initial);
    const toggle =() =>{
        setValue((prev)=>!prev);
    };
    return {value,toggle}
}