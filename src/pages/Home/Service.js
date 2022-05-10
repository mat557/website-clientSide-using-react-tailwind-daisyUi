import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Shoes"/></figure>
            <div className="card-body">
                    <h2 className="card-title">{service.name}</h2>
                    <p>{service.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;