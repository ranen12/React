import './App.css'
import React from 'react'
import type { Member } from './types/Member'
import { MemberCard } from './component/MemberCard'
import BTS from './component/BTS'



const members:Member[] = [
{image:'/bts/bts1.png',nick:'Rm'},
{image:'/bts/bts2.png',nick:'슈가'},
{image:'/bts/bts3.png',nick:'지민'},
{image:'/bts/bts4.png',nick:'정국'},


]




function App() {



  return (
    <div>
      <BTS members ={members} />


      
    </div>
  )
}

export default App
