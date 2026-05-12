import { fetchSaleById } from "../../../../fetch-sales";
import style from "./page.module.css"


export default async function Page({params} : {params: Promise<{ id:string }>;
}) {  
  const { id,} = await params;
  //일단id 받아옴

  const sales = await fetchSaleById(Number(id));
  //fetch에 fetchSaleById를 이용하여 id를 넣고 sales에 넣기

if (!sales || sales.length === 0 || !sales[0]) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>데이터를 불러오지 못했습니다.</h2>
        <p>요청하신 ID({id})에 해당하는 상품이 없습니다.</p>
        <a href="/" style={{ color: "blue", textDecoration: "underline" }}>홈으로 돌아가기</a>
      </div>
    );
  }

  const { productName, description, price, photo } = sales[0];
  //0번 인덱스의 정보, 객체분해 하기


  return (
    <div className={style.container}>
      {/* <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        <Image
          src={imageUrl}
          alt={productName}
          className={style.cover_img}
          width={300}
          height={300}
        />
      </div> */}
      <h2 className={style.title}>{productName}</h2>
      <p className={style.description}>{description}</p>
      <span className={style.price}>{price.toLocaleString()}원</span>
    </div>
  );
}