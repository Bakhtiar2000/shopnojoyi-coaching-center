import React, { useState } from 'react';
import usePayments from '../../../hooks/usepayments';
import PaymentBox from './PaymentBox';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import CustomModal from '../../../components/CustomModal';
import { IoMdAddCircleOutline } from 'react-icons/io';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const ManagePayments = () => {
    const [axiosSecure] = useAxios()
    const [paymentsData, , refetch] = usePayments();
    const [isPaymentsModalOpen, setIsPaymentsModalOpen] = useState(false)
    const [subjects, setSubjects] = useState([{ id: 1, value: "" }]);
    const [maximumWarning, setMaximumWarning] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors }} = useForm();

    const handleIncreaseInputField = () => {
        if (subjects.length < 8) {
            const newId = subjects.length + 1;
            setSubjects([...subjects, { id: newId, value: "" }]);
        }
        else setMaximumWarning(true)
    };

    const onPaymentsDataSubmit = data => {
        const updateData = {
            division: data?.division,
            subjects: data?.subjects,
            payment: {
                one_sub : data?.sub1,
                two_sub : data?.sub2,
                three_sub : data?.sub3,
                four_sub : data?.sub4,
                five_sub : data?.sub5,
                six_sub : data?.sub6,
                seven_sub : data?.sub7,
                eight_sub : data?.sub8
            }
        }
        axiosSecure.post('/payments', updateData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Teacher added successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    setIsPaymentsModalOpen(false)
                    setMaximumWarning(false)
                    setSubjects([{ id: 1, value: "" }])
                    reset()
                    refetch()
                }
            })
            .catch(error => {
                console.log(error);
            })
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

                        <div className='flex items-center gap-3'>
                            {/* Class */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Class name (with group) <span className='text-red-500'>*</span></label>
                                <input
                                    type='text'
                                    placeholder='e.g. 11-12 (Science)'
                                    {...register("division", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.division && 'border border-red-500'}`}
                                />
                            </div>
                        </div>

                        {/* Subjects */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Subjects <span className='text-red-500'>*</span></label>
                            <div className='flex flex-wrap gap-2'>
                                {
                                    subjects.map((sub, index) => (
                                        <div key={sub.id} className='flex items-center gap-2'>
                                            <input
                                                type='text'
                                                className={`w-24 inline border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary ${errors.subjects && 'border border-red-500'}`}
                                                {...register(`subjects[${index}]`, { required: true })}
                                            />
                                            {index === subjects.length - 1 && (
                                                <button onClick={handleIncreaseInputField}
                                                    className='h-8 w-8 rounded-lg flex items-center justify-center -ml-2'
                                                >
                                                    <IoMdAddCircleOutline size={24} />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                            </div>
                            {
                                maximumWarning && <p className='text-red-500'>Maximum subjects field reached</p>
                            }
                        </div>

                        {/* Payments */}
                        <div className='mt-5'>
                            <h4 className='text-lg mb-2'>Payment per subject</h4>
                            <div className='grid grid-cols-4 gap-2'>
                                <div className='w-full'>
                                    <label className='text-dark text-sm'>1 subject <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        {...register("sub1", { required: true })}
                                        className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.sub1 && 'border border-red-500'}`}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark text-sm'>2 subject <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        {...register("sub2", { required: true })}
                                        className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.sub2 && 'border border-red-500'}`}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark text-sm'>3 subject <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        {...register("sub3", { required: true })}
                                        className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.sub3 && 'border border-red-500'}`}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark text-sm'>4 subject <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        {...register("sub4", { required: true })}
                                        className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.sub4 && 'border border-red-500'}`}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-4 gap-2'>
                                <div className='w-full'>
                                    <label className='text-dark text-sm'>5 subject <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        {...register("sub5", { required: true })}
                                        className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.sub5 && 'border border-red-500'}`}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark text-sm'>6 subject <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        {...register("sub6", { required: true })}
                                        className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.sub6 && 'border border-red-500'}`}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark text-sm'>7 subject <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        {...register("sub7", { required: true })}
                                        className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.sub7 && 'border border-red-500'}`}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark text-sm'>8 subject <span className='text-red-500'>*</span></label>
                                    <input
                                        type='text'
                                        {...register("sub8", { required: true })}
                                        className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.sub8 && 'border border-red-500'}`}
                                    />
                                </div>
                            </div>
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