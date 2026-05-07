import { createSlice } from "@reduxjs/toolkit";


const counterSlice =createSlice ({
    name: 'counter',
    initialState: {value: 0},
    reducers:{
        increase: (state)=> {state.value += 1 },
        decrease: (state)=> {state.value -= 1 },
    },
});

export const {increase, decrease} =counterSlice.actions;

//여기 액션은 내장된애고
//increase, decrease를 쓰기 쉽게 구조분해인가 객체분해함 actions을 넣어서
// increase, decrease만 넣어도 (state)=> {state.value +=1}등을 쓸수있음
export default counterSlice.reducer;

// 2. export default counterSlice.reducer;

// 컴포넌트용이 아님 store에 등록하기 위해 내보내는 것입니다.
// 역할: 스토어는 이 리듀서를 전달받아 "아, counter와 관련된 액션이 들어오면 이 리듀서에 적힌 대로 상태를 바꾸면 되겠구나!"라고 인지합니다.


// 실제 연결 흐름
// 컴포넌트: increase() 주문서를 작성해서 dispatch로 보낸다.

// 스토어: 등록된 reducer에게 그 주문서를 전달한다.

// 리듀서: 주문서를 보고 state.value += 1 로직을 실행해 상태를 바꾼다.

// 이렇게 역할을 분리해서 관리하