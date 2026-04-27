import {useEffect, useState} from 'react';


export default function ExUseEffect(){
    const [count,setCount]= useState<number>(0);
    useEffect(()=>{document.title = `${count}번 클릭했습니다`;}
    ,[count]);

    return(
        <div>
            <p>{count}버 클릭했습니다</p>
            <button onClick ={()=> setCount((prev)=>prev +1)}>클릭</button>
        </div>
    )
}