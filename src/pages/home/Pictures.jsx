import React, { useEffect, useState } from 'react';

const Pictures = () => {
    const [photos, setPhotos]= useState([])

    useEffect(()=> {
        fetch('/gallery.json')
        .then(res=> res.json())
        .then(data=> setPhotos(data))
    }, [])
    return (
        <div className='container mt-20'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl mb-10 text-center text-primary'>ফটো গ্যালারি</h2>

                <div className='grid xl:grid-cols-2 gap-8 mb-8'>
                {
                    photos?.map(photo=> 
                    <div key={photo?._id} className='mx-auto'>
                        <img className='w-[600px] h-[300px] object-cover object-center duration-300 rounded hover:shadow-xl hover:shadow-title/30' src={photo?.img} alt="" />
                    </div>    
                    )
                }
                </div>
        </div>
    );
};

export default Pictures;