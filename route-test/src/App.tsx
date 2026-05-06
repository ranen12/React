import {Header,Main,Product,NotFound} from './Component/Component'
import './App.css'
import { BrowserRouter,Routes,Route,createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom'
import StateForm from './Component/StateForm'
import ReactMemo from './Component/ReactMemo'
//  
// const router =createBrowserRouter([
//     {path:'/', element:(<><Header /><Main /></>),},
//     {path:'/product/:id',element:(<><Header /> <Product /></>)},
//     {path: '*',element: (<><Header /> <NotFound /></>)}

// ])

// function Layout(){
//   return(
//   <>
//     <Header />
//     <Outlet />
//   </>)
// }

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {index:true, element: <Main />},
//       {path: 'product/:id', element:<Product />},
//     ],
//   },   {path: '*',element: <NotFound />},
//   { 
//     path: '/user',
//     element:<NotFound />
//   }
// ]);


function App() {

  return (
    <>
    {/* <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element ={<Main />} />
      <Route path ="/product" element={<Product />} />
      <Route path = "*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}   
    {/* <RouterProvider router ={router}/> */}
    <StateForm />
    {/* <StateFormUC/> */}
    <ReactMemo />
   
    </>
  
)
}
export default App
