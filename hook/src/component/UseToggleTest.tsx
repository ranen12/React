import { useToggle } from "./UseToggle";



export default function UseToggleTest(){
    const {value, toggle} =useToggle();
    return(
    <div>
        <p>{value ? "ON" : "OFF"}</p>
        <button onClick ={toggle}>toggle</button>
    </div>
);
}