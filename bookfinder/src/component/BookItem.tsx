import './BookItem.css'
import type {Book} from '../types/Book'
import BookContext from './BookContext';
import { useContext } from 'react';

//book 한개당 아이템 
interface BookItemProps{
    book:Book;
}


function BookItem({book}:BookItemProps) {
    const context = useContext(BookContext);
    if(!context) throw new Error('Context가 없습니다..')
    const {selectBook} =context; //객체분해
    return(
        <div className='book-item' onClick ={()=>selectBook(book)}>
            {/* 이거 진짜 뭐야? */}
            <img src ={book.thumbnail} alt ={`${book.title}의 표지`} />
        <div className="book-info">
            <h3>{book.title}</h3>
            <p>{book.authors.join(`, `)}</p>
            {/* join은 authors가 [, , ,]형태라 그걸 join으로 해서 이어준다  */}

        </div>
        </div>
    )
}

export default BookItem;