import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import '../../src/index.css'

const Books = () => {
    const [books, setBooks] = useState([])
    console.log(books)
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(books => setBooks(books.books))
    }, [])
    return (
        <div>
            <h1 className='playfair-display font-bold text-5xl text-[#131313] text-center mt-24 mb-10'>Books</h1>
            <div className='grid grid-cols-3 gap-8'>
                {books.map(book => <Book key={book.bookId} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;