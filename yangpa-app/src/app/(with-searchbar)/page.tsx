import Search from "@/app/(with-searchbar)/search/page";
import SaleItem from "../components/sale-item";
// import sales from "@/mock/sales.json";
import { ENV } from "@/env";
import SaleData from "@/types";
import styles from '@/app/(with-searchbar)/page.module.css'

export default async function Home() { // 서버 컨포넌트: 기본적으로 html 그려지고 프론트로 넘어감
  const response = await fetch(`${ENV.API_URL}/sales/recent`, {cache:'force-cache'});
  const data = await response.json();
  const sales: SaleData[] = data.documents;

  return (
    <div>
      <div className={styles.title}><h3>최근 등록 상품</h3></div>
      {sales.map((sale) => {
        return <SaleItem key={sale.id} {...sale} />;
      })}
    </div>
  );
}
