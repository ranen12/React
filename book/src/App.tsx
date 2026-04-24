import Library from './component/Library'
import './App.css'
import type{ Book } from './type/book'

const book:Book[] = [
{imgUrl:'https://image.aladin.co.kr/product/27045/43/cover500/k692135851_3.jpg',title:'프로젝트 헤일메리',author:'김도균'},
{imgUrl:'https://image.aladin.co.kr/product/39031/48/cover500/k922137849_1.jpg',title:'어머니 내게 오시내',author:'아룬다티'},
{imgUrl:'https://image.aladin.co.kr/product/29505/44/cover500/k392837147_1.jpg',title:'리어노어캐링턴',author:'귀나팔'}
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
