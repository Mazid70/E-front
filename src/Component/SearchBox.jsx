import React from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";

const SearchBox = () => {
  return (
    <section className="flex  my-8">
      {/* Logo  */}
      <div className="flex justify-center items-center mr-10 font-bold text-xl text-gray-400">
        <img
          className="h-12"
          src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=400x300&vertical=center"
          alt=""
        />
        Shadhin Mart
      </div>

      {/* search  */}
      <div className=" flex h-12 flex-1 ">
        <input
          type="search"
          placeholder="search here"
          className="pl-5 h-full w-full border border-r-0 border-gray-300 rounded-md rounded-r-none"
        />
        <div className="bg-yellow-400 flex justify-center items-center w-12 text-2xl rounded-r-md">
          <IoIosSearch />
        </div>
      </div>

      {/* account  */}
      <div className="flex justify-center items-center border rounded-sm  h-12 w-12 text-2xl ml-5">
        <CiUser />
      </div>
      <div className="flex justify-center items-center border rounded-sm  h-12 w-12 text-2xl ml-5">
        <CiHeart />
      </div>
      <div className="indicator ml-5">
        <span className="indicator-item indicator-start badge bg-yellow-400 border-0 rounded-full h-6 w-6 font-semibold">
          0
        </span>
        <div className="p-4 bg-[#E80F0F]  text-white flex justify-center items-center border rounded-md  h-12 text-2xl ">
          <RiShoppingBag2Fill />

          <div className="h-4 w-[0.5px] bg-gray-300 mx-3 "></div>
          <h1 className="font-semibold text-lg">$0.00</h1>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
