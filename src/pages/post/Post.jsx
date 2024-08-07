import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const user = useSelector((state) => state.auth.userInfo);
  console.log(user);
  return (
    <div>
      Post:
      {/* {user && (
        <div>
          <p>{user.data.username}</p>
          <p>{user.data.email}</p>
          <p>{user.data.fullName}</p>
          <p>{user.data._id}</p>
          <img className="w-16" src={user.data.avatar} alt="" />
        </div>
      )} */}
    </div>
  );
};

export default Post;
