import { ReactNode } from 'react';
import styles from './index.module.css'
import SearchBarLayout from '@/component/searchbar-layout';
import sales from '@/mock/sales.json'
import SaleItem from '@/component/sale-item';

export default function Home() {
  return (
    <div className={styles.title}>
        <section>
          <h3>최신 등록 상품 </h3>
          {sales.map((sale)=>(
            <SaleItem key ={sale.id} {...sale}/>
          ))}
          {/* 여기 왜 {...sale}형태로 보냈지? */}
        </section>
    </div>
  );
}


Home.getLayout =(page: ReactNode) =>{
  return  <SearchBarLayout>{page}</SearchBarLayout>;

}
//js에서 함수는 객체라서 속성추가가 가능하다