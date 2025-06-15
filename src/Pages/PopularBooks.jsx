import React, { use, useState } from 'react';
import PopularBooksCard from './PopularBooksCard';





const fetchData = fetch('http://localhost:5000/books').then(res=> res.json())

const PopularBooks = () => {
    const displayBooks = use(fetchData)



    // console.log(books)
   const [showAll, setShowAll] = useState(false);

    const books = showAll? displayBooks: displayBooks.slice(0,8)
    // const shortBooks = books.sort((a,b)=> a.upvote - b.upvote).slice(0,4)
    // console.log(shortBooks)



    return (
        <div>
          <div className='text-center'>
            <h1 className=' mx-auto font-bold text-4xl md:py-6'>  popular books</h1>


          
            <p>A list of popular books published roughly between 1930 and 2030? <br /> (Though your current time is June 13, 2025, so "2030" would be in the future).</p>
            <br />
          </div>
            <div className='md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-4 px-4 md:px-0  gap-6'>
                {
                    books.map(book=> <PopularBooksCard key={book._id} book={book}></PopularBooksCard>)
                }
            </div>
           <div className='py-6 text-center'>
                {
                    showAll?<button onClick={()=> setShowAll(prev=> !prev)} className='btn btn-primary'>show Less</button>:<button onClick={()=> setShowAll(prev=> !prev)} className='btn btn-primary'>show all</button>
                    
                }
                
           </div>
        </div>
    );
};

export default PopularBooks;