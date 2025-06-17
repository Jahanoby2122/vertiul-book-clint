import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Mymodal = ({_id}) => {

  const {user}=use(AuthContext)
// handleUpdate
  const handleUpdate = (e)=>{
    e.preventDefault()
    const form = e.target 
    const formData = new FormData(form)
    const updateReview = Object.fromEntries(formData.entries())
    console.log(updateReview)

    // send update coffee db
    fetch(`https://vertiul-books.vercel.app/review/${_id}`,{
      method:'PUT',
      headers:{
        'content-type' : 'application/json',
      },
      body:JSON.stringify(updateReview)
    })
      .then(res=>{
      
        console.log(res)
        toast.success('succesfully update')
          window.location.reload()
        
      })
      .then(error=>{
        console.log(error)

      })




  }


    return (
        <div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal').showModal()}>open modal</button> */}
<dialog id="my_modal" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
        <div>
      
                     <form onSubmit={handleUpdate} className="space-y-5">
     
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
             Update review
            </button>
          </div>
        </form>
      
        </div>
  </div>
</dialog>
            
        </div>
    );
};

export default Mymodal;