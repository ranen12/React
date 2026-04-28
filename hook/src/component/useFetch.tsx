import { useState,useEffect } from "react";


export function Fettch<T>(url:string){
    // 여기붙어있는 T가 어떤거지?.. 제네릭인지는 아는데 뭐에 대해서 T란거지?
    const [data, setData]=useState<T | null>(null);
    const [loading, setLoading] =useState<boolean>(true);

    useEffect(()=>{
        const load = async () =>{
            const res =await fetch(url);
            const json = await res.json();
            setData(json);
            setLoading(false);
        }; load();
    },[url])//url이 변경될때마다 다시 해준다.
    return {data, loading};
}