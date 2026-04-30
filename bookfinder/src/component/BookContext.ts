//props해주는거 힘드니까 context를 만들기로 했다.


import { createContext } from "react";
import type { Book } from "../types/Book";



type BookContentType ={
    selectBook:(book:Book)=>void;

}
const BookContext = createContext<BookContentType | null>(null);
BookContext.displayName ='BookContext';

export default BookContext;