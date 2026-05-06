//context 활용 파일

import type { Todo } from "./App"
import { createContext } from "react";

// interface TodoContextType {
//     todos:Todo[]
    // onCreate:(content:string)=>void;
    // onUpdate:(id:number)=>void;
    // onDelete:(id:number)=>void;
// }
//1.onCreate,onUpdate,onDelete는 app에서 자식에게 빌려주는 함수이다. 이들은 content나 id를 받아서 함수내에서 사용하도록 지정되어 있다. 
//어떤 매개변수를 받느냐와 반환값이 없다 조차도 타입으로 지정이 필요하다.
//2.context도 나눌필요를 느껴서 주석처리함






//3.얘도 주석처리
// const TodoContext = createContext<TodoContextType>({
//     todos:[],
//     onCreate:(content: string)=>{},
//     onUpdate:(id:number)=> {},
//     onDelete:(id:number)=> {},

// })
//위에 TodoContextType의 초기값 객체{}를 임의로 넣은것 뿐이다.. 얘는 초기값 데이터임.

// export default TodoContext;

//1.context 생성을 하였으니, 다음은 app에가서 Provier을 ..





interface TodoStateContextType {
    todos:Todo[];
}

export const TodoStateContext = createContext<TodoStateContextType>({
    todos: [],
})
interface TodoDispatchContextType {
    onCreate:(content:string) =>void;
    onUpdate:(id:number)=> void,
    onDelete:(id:number)=> void,
}

export const TodoDispatchContext =createContext<TodoDispatchContextType>({
    onCreate:(content: string)=>{},
    onUpdate:(id:number)=> {},
    onDelete:(id:number)=> {},

})

