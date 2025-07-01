import React, { use } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { AuthContext } from "../Provider/AuthProvider";
// import UpdateBookModal from "../components/UpdateBookModal";

const MyBookCard = ({ book,setBook,myBook }) => {
  const { booktitle, cover_photo, author, genre, _id,book_author } = book;
  const {user}=use(AuthContext)


 const handleDelete = (_id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // Only delete if user confirms
      fetch(`https://vertiul-books.vercel.app/books/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remainingBooks = myBook.filter(book => book._id !== _id);
        setBook(remainingBooks);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    }
  });
};


  return (
 <div className=" bg-gradient-to-br  shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
  {/* বড় কভার ফটো */}
  <img
    className="w-full md:h-[200px]  h-[260px] px-12 pt-12 object-cover "
    src={cover_photo}
    alt={booktitle}
  />

  {/* তথ্য */}
  <div className="p-5">
    <h4 className="text-2xl font-extrabold text-gray-800 tracking-tight mb-2">{booktitle}</h4>
    <p className="text-sm text-gray-600 italic">— {book_author}</p>
  </div>
  <div className='p-4 flex justify-between items-end'>
  <Link to={`/updatebook/${_id}`}>
    <button  className='btn '>UpdateBook</button>
  </Link>

    {/* <button onClick={()=>document.getElementById('my_modal_update').showModal()} className='btn '>UpdateBook</button> */}


   <button className="btn px-8" onClick={()=>handleDelete(_id)}>Delete</button>

    
  </div>
  {/* <UpdateBookModal /> */}
</div>
  );
};

export default MyBookCard;
