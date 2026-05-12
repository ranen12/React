//서버 컴포넌트를 클라이언트 컴포넌트로 변경이 필요하다.
//엄격한 분리
'use client'


//index.tsx대신 page.tsx사용
export default function Home(){
    console.log('인덱스 페이지 컴포넌트');

    return(
        <div>
            <h1>인덱스 페이지 입니다.</h1>
            <button onClick={()=> console.log('클릭')}></button>
        </div>
    )
}

