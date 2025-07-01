import React from 'react';
import img1 from '../assets/booksLoading.json'
import Lottie from "lottie-react";


const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
             <div className='w-50'><Lottie animationData={img1} loop={true} />;</div>
        </div>
    );
};

export default Loading;