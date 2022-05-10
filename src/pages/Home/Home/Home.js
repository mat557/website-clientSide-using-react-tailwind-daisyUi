import React from 'react';
import Banner from '../Banner';
import Exception from '../Exception';
import Info from '../Info';
import Makeappointment from '../Makeappointment';
import Services from '../Services';

const Home = () => {
    return (
        <div className=' lg:px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exception></Exception>
            <Makeappointment></Makeappointment>
        </div>
    );
};

export default Home;