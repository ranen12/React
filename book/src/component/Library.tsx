import type { Book } from "../type/book.ts";
import './Library.css'




interface BookProps{
   book:Book;
}


export default function Library({book}:BookProps) {
    const {title,author,imgUrl}=book;

    return(
    <div className="image">
            <img src={imgUrl} alt={imgUrl} className="photo"/>
            <h2 className="title">{title}</h2>
            <p className="author">{author}</p>
        </div>
    )
  
    
}