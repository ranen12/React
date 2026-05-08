import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import style from './searchbar-layout.module.css'


export default function SearchBarLayout({children}: {children: React.ReactNode}) {
    const [search, setSearch]=useState('')
    const onChangeSearch =(e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value);
    }
    const router =useRouter()
    const onSubmit = () => {
        if(!search || router.query.q ===search) return;
        //이미 넘어온 상태에서 같은페이지를 검색한경우 갈 필요가없음조건 
        router.push(`/search?q=${search}`)
    }
    //공백인 경우에 대한 조건을 만들어야함.
    //이미 검색한걸 또 검색하는경우 (쿼리랑 url이 같은경우)에 대한 조건
    //(searbar는 모든 페이지에서 공유하므로)
    return (
        <div>        
            <div  className={style.searchbar_container}>
            <input value ={search} onChange={onChangeSearch} placeholder="검색어를 입력하시오..." />
            {/* 이부분 input value 이해해야함 */}
            <button onClick={onSubmit}>검색</button>
        </div>
            {children}
        </div>
    );
}