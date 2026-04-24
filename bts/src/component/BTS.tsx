import type {Member}from '../types/Member.ts'
import { MemberCard } from './MemberCard';
import { StateChild } from './StateChild.tsx';
import { useState } from 'react';
import './BTS.css'



interface BTSProps{
    members:Member[];

}


function BTS({members}:BTSProps){
    const [index,setIndex] =useState<number>(0);
    const changeIndex = (newIndex:number):void =>{
        const len = members.length; //7

        setIndex((newIndex+len)%len)

    }

    return(
        <div className ="member-container">
            <MemberCard member ={members[index]}/>
            <StateChild index ={index} onChangeIndex={changeIndex}/>
        </div>

    );
}
export default BTS;
