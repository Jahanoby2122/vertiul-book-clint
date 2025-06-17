import React from 'react';

const UpdateReview = () => {
    
const updateReview = (e)=>{
     e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
}

    return (
       <div>
        hello
       </div>
    );
};

export default UpdateReview;