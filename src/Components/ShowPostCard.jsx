import React, { useEffect, useState, useCallback } from "react";
import ProfileImage from "./ProfileImage";
import HeartSvg from "/src/assets/heart.svg";
import CommentSvg from "/src/assets/comment.svg";
import repostSvg from "/src/assets/repost.svg";
import sendSvg from "/src/assets/send.svg";
import PostTime from "../PostTime";
import { apiClient } from "../lib/api-client";
import { COMMENT_ROUTE, LIKE_ROUTE } from "../utils/constants";
import RepostBtn from "./RepostBtn";
import ShowComment from "./ShowComment";
import VideoPlayer from "./VideoPlayer";
import Heart from "react-animated-heart";
function ShowPostCard({ post = undefined }) {
  const [commentMsg, setCommentMsg] = useState("");
  const [commentCount, setCommentCount] = useState(post.commentsCount);
  const [allComment, setAllComment] = useState(post.comments);
  const [showComments, setShowComments] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likesCount);
  const [likes, setLikes] = useState(post.likes);

  const commentHandler = async () => {
    if (commentMsg.length > 0) {
      try {
        const response = await apiClient.post(
          `${COMMENT_ROUTE}${post._id}`,
          { content: commentMsg, postId: post._id },
          { withCredentials: true }
        );
        setCommentCount(commentCount + 1);
        setCommentMsg("");
      } catch (error) {
        console.log("comment_error", error);
      }
    }
    return;
  };

  useCallback(() => {
    likes.map((like) => {
      if (like.likedBy === post.owner._id) {
        setIsLike(true);
      }
    });
  }, [likes]);

  const handleLikes = async () => {
    try {
      await apiClient.post(
        `${LIKE_ROUTE}${post._id}`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log("getAllLikes", error);
    }
  };

  useEffect(() => {
      (async () => {
        try {
        const getAllComment = await apiClient.get(
          `${COMMENT_ROUTE}${post._id}`,
          { withCredentials: true }
        );
        if (getAllComment.data.data) {
          setAllComment(getAllComment.data.data);
        }
      } catch (error) {
        console.log("comment_error", error);
      }
      })();
    
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

        <div className="flex justify-evenly items-center gap-4  pl-2 md:pl-3">
        <span className="flex gap-1 text-black cursor-pointer items-center text-lg">
             <Heart isClick={isLike} onClick={() => {
                setIsLike(!isLike);
                isLike
                  ? setLikeCount(likeCount - 1)
                  : setLikeCount(likeCount + 1);
                handleLikes();
              }} styles={{ width: "80px", height: "70px", marginTop: "-28px"}} />
             <span> {likeCount}</span></span>
            <span className="flex gap-3 text-black cursor-pointer items-center text-lg">
              <img
                src={CommentSvg}
                alt="commnet"
                onClick={() => setShowComments(!showComments)}
              />{" "}
              {commentCount}{" "}
            </span>
            <span className='flex gap-3 text-black cursor-pointer items-center text-lg'><img src={repostSvg}  alt="repost_btn" /> {0} </span>
          
        </div>

        <div className="w-full flex gap-4 md:gap-5 mt-3 justify-evenly items-center">
          <ProfileImage
            imgUrl={post?.owner.avatar}
            className="w-9 h-9 md:w-11 md:h-11 ml-2 md:ml-5"
          />
          <input
            placeholder="Write your comment..."
            className="px-3 w-[70%] py-2 md:px-5 bg-gray-300  rounded-xl border-none outline-none text-black"
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
              className="w-8 h-8"
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
