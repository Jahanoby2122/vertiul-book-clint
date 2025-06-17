import React, { use, useState } from 'react';
import { Star } from 'lucide-react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
  import {  toast } from 'react-toastify';

const BookShelfCard = ({ book }) => {
  const {user}=use(AuthContext)
  const { book_category, total_page, book_author, cover_photo, booktitle, upvote,_id, user_email} = book;

  const [vote,setVote]=useState(upvote)


  const handleVote = ()=>{
    axios.patch(`https://vertiul-books.vercel.app/books/${_id}/upvote`)
      .then(res=>{
        // console.log(res.data)
        if(user_email==user.email){
        toast.error("You cannot vote for your own book.");

          return

          
        }
        
        if(res.data.modifiedCount){
          setVote(prev => prev+1)
          

        }

      } )
      .catch(eror=>{
        console.log(eror)
      })

    
   

  }





  return (
   <div className=" bg-gradient-to-br  shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">

  <img
    className="w-full h-[200px] px-12 pt-12 object-cover "
    src={cover_photo}
    alt={booktitle}
  />


  <div className="p-5">
    <h4 className="text-2xl font-extrabold text-gray-800 tracking-tight mb-2">{booktitle}</h4>
    <p className="text-sm text-gray-600 italic">— {book_author}</p>
  </div>
  <div className='p-4 items-end '>
    {vote}
    <button onClick={handleVote}  className='btn btn-block'>Upvote</button>

    
  </div>
</div>
  );
};

export default BookShelfCard;
