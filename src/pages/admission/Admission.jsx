import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';

const Admission = () => {
    return (
        <div>
            <Helmet>
                <title>ভর্তি তথ্য - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=sph" title="Admission" />

            <section className="container py-20">
                <div className='md:flex justify-center gap-10 w-fit mx-auto'>

                    <div className='w-fit mx-auto'>
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
                    </div>
                </div>
                {/* Get admitted button */}
                <div className='flex justify-center'>
                    <a className='py-2 px-5 bg-title rounded shadow-lg text-white text-xl mt-10' href="https://forms.gle/BsHdfeSd1mvuWcqU7" target='_blank'>Get Admitted</a>
                </div>
            </section>
        </div>
    );
};

export default Admission;