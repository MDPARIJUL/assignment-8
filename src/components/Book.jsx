import React from "react";
import { Link } from "react-router-dom";
import { GoStar } from "react-icons/go";
import "../../src/index.css";
const Book = ({ book }) => {
  console.log(book);
  const { profile, author, category, publisher, bookName, rating, id } = book;
  console.log(profile);
  return (
    <div className="p-6 border border-gray rounded-2xl hover:scale-105 hover:border-primary duration-500 hover:shadow-2xl">
      <Link to={`/book/${id}`} className="space-y-2">
        <div className="bg-[#F3F3F3] flex justify-center items-center py-16 rounded-xl">
          <img src={profile} className=" w-[150px] h-[150px]"   alt="" />
        </div>
        <div className="flex justify-between ">
          <h3 className="bg-[#020A010D] text-[#23BE0A] rounded-[30px] px-2 px-1">
            {publisher}{" "}
          </h3>
          <h3 className="bg-[#020A010D] text-[#23BE0A] rounded-[30px] px-2 px-1">
            {id}
          </h3>
        </div>
        <h3 className="playfair-display font-bold text-2xl">{bookName}</h3>
        <h3 className="work-sans text-xl font-medium">By: {author} </h3>
        <hr className=" border border-dashed"  />
        <div className="flex justify-between items-center">
          <p className="work-sans text-xl font-medium">{category} </p>
          <div className="flex items-center gap-4 work-sans text-xl font-medium">
            <p>{rating} </p>
            <span>
              <GoStar />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
