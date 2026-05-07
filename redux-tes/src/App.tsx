
import { Provider } from 'react-redux'
import './App.css'
import Display from './Display'
import CounterA from './CounterA'

import { store } from './store'

function App() {


  return (
    <>
    <Provider store = {store}>
    <Display/>
    <CounterA/>
    </Provider>

    </>
  )
}

export default App
