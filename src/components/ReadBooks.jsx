import React, { useEffect, useState } from 'react';
import { getBooks, removeBook } from '../utils/localStorage';
import Read from '../Read';

const ReadBooks = () => {
    const [books, setBooks] = useState([])
  
    useEffect(()=>{
        const datas = getBooks();
        setBooks(datas)
    },[])
    const handleRemove = (data) => {
        removeBook(data);
        const datas = getBooks();
        setBooks(datas)
    }
    return (
        <div>
            <h1>Read List</h1> 
            <div className='flex flex-col gap-6'>
                {books.map(data => <Read key={data.id} data = {data} handleRemove={handleRemove}></Read>)}
            </div>
        </div>
    );
};

export default ReadBooks;