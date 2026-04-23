import Library from './component/Library'
import './App.css'
import type{ Book } from './type/book'

const book:Book[] = [
{imgUrl:'https://image.aladin.co.kr/product/27045/43/cover500/k692135851_3.jpg',title:'프로젝트 헤일메리',author:'김도균'},
{imgUrl:'https://image.aladin.co.kr/product/29505/44/cover500/k392837147_1.jpg',title:'처음배우는 애저',author:'김도균'},
{imgUrl:'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=389914863.jpg',title:'리어노어캐링턴',author:'귀나팔'}
]




function App() {

  return (
    <>
    <Library book={book[0]} />
    <Library book={book[1]}/>
    <Library book={book[2]}/>
    </>
  )
}

export default App
