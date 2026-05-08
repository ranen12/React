import { useRouter } from "next/router";
import SearchBarLayout from "@/component/searchbar-layout";
import { ReactNode } from "react";

export default function Page() {
    const router = useRouter();
    const query = router.query.q;
    //서치했을때 결과를 q에 하면.q로 가는것.
    return (
        <div>
            <h1>검색어 :{query}</h1>
        </div>
    );


}
Page.getLayout =(page:ReactNode)=>{
    return <SearchBarLayout>{page}</SearchBarLayout>
}

