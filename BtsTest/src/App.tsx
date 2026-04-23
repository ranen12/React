import './App.css'
import MemberCard from './component/MemberCard'
import React from 'react'
import type { Member } from './types/Member'



const members:Member[] = [
{image:'/bts/bts1.png',nick:'Rm'},
{image:'/bts/bts2.png',nick:'슈가'},
{image:'/bts/bts3.png',nick:'지민'},
{image:'/bts/bts4.png',nick:'정국'},


]




function App() {



  return (
    <div>
      <MemberCard member ={members[0]}/>
      <MemberCard member ={members[1]}/>
      <MemberCard member ={members[2]}/>
      <MemberCard member ={members[3]}/>
    </div>
  )
}

export default App
