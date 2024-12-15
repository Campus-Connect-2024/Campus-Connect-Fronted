import { createSlice } from "@reduxjs/toolkit";
import {getToken} from "../../utils/HelperFunctions"
import { getUserData, login, signup, logout } from "./authThunk";

const initialState = {
  userData: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        // console.log("register_payload", action.payload.data);
        state.loading = false;
        console.log("register_response_authslice", action.payload.data);
        // state.userData = action.payload.data;
      })
      .addCase(signup.rejected, (state) => {
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("login payload", action.payload);
        state.loading = false;
        // state.refreshToken = refreshToken;
        // state.userData = action.payload.data.user;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        // console.log("getuserData_action", action.payload);
        // console.log("userdata_user", action.payload.data); 
        state.loading = false;
        state.userData = action.payload.data;
      })
      .addCase(getUserData.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.userData = null;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      });
      
  },
});

export default authSlice.reducer;
