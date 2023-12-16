import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import admission1 from "../../../public/assets/admission/20231206_013402_0000.png"
import admission2 from "../../../public/assets/admission/20231206_013402_0001.png"

const Admission = () => {
    return (
        <div>
            <Helmet>
                <title>ভর্তি তথ্য - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=sph" title="Admission" />

            <section className="container py-20">

                <h3 className='changing-text text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 py-2'>৭ দিনের ফ্রি ডেমো ক্লাসে তোমাকে স্বাগতম </h3>
                <div className='lg:flex justify-center gap-8 xl:gap-16  w-fit mx-auto'>

                <img className='w-96 sm:w-[520px] lg:w-96 xl:w-[520px] duration-300 border border-[#313238] rounded mb-10 lg:mb-0' src={admission1} alt="" />
                <img className='w-96 sm:w-[520px] lg:w-96 xl:w-[520px] duration-300 border border-[#313238] rounded' src={admission2} alt="" />


                    {/* <div className='w-fit mx-auto'>
                        <h2 className=' text-white bg-primary font-semibold text-center rounded-sm mb-2 md:mb-3 lg:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl py-0 md:py-1 lg:py-2'>একাদশ - দ্বাদশ শ্রেণি</h2>
                        <div className='flex gap-1 md:gap-2 lg:gap-3 text-center text-base sm:text-lg md:text-xl lg:text-2xl'>
                            <div className='flex justify-center gap-1 md:gap-2 lg:gap-3 flex-col'>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>বিজ্ঞান শাখা</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>ব্যবসায় শাখা</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>মানবিক শাখা</p>
                            </div>
                            <div className='flex justify-center gap-1 md:gap-2 lg:gap-3 flex-col'>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>৩৫০০৳</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>২৫০০৳</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>১৫০০৳</p>
                            </div>
                            <div className='flex justify-center gap-1 md:gap-2 lg:gap-3 flex-col'>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>৬ বিষয়</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>৪ বিষয়</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>২ বিষয়</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-fit mx-auto'>
                        <h2 className=' text-white bg-primary font-semibold text-center rounded-sm mb-2 md:mb-3 lg:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl py-0 md:py-1 lg:py-2'>নবম - দশম শ্রেণি</h2>
                        <div className='flex gap-1 md:gap-2 lg:gap-3 text-center text-base sm:text-lg md:text-xl lg:text-2xl'>
                            <div className='flex justify-center gap-1 md:gap-2 lg:gap-3 flex-col'>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>বিজ্ঞান শাখা</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>ব্যবসায় শাখা</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>মানবিক শাখা</p>
                            </div>
                            <div className='flex justify-center gap-1 md:gap-2 lg:gap-3 flex-col'>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>৩০০০৳</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>২৫০০৳</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>১৫০০৳</p>
                            </div>
                            <div className='flex justify-center gap-1 md:gap-2 lg:gap-3 flex-col'>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>৬ বিষয়</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>৬ বিষয়</p>
                                <p className='bg-primary/20 rounded-sm p-1 md:p-1.5'>৩ বিষয়</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* Get admitted button */}
                <div className='flex justify-center'>
                    <a className='py-2 px-5 bg-title rounded shadow-lg text-white text-xl mt-10' href="https://forms.gle/Usebo2GTnvb7Wr3bA" target='_blank'>Get Admitted</a>
                </div>
            </section>
        </div>
    );
};

export default Admission;