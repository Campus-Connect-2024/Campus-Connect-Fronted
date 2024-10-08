import React from "react";
import ReactTimeAgo from "react-time-ago";

function PostTime({ date }) {

  return (
    <div>
      <p className="text-sm text-gray-800">
        <ReactTimeAgo date={date} locale="en-US" />
      </p>
    </div>
  );
}

export default PostTime;
