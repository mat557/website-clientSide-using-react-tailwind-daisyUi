import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import call from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-4'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary " cardTitle="Openning Hours" image={clock}></InfoCard>
            <InfoCard bgClass="bg-[#3d4451]" cardTitle="Our Location"  image={location}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary " cardTitle="Contact Us"  image={call}></InfoCard>
        </div>
    );
};

export default Info;