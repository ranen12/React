
interface StateChildProp{
    index:number;//+1,-1등을 넣어주기
    onChangeIndex:(val:number)=>void //버튼이 눌렸을때

}


export function StateChild({index,onChangeIndex}: StateChildProp) {
    const btnUp=() => onChangeIndex(index+1);
    const btnDown=() => onChangeIndex(index-1);

    return(
        <div className="button-container">
        <button className ="nav" onClick ={btnDown}>이전</button> 
        <button className ="nav" onClick ={btnUp}>다음</button>
        </div>
    )
    
}//버튼에 관한것들

