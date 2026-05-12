import style from './sale-item.module.css'
import SaleData from "@/types";
import Image from "next/image";
import Link from 'next/link';
import { ENV } from '@/env';
export default function SaleItem({productName,price,description,photo,id}:SaleData) {
    const imageUrl = `${ENV.IMAGE_URL}/${photo}`
    return (
       <Link href ={`/sale/${id}`}> <div className={style.container}>
            <Image src ={imageUrl} alt ='' width={100} height={100} className={style.image}/>
            <div>
            <div className={style.title}>상품명:{productName}</div>
            <div className={style.description}>설명 :{description}</div>
            <div className={style.price}>가격:{price}원</div>
            </div>
        </div></Link>
    );
}