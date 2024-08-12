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
        },
        logout: (state, actions) => {
            state.userInfo = undefined
        }
    }
})

export const { setUserInfo, setLogin, logout } = authSlice.actions
export default authSlice.reducer