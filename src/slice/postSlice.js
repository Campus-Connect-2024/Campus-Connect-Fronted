import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: {},
    postFile: null,
    displayPostForm: false,

}

 const postSlice = createSlice({ 
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        setPost: (state, action) => {
            state.post = action.payload
        },
        setPostFile: (state, action) => {
            state.postFile = action.payload
        },
        setDisplayPostForm: (state, action) => {
            state.displayPostForm = action.payload
        },
    }   
})

export const {setPosts, setPost, setPostFile, setDisplayPostForm} = postSlice.actions;

export default postSlice.reducer