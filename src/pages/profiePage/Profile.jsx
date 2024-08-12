import React from "react";
import { Navbar } from "../../Components";
import reactImg from "../../assets/icon.jpeg";
import ProfileImage from "../../Components/ProfileImage";

const Profile = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-[#f6f3ef]">
      <Navbar />

      <div className="flex m-6 h-[87vh] gap-7">
        <div className="w-1/4  bg-white rounded-2xl ">
          <div className="w-full h-28 md:h-24 lg:h-24 p-5">
            <img
              className=" h-28 md:h-24 lg:h-28 w-full rounded-[1.5rem]"
              src={reactImg}
              alt="img"
            />
          </div>
          <div className="flex justify-center items-center">
            <ProfileImage
              className=" border-4  w-24 h-[5.5rem]"
              imgUrl={reactImg}
            />
          </div>

          <div className="pt-4 pb-5 px-8">
            <div>
              <p className="text-center text-xl font-bold">Ravindra Yadav </p>
              <p className="text-center font-normal italic text-gray-700 ">
                @Ravindra01{" "}
              </p>
            </div>

            <div className="flex justify-between px-4 pt-5 pb-8">
              <div>
                <p className="text-center text-md font-bold">985</p>
                <p className="text-center italic font-normal text-gray-600 hover:text-black">
                  Followers
                </p>
              </div>
              <div>
                <p className="text-center text-md font-bold">1512</p>
                <p className="text-center italic font-normal text-gray-700 hover:text-black">
                  Following
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-white overflow-hidden overflow-y-scroll no-scrollbar rounded-2xl p-5">
          <h2 className="bg-green-500">right</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
