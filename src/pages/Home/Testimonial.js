import React from "react";

const Testimonial = ({ review }) => {
  return (
    <div className="bg-black text-white card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{review.name}</h2>
        <p>{review.comment}</p>
      </div>
      <div className="flex items-center">
        <div>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} />
            </div>
          </div>
        </div>

        <div>
            <p className="text-xl">{review.name}</p>
            <p>{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
