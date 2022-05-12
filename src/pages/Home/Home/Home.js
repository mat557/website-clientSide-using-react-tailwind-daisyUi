import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner';
import Exception from '../Exception';
import Info from '../Info';
import Makeappointment from '../Makeappointment';
import Services from '../Services';
import Testimonials from '../Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exception></Exception>
            <Makeappointment></Makeappointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;