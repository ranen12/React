import './TodoList.css'
import TodoItem from './TodoItem.tsx';
import {type Todo} from '../App.tsx'
import { useContext, useMemo, useState, type ChangeEvent } from 'react';
import { TodoStateContext } from '../TodoContext.ts';


// interface TodoListProps{
//     todos: Todo[];
//     onUpdate:(targetId:number)=>void
//     //update가 여기는필요없지만 더 내려주기위해 여기도 울면서 써야함 
//     onDelete:(targetId:number)=>void
// }


// function TodoList({todos,onUpdate,onDelete}:TodoListProps){
function TodoList(){
    const {todos}=useContext(TodoStateContext);
    const [search, setSearch]= useState('');
    //필터링하기 위한 친구가
    const onChangeSearch = (e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }
    const getSearchResult = () =>{
        return search === '' 
        ? todos 
        : todos.filter((todo)=>
            todo.content.toLowerCase().includes(search))
        //이부분 주의 ''는 빈문자열로 사용자가 아무것도 입력하지 않은 상태임. ''인 경우 그냥 todos를 보여줘, 그게 아닐경우 todos의 filter로 맞는걸 찾아서 반환
        //toLowerCase()는 대소문자구분을 없애려고넣었음
    };
//2.useMemo로 한번 감싸줬다. todos가 계속 변경시 리렌더링을 계속 하기 때문에...useMemo막고나서 체크를 바꿀때만 analzeTodo가 호출되고
//단순히 todos가 변동시엔 호출되지 않는다.
    const analyzeTodo =useMemo(() =>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount= totalCount - doneCount;
        console.log('analyzeTodo호출')
        return{
            totalCount,//totalCount:totalCount,
            doneCount,
            notDoneCount,
            
        }
    },[todos])
    //1. analyzeTodo는 검색창에 검색어를 문자를 넣을때마다 호출된다.(Todo List와 연결되어있고 todos가 변할때마다 쓴다.)
    const {totalCount, doneCount, notDoneCount} = analyzeTodo;
    //밑에 사용하려고 씀
    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <div>
            <div>총갯수:{totalCount}</div>
            <div>완료된 할일:{doneCount}</div>
            <div>완료되지 못한 할일{notDoneCount}</div>
            </div>
            <input
              type= "text"
              className= "searchbar"
              placeholder= "검색어를 입력하세요."
              onChange ={onChangeSearch}
              //여기onChange는 뭐지?
              />
            <div>
                {getSearchResult().map((todo)=>(
                    // <TodoItem todo={todo} key ={todo.id} onUpdate={onUpdate} onDelete={onDelete}/>
                    <TodoItem todo={todo} key ={todo.id}/> 
                    // 밑에 Todoitem에 보내는 onUpdate랑 onDelete도 없애주었어..
                ))}
                {/* 만일 getSearResul를 이용하여 filter한애를 반환하고, 그게없다면 그냥todos를보여줘 */}
            </div>
        </div>
    )
}

export default TodoList;