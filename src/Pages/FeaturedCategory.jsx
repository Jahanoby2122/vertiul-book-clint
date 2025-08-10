import React, { use, useEffect } from 'react';
import FeturedCategoryCard from './FeturedCategoryCard';

const fetchData = fetch('https://vertiul-books.vercel.app/books/').then(res=> res.json())

const FeaturedCategory = () => {
    const books = use(fetchData)
    // console.log(books)


const filterBook = books.filter(book=> book.book_category=='Non Fiction').slice(0,6)
const filterBook2 = books.filter(book=> book.book_category=='Fiction').slice(0,6)
const filterBook3 = books.filter(book=> book.book_category=='Fantasy').slice(0,6)
// console.log(filterBook)

    return (
        <div className='hidden md:block'>
            <h1  data-aos="fade-left" className=' text-center font-bold text-3xl'>featured <span className='text-blue-500'>categories </span></h1>
            <h1 className=' lg:w-8/12 md:px-10 mx-auto font-bold'>non fiction </h1>
            <br />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 px-5 max-w-7xl mx-auto'>
                {
                    filterBook.map(book=> <FeturedCategoryCard key={book._id} book={book}></FeturedCategoryCard>)
                }
            </div>
            <br />
             <h1 className=' lg:w-8/12 md:px-10 mx-auto font-bold'> fiction </h1>
             <br />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 px-5 max-w-7xl mx-auto'>
                {
                    filterBook2.map(book=> <FeturedCategoryCard key={book._id} book={book}></FeturedCategoryCard>)
                }
            </div>
            
         
        </div>
    );
};

export default FeaturedCategory;