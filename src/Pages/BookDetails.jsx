import React, { use, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router'; // 'react-router-dom' থেকে useLoaderData ইম্পোর্ট করুন
import { FaBookOpen, FaPenNib, FaThList, FaInfoCircle, FaStar, FaUser } from 'react-icons/fa'; // React Icons ব্যবহার করতে পারেন
import Review from './Review';
import { AuthContext } from '../Provider/AuthProvider';



const BookDetailsPage = () => {
    
  
    // useLoaderData থেকে আপনার বইয়ের বিবরণ পান
    const {user}=useContext(AuthContext)
    const booksDetails = useLoaderData();
    const {
        cover_photo,
        _id,
        booktitle,
        book_author,
        total_page,
        book_category,
        reading_status, // স্ক্রিনশটের সাথে মিলিয়ে এই ডেটা কিভাবে ব্যবহার করবেন তা নির্ভর করে
        book_overview,
        upvote, // স্ক্রিনশটের সাথে মিলিয়ে এই ডেটা কিভাবে ব্যবহার করবেন তা নির্ভর করে
        user_name // স্ক্রিনশটের সাথে মিলিয়ে এই ডেটা কিভাবে ব্যবহার করবেন তা নির্ভর করে
    } = booksDetails;

    // যদি আপনার রেজিস্ট্রেশন ফর্মের মতো কোনো ইন্টারেকশন থাকে, তবে useState ব্যবহার করুন
    // যেমন, যদি আপনি একটি "Mark as Read" বা "Add to Wishlist" ফাংশনালিটি যোগ করতে চান
    // এই উদাহরণে, আমি স্ক্রিনশটের ফর্ম সেকশনটিকে একটি "Quick Actions" বা "Status Update" সেকশন হিসেবে ব্যবহার করব।
 // উদাহরণস্বরূপ, বইয়ের স্ট্যাটাস আপডেট করার জন্য


    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* নেভিগেশন বার - এটি স্ক্রিনশটের উপরের বারের মতো */}
            {/* আপনি এটি একটি আলাদা কম্পোনেন্ট হিসেবেও রাখতে পারেন */}
            <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between z-10 relative">
                <div className="flex items-center space-x-4">
                    <a href="#" className="font-bold text-lg text-blue-600">Book Hub</a> {/* আপনার হাবের নাম */}
                    <div className="hidden md:flex space-x-6">
                        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="/books" className="text-gray-700 hover:text-blue-600">Books</a>
                        <a href="/add-book" className="text-blue-600 font-semibold">Add Book</a>
                        <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    {/* এখানে আপনার প্রোফাইল বা অন্যান্য আইকন যোগ করতে পারেন */}
                    <button className="text-gray-600 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </button>
                    {user_name && (
                         <span className="text-gray-700 font-semibold hidden sm:block">{user_name}</span>
                    )}
                    <img className="w-8 h-8 rounded-full cursor-pointer" src="https://via.placeholder.com/150" alt="User Avatar" />
                </div>
            </nav>

            <div className="container mx-auto p-4 md:p-8 lg:p-12">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden relative">
                    {/* বইয়ের কভার ফটো সেকশন (Hero Section এর মতো) */}
                    <div
                        className="relative h-96 bg-cover bg-center rounded-t-lg flex items-end"
                        style={{ backgroundImage: `url(${cover_photo || 'https://via.placeholder.com/1200x600?text=Book+Cover+Not+Available'})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <div className="flex space-x-2 mb-2">
                                {/* ক্যাটাগরি বা রিডিং স্ট্যাটাস ট্যাগ */}
                                {book_category && (
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {book_category}
                                    </span>
                                )}
                                {reading_status && (
                                    <span className="bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {reading_status}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl font-bold mb-2">{booktitle || 'No Title Available'}</h1>
                            {book_author && (
                                <p className="text-xl font-medium text-gray-200">By {book_author}</p>
                            )}
                        </div>
                        <div className="absolute top-4 right-4 flex space-x-2">
                            {/* Upvote বাটন */}
                            <button className="bg-white p-2 rounded-full shadow-md text-red-500 hover:bg-gray-100 flex items-center">
                                <FaStar className="mr-1" /> {upvote || 0} {/* Upvote সংখ্যা */}
                            </button>
                            {/* অন্যান্য বাটন, যেমন Share বাটন */}
                            <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.882 13.61 9.207 13.75 9.531 13.75h4.938c.324 0 .646-.14.845-.408l.025-.038C16.897 12.716 18 10.978 18 9.172v-.072C18 7.375 16.897 5.637 15.333 4.51L12.5 3l-2.833 1.51C8.103 5.637 7 7.375 7 9.172v.072c0 1.806 1.103 3.544 2.667 4.67zM12 18h.01"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                        {/* বইয়ের বিবরণ সেকশন */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Overview</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {book_overview || 'No overview available for this book.'}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 mb-6">
                                <div className="flex items-center space-x-3">
                                    <FaBookOpen className="text-blue-500 text-xl" />
                                    <div>
                                        <span className="font-semibold text-sm">Total Pages</span>
                                        <p className="text-md">{total_page || 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaPenNib className="text-blue-500 text-xl" />
                                    <div>
                                        <span className="font-semibold text-sm">Author</span>
                                        <p className="text-md">{book_author || 'Unknown'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaThList className="text-blue-500 text-xl" />
                                    <div>
                                        <span className="font-semibold text-sm">Category</span>
                                        <p className="text-md">{book_category || 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaInfoCircle className="text-blue-500 text-xl" />
                                    <div>
                                        <span className="font-semibold text-sm">Reading Status</span>
                                        <p className="text-md">{reading_status || 'Not set'}</p>
                                    </div>
                                </div>
                            </div>
                            {/* যদি আপনার Review কম্পোনেন্ট থাকে, তবে এখানে এটি রেন্ডার করুন */}
                            <div className='mt-20'>
                              <Review _id={_id}></Review>
                            </div>
                            {/* <Review bookId={booksDetails._id} /> */}
                        </div>

                        {/* বইয়ের অ্যাকশন বা স্ট্যাটাস আপডেট সেকশন (রেজিস্ট্রেশন ফর্মের মতো) */}
                        <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                            <p className="text-gray-600 mb-6">Update your reading progress or status</p>

                            <div className='space-y-4'>
                              <input value={user?.displayName} type="text" placeholder="Secondary" className="input " />
                              <br />
                              <input value={user?.email} type="text" placeholder="Secondary" className="input " />
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Book Highlights</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Access detailed book information
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Manage your reading list
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Discover related books
                                    </li>
                                    {/* আপনি আপনার বইয়ের ডেটা থেকে অন্যান্য হাইলাইট যোগ করতে পারেন */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;