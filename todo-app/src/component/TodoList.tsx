import './TodoList.css'
import TodoItem from './TodoItem.tsx';
import {type Todo} from '../App.tsx'
import { useMemo, useState, type ChangeEvent } from 'react';

interface TodoListProps{
    todos: Todo[];
    onUpdate:(targetId:number)=>void
    //update가 여기는필요없지만 더 내려주기위해 여기도 울면서 써야함 
    onDelete:(targetId:number)=>void
}


function TodoList({todos,onUpdate,onDelete}:TodoListProps){
    const [search, setSearch]= useState('');
    //필터링하기 위한 친구가
    const onChangeSearch = (e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }
    const getSearchResult = () =>{
        return search === '' ? todos : todos.filter((todo)=>todo.content.toLowerCase().includes(search))
        //이부분 주의 ''는 빈문자열로 사용자가 아무것도 입력하지 않은 상태임. ''인 경우 그냥 todos를 보여줘, 그게 아닐경우 todos의 filter로 맞는걸 찾아서 반환
        //toLowerCase()는 대소문자구분을 없애려고넣었음
    };
    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <input
              type= "text"
              className= "searchbar"
              placeholder= "검색어를 입력하세요."
              onChange ={onChangeSearch}
              //여기onChange는 뭐지?
              />
            <div>
                {getSearchResult().map((todo)=>(
                    <TodoItem todo={todo} key ={todo.id} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
                {/* 만일 getSearResul를 이용하여 filter한애를 반환하고, 그게없다면 그냥todos를보여줘 */}
            </div>
        </div>
    )
}

export default TodoList;