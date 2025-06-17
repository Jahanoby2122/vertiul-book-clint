import axios from 'axios';
import Swal from 'sweetalert2'
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const AddBook = () => {
  const {user}=useContext(AuthContext)
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault();
     const form = e.target;
    const formData = new FormData(form);
    const newBookData = Object.fromEntries(formData.entries())
    console.log(newBookData)
    newBookData.upvote= parseInt(newBookData.upvote)

  //  data fetch
  axios.post(`https://vertiul-books.vercel.app/books/`,newBookData)
    .then(res=>{
      console.log(res)
      if(res.data.insertedId){
              
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add succesfully",
        showConfirmButton: false,
        timer: 1500
      });
     

      }

    }).catch(error=>{
      console.log(error)
    })
 

 
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-violet-600">📚 Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
            <input type="text" name="booktitle" required
              className="input w-full" placeholder="Book Title" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Photo URL</label>
            <input type="text" name="cover_photo" required
              className="input w-full" placeholder="Image URL" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Pages</label>
            <input type="number" name="total_page" required
              className="input w-full" placeholder="e.g. 250" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input  type="text" name="book_author" required
              className="input w-full" placeholder="Author Name" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input value={user?.email} type="email" name="user_email" required
              className="input w-full" placeholder="Your Email" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input value={user?.displayName} type="text" name="user_name" required
              className="input w-full" placeholder="Your Name" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Category</label>
            <select name="book_category" required className="select w-full select-primary">
              <option disabled selected>Select a category</option>
              <option>Fiction</option>
              <option>Non Fiction</option>
              <option>Fantasy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reading Status</label>
            <select name="reading_status" required className="select w-full select-primary">
              <option disabled selected>Select status</option>
              <option>Want to Read</option>
              <option>Reading</option>
              <option>Read</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Book Overview</label>
          <textarea name="book_overview" rows="4" required
            className="textarea w-full" placeholder="Write a short description of the book..."></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upvote</label>
          <input type="number" name="upvote" value="0" readOnly
            className="input w-full bg-gray-100 cursor-not-allowed text-gray-500 btn" />
        </div>

        <div className="text-center pt-4">
          <input type="submit" value="➕ Submit Book" className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition" />
          
        </div>
      </form>
    </div>
  );
};

export default AddBook;
