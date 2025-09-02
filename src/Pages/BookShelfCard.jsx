

import React, { useContext, useState } from 'react';
import { Star } from 'lucide-react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const BookShelfCard = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { book_category, total_page, book_author, cover_photo, booktitle, upvote, _id, user_email, reading_status } = book;

  const [vote, setVote] = useState(upvote);

  const handleVote = () => {
    if(!user){
      toast.error("Please login first to upvote")
      return

    }
    if (user_email === user.email) {
      toast.error("You cannot vote for your own book.");
      return;
    }
    else{
      toast.success("Thanks for your vote!")
    }

    axios.patch(`https://vertiul-books.vercel.app/books/${_id}/upvote`)
      .then(res => {
        if (res.data.modifiedCount) {
          setVote(prev => prev + 1);
        }
      })
      .catch(error => {
        console.log(error);
        toast.error("Failed to upvote. Please try again.");
      });
  }

  return (
    <div className="bg-white shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col justify-between h-full">
      {/* বড় কভার ফটো */}
      <img
        className="w-full md:h-[200px] h-[260px] px-5 md:px-12 pt-8 md:pt-12 object-cover"
        src={cover_photo}
        alt={booktitle}
      />

      {/* তথ্য */}
      <div className="p-5">
        <h4 className="text-xl font-extrabold text-gray-800 tracking-tight mb-2">{booktitle}</h4>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 italic">— {book_author}</p>
          <p className="flex items-center gap-x-3">vote {vote}</p>
        </div>
      </div>

      {/* বাটন */}
      <div className="p-4 flex justify-between">
        <div>
          <Link to={`/bookdetials/${_id}`}>
            <button className="btn btn-block">view</button>
          </Link>
        </div>

        <div>
          <button onClick={handleVote} className="btn btn-block">Upvote</button>
        </div>
      </div>
    </div>
  );
};

export default BookShelfCard;

