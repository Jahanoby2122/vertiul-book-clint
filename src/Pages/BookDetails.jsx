import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router"; 
import { GiVote } from "react-icons/gi";
import {
  FaBookOpen,
  FaPenNib,
  FaThList,
  FaInfoCircle,
  FaStar,
} from "react-icons/fa";
import Review from "./Review";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const BookDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const booksDetails = useLoaderData();
  const {
    cover_photo,
    _id,
    booktitle,
    book_author,
    total_page,
    book_category,
    reading_status: initialReadingStatus,
    book_overview,
    upvote,
    user_name,
    user_email,
  } = booksDetails;

  // Reading status local state for instant UI update
  const [readingStatus, setReadingStatus] = useState(initialReadingStatus);

  const updateReadingStatus = (e) => {
    e.preventDefault();
    if(!user){
      toast.error("Please login first to update reading status")
      return

    }

    if (user_email !== user.email) {
      toast.error("This is not your book");
      return;
    }

    const newStatus = e.target.reading_status.value;

    axios
      .patch(`https://vertiul-books.vercel.app/books/${_id}/reading`, {
        reading_status: newStatus,
      })
      .then((res) => {
        toast.success("Reading status updated successfully");
        setReadingStatus(newStatus); // instant UI update without reload
      })
      .catch((error) => {
        console.error("Update failed:", error);
        toast.error("Failed to update reading status");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between z-10 relative">
        <div className="flex items-center space-x-4">
          <a href="#" className="font-bold text-lg text-blue-600">
            Book Hub
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="/books" className="text-gray-700 hover:text-blue-600">
              Books
            </a>
            <a href="/add-book" className="text-blue-600 font-semibold">
              Add Book
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          {user_name && (
            <span className="text-gray-700 font-semibold hidden sm:block">
              {user_name}
            </span>
          )}
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>
      </nav>

      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden relative">
          <div
            className="relative h-96 bg-cover bg-center rounded-t-lg flex items-end"
            style={{
              backgroundImage: `url(${
                cover_photo ||
                "https://via.placeholder.com/1200x600?text=Book+Cover+Not+Available"
              })`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="flex space-x-2 mb-2">
                {book_category && (
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {book_category}
                  </span>
                )}
                {readingStatus && (
                  <span className="bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {readingStatus}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-2">
                {booktitle || "No Title Available"}
              </h1>
              {book_author && (
                <p className="text-xl font-medium text-gray-200">
                  By {book_author}
                </p>
              )}
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow-md text-red-500 hover:bg-gray-100 flex items-center">
               {upvote}
                <GiVote className="ml-1" />
              </button>

              <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.882 13.61 9.207 13.75 9.531 13.75h4.938c.324 0 .646-.14.845-.408l.025-.038C16.897 12.716 18 10.978 18 9.172v-.072C18 7.375 16.897 5.637 15.333 4.51L12.5 3l-2.833 1.51C8.103 5.637 7 7.375 7 9.172v.072c0 1.806 1.103 3.544 2.667 4.67zM12 18h.01"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Left content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Book Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {book_overview || "No overview available for this book."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 mb-6">
                <div className="flex items-center space-x-3">
                  <FaBookOpen className="text-blue-500 text-xl" />
                  <div>
                    <span className="font-semibold text-sm">Total Pages</span>
                    <p className="text-md">{total_page || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPenNib className="text-blue-500 text-xl" />
                  <div>
                    <span className="font-semibold text-sm">Author</span>
                    <p className="text-md">{book_author || "Unknown"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaThList className="text-blue-500 text-xl" />
                  <div>
                    <span className="font-semibold text-sm">Category</span>
                    <p className="text-md">{book_category || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaInfoCircle className="text-blue-500 text-xl" />
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <span className="font-semibold text-sm">Reading Status</span>
                    <p className="text-md">{readingStatus}</p>
                    <form onSubmit={updateReadingStatus}>
                      <div>
                        <select
                          defaultValue={readingStatus || ""}
                          name="reading_status"
                          required
                          className="select w-full select-primary"
                        >
                          <option value="" disabled>
                            Select status
                          </option>
                          <option value="Want to Read">Want to Read</option>
                          <option value="Reading">Reading</option>
                          <option value="Read">Read</option>
                        </select>
                      </div>
                      <input className="btn mt-2" type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <Review _id={_id} />
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Quick Actions
              </h2>
              <p className="text-gray-600 mb-6">
                Update your reading progress or status
              </p>

              <div className="space-y-4 mb-6">
                <input
                  value={user?.displayName || ""}
                  type="text"
                  readOnly
                  placeholder="User Name"
                  className="input w-full"
                />
                <input
                  value={user?.email || ""}
                  type="text"
                  readOnly
                  placeholder="User Email"
                  className="input w-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Book Highlights
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Access detailed book information
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Manage your reading list
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Discover related books
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
