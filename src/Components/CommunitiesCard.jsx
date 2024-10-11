import React from "react";
import FollowBtn from "./FollowBtn";
import ProfileImage from "./ProfileImage";
import resultImg from "/src/assets/icon.jpeg";
function CommunitiesCard() {
  return (
    <div className=" bg-white rounded-xl w-full flex justify-between px-4 py-2  ">
      <div className="flex">
        <ProfileImage imgUrl={resultImg} className="w-12 h-12" />
        <div className="mx-3 text-start">
          <p className="text-black font-semibold">Google Developer Club</p>
          <p className="text-gray-700 text-sm italic">@googlefordeveloper</p>
        </div>
      </div>
      <FollowBtn />
    </div>
  );
}

export default CommunitiesCard;
