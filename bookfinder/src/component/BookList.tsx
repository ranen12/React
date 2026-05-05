import './BookList.css'
import type { Book } from '../types/Book';
import BookItem from './BookItem';
import SearchArea from './SearchArea';


interface BookListProps{
    books:Book[];
}    
// const [document, setDocument] =useState<Book[]>([])
//에 document를 books라는 상자에 넣어서 받겠음 이거는 Book[]타입임 상자이름이 
//books라는 이름일뿐 document라는 값임.



function BookList({books}: BookListProps){
    return(
        <div className="book-list">
            {books.map((book)=>(
                <BookItem key ={book.isbn} book ={book} />
                 ))}

        </div>)}

    

export default BookList;