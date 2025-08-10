import React from 'react';
import { Link } from 'react-router';

const FeaturedCategoryCard = ({ book }) => {
    const { booktitle, cover_photo, total_page,_id } = book;

    return (
        <div  className="max-w-xs  overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer transform hover:-translate-y-1 border border-gray-100">
            <div className="relative pb-[50%]"> {/* Aspect ratio container */}
                <img 
                    className="absolute p-2 top-0 left-0 w-full h-[100px] object-cover"
                    src={cover_photo || 'https://via.placeholder.com/300x375?text=No+Cover'} 
                    alt={booktitle}
                    loading="lazy"
                />
            </div>
            
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 h-14 text-lg">
                    {booktitle}
                </h3>
                
                <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-gray-500 py-1">
                        <span className="font-medium text-gray-600">{total_page}</span> pages
                    </span>
                   <Link to={`bookdetials/${_id}`}>
                    
                    <button 
                        className=" text-black font-medium py-2 px-4  text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
                       
                    >
                       view
                    </button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategoryCard;