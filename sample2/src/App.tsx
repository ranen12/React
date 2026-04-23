import './App.css'
import Hello from './component/Hello'
import Bye from './component/Bye'
import Welcome from './component/Welcome'
import Test from './component/Test'
import SayHello from './component/SayHello'
import Book from './component/Book'

function App() {


  return (
    <>
      <Welcome name='손흥민'/>
      <Welcome name='호날두'/>
      <SayHello myName='손흥민' to='토트넘'/>
      <Book title="책" author='김나박'/>
    </>
  )
}

export default App
