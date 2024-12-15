import React from "react";
function ProfileImage({ className, imgUrl, alt_text }) {
  return (
    <>
      <img
        className={` border-white rounded-[50%]  ${className}`}
        src={imgUrl}
        alt={alt_text}
      />
    </>
  );
}

export default ProfileImage;
