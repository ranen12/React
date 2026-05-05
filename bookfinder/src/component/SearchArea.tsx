import { useEffect, useRef, useState } from 'react'
import './SearchArea.css'
import type { Book, ApiResponse} from '../types/Book'
import SearchBar from './SearchBar'
import BookList from './BookList'
import Pagination from './Pagination'
import useFetch from '../hooks/useFetch'

function SearchArea() {
    // const [document, setDocument] =useState<Book[]>([])
    const[query,setQuery]=useState<string>('리액트');
   
    const [page, setPage] = useState<number>(1);
    //페이지를 관리하기 위한 useState
  const baseUrl = 'https://dapi.kakao.com/v3/search/book';
    const apiKey ='KakaoAK 64bd0871a21112753800793b60bd82df'
    const {document, isEnd} =useFetch<Book>(query,page,baseUrl,apiKey)

    const onClickNext = () => {
        // 마지막 페이지가 아닐 때만 페이지 업
        if (!isEnd) {
            setPage(p => p + 1);
        }
    }
    //페이지 up버튼

    const onClickPrev = () => {
        setPage(prev => prev - 1);
    }
    //페이지다운버튼 근데 1페이지 미만은 못가게 해야함 ......

    const resetPage = ()=>setPage(1);
    const onChangeQuery = (q: string) => {
    setQuery(q);
    //여기에 setQuery(1)넣어서 reset할수도있음
    }
    //밑에있는SearhBar에 검색하면 쿼리가 바뀌어야함. 서치바를 밑에두고 바꾸는 함수를 내려줌
    //검색기능임

    return(
    <div className='search-area'>
        <SearchBar onChangeQuery ={onChangeQuery} resetPage ={resetPage}/>
        <BookList books ={document} />
            {/* 위에 const [document, setDocument] =useState<Book[]>([])에document */}
        <Pagination page ={page} handlePrev={onClickPrev} handleNext={onClickNext} isEnd={isEnd}/>
    </div>
    )
    
}

export default SearchArea;