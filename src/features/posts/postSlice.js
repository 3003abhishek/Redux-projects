import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
  ];


const postSlice=createSlice({
    name:"posts" ,
    initialState ,
    reducers:{
      postAdder(state,action){
        state.push(action.payload);
      }
        
    }

});

export const {postAdder}=postSlice.actions;


export default postSlice.reducer;