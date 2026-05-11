import { useRouter } from "next/router";
import SearchBarLayout from "@/component/searchbar-layout";
import { ReactNode } from "react";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchSales } from "@/util/fetch-sales";
import SaleItem from "@/component/sale-item";

export async function getServerSideProps(context:GetServerSidePropsContext){
    const q =context.query.q;
    const sales =await fetchSales(q as string);
    return {props: {sales}};
}


export default function Page({sales}:InferGetServerSidePropsType<typeof getServerSideProps>) {
    
    return (
        <div>
            {sales.map((sale)=>(
                <SaleItem key = {sale.id} {...sale}/>
            ))}
        </div>
    );


}
Page.getLayout =(page:ReactNode)=>{
    return <SearchBarLayout>{page}</SearchBarLayout>
}

