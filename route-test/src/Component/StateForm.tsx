import { useState } from "react";

export default function StateForm() {
    //State 사용 제어컴포넌트이다. 계속 값이 달라질때마다 리렌더링이 시행됨
    const [form, setForm] =useState({name: '홍길동',age:18,});//옆은 초기값
    //폼 요소의 변경 사항을 State로 반영
    const handleForm =(e:React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    // ...스프레드 하여 바뀌는 애만저장하겠음
    const show = () => {
    console.log(`안녕하세요, ${form.name}(${form.age}세)님!`);
}; 
console.log('리렌더링');
    return(
        <form>
            <div>
                <label htmlFor="name">이름 :</label>
                <input id ="name" name="name" type="text"
                onChange={handleForm} value={form.name}/>
            </div>
            <div>
                <label htmlFor="age">나이:</label>
                <input id ="age" name="age" type ="number"
                onChange={handleForm} value ={form.age} />
            </div>
            <div>
                <button type ="button" onClick={show}>보내기</button>
            </div>
            <p>안녕하세요, {form.name}({form.age})</p>
        </form>
    )


}
