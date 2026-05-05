import './BookFinder.css'
import Header from './Header'
import Footer from './Footer.tsx'
import SearchArea from './SearchArea.tsx'
import BookDetail from './BookDetail.tsx'
import { useState } from 'react'
import type { Book } from '../types/Book.ts'
import BookContext from './BookContext.ts'
//context쓰기로했음

function BookFinder(){
    const [selected,setSelected] =useState<Book | null>(null);
    const selectBook = (book:Book) =>{
     setSelected(book)
    }

    return(
        <BookContext.Provider value ={{selectBook}}>
        {/* 이거 왜이런지 알아바 왜 {{}} 임?*/}
        <div className="BookFinder">
            <Header />
            <div className ="main-content">
                <SearchArea />
                <BookDetail book ={selected}/>
            </div>
   
            <Footer/>
            
        </div>
        </BookContext.Provider>
    )
    
}
export default BookFinder;

