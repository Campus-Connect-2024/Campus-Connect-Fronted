import React from "react";
function ProfileImage({ className, imgUrl }) {
  return (
    <>
      <img
        className={` border-white rounded-[50%]  ${className}`}
        src={imgUrl}
        alt="img"
      />
    </>
  );
}

export default ProfileImage;
