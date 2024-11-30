import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tab, setTab] = useState(0)
  return (
    <div>
      <h1>Listed Books</h1>
      <div className="flex justify-start  -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center  flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0' : 'border-b'}`}
        >
          <span onClick={()=>{setTab(0)}}>Read Books</span>
        </Link>
        <Link to='whichlist'
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center  flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border border-b-0' : 'border-b'} dark:text-gray-900`}
        >
          <span onClick={()=>{setTab(1)}}>Whichlist Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
