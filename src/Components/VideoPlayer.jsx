import React from "react";
import ReactPlayer from "react-player/lazy";
const VideoPlayer = ({ videoUrl, props, className }) => {
  return (
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        className={`absolute top-0 left-0 ${className} w-full h-full`}
        url={videoUrl}
        width="100%"
        height="100%"
        controls
        {...props}
      />
    </div>
  );
};

export default VideoPlayer;
