import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { GoStar } from "react-icons/go";
import { saveBooks } from "../utils/localStorage";
const BookDetails = () => {
  const {paraId } = useParams();
  const bookId = parseInt(paraId);
  console.log( bookId);
  const books = useLoaderData();
  const booksDetails = books.books;
  const bookDetail = booksDetails.find((book) => book.id === bookId);
  // console.log(bookDetail);
  const {profile, publisher, id, bookName, author, category, rating, review, tags, totalPages, yearOfPublishing} = bookDetail;

  const readHanler = (book) => {
      saveBooks(book)
  }
  return (
    <div>
      <h1>Book Detail</h1>
      <div className="space-y-2">
        <div className="bg-[#F3F3F3] flex justify-center items-center py-16 rounded-xl">
          <img src={profile} className=" w-1/4" alt="" />
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
        <hr className=" border border-dashed" />
        <div className="flex justify-between items-center">
          <p className="work-sans text-xl font-medium">{category} </p>
          <div className="flex items-center gap-4 work-sans text-xl font-medium">
            <p>{rating} </p>
            <span>
              <GoStar />
            </span>
          </div>
        </div>
        <p>{review} </p>
         <ul className="flex gap-5">
            {tags.map((tag, index) => <li key={index}>{tag}</li>)}
         </ul >
         <p>total pages: {totalPages} </p>
         <p>Publishing Date: {yearOfPublishing} </p>
         <div className="flex gap-5">
          <div className="">
            <Link onClick={()=>readHanler(bookDetail)} to='' className="btn bg-[#23BE0A] px-5 text-white work-sans">Read</Link>
          </div>
          <div className="">
            <Link onClick={()=>readHanler(bookDetail)}  className="btn bg-[#59C6D2] px-5 text-white  work-sans">WhichList</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
