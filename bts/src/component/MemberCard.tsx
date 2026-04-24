import './MemberCard.css'
import type { Member } from "../types/Member"
import './StateChild.tsx'
//ts타입 지정한걸 인터페이스로 쓰겠음. member의 타입은 Member타입




interface MemberCardProps{
    member  :Member;
}



export function MemberCard({member}:MemberCardProps){
    const {image,nick}=member;//객체분해
    return(
        <div className="member-card">
            <img src={image} alt={nick} className="photo"/>
            <h2 className="nick">{nick}</h2>
            <p className="team">BTS</p>
        </div>

    )
}

