// import type { ApiResponse } from "../types/Book";
// import { useEffect,useState } from "react";

// //다른api도 받아올수있게 url도 받아온다.
// export default function useFetch<T>(
//     query:string,
//     page:number,
//     url:string,
//     apiKey:string) {
//     const [document, setDocument] =useState<T[]>([])
//     const [isEnd,setIsEnd]=useState<boolean>(false);
    
//     useEffect(()=>{
//         if(!query) return;//이거뭐지?
//         const fetchBooks = async ()=>{
//             try {
//                 const encodedQuery =encodeURIComponent(query);//검색한 한글을 인코딩해서 넣어줌
//                 const endPoint = `${url}?query=${encodedQuery}&page=${page}`
//                 const response = await fetch(endPoint,{
//                     headers:{apiKey},
//                 }//fetch는 promise를반환함, response에 받아온다.
//             });
//             if(!response.ok){//ok는200성공코드이다. 이게 아니라면 실패한거
//                 throw new Error(`HTTP error! status:${response.status}`)//실패코드가 뜬다
//             } 
//             const data: ApiResponse<Book> = await response.json()
//             //이부분 해석과, 제네릭 이해해야함
//             setDocument(data.documents)//타입 ApiResponse안에 documents라는 타입이 있구 거기 접근하려고 .으로 들어감
//             setIsEnd(data.meta.is_end)
//             }catch(err) {
//                 console.error('검색중 오류',err)
//             }

//         };

//     fetchBooks()
//     },[query,page,url,apiKey])
//     return{document,}

//     return()

// }