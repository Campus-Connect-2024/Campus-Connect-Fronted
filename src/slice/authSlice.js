import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
}

 const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            // console.log(action.payload)
         
            state.userInfo = action.payload
        }
    }
})

export const { setUserInfo } = authSlice.actions
export default authSlice.reducer