import React, { useRef, useState } from "react";
import ProfileImage from "../ProfileImage";
import profileImg from "/src/assets/icon.jpeg";
import photoSvg from "/src/assets/Gallery.svg";
import videoSvg from "/src/assets/video.svg";
import { apiClient } from "../../lib/api-client";
import { CREATE_POST_ROUTE } from "../../utils/constants";
import CurrentUserAvatar from "./CurrentUserAvatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostForm = ({ postForm }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [postMessage, setPostMessage] = useState("");
  const [postFile, setPostFile] = useState(null); // Use null for no file

  const postFileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostFile(file);
      console.log(file);
    }
  };

  const postMsgHandler = (e) => {
    setPostMessage(e.target.value);
  };

  const postHandler = async () => {
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
      postForm();
      console.log("createPostData", response.data);
    } catch (error) {
      console.error("create_post error", error);
    }
  };

  return (
    <div className="w-full h-100vh flex flex-col fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="w-full h-full bg-white/85 rounded-2xl flex justify-center items-center flex-col px-[20rem] z-50">
        <div className="shadow-md border-2 border-white shadow-gray-600 rounded-2xl w-full p-5 bg-white ">
          <div className="flex justify-between items-center mb-3 w-full px-5">
            <Link to={"/profile"}>
            <div className="flex justify-center items-center gap-5">
              <CurrentUserAvatar className="w-12 h-12" />
              <div>
              <p className="text-xl font-bold">{currentUser?.fullName}</p>
              <p className="text-md font-normal italic">@{currentUser?.username}</p>
              </div>
            </div>
            </Link>
            <div>
              <button onClick={postForm} className="hover:text-xl">
                ❌
              </button>
            </div>
          </div>
          <div className="w-full p-5">
            <textarea
              name="postMessage"
              id="postmsg"
              cols="80"
              rows="10"
              placeholder="Write your message....."
              className="w-full border-2 border-black p-5 rounded-xl text-xl"
              onChange={postMsgHandler}
            ></textarea>
          </div>
          <div className="flex justify-between items-center px-5">
            <div className="flex items-center gap-5">
              <label className="ml-5 cursor-pointer">
                <img src={photoSvg} alt="Upload" />
                <input
                  type="file"
                  accept=".jpg, .png, .pdf, .gif"
                  style={{ display: "none" }}
                  onChange={postFileHandler}
                />
              </label>
              <label className="ml-5 cursor-pointer">
                <img src={videoSvg} alt="Upload" />
                <input
                  type="file"
                  accept=".mov,.mp4"
                  style={{ display: "none" }}
                  onChange={postFileHandler}
                />
              </label>
            </div>
            <div>
              <button
                className="px-6 py-2 text-blue-600 text-xl rounded-full hover:bg-blue-600 hover:text-white"
                onClick={postHandler}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
