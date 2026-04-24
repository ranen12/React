type Props ={type:'date'|'time'|'all'};
const current = (type:Props['type'])=>{
    const d = new Date();
    switch(type){
        case 'date':
            console.log(d.toLocaleDateString());break;
        case 'time':
            console.log(d.toLocaleTimeString());break;
        default:
            console.log(d.toString());

    }
};

export default function EventBasic({type}:Props){
    return(
    <div>
        <button onClick={()=>current(type)}>현재 시각 가져오기</button>
    </div>)
}