import React from "react";

const Serv = ({service,setTreatment}) => {
    const {name,slots} = service;
  return (
    <div class="card w-96 text-primary-content">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
            {
                slots.length 
                ? <span>{slots[0]}</span>
                : <span className="text-red-800">No Slot Available</span>
            }
        </p>
        <p>{slots.length} {slots.length > 1 ? 'services' : 'service'}  remaining</p>
        <div class="card-actions justify-center">
          <label for="booking-modal" 
          disabled={slots.length === 0}
          onClick={()=>setTreatment(service)}
          class="btn btn-secondary text-white  uppercase">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Serv;
