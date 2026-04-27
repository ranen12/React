import { useEffect, useState } from 'react';
export default function Test() {
const [time, setTime] = useState<number>(0);
useEffect(() => {
console.log('타이머 시작');
const id = setInterval(() => {
setTime((t) => t + 1);
}, 1000);


//cleanup
return ()=> {
console.log('타이머 정리');
clearInterval(id);
};
}, [time]);
return <h1>{time}초</h1>;
}