import {createSlice, configureStore} from "@reduxjs/toolkit"

const slice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increase:(state)=>{
            state.value += 1;
        },
        decrease:(state)=>{
            state.value -=1;

        }
    }
})

export const {increase, decrease}=slice.actions;
export const store = configureStore({reducer:slice.reducer});