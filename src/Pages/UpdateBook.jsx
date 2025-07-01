import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateBook = () => {

    const books = useLoaderData()
    const {booktitle,cover_photo,total_page,book_author,user_name,user_email,book_overview,reading_status,book_category,_id}=books
    
    // console.log(books)

 const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
     updateData.upvote= parseInt(updateData.upvote)
    

    // const _id = "12345"; // এখানে সঠিকভাবে আইডি বসাও

 fetch(`https://vertiul-books.vercel.app/books/${_id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updateData)
})
.then(res=> res.json())
.then(data => {
  if(data.modifiedCount){
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "succesfully updated",
  showConfirmButton: false,
  timer: 1500
});

  }
})
.catch(err => {
  console.error("Update Failed:", err);
});

};


    return (
        <div className="max-w-5xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-violet-600">📚 Update Book</h1>
      <form onSubmit={handleUpdate} className="space-y-6">

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
            <input defaultValue={booktitle} type="text" name="booktitle" required
              className="input w-full" placeholder="Book Title" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Photo URL</label>
            <input defaultValue={cover_photo} type="text" name="cover_photo" required
              className="input w-full" placeholder="Image URL" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Pages</label>
            <input defaultValue={total_page} type="number" name="total_page" required
              className="input w-full" placeholder="e.g. 250" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input defaultValue={book_author} type="text" name="book_author" required
              className="input w-full" placeholder="Author Name" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input value={user_email} type="email" name="user_email" required
              className="input w-full" placeholder="Your Email" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input value={user_name} type="text" name="user_name" required
              className="input w-full" placeholder="Your Name" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Category</label>
            <select defaultValue={book_category} name="book_category" required className="select w-full select-primary">
              <option disabled selected>Select a category</option>
              <option>Fiction</option>
              <option>Non Fiction</option>
              <option>Fantasy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reading Status</label>
            <select defaultValue={reading_status} name="reading_status" required className="select w-full select-primary">
              <option disabled selected>Select status</option>
              <option>Want to Read</option>
              <option>Reading</option>
              <option>Read</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Book Overview</label>
          <textarea defaultValue={book_overview} name="book_overview" rows="4" required
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

export default UpdateBook;