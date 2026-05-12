import sales from '@/mock/sales.json'
import SaleItem from '@/app/components/sale-item'
import type SaleData from '@/types'
import { ENV } from '@/env'

export default async function Page({searchParams}:{searchParams:Promise<{q?:string}>}) {
    const {q} = await searchParams;
    let url = `${ENV.API_URL}/sales`
    if(q) {
        url += `?q=${q}`
    }
    const response = await fetch(url);
    const data =await response.json();
    const sales:SaleData[] = data.documents;

    return (
        <div>
           
          {sales.map((sale)=>{
            return <SaleItem key={sale.id} {...sale} />
            })}
        </div> 
    )
}