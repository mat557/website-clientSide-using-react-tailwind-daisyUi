import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Serv from './Serv';
import BookngModal from './BookngModal';

const AvailableAppointment = ({date}) => {

    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);

    useEffect(()=>{
        fetch("services.json").then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <p className='text-center text-primary text-xl'>Available appointment on {format(date,'PP')} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
            {
                services.map(service => 
                <Serv
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                ></Serv>
                )
            }
            </div>
            {treatment && 
            <BookngModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookngModal>}
        </div>
    );
};

export default AvailableAppointment;