import React, { useState } from "react";
import CurrentUserAvatar from "./CurrentUserAvatar";
import photoSvg from "/src/assets/Gallery.svg";
import videoSvg from "/src/assets/video.svg";
import { apiClient } from "../lib/api-client";
import { CREATE_POST_ROUTE } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingPage from "./LoadingPage";
import ErrorPage from "../pages/Error/ErrorPage"

const PostForm = ({ postForm }) => {
  const [postMessage, setPostMessage] = useState("");
  const [postFile, setPostFile] = useState(null); // Use null for no file
  const currentUser = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const postFileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostFile(file);
      // console.log(file);
    }
  };

  const postMsgHandler = (e) => {
    setPostMessage(e.target.value);
  };

  const postHandler = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("description", postMessage);
    if (postFile) {
      data.append("MediaFile", postFile);
    }

    try {
      const response = await apiClient.post(CREATE_POST_ROUTE, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      postForm();
      toast.success("Post created successfully!");
      // console.log("createPostData", response.data);
    } catch (error) {
      setLoading(false);
      setError(true);
      toast.error("Post creation failed!");
      console.error("create_post error", error);
    }
  };

  if(loading){
    return (
      <LoadingPage />
    )
  }

  if(error){
    return (
      <ErrorPage />
    )
  }

  return (
    <div className="w-full h-full fixed inset-0 z-50 flex justify-center items-center bg-white/75">
      <div className="w-full h-[100vh] md:h-auto py-5  sm:w-11/12 md:w-10/12 lg:w-3/5 xl:w-2/5 bg-white rounded-2xl p-5 shadow-md border-2 border-white shadow-gray-600">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-3">
          <Link to={"/profile"}>
            <div className="flex items-center gap-5">
              <CurrentUserAvatar className="w-12 h-12" />
              <div>
                <p className="text-xl font-bold">{currentUser?.fullName}</p>
                <p className="text-md font-normal italic">
                  @{currentUser?.username}
                </p>
              </div>
            </div>
          </Link>
          <button onClick={postForm} className="hover:text-xl">
            ❌
          </button>
        </div>

        {/* Post Message Input */}
        <div className="w-full mb-3">
          <textarea
            name="postMessage"
            id="postmsg"
            cols="30"
            rows="5"
            placeholder="Write your message..."
            className="w-full border-none outline-none p-5 rounded-xl text-xl ring-2 focus:ring-blue-500 "
            onChange={postMsgHandler}
          ></textarea>
        </div>

        {/* show the image or video user upload also include a button to remove the image */}
        {postFile && (
          <div className="relative w-[200px] h-auto mb-5">
            {/* Cross button */}
            <button
              onClick={() => setPostFile(null)} // Replace `setPostFile` with your state update function
              className="absolute top-[-8px] right-[-8px] bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-red-700 hover:w-8 hover:h-8 text-lg"
            >
              &times;
            </button>

            {/* Image or Video */}
            {postFile.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(postFile)}
                alt="Post"
                className="w-[200px] h-[150px] rounded-xl"
              />
            ) : (
              <video
                src={URL.createObjectURL(postFile)}
                controls
                className="w-[200px] h-auto rounded-xl"
              />
            )}
          </div>
        )}

        {/* File Upload Section */}
        <div className="flex justify-between items-center px-5">
          <div className="flex items-center gap-10">
            <label className="cursor-pointer">
              <img src={photoSvg} alt="Upload" className="w-6 h-6"/>
              <input
                type="file"
                accept=".jpg, .png, .pdf, .gif"
                style={{ display: "none" }}
                onChange={postFileHandler}
              />
            </label>
            <label className="cursor-pointer">
              <img src={videoSvg} alt="Upload" className="w-6 h-6" />
              <input
                type="file"
                accept=".mov,.mp4"
                style={{ display: "none" }}
                onChange={postFileHandler}
              />
            </label>
          </div>

          <button
            className="px-5 py-2 bg-blue-500 text-white  text-lg rounded-full hover:bg-blue-600  transition"
            onClick={postHandler}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
