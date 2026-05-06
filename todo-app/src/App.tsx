import { useCallback, useMemo, useReducer, useState } from 'react'
import './App.css'
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'
import { useRef } from 'react'
import { TodoDispatchContext, TodoStateContext } from './TodoContext'

// const mockTodos = [
//   {
//     id:0,
//     isDone:false,
//     content:"javascript 공부하기.",
//     createDate:new Date().getTime(),
//   },
//   {
//     id:1,
//     isDone:false,
//     content:"AI공부하기.",
//     createDate:new Date().getTime(),
//   },
//   {
//     id:2,
//     isDone:false,
//     content:"React공부하기.",
//     createDate:new Date().getTime(),
//   },
// ] //[]안에 {}들어간 [{}.{},{}]형태


//Todo의 타입을 지정해줘야함
export interface Todo{
  id:number;
  isDone:boolean;
  content:string;
  createDate:number;
}
 type Action =
  |{type: 'CREATE',newitem:Todo}
  |{type: 'UPDATE',targetId:number}
  |{type: 'DELETE',targetId:number}

//reduce로 만들어보기

function reducer(todos:Todo[],action:Action){
  let result;
  switch(action.type){
    case 'CREATE':{
     result = [action.newitem, ...todos]; //이게 대체 뭐냐? Reduce함수이기때문에 setTodo안해도됨
    break;
    }
    case 'UPDATE':{
      result = todos.map((todo)=>
        todo.id ===action.targetId ? {...todo, isDone: !todo.isDone}:todo,
      );
      break;
    }
    case 'DELETE':{
      result = todos.filter((todo)=>todo.id !== action.targetId);
      break;
    }
    default:
      result =todos;
      //return을 다 result로 바꾸고break;를 넣어주었음
  }

  return result;
}

function App() {
    const stored =localStorage.getItem('todos')
    const initTodos:Todo[] =stored ? JSON.parse(stored) : [] //3항 연산자
    // const [todos, setTodos] =useState<Todo[]>(mockTodos); //useState초기 형태 reducer로 옮기며 주석처리 하였음
    const [todos,dispatch]=useReducer(reducer, initTodos)

    // const idRef = useRef(initTodos.length+1)
    //1. id를 위해 안보이는값 관리인 useRef를 주었다.
    //2.initTodos.length+1을 하였더니 삭제도중 중복된 키 문제가 있다. 이걸 방지하기 위해 저장하는 다른곳을 만드렁보자

     const initId =Number (localStorage.getItem('todoId') ?? 1); //null 과 Undifined를 체크한다. 널일경우 1반환
     const idRef = useRef(initId);

    const onCreate = useCallback((content:string)=>{
      const newitem = {
        id:idRef.current,
        content,
        isDone:false,
        createDate:new Date().getTime(),
      }
      // setTodos([newitem, ...todos]);
      dispatch({type:'CREATE',newitem})
      
      idRef.current +=1;
      localStorage.setItem('todoId',JSON.stringify(idRef.current));
  //상태를 localStorage에 키 값 저장하겠음 근데 json형태로. 간단한 데이터는 로컬 스토리지에 저장하였음......
    },[]);
    //전부 useCallback으로 감싸줄게....
    
    //todos의 맵으로 id가 같은지 확인하고 isDone를 바꿔준다음, setTodos를 하여 다시그려준다.
    const onUpdate = useCallback((targetId:number)=>{
    //   setTodos(
    //   todos.map((todo)=>
    //     todo.id ===targetId ? {...todo, isDone: !todo.isDone}:todo,),
    // )  
    dispatch({type:'UPDATE', targetId})

    },[]);
    //체크하기기능? 기능의 본질은 id를 넘겨받아서 하는 것데이터에 관한 부분이므로 
    // app에서 관리 위에 content:string처럼 어떤 것에 대해서 작동하는지 만들고,
    //  이함수자체를 필요한 쪽으로 보내준다(item으로보내줘야하니,, onUpdate를 List에보내고, 그걸List에서다시props해야함))

    const onDelete =useCallback((targetId:number)=>{
      // setTodos(todos.filter((todo)=>todo.id !== targetId)) 
      //삭제란 기능은 todos안에 todo.id와 targetId가 같지않은애들만 골라서 todos에넣겠음 넣으려면setTodo함수를 써야함 
      //위와 같은 방법을 또 써야함
      dispatch({type:'DELETE', targetId})
    },[]);

  
  const dispatches =useMemo(()=>({onCreate, onUpdate,onDelete}),[onCreate,onUpdate,onDelete])
  // useMemo(()=>return(....),[])형태이다. onCreate,onUpdate,onDelete가 실행될때 작동하며, 의존성배열은 onCreate,onUpdate,onDlelete를 그대로 넣어서 이거바뀔때만 움직일게를 지정해줘야함

  return (
    <div className ="App">

    <Header /> 
    {/* 에디터와 리스트가 업데이트 딜리트 등 context를 필요로 한다 해당되는애들만 provider로 지정해준다. */}
    <TodoStateContext.Provider value={{todos}}>
      {/* 얘는 todos가 사실 배열이다. 근데  {}안에 넣어줘야하고 이안엔 한개밖에 못넣는다. 그러니까 {{}}로 한번 더 감싸준것 뿐이다. */}
      <TodoDispatchContext.Provider value ={dispatches}>
        {/* 얘는 배열 아니고 걍 {키:밸류,키:밸류}있는 구조라서 걍 다 들어있음 */}
        <TodoEditor/>
        <TodoList/>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>

      {/* {todos:todos,onCreate:onCreate,onDelete:onDelete}를 key:value가 같으니까 그냥생략했음 {{}}구조인건 value={}구조인데 그안에 객체 {}를 또 넣은개념이다.*/}
    


    </div>
  )
}

export default App;
