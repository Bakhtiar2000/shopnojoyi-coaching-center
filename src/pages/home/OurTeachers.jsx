import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
  

const OurTeachers = () => {
    const [teachers, setTeachers]= useState([])

    useEffect(()=> {
        fetch('/teachers.json')
        .then(res=> res.json())
        .then(data=> setTeachers(data))
    }, [])

    const pagination = {
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
      };

    return (
        <div className='container py-20'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl mb-10 text-center text-title'>আমাদের শিক্ষকগণ</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    teachers.map(teacher=> 
                        <SwiperSlide
                            key={teacher?._id}
                            className=''
                        >
                            <div className='md:flex items-center justify-center gap-10 lg:gap-16 mb-12 mx-auto w-fit'>
                                <img className='w-96 lg:w-[520px] mx-auto rounded shadow-xl hover:shadow-title/50 duration-300' src={teacher?.img} alt={teacher?.name} />

                                <div className='mt-5 md:mt-0'>
                                    <p className='text-2xl lg:text-3xl duration-300 text-primary mb-3'>{teacher?.name} {teacher?.position && `(${teacher?.position})`}</p>
                                    <p className='mb-1'>{teacher?.education}</p>
                                    {
                                        teacher?.classes?.map((singleClass, index)=> <span key={index} >
                                            {singleClass} {index !== teacher.classes.length - 1 && ', '}
                                        </span>)
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
           </Swiper>

        </div>
    );
};

export default OurTeachers;