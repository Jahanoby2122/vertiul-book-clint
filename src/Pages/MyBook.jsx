import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router';
import MyBookCard from './MyBookCard';


const MyBook = () => {
   
    const {user}=useContext(AuthContext)
    console.log('tokent in the context',user.accessToken)
    const initialData = useLoaderData()
    const [myBook,setBook]=useState(initialData)
    // console.log(user)
    // console.log(initialData)
    
    const books=  myBook.filter(book=> book.user_email.toLowerCase() ===user.email.toLowerCase())
    // console.log(books)
    
  
    return (
        <div className='grid grid-cols-1 w-8/12 mx-auto md:grid-cols-4 gap-6 my-40'>
           {
            books.map(book=> <MyBookCard myBook={myBook} setBook={setBook} user={user.accessToken} key={book._id} book={book}></MyBookCard>)
           }
           <div>
             
           </div>
        </div>
    );
};

export default MyBook;