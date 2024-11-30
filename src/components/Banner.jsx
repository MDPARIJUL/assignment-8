import React from 'react';
import '../../src/index.css'
import { Link, NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='flex items-center bg-[#0101010D] px-32 py-20 gap-20 rounded-lg'>
            <div className="playfair-display space-y-12">
                 <h1 className='text-6xl font-bold max-w-[526px]'>Books to freshen <br />up your bookshelf</h1>
                <NavLink  to='/listed-books'  className='btn bg-[#23BE0A] px-5 text-white work-sans' >View The List</NavLink  >
          </div>
          <img src='../../public/img/pngwing.png' alt="" />
        </div>
    );
};

export default Banner;