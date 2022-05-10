import React from "react";

const InfoCard = ({ image ,cardTitle ,bgClass }) => {
  return (
    <div
      className={`${bgClass} text-white card lg:card-side bg-base-100 shadow-xl`}
    >
      <figure className="pl-5">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
