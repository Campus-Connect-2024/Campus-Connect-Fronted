import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import HeartSvg from "/src/assets/heart.svg";
import CommentSvg from "/src/assets/comment.svg";
import repostSvg from "/src/assets/repost.svg";
import sendSvg from "/src/assets/send.svg";
import LikeBtn from "./LikeBtn";
import PostTime from "../PostTime";
import { apiClient } from "../lib/api-client";
import { COMMENT_ROUTE } from "../utils/constants";
import CommentBtn from "./CommentBtn";
import RepostBtn from "./RepostBtn";
import ShowComment from "./ShowComment";
import VideoPlayer from "./VideoPlayer";

function ShowPostCard({ post = undefined }) {
  const [commentMsg, setCommentMsg] = useState("");
  const [allComment, setAllComment] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const commentHandler = async () => {
    if (commentMsg.length > 0) {
      try {
        const response = await apiClient.post(
          `${COMMENT_ROUTE}${post._id}`,
          { content: commentMsg, postId: post._id },
          { withCredentials: true }
        );
        setCommentMsg("");
      } catch (error) {
        console.log("comment_error", error);
      }
    }
    return;
  };

  useEffect(() => {
    try {
      (async () => {
        const getAllComment = await apiClient.get(
          `${COMMENT_ROUTE}${post._id}`,
          { withCredentials: true }
        );
        if (getAllComment.data.data) {
          setAllComment(getAllComment.data.data);
        }
      })();
    } catch (error) {
      console.log("comment_error", error);
    }
  }, [commentMsg]);

  const time = new Date(post?.createdAt);

  return (
    <div className="bg-white flex flex-col py-5 px-4 md:px-8 rounded-[1.5rem] w-full h-auto my-6 shadow-md border-2 border-white max-w-3xl mx-auto ">
      <div className="w-full flex">
        <ProfileImage
          className="w-12 h-12 md:w-16 md:h-16 border-2"
          imgUrl={post?.owner.avatar}
        />
        <div className="flex flex-col ml-4 md:ml-6">
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="font-semibold text-[1rem] md:text-xl text-black">
              {post?.owner.fullName}
            </p>
          </div>
          <PostTime date={time} />
        </div>
      </div>

      <div className="w-full mt-3 md:pl-16">
        <div className="mb-5 px-3 md:px-5 text-black">
          <p className="text-justify">{post?.description}</p>
        </div>

        <div className="px-3 md:px-5 ">
          {post?.MediaFile?.url && (
            <div className="w-full">
              {post?.resourceType === "video" ? (
                <VideoPlayer
                  videoUrl={post?.MediaFile.url}
                  className={"w-full rounded-2xl overflow-hidden"}
                />
              ) : (
                <img
                  className="w-full rounded-2xl overflow-hidden "
                  src={post?.MediaFile.url}
                  alt="post"
                />
              )}
            </div>
          )}
        </div>

        <div className="flex gap-4 md:gap-10 pl-2 md:pl-3 mt-5">
          <LikeBtn svg={HeartSvg} post={post} />
          <CommentBtn
            svg={CommentSvg}
            post={post}
            onClick={() => setShowComments(!showComments)}
          />
          <RepostBtn svg={repostSvg} />
        </div>

        <div className="flex gap-4 md:gap-5 mt-5 items-center">
          <ProfileImage
            imgUrl={post?.owner.avatar}
            className="w-9 h-9 md:w-11 md:h-11 ml-2 md:ml-5"
          />
          <input
            placeholder="Write your comment..."
            className="px-3 py-2 md:px-5 md:py-3 bg-gray-300 w-full rounded-xl border-none outline-none text-black"
            value={commentMsg}
            onChange={(e) => {
              setCommentMsg(e.target.value);
            }}
          />
          <button className="flex items-center justify-center rounded-full">
            <img
              src={sendSvg}
              alt="send"
              onClick={commentHandler}
              className="w-7 h-7 "
            />
          </button>
        </div>

        {/* Show comments */}
        {showComments && allComment.length > 0 && (
          <div
            className={`w-full overflow-y-scroll ${
              allComment.length <= 2 ? "h-[10vh]" : "h-[30vh]"
            } no-scrollbar mt-3`}
          >
            {allComment?.map((comment) => (
              <ShowComment key={comment._id} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowPostCard;
