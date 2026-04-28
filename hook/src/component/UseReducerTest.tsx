import { useReducer } from "react";

type Action = 'INC' | 'DEC';

//type Action = {type:'INC} | {type:'DEC};


function countReducer(current:number, action:Action){
    if(action === 'INC'){
        return current + 1;
    }else if (action === 'DEC'){
        return current -1;
    }
    return current;
}

export default function Counter(){
    const [count, dispatch]=useReducer(countReducer, 0)
    function increase():void{
        dispatch('INC');
    }
    function decrease():void{
        dispatch('DEC');
    }
    return(
        <div>
            <input type ="button" value="-" onClick={decrease}/>
            <input type="button" value ="+" onClick={increase}/>
            <span>{count}</span>
        </div>
    )
}