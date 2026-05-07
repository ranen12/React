import {createSlice, type PayloadAction, } from "@reduxjs/toolkit";


type UserState ={name: string};
const initialState : UserState ={name : '손흥민'};
const userSlice =createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName:(state, action: PayloadAction<string>)=>{
            state.name =action.payload;
        }
    }});

    export const {changeName}=userSlice.actions;
    export default userSlice.reducer;