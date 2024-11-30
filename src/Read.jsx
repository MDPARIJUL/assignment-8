import { key } from "localforage";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { CiFileOn } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { removeBook } from "./utils/localStorage";
const Read = ({ data, handleRemove }) => {
  console.log(data);
  const {
    profile,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = data;

  return (
    <div className="flex items-center gap-10 p-6 border rounded-xl relative">
      <div className="bg-[#0101010D] px-7 py-14 flex justify-center items-center w-60 rounded-xl">
        <img src={profile} alt="" className=" w-[129px] h-[172px]" />
      </div>
      <div>
        <h3 className="font-bold text-2xl text-black">{bookName}</h3>
        <h5 className="text-[#131313CC] py-4">By: {author} </h5>
        <div className="flex gap-7 items-center py-4">
        <span className="font-bold text-xl">tag:</span> 
          <ul className="flex gap-6 items-center">
            {tags.map((tag, index) => (
              <li className="text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1 rounded-lg" key={index}>#{tag}</li>
            ))}
          </ul>
          <p className="flex gap-3 items-center text-[#131313CC]">
            <span className="text-[#424242] w-5 h-5"><CiLocationOn /> </span>
            Year of Publishing:{yearOfPublishing}
          </p>
        </div>
        <div className="flex items-center gap-5 py-7">
            <div className="flex gap-4 items-center">
                <span className="w-5 h-5 text-[#13131399]"><GoPeople /></span>
                <h1 className="text-[#13131399]">publisher: {publisher} </h1>
            </div>
            <div className="flex gap-4 items-center">
                <span className="w-5 h-5 text-[#13131399]"><CiFileOn /></span>
                <h3 className=" text-[#13131399]"> page:{totalPages} </h3>
            </div>
           
        </div>
        <hr className="border border-dashed"></hr>
        <div className="flex items-center gap-6 py-4">
            <h3 className="rounded-badge text-[#328EFF]  bg-[#328EFF26] px-6 py-3">category: {category}</h3>
            <h3 className="rounded-badge text-[#FFAC33] bg-[#FFAC3326] px-6 py-3">rating: {rating} </h3>
            <h3 className="rounded-badge  bg-[#23BE0A] text-white px-6 py-3"> view details</h3>
        </div>
      </div>
        <div onClick={()=>{handleRemove(data)}} className="absolute right-0 top-5 ">
            <TiDeleteOutline className="text-7xl" />
        </div>
    </div>
  );
};

export default Read;
