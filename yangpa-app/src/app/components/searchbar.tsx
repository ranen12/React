'use client';
import { useSearchParams } from 'next/navigation';
import style from './searchbar.module.css'
import { ChangeEvent, useState, KeyboardEvent} from 'react';
import { useRouter} from 'next/navigation';
//next/naviagation useRouter는 머가다르지

export default function Searchbar() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const q = searchParams.get('q');
    const [search,setSearch] =useState(q || '');
    const onChangeSearch =(e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value);
    }
    const onSubmit = ()=>{
        if(!search || q === search) return;
        router.push(`/search?q=${search}`);

    }
    const onKeyDown = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            onSubmit();
        }
    }
    return (
        <div className={style.searchbar_container} >
            <input type= "text" onChange={onChangeSearch} onKeyDown={onKeyDown} value ={search} />
            <button>검색</button>
        </div>
    );
}