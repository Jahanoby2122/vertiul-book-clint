import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import ReviewCard from "./ReviewCard";
import { toast } from "react-toastify";

const Review = ({ _id }) => {

  const [refetch, setRefetch]=useState(true)


  const { user } = useContext(AuthContext);
  const loadData = useLoaderData();

  const [reviews, setReviews] = useState([]);

  // Load reviews on mount
  useEffect(() => {
    fetch("https://vertiul-books.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        const bookReviews = data.filter((item) => item.book_id === _id);
        setReviews(bookReviews);
      });
  }, [refetch,_id]);

  const isAlreadyReviewed = reviews.find(
    (review) => review.book_id === _id && review.email === user?.email
  );

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if(!user){
      toast.error("Please login first to add a review")
      return

    }
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const textArea = form.textArea.value;
    const rating = form.rating.value;

    const newReviewData = {
      name,
      email,
      textArea,
      rating,
      book_id: _id,
    };

    axios
      .post("https://vertiul-books.vercel.app/review", newReviewData)
      .then((res) => {
        toast.success("Successfully added");
        setReviews([...reviews, newReviewData]); // Add new review to the UI
        form.reset();
        setRefetch(!refetch)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  
  const handleReviewDelete = (id) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review._id !== id));
  };




  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Show Reviews */}
        <div>
          {reviews.map((review) => (
            <ReviewCard refetch={refetch} setRefetch={setRefetch} key={review._id} review={review} handleReviewDelete={handleReviewDelete} />
          ))}
        </div>

        {/* Submit Review Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Leave a Review
          </h2>
          <form onSubmit={handleReviewSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName || ""}
                readOnly
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  className="mask mask-heart bg-red-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  className="mask mask-heart bg-orange-400"
                  aria-label="2 star"
                />
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  className="mask mask-heart bg-yellow-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  className="mask mask-heart bg-lime-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  className="mask mask-heart bg-green-400"
                  aria-label="5 star"
                  defaultChecked
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Review
              </label>
              <textarea
                name="textArea"
                rows="4"
                placeholder="Write your review..."
                className="w-full border border-gray-300 rounded-xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
            </div>

            <div>
              <button
                disabled={isAlreadyReviewed}
                type="submit"
                className={`w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-xl transition-all duration-300 ${
                  isAlreadyReviewed ? "pointer-events-none opacity-50" : ""
                }`}
              >
                Submit Review
              </button>
              {isAlreadyReviewed && (
                <p className="text-sm text-red-500 mt-2 text-center">
                  You've already submitted a review for this book.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
