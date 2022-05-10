import React from "react";
import slpngBoi from "../../assets/images/treatment.png";

const Exception = () => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:px-44">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={slpngBoi}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="ml-4">
          <h1 className="text-5xl font-bold">Exceptional Dental</h1>
          <h1 className="text-5xl font-bold">Care, On Your Terms</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Exception;
