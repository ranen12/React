import './TodoItem.css'
import  {type Todo} from '../App';

//app에 위치한 todo인터페이스를 받아옴

interface TodoItemProps{
    todo:Todo;
    onUpdate:(targetId:number)=>void;
    //app부터List에보내고list에서받아온 소중한 onupdate
    onDelete:(targetId:number)=>void

}


function TodoItem({todo, onUpdate, onDelete}:TodoItemProps) {
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
export default TodoItem;