import type SaleData from "@/types";
import style from './page.module.css'
import Image from "next/image";
import sales from '@/mock/sales.json'
import { ENV } from "@/env";

export default async function Page({params}:{params: Promise <{id: string}>}) {
    let sales:SaleData[];
try {
        const {id} = await params;
        const response = await fetch(`${ENV.API_URL}/sales/${id}`)
        //백엔드쪽 연결 학습해야함
        if(!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        sales = data.documents;
    
    
} catch (error) {
    console.error('예외발생',error);
    return <div>오류 발생 다시 시도해.</div>
    }

    const {productName,description,price,photo} =sales[0]//하나밖에없으니까 0을 넣어야함
    const imageUrl =`${ENV.IMAGE_URL}/${photo}`

    return (
        <div className={style.container}>
        <div className={style.cover_img_container}
        style={{ backgroundImage:`url('${imageUrl}')`}}>
            <Image src ={imageUrl} alt ='' width={300} height={300} className={style.cover_img}/>
            
            </div>
            <div className={style.title}>{productName}</div>
            <div className={style.price}>{price.toLocaleString()}원</div>
            <div className={style.description}>{description}</div>
            </div>
    );
}