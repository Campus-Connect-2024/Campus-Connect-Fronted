import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    login: false,
}

 const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            // console.log(action.payload)
         
            state.userInfo = action.payload
        },
        setLogin: (state, action) => {
            state.login = action.payload
        }
    }
})

export const { setUserInfo, setLogin } = authSlice.actions
export default authSlice.reducer