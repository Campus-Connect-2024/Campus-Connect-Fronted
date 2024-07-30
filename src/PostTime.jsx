import React from "react";
import ReactTimeAgo from "react-time-ago";

function PostTime({ date }) {

  return (
    <div>
      <p className="ml-6 text-gray-300">
        <ReactTimeAgo date={date} locale="en-US" />
      </p>
    </div>
  );
}

export default PostTime;
