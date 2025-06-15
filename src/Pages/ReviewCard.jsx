import React from 'react';

const ReviewCard = ({review}) => {
    const {rating,textArea}=review
    return (
        <div>
            <div className="flex justify-between">

          <p> {`Rating: ${rating}`}</p>
          <p className="pr-8">{`user review: ${textArea}`}</p>
        </div>
   
   
        </div>
    );
};

export default ReviewCard;