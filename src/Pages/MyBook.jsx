import React, { use, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { data, useLoaderData } from 'react-router';
import MyBookCard from './MyBookCard';

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
        <div className='grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6 pt-35 px-5'>
           {
            books.map(book=> <MyBookCard myBook={myBook} setBook={setBook} key={book._id} book={book}></MyBookCard>)
           }
           <div>
             
           </div>
        </div>
    );
};

export default MyBook;