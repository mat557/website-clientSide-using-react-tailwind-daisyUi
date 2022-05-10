import React from "react";
import bannerPic from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerPic} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
