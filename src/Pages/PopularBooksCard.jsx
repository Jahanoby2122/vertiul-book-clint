import React from 'react';
import { Link, useNavigate } from 'react-router';


const PopularBooksCard = ({book,}) => {
    const {cover_photo,book_author,booktitle,_id,upvote}=book
    // console.log(cover_photo)
    const navigate = useNavigate()
  return (


<div className=" bg-gradient-to-br  shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
  {/* বড় কভার ফটো */}
  <img
    className="w-full md:h-[200px] md:px-12 pt-12 object-cover "
    src={cover_photo}
    alt={booktitle}
  />

  {/* তথ্য */}
  <div className="p-5">
    <h4 className="text-2xl font-extrabold text-gray-800 tracking-tight mb-2">{booktitle}</h4>
    <p className="text-sm text-gray-600 italic">— {book_author}</p>
    
    <p className='flex items-center gap-x-3'> vote {upvote}</p>
  </div>
  <div className='p-4 items-end '>
  <Link to={`/bookdetials/${_id}`}>
    <button  className='btn btn-block'>view</button>
  </Link>
    
  </div>
</div>





);

};

export default PopularBooksCard;