import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    login: false,
    currentUser: {}
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
        setCurrentUserInfo: (state, action) => {
            state.currentUser = action.payload
        },
        logout: (state, actions) => {
            state.userInfo = undefined
        }
    }
})

export const { setUserInfo, setLogin, logout, setCurrentUserInfo} = authSlice.actions
export default authSlice.reducer