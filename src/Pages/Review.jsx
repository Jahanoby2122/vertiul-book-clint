import axios from "axios";
import React, { use, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import ReviewCard from "./ReviewCard";

const fetchData = fetch('http://localhost:5000/review').then(res=> res.json())



const Review = ({_id}) => {
  const data = use(fetchData)
  console.log('aita then diya load kora ',data)
const bookReviews = data.filter(item=> item.book_id===_id)



console.log('book review',bookReviews)
  const {user}=useContext(AuthContext)
  const loadData = useLoaderData()
  console.log('my load data', loadData)


  const handleReviewSubmit = (e) => {
    e.preventDefault();
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
      book_id:_id
    };

    // fetch data

    axios.post('http://localhost:5000/review',newReviewData)
      .then(res=> {
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })




    // console.log(newReviewData);
    form.reset();
  };



  // handleUpdate
  const handleUpdate = ()=>{
    
  }






  return (
 <div>
  <div>

   <div className=" grid grid-cols-1 md:grid-cols-2">
    {/* map hare */}
      <div>
     {

      bookReviews.map(review=> <ReviewCard key={review._id} review={review}></ReviewCard>)

     }
     <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
     </div>
     
     <button className="btn">delete</button>
      </div>
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Leave a Review</h2>
        <form onSubmit={handleReviewSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
            value={user?.DisplayName}
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label  className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input

            value={user?.email}
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <div className="flex gap-2">
              <input type="radio" name="rating" value="1" className="mask mask-heart bg-red-400" aria-label="1 star" />
              <input type="radio" name="rating" value="2" className="mask mask-heart bg-orange-400" aria-label="2 star" />
              <input type="radio" name="rating" value="3" className="mask mask-heart bg-yellow-400" aria-label="3 star" />
              <input type="radio" name="rating" value="4" className="mask mask-heart bg-lime-400" aria-label="4 star" />
              <input type="radio" name="rating" value="5" className="mask mask-heart bg-green-400" aria-label="5 star" defaultChecked />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
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
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-xl transition-all duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>

 </div>
  );
};

export default Review;
