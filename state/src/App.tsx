

import { useState } from 'react'
import './App.css'
import Counter from './compnent/Counter'
import ClassCounter from './compnent/ClassCounter'
import LiveInput from './compnent/LiveInput'
import ParentComponent from './compnent/ParentComponent'
import StateParent from './compnent/StateParent'

function App() {
  return (
    <>
    {/* <Counter init={3} />
    <ClassCounter init ={1} />
    <LiveInput/> */}
    <ParentComponent/>
    <StateParent/>

    </>
  )
}

export default App
