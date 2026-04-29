import type React from 'react';
import './TodoEditor.css'
import { useRef, useState } from 'react';

interface TodoEditorProps{
    onCreate:(content:string)=>void;
}


function TodoEditor({onCreate}:TodoEditorProps){
    const [content, setContent] =useState<string>('')
    const inputRef =useRef<HTMLInputElement>(null);
    //있는건지 검색해볼필요가있음
    const onChangeContent =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setContent(e.target.value)
    }

    
    const onSubmit =()=>{
        if(!content){
            inputRef.current?.focus()
            //?는 없을경우도 있다는뜻, 있으면 하고 없으면 실행하지않음
            return
            //이거 왜넣어야하지? 이거없으면 못벗어난다는데..?
        }
        onCreate(content);
        setContent('')
    }
    const onKeyDown =(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            onSubmit()
            //enter눌렀다면, onsubmit (버튼도onClick일때 onsubmit
        }
    }//버튼을 꼭 누르는게 아니라 엔터만 눌러도 알아서 버튼누른거랑 같은효과를 내주고싶구나
    return(
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 </h4>
            <div className="editor-wrapper">
                <input
                 type="text"
                 placeholder="새로운 Todo..."
                 onChange={onChangeContent}
                 ref={inputRef}//이건뭐더라? 위에 inputRef가있긴한데..
                 onKeyDown={onKeyDown}//enter눌렀다면, submit()하겠다는 내용을 입력창에도 넣어줌
                 value={content}//여기 content를넣는게 왜 ? 초기화이지? -아 content기본값이 ''이라그런가?
                 />
                <button onClick = {onSubmit}>추가</button>
            </div>

        </div>
    )
}
export default TodoEditor;