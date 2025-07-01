import React from 'react';
import { Link, useNavigate } from 'react-router';

const PopularBooksCard = ({ book }) => {
  const { cover_photo, book_author, booktitle, _id, upvote } = book;
  const navigate = useNavigate();

  return (
    <div className=" bg-white shadow-xl overflow-hidden transform transition duration-300 hover:scale-105  flex flex-col justify-between h-full">
      {/* বড় কভার ফটো */}
      <img
        className="w-full px-6  mx-auto md:h-[200px] h-[320px] md:px-12 pt-12 object-cover"
        src={cover_photo}
        alt={booktitle}
      />

      {/* তথ্য */}
      <div className="p-5">
        <h4 className="text-xl font-extrabold text-gray-800 tracking-tight mb-2">{booktitle}</h4>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 italic">— {book_author}</p>
          <p className="flex items-center gap-x-3">vote {upvote}</p>
        </div>
      </div>

      {/* বাটন */}
      <div className="p-4">
        <Link to={`/bookdetials/${_id}`}>
          <button className="btn btn-block">view</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularBooksCard;
