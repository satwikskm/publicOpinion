import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName:'Dr',
    lastName:'Kalam',
    email:'missileman@drdo.com',
    password:'password'

};

const user = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
        }
    }
})


console.log(user)
export const { login } =
  user.actions;

export default user.reducer