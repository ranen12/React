import { useEffect, useState } from "react";

interface User {
    id:number;
    name:string;
    email:string;
}



//fetch형태
export default function UserList(){
    const [users,setUsers]=useState<User[]>([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data:User[])=>setUsers(data));
    },[]);
    //mount될때 json list를 가져오고 싶어서 이런 형태를 썼음

    return(
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} ({user.email})</li>
            ))}
        </ul>
    )
}