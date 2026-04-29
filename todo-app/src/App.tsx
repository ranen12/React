import { useReducer, useState } from 'react'
import './App.css'
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'
import { useRef } from 'react'

const mockTodos = [
  {
    id:0,
    isDone:false,
    content:"javascript 공부하기.",
    createDate:new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content:"AI공부하기.",
    createDate:new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content:"React공부하기.",
    createDate:new Date().getTime(),
  },
] //[]안에 {}들어간 [{}.{},{}]형태


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
  switch(action.type){
    case 'CREATE':{
      return [action.newitem, ...todos] //이게 대체 뭐냐? Reduce함수이기때문에 setTodo안해도됨
    }
    case 'UPDATE':{
      return todos.map((todo)=>
        todo.id ===action.targetId ? {...todo, isDone: !todo.isDone}:todo,
      )
    }
    case 'DELETE':{
      return todos.filter((todo)=>todo.id !== action.targetId)
    }
  }
}

function App() {
    
    // const [todos, setTodos] =useState<Todo[]>(mockTodos); //useState를 쓴애
    const [todos,dispatch]=useReducer(reducer,mockTodos)
    const idRef = useRef(3)
    // id를 위해 안보이는값 관리인 useRef를 준다

    const onCreate = (content:string)=>{
      const newitem = {
        id:idRef.current,
        content,
        isDone:false,
        createDate:new Date().getTime(),
      }
      // setTodos([newitem, ...todos]);
      dispatch({type:'CREATE',newitem})
      idRef.current +=1;
    }
    
    //todos의 맵으로 id가 같은지 확인하고 isDone를 바꿔준다음, setTodos를 하여 다시그려준다.
    const onUpdate = (targetId:number)=>{
    //   setTodos(
    //   todos.map((todo)=>
    //     todo.id ===targetId ? {...todo, isDone: !todo.isDone}:todo,),
    // )  
    dispatch({type:'UPDATE', targetId})

    }
    //체크하기기능? 기능의 본질은 id를 넘겨받아서 하는 것데이터에 관한 부분이므로 
    // app에서 관리 위에 content:string처럼 어떤 것에 대해서 작동하는지 만들고,
    //  이함수자체를 필요한 쪽으로 보내준다(item으로보내줘야하니,, onUpdate를 List에보내고, 그걸List에서다시props해야함))

    const onDelete =(targetId:number)=>{
      // setTodos(todos.filter((todo)=>todo.id !== targetId)) 
      //삭제란 기능은 todos안에 todo.id와 targetId가 같지않은애들만 골라서 todos에넣겠음 넣으려면setTodo함수를 써야함 
      //위와 같은 방법을 또 써야함
      dispatch({type:'DELETE', targetId})
    }


  return (
    <div className ="App">
    <Header />
    <TodoEditor onCreate ={onCreate}/>
    <TodoList todos ={todos} onUpdate={onUpdate} onDelete ={onDelete}/>
    

    </div>
  )
}

export default App;
