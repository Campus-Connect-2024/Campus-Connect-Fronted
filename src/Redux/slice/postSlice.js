import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: [],
    loading: false,
}

 const postSlice = createSlice({ 
    name: "post",
    initialState,
    reducers: {
        getPost: (state, action) => {
            state.loading = false;
            // console.log("getPost", action.payload);
            state.posts = action.payload.data.posts;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(getPost.pending, (state) => {
    //         state.loading = true;
    //     })
    //     .addCase(getPost.fulfilled, (state, action) => {
    //         state.loading = false;
    //         console.log("getPost", action.payload);
    //         state.posts = action.payload.data.posts;
    //     })
    //     .addCase(getPost.rejected, (state) => {
    //         state.loading = false;
    //         state.error = true;
    //     })
    // }   
})
export const { getPost} = postSlice.actions
export default postSlice.reducer