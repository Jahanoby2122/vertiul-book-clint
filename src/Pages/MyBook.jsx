import React, { use, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { data, Link, useLoaderData } from 'react-router';
import MyBookCard from './MyBookCard';
import img1 from '../assets/addbook.json'
import Lottie from "lottie-react";

// const fetchData = .then(res=> res.json())


const MyBook = () => {
    // const initialData = use(fetchData)
    // console.log('this is my ',initialData)
const {user}=useContext(AuthContext)
  const [myBook,setBook]=useState([])



useEffect(()=>{
    if(!user){
        return

    }
    fetch('https://vertiul-books.vercel.app/books',{
        headers:{
            authorization: `bearar ${user.accessToken}`
        }
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data)
        setBook(data)
    })

},[user])





   
    
    console.log('tokent in the context',user.accessToken)
    // const initialData = useLoaderData()
    // console.log(initialData)
  

    
    const books=  myBook.filter(book=> book.user_email.toLowerCase() ===user.email.toLowerCase())
    // console.log(books)
    
  
    return (
       <div>
         <div className='grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6 pt-35 px-5'>
           {
            books.map(book=> <MyBookCard myBook={myBook} setBook={setBook} key={book._id} book={book}></MyBookCard>)
           }


           

        </div>


        <div className='flex justify-center '>
  {books.length === 0 && (
    <div className='w-full flex flex-col items-center justify-center text-center px-4'>
      <h1 className='text-xl md:text-2xl font-semibold mb-4'>
        You have not added any books yet
      </h1>
      <p className='text-gray-600 mb-4 max-w-md'>
        It looks like your book list is currently empty. To keep track of your reading or share your favorite books, start by adding a new book to your collection.
      </p>

      <Link
        className='btn btn-primary bg-white shadow-xl text-black mb-6 px-6 py-2 rounded'
        to="/addbook"
      >
        Add Your First Book
      </Link>

      <div className='w-full max-w-sm md:max-w-md lg:max-w-lg'>
        <Lottie animationData={img1} loop={true} />
      </div>
    </div>
  )}
</div>


       </div>
    );
};

export default MyBook;