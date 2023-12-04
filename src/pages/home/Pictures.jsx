import React from 'react';
import PictureBox from './PictureBox';
import useGallery from '../../hooks/useGallery';

const Pictures = () => {
    const [galleryData] = useGallery();

    return (
        <div className='relative bg-[url("https://img.freepik.com/premium-vector/simple-pattern-transparent-background-theme-school-learning-education_576736-30.jpg?w=1800")] bg-cover bg-center bg-no-repeat'>
            <div className='absolute bg-white h-full w-full opacity-50'></div>
            <div className='bg-title/5'>
                <div className='container py-20'>
                    <h2 className='absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl lg:text-5xl mb-10 text-title w-max'>ফটো গ্যালারি</h2>

                    <div className='grid xl:grid-cols-2 gap-8 mt-20'>
                    {
                        galleryData?.map(photo=> 
                        <PictureBox key={photo?._id} photo={photo}></PictureBox>    
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pictures;