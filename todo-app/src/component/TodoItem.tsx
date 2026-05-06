import './TodoItem.css'
import  {type Todo} from '../App';
import React, { useContext } from 'react';
import { TodoDispatchContext } from '../TodoContext';

//app에 위치한 todo인터페이스를 받아옴

interface TodoItemProps{
    todo:Todo;
    // onUpdate:(targetId:number)=>void;
    // //app부터List에보내고list에서받아온 소중한 onupdate 였었지만 Props를 안쓰면서 버렸음 
    // onDelete:(targetId:number)=>void
    //마찬가지로 context를 사용하면서 이부분을 주석처리함

}

//1.마찬가지로 Item은 여러개임에도 불구하고 list변경사항이 있으면 item이 전부 리렌더링 한다....

// function TodoItem({todo, onUpdate, onDelete}:TodoItemProps) {
//6.context를 씀으로 주석처리함
function TodoItem({todo}:TodoItemProps) {

    console.log(`${todo.id}`)//2. item을 리스트에 추가할때마다 가지고 있는id 와 추가된 id까지 전부 콘솔에 찍는다. .. 즉 모든 아이템들을 호출(리렌더링) 하고 있다. memo로 또다시 
    //가려줘야한다....


    //중요 context하나를 가지고 app에서 내려보냈더니 결국은 같은context로 연관되는 애들이 다 바뀌는 처음과 같은 문제가 발생하였다.
    //context를 나눌 필요를 느낀다.
    const {onUpdate,onDelete}=useContext(TodoDispatchContext)
    //todolist
    const onChangeCheckbox =()=>{
        onUpdate(todo.id)
    }//onUpdate타입을 그대로넣기엔 타입이맞지않기에 한번감싸준다.
    const onClickDelete =()=>{
        onDelete(todo.id);
    }
    return(
        <div className="TodoItem">
        <div className= "checkbox_col">
            <input type="checkbox" checked ={todo.isDone} onChange={onChangeCheckbox}/>
            {/* 엔터해서추가하면, 끝에글자가같이들어간다......막아줘야함 */}
        </div>
        <div className="title_col">{todo.content}</div>
        <div className="date_col">
            {new Date(todo.createDate).toLocaleDateString()}</div>
        <div className="btn_col">
            <button onClick ={onClickDelete}>삭제</button>
        </div>
        </div>
    );
    
}
export default React.memo(TodoItem)
//3.감싸주었다.. 그런데 여전히 다 Id가 다 뜬다. 왜냐면 Props가 변경될시마다 함수가 재정의 되면서 다시 그리기 때문이다.
//todoitem에 영향을 미치는건 {onUpdate}와 {OnDelete}두 가지이며, 외부에서 전달받은 props이므로 함수가 다시 생성되면서 리렌더링 하는걸 막기 위해
//useCallback을 사용해야한다.
//4.app층으로 가서 onUpdate와 onDelete를 usecallback ({},[])형태로 감싸준다.