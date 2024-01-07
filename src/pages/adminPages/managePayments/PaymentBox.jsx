import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from 'react-icons/md';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { IoMdAddCircleOutline } from 'react-icons/io';

const PaymentBox = ({ pay, refetch }) => {
    const [axiosSecure] = useAxios()
    const [isEdiPaymentClicked, setIsEditPaymentClicked] = useState()
    const [addedSubjects, setAddedSubjects] = useState([]);
    const [maximumWarning, setMaximumWarning] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    useEffect(() => {
        refetch()
        if (pay.subjects) {
            const mappedSubjects = pay.subjects.map((sub, index) => ({ id: index, value: sub }));
            setAddedSubjects(mappedSubjects);
        }
    }, [pay.subjects]);
    console.log(addedSubjects);

    const handleIncreaseInputField = () => {
        if (addedSubjects.length < 8) {
            const newId = addedSubjects.length + 1;
            setAddedSubjects([...addedSubjects, { id: newId, value: "" }]);
        }
        else setMaximumWarning(true)
    };

    const onPaymentUpdateSubmit = data => {
        console.log(data.subjects);
        const updateData = {
            division: data?.division,
            subjects: addedSubjects.some(sub => sub.value === '') ? data.subjects : addedSubjects.map(sub => sub.value),
            payment: {
                one_sub: data?.sub1,
                two_sub: data?.sub2,
                three_sub: data?.sub3,
                four_sub: data?.sub4,
                five_sub: data?.sub5,
                six_sub: data?.sub6,
                seven_sub: data?.sub7,
                eight_sub: data?.sub8
            }
        }
        console.log(updateData);
        axiosSecure.patch(`/payments/${pay?._id}`, updateData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Payment data updated successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    refetch()
                    setIsEditPaymentClicked(false)
                    setMaximumWarning(false)
                    setAddedSubjects(pay.subjects.map((sub, index) => ({ id: index, value: sub })))
                    reset()

                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/payments/${pay?._id}`)
                    .then((res) => {
                        if (res.status == 200) {
                            refetch()
                            Swal.fire({
                                icon: "success",
                                title: "Deleted Successfully!",
                                showConfirmButton: false,
                                timer: 1500,
                            });

                        }
                    })
                    .catch((err) => console.log(err));
            }
        });
    }

    const handleSubjectDelete = sub => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .patch(`/payments/${pay?._id}/${sub}`)
                    .then((res) => {
                        if (res.status == 200) {
                            refetch()
                            setIsEditPaymentClicked(false)
                            Swal.fire({
                                icon: "success",
                                title: "Deleted Successfully!",
                                showConfirmButton: false,
                                timer: 1500,
                            });

                        }
                    })
                    .catch((err) => console.log(err));

            }
        });
    }
    return (
        <form onSubmit={handleSubmit(onPaymentUpdateSubmit)} className='relative group/box p-5 rounded-lg hover:bg-title/10 hover:shadow-xl duration-300 mb-5'>
            {
                !isEdiPaymentClicked ?
                    <h4 className='text-xl font-semibold text-title mb-3'>{pay?.division}</h4> :
                    <input
                        {...register("division", { required: true })}
                        className={`w-60 p-2 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.division && 'border border-red-500'}`}
                        defaultValue={pay?.division}
                        type="text"
                    />
            }

            <h6 className='text-lg mt-5'>Subjects:</h6>
            <div className='w-full flex flex-wrap gap-3 mt-2'>
                {
                    !isEdiPaymentClicked ?
                        pay?.subjects?.map((sub, index) => <p className='rounded-full w-fit py-1 px-3 border border-title bg-primary/10' key={index}>{sub}</p>) :

                        <div className='w-full'>
                            <div className='flex flex-wrap gap-2'>
                                {
                                    addedSubjects.map((sub, index) => (
                                        <div key={index} className='flex items-center gap-2'>
                                            <div className='relative group/sub'>
                                                <input
                                                    defaultValue={sub?.value}
                                                    type='text'
                                                    readOnly={sub?.value !== ""}
                                                    className={`w-24 inline border text-black bg-white border-dark/40 p-1 rounded-md focus:outline-none focus:border-primary ${errors.subjects && 'border border-red-500'} ${sub?.value !== "" && "cursor-not-allowed"}`}
                                                    {...register(`subjects[${index}]`, { required: true })}
                                                />
                                                {
                                                    sub?.value !== "" &&
                                                    <div
                                                        onClick={() => handleSubjectDelete(sub?.value)}
                                                        className='absolute top-0.5 right-0.5 text-xs hidden group-hover/sub:block p-0.5 rounded bg-red-500 text-white duration-300 shadow hover:shadow-lg cursor-pointer'>
                                                        <MdOutlineDelete />
                                                    </div>
                                                }
                                            </div>

                                            {index === addedSubjects.length - 1 && (
                                                <p onClick={handleIncreaseInputField}
                                                    className='h-8 w-8 rounded-lg flex items-center justify-center -ml-2 cursor-pointer'
                                                >
                                                    <IoMdAddCircleOutline size={24} />
                                                </p>
                                            )}
                                        </div>
                                    ))}
                            </div>
                            {
                                maximumWarning && <p className='text-red-500'>Maximum subjects field reached</p>
                            }
                        </div>
                }
            </div>

            <h6 className='text-lg mt-5'>Payment per subject:</h6>
            <div className='mt-2'>
                {
                    !isEdiPaymentClicked ?
                        <>
                            <p>১ বিষয়: {pay?.payment?.one_sub}৳</p>
                            <p>২ বিষয়: {pay?.payment?.two_sub}৳</p>
                            <p>৩ বিষয়: {pay?.payment?.three_sub}৳</p>
                            <p>৪ বিষয়: {pay?.payment?.four_sub}৳</p>
                            <p>৫ বিষয়: {pay?.payment?.five_sub}৳</p>
                            <p>৬ বিষয়: {pay?.payment?.six_sub}৳</p>
                            <p>৭ বিষয়: {pay?.payment?.seven_sub}৳</p>
                            <p>৮ বিষয়: {pay?.payment?.eight_sub}৳</p>
                        </> :
                        <>
                            <div className='mb-1'>
                                <p className='inline mr-3'>১ বিষয়:</p>
                                <input
                                    {...register("sub1", { required: true })}
                                    className={`w-28 h-6 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.sub1 && 'border border-red-500'}`}
                                    defaultValue={pay?.payment?.one_sub}
                                    type="text"
                                />
                                <p className='inline ml-1 text-xl'>৳</p>
                            </div>

                            <div className='mb-1'>
                                <p className='inline mr-3'>২ বিষয়:</p>
                                <input
                                    {...register("sub2", { required: true })}
                                    className={`w-28 h-6 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.sub2 && 'border border-red-500'}`}
                                    defaultValue={pay?.payment?.two_sub}
                                    type="text"
                                />
                                <p className='inline ml-1 text-xl'>৳</p>
                            </div>

                            <div className='mb-1'>
                                <p className='inline mr-3'>৩ বিষয়:</p>
                                <input
                                    {...register("sub3", { required: true })}
                                    className={`w-28 h-6 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.sub3 && 'border border-red-500'}`}
                                    defaultValue={pay?.payment?.three_sub}
                                    type="text"
                                />
                                <p className='inline ml-1 text-xl'>৳</p>
                            </div>

                            <div className='mb-1'>
                                <p className='inline mr-3'>৪ বিষয়:</p>
                                <input
                                    {...register("sub4", { required: true })}
                                    className={`w-28 h-6 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.sub4 && 'border border-red-500'}`}
                                    defaultValue={pay?.payment?.four_sub}
                                    type="text"
                                />
                                <p className='inline ml-1 text-xl'>৳</p>
                            </div>

                            <div className='mb-1'>
                                <p className='inline mr-3'>৫ বিষয়:</p>
                                <input
                                    {...register("sub5", { required: true })}
                                    className={`w-28 h-6 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.sub5 && 'border border-red-500'}`}
                                    defaultValue={pay?.payment?.five_sub}
                                    type="text"
                                />
                                <p className='inline ml-1 text-xl'>৳</p>
                            </div>

                            <div className='mb-1'>
                                <p className='inline mr-3'>৬ বিষয়:</p>
                                <input
                                    {...register("sub6", { required: true })}
                                    className={`w-28 h-6 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.sub6 && 'border border-red-500'}`}
                                    defaultValue={pay?.payment?.six_sub}
                                    type="text"
                                />
                                <p className='inline ml-1 text-xl'>৳</p>
                            </div>

                            <div className='mb-1'>
                                <p className='inline mr-3'>৭ বিষয়:</p>
                                <input
                                    {...register("sub7", { required: true })}
                                    className={`w-28 h-6 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.sub7 && 'border border-red-500'}`}
                                    defaultValue={pay?.payment?.seven_sub}
                                    type="text"
                                />
                                <p className='inline ml-1 text-xl'>৳</p>
                            </div>

                            <div className='mb-1'>
                                <p className='inline mr-3'>৮ বিষয়:</p>
                                <input
                                    {...register("sub8", { required: true })}
                                    className={`w-28 h-6 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.sub8 && 'border border-red-500'}`}
                                    defaultValue={pay?.payment?.eight_sub}
                                    type="text"
                                />
                                <p className='inline ml-1 text-xl'>৳</p>
                            </div>

                        </>
                }
            </div>

            {
                !isEdiPaymentClicked ?
                    <>
                        <div
                            onClick={() => setIsEditPaymentClicked(true)}
                            className='absolute bottom-5 right-14 hidden group-hover/box:block p-1 text-xl rounded text-green-500 duration-300 cursor-pointer'>
                            <FaRegEdit />
                        </div>
                        <div
                            onClick={handleDelete}
                            className='absolute bottom-5 right-5 hidden group-hover/box:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                            <MdOutlineDelete />
                        </div>
                    </> :
                    <div className='flex justify-end gap-3'>
                        <input
                            type='submit'
                            className='px-2 bg-green-500 hover:shadow-lg rounded-lg text-white cursor-pointer'
                        />
                        <button onClick={() => {
                            setIsEditPaymentClicked(false)
                            setMaximumWarning(false)
                            setAddedSubjects(pay?.subjects?.map((sub, index) => ({ id: index, value: sub })))
                            reset()
                        }}
                            className='px-2 bg-red-500 hover:shadow-lg rounded-lg text-white'>Cancel</button>
                    </div>
            }
        </form>
    );
};

export default PaymentBox;