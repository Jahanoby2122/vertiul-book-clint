import React from "react";
import Mymodal from "../components/Mymodal";
import Swal from "sweetalert2";

const ReviewCard = ({ review }) => {
  const { rating, textArea, _id } = review;

  const handleDelete = (_id) => {
    console.log(_id);
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
        // fetch
        fetch(`https://vertiul-books.vercel.app/review/${_id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
            }
          })
          .then((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-4 space-y-4">
  {/* Rating & Review */}
  <div className="flex justify-between items-start gap-4 flex-wrap">
    <p className="text-lg font-semibold text-gray-700">{`⭐ Rating: ${rating}`}</p>
    <p className="text-gray-600 max-w-md">{`📝 User Review: ${textArea}`}</p>
  </div>

  {/* Action Buttons */}
  <div className="flex gap-4 mt-2">
    <button
      onClick={() => document.getElementById("my_modal").showModal()}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
    >
      ✏️ Update
    </button>
    <button
      onClick={() => handleDelete(_id)}
      className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
    >
      🗑️ Delete
    </button>
  </div>

  {/* Modal */}
  <Mymodal _id={_id} />
</div>

  );
};

export default ReviewCard;
