import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./pro.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="grid grid-cols-5  mt-10">
      {data.map((d) => (
        <div
          className=" p-5 hover:shadow-2xl  rounded-lg group transition-all hover:border ease-in-out duration-200 h-[350px] hover:h-[400px] "
          key={d.productName}
        >
          <img src={d.productImage} alt="" className="h-[200px] w-[200px]" />
          <h1 className="text-gray-400 font-semibold  text-sm">{d.brand}</h1>
          <hr className="my-2" />
          <h1 className="text-blue-500 font-medium h-9 text-sm">{d.productName}</h1>
          <div className="flex items-center justify-between mt-2">
            {d.discount ? (
              <h1 className="text-red-500 font-bold text-lg">
                ${" "}
                {Number(d.price) + Number(d.price) * (Number(d.discount) / 100)}
              </h1>
            ) : (
              <h1 className="text-black  font-bold text-lg">$ {d.price}</h1>
            )}
            {d.discount ? (
              <h1 className="text-gray-500 font-semibold  ">
                <strike>${d.price}</strike>
              </h1>
            ) : (
              ""
            )}
            {d.discount ? (
              <h1 className="text-red-500 text-sm font-semibold  ">
                -{d.discount}% OFF
              </h1>
            ) : (
              ""
            )}
          </div>
          {/* options  */}
          <div className="justify-between items-center mt-5 hidden group-hover:flex ">
            <div className="tooltip tooltip-primary" data-tip="Add to Cart ">
              <button className="bg-gray-200 font-bold text-xs px-4 py-2 rounded-sm hover:bg-yellow-400">ADD TO CART</button>
            </div>
            <div className="tooltip tooltip-primary" data-tip="View Details ">
              <button className="bg-gray-200 font-bold   p-2 rounded-sm hover:bg-yellow-400"><TbListDetails/></button>
            </div>
            <div className="tooltip tooltip-primary" data-tip="Add to Wish List ">
              <button className="bg-gray-200 font-bold   p-2 rounded-sm hover:bg-yellow-400"><FaRegHeart /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
