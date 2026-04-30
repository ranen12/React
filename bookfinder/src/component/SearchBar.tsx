import { useRef } from 'react';
import './SearchBar.css'


interface SearchBarProps{
    onChangeQuery:(q:string)=>void
    //내려받은 함수인데 위에서 생긴 모양이랑 똑같이 타입인터페이스 해줘야함
    resetPage:() => void
}

function SearchBar({onChangeQuery,resetPage}:SearchBarProps){
    const inputRef =useRef<HTMLInputElement>(null)
    const handleSearchClick =() =>{
        if(!inputRef.current) return;
        onChangeQuery(inputRef.current.value);
        resetPage();
    }
    return(
        <div className ="search-bar">
            <input 
            type ="tset" 
            placeholder ='검색어를 입력하세요. ' 
            ref={inputRef}/>

            <button onClick={handleSearchClick}>검색</button>
            {/* 여기서 일어난 일을 값을 넣어서 위로 올려주기 위해 다 쓰고 다시 호출함 */}
        </div>
    )
}

export default SearchBar;