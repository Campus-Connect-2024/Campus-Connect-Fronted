import React from "react";
import CommunitiesCard from "./CommunitiesCard";
import PeopleCard from "./PeopleCard";
import { Link } from "react-router-dom";
function RightSideCard() {
  return (
    <div className="flex gap-3 flex-col">
      <div className="bg-white rounded-[1.8rem] w-full md:w-[14vw] lg:w-full text-black py-5 px-3 flex flex-col gap-3 shadow-md border-2 border-white">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold px-2 ">Suggested Communities</p>
          <Link
            to="/communities"
            className="text-blue-500 font-normal px-2 hover:text-blue-400 hover:underline"
          >
            View All
          </Link>
        </div>
        <CommunitiesCard />
        <CommunitiesCard />
        <CommunitiesCard />
        {/* <CommunitiesCard /> */}
      </div>
      <div className="bg-white rounded-[1.8rem] w-full md:w-[14vw] lg:w-full text-black p-4 flex flex-col gap-3 my-4 shadow-md border-2 border-white">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold px-4 ">Similar Minds</p>
          <Link
            to="/all-people"
            className="text-blue-500 font-normal px-4 hover:text-blue-400 hover:underline"
          >
            View All
          </Link>
        </div>

        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        {/* <PeopleCard/>     */}
      </div>
    </div>
  );
}

export default RightSideCard;
