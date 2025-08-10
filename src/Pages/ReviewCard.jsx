import React from "react";
import Mymodal from "../components/Mymodal";
import Swal from "sweetalert2";

const ReviewCard = ({ review, refetch, setRefetch }) => {
  const { rating, textArea, _id } = review;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: 'rounded-xl',
        confirmButton: 'rounded-lg px-4 py-2',
        cancelButton: 'rounded-lg px-4 py-2'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://vertiul-books.vercel.app/review/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
                customClass: {
                  popup: 'rounded-xl',
                  confirmButton: 'rounded-lg px-4 py-2'
                }
              });
              setRefetch(!refetch);
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
              customClass: {
                popup: 'rounded-xl',
                confirmButton: 'rounded-lg px-4 py-2'
              }
            });
          });
      }
    });
  };

  // Generate star rating display
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Rating Section */}
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {renderStars()}
        </div>
        <span className="text-gray-500 text-sm ml-1">
          {/* ({rating}/5) */}
        </span>
      </div>

      {/* Review Text */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          {textArea}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <button
          onClick={() => document.getElementById("my_modal").showModal()}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Edit
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Delete
        </button>
      </div>

      {/* Modal */}
      <Mymodal setRefetch={setRefetch} refetch={refetch} _id={_id} />
    </div>
  );
};

export default ReviewCard;