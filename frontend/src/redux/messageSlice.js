import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:"Message",
    initialState:{
        messages:null,
    },
    reducers:{
        setMessages:(state,action)=>{
            state.messages = action.payload;
        }
    }
});
export const {setMessages} = messageSlice.actions;
export default messageSlice.reducer;