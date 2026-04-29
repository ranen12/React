import { Link,createBrowserRouter,RouterProvider } from "react-router-dom"


export function Header() {
    return(
        <>
       
        <Link to ="/"> <h1>헤더</h1></Link>
        </>
    )
}

export function Main(){
    return(
        <>
        <h3>메인페이지입니다</h3>
        <Link to ="/product/1"><li>1번상품</li></Link>
        <Link to ="/product/2"><li>2번상품</li></Link>
        </>
    )
}

export function Product() {
    return(
        <>
        <h3>상품 페이지 입니다.</h3>
        </>
    )
    
}

export function NotFound() {
    return(
        <>
        <h1>404 Error</h1>
        </>
    )
    
}

