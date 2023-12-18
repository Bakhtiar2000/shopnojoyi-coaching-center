import React, { useState } from 'react';
import usePayments from '../../../hooks/usepayments';
import PaymentBox from './PaymentBox';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import CustomModal from '../../../components/CustomModal';

const ManagePayments = () => {
    const [paymentsData, , refetch] = usePayments();
    const [isPaymentsModalOpen, setIsPaymentsModalOpen] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    const onPaymentsDataSubmit = data => {
        const updateData = {
            img: data?.photo,
            division: data?.division
        }
        console.log(updateData)
    }
    return (
        <div className='m-5 lg:m-10'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mt-10 text-title font-semibold'>Manage Payments</h2>

            <div className='mx-2 grid lg:grid-cols-2 gap-8 mt-20'>
                {
                    paymentsData?.map(pay => <PaymentBox key={pay?._id} pay={pay} refetch={refetch}></PaymentBox>)
                }
            </div>

            <button onClick={() => setIsPaymentsModalOpen(true)} className='p-5 rounded-lg w-96 sm:w-[512px] md:w-[600px] h-48 sm:h-64 md:h-[300px] border border-dashed border-black hover:shadow-xl duration-300 flex justify-center items-center text-5xl mx-auto mt-10'>
                <AiOutlinePlus />
            </button>

            {
                isPaymentsModalOpen &&
                <CustomModal
                    isModalOpen={isPaymentsModalOpen}
                    setIsModalOpen={setIsPaymentsModalOpen}
                >

                    <form onSubmit={handleSubmit(onPaymentsDataSubmit)}>
                        <h3 className="font-bold text-title text-xl mb-2">Add Payment Details</h3>
                        <p className='border-t border-dark mb-5'></p>

                        {/* Class */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Class name (with division) <span className='text-red-500'>*</span></label>
                            <input
                                type='text'
                                placeholder='e.g. 11-12 (Science)'
                                {...register("division", { required: true })}
                                className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.division && 'border border-red-500'}`}
                            />
                        </div>

                        {/* image */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Routine Photo Link <span className='text-red-500'>*</span></label>
                            <input
                                type='text'
                                {...register("photo", { required: true })}
                                className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.photo && 'border border-red-500'}`}
                            />
                        </div>

                        

                        {/* Submit */}
                        <input
                            className="mt-3 text-center px-3 md:px-5 py-1 md:py-3 bg-primary hover:bg-title duration-300 rounded-lg text-white cursor-pointer"
                            type="submit"
                            value="Save Changes"
                        />
                    </form>
                </CustomModal>
            }
        </div>
    );
};

export default ManagePayments;