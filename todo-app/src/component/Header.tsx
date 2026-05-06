import './Header.css'
import React from 'react';

function Header() {
    console.log('Header 업데이트')
    //1.header도 다른 행동에 의해 같이 리렌더링 되는지 확인하기 위해 콘솔을 찍는다. 업데이트 되고있다.
    return(
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>          
            


        </div>
    )
}

export default React.memo(Header);
//2.Header가 리렌더링 되는걸 막아주기 위해 React.memo로 감싸주었다.