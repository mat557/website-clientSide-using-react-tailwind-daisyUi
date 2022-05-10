import React from 'react';
import doctor from '../../assets/images/doctor.png'

const Makeappointment = () => {
    return (
        <section className='flex'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <p className='text-xl text-primary'>Appointment</p>
                <p className='text-3xl '>Make an appointment</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam harum obcaecati eius assumenda perspiciatis magni corporis quos. Hic, dicta autem optio aliquam ad, incidunt ut ducimus quisquam, adipisci ullam provident?</p>
            </div>
        </section>
    );
};

export default Makeappointment;