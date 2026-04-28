import MainContext from "./MainContext";
export default function Middle(){
    return(
        <div style = {{backgroundColor:'gray',padding:'20px'}}>
            <h1>이것은 바로 middle입니다.</h1>
            <MainContext/>
            </div>
    )
}