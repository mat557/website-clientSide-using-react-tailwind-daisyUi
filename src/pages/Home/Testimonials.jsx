import React from 'react';
import qoute from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    
    const reviews = [
        {
            _id:1,
            name:"mahfuz",
            comment : "This is the test comment",
            location:'california',
            img: person1
        },
        {
            _id:2,
            name:"mahfuz",
            comment : "This is the test comment",
            location:'california',
            img: person2
        },
        {
            _id:3,
            name:"mahfuz",
            comment : "This is the test comment",
            location:'california',
            img: person3
        }
    ]

    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <p className="text-xl font-bold text-primary">Testimonials</p>
                    <p className="text-3xl">What Our Patients Say</p>
                </div>
                <div>
                    <img src={qoute} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Testimonial
                    key={review._id}
                    review={review}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;