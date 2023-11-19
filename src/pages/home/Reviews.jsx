import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews]= useState([])

    useEffect(()=> {
        fetch('/reviews.json')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    }, [])

    return (
        <div className='container mt-20'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl mb-10 text-center text-primary'>শিক্ষার্থীদের মন্তব্য</h2>
            
            <div className='lg:flex justify-between gap-8'>
                {
                    reviews.map(review=> 
                    <div key={review._id} className='p-5 bg-title/10 rounded-lg hover:shadow-xl duration-300 mb-5 lg:mb-0 max-w-sm mx-auto'>
                        <div className='flex items-center gap-5 mb-5'>
                            <img className='rounded-full w-16 border border-title/20 shadow-xl' src={review?.img} alt="" />
                            <div>
                                <p className='text-xl text-title'>{review?.name}</p>
                                <p>{review?.education}</p>
                            </div>
                        </div>
                        <p>{review?.comment}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;