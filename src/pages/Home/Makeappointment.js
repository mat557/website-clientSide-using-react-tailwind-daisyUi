import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import BUtton from '../Shared/BUtton';;

const Makeappointment = () => {

    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center my-16'>
            <div className='flex-1 hidden  lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <p className='text-xl text-primary font-bold'>Appointment</p>
                <p className='text-3xl text-white py-5'>Make an appointment</p>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam harum obcaecati eius assumenda perspiciatis magni corporis quos. Hic, dicta autem optio aliquam ad, incidunt ut ducimus quisquam, adipisci ullam provident?</p>
                <BUtton className="pb-3">Get Started</BUtton>
            </div>
        </section>
    );
};

export default Makeappointment;