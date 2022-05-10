import React from 'react';
import Service from './Service';
import floride  from '../../assets//images/fluoride.png';
import cavity  from '../../assets//images/cavity.png';
import whitening  from '../../assets//images/whitening.png';


const Services = () => {
    const services = [
        {
            _id:1,
            name : 'Flouride Treatment',
            description: 'This is the test data',
            img:floride
        },
        {
            _id:2,
            name : 'Cavity Filling',
            description: 'This is the test data',
            img:cavity
        },
        {
            _id:3,
            name : 'Teeth whitening',
            description: 'This is the test data',
            img:whitening
        },
    ]


    return (
        <div className='my-28'>
            <div className='text-center'>
                <p className='text-primary text-xl text-bold uppercase'>Our Services</p>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-12 mt-20'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;