// import { useEffect, useRef, useState } from 'react'
// import './SearchArea.css'
// import type { Book, ApiResponse} from '../types/Book'
// import SearchBar from './SearchBar'
// import BookList from './BookList'
// import Pagination from './Pagination'
// import useFetch from '../hooks/useFetch'

// function SearchArea() {
//     // const [document, setDocument] =useState<Book[]>([])
//     const[query,setQuery]=useState<string>('리액트');
   
//     const [page, setPage] = useState<number>(1);
//     //페이지를 관리하기 위한 useState
//     const url = 'https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&page=${page}'
//     const apiKey ='KakaoAK 64bd0871a21112753800793b60bd82df'
//     const {document, isEnd} =useFetch<Book>(query,page,url,apiKey)

//     const onClickNext = () => {
//         // 마지막 페이지가 아닐 때만 페이지 업
//         if (!isEnd) {
//             setPage(p => p + 1);
//         }
//     }
//     //페이지 up버튼

//     const onClickPrev = () => {
//         setPage(prev => prev - 1);
//     }
//     //페이지다운버튼 근데 1페이지 미만은 못가게 해야함 ......

//     const resetPage = ()=>setPage(1);
//     const onChangeQuery = (q: string) => {
//     setQuery(q);
//     //여기에 setQuery(1)넣어서 reset할수도있음
//     }
//     //밑에있는SearhBar에 검색하면 쿼리가 바뀌어야함. 서치바를 밑에두고 바꾸는 함수를 내려줌
//     //검색기능임

    
//     // useEffect(()=>{
//     //     if(!query) return;//이거뭐지?
//     //     const fetchBooks = async ()=>{
//     //         try {
//     //             const encodedQuery =encodeURIComponent(query);//검색한 한글을 인코딩해서 넣어줌
//     //             //한글은 url에서 못쓰는데 검색은(검색한게 주소창에 들어감) 한글로 하니까 인코딩이 필요함
//     //             const endPoint = `https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&page=${page}`
//     //             const response = await fetch(endPoint,{headers:{
//     //                 Authorization: 'KakaoAK 64bd0871a21112753800793b60bd82df'
//     //                 //git올릴때는 이거 지워야한다함, 잘못올리면 개손해본다함
//     //             }//fetch는 promise를반환함, response에 받아온다.
//     //         });
//     //         if(!response.ok){//ok는200성공코드이다. 이게 아니라면 실패한거
//     //             throw new Error(`HTTP error! status:${response.status}`)//실패코드가 뜬다
//     //         } 
//     //         const data: ApiResponse<Book> = await response.json()
//     //         //이부분 해석과, 제네릭 이해해야함
//     //         setDocument(data.documents)//타입 ApiResponse안에 documents라는 타입이 있구 거기 접근하려고 .으로 들어감
//     //         setIsEnd(data.meta.is_end)
//     //         }catch(err) {
//     //             console.error('검색중 오류',err)
//     //         }

//     //     }

//     // fetchBooks()
//     // },[query,page])

//     return(
//     <div className='search-area'>
//         <SearchBar onChangeQuery ={onChangeQuery} resetPage ={resetPage}/>
//         <BookList books ={document} />
//             {/* 위에 const [document, setDocument] =useState<Book[]>([])에document */}
//         <Pagination page ={page} handlePrev={onClickPrev} handleNext={onClickNext} isEnd={isEnd}/>
//     </div>
//     )
    
// }

// export default SearchArea;