import React, { useEffect, useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
import { FaRegEdit } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { IoMdAddCircleOutline } from 'react-icons/io';

const TeacherBox = ({ teacher, refetch }) => {
    const [axiosSecure] = useAxios();
    const [isTeacherEditClicked, setIsTeacherEditClicked] = useState();
    const [addedClasses, setAddedClasses] = useState([]);
    const [maximumWarning, setMaximumWarning] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    useEffect(() => {
        if (teacher?.classes) {
            const mappedClasses = teacher.classes.map((singleClass, index) => ({ id: index, value: singleClass }));
            setAddedClasses(mappedClasses);
        }
    }, [teacher?.classes]);

    console.log(addedClasses);

    const handleIncreaseInputField = () => {
        if (addedClasses.length < 8) {
            const newId = addedClasses.length + 1;
            setAddedClasses([...addedClasses, { id: newId, value: "" }]);
        }
        else setMaximumWarning(true)
    };

    const onTeacherUpdateSubmit = data => {
        console.log(data, addedClasses);
        const updateData = {
            name: data?.name,
            position: data?.position,
            education: data?.education,
            classes: addedClasses.some(cls => cls.value === '') ? data.classes : addedClasses.map(cls => cls.value)
        }
        console.log(updateData);
        axiosSecure.patch(`/teachers/${teacher?._id}`, updateData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Teacher data updated successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    refetch()
                    setIsTeacherEditClicked(false)
                    setMaximumWarning(false)
                    setAddedClasses(teacher.classes.map((singleClass, index) => ({ id: index, value: singleClass })))
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
                    .delete(`/teachers/${teacher?._id}`)
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

    const handleClassDelete = singleClass => {
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
                    .patch(`/teachers/${teacher?._id}/${singleClass}`)
                    .then((res) => {
                        if (res.status == 200) {
                            refetch()
                            setIsTeacherEditClicked(false)
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
        <form onSubmit={handleSubmit(onTeacherUpdateSubmit)} className='relative group/box p-5 rounded-lg w-96 md:w-80 lg:w-96 hover:bg-title/10 hover:shadow-xl duration-300'>
            <img className='w-96 h-[216px] object-cover object-center mx-auto rounded' src={teacher?.img} alt={teacher?.name} />

            <div className='mt-5'>
                {
                    !isTeacherEditClicked ?
                        <>
                            <p className='text-2xl text-title mb-3'>{teacher?.name} {teacher?.position && `(${teacher?.position})`}</p>
                            <p className='mb-1'>{teacher?.education}</p>
                        </> :
                        <>
                            <div className='mb-1'>
                                <p className='inline text-sm mr-3'>নাম:</p>
                                <input
                                    {...register("name", { required: true })}
                                    className={`h-8 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary ${errors.name && 'border border-red-500'}`}
                                    defaultValue={teacher?.name}
                                    type="text"
                                />
                            </div>

                            <div className='mb-1'>
                                <p className='inline text-sm mr-3'>উল্লেখযোগ্য পদ:</p>
                                <input
                                    {...register("position")}
                                    placeholder='Skip if not necessary'
                                    className={`h-8 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary`}
                                    defaultValue={teacher?.position}
                                    type="text"
                                />
                            </div>

                            <div className='mb-1'>
                                <p className='inline text-sm mr-3'>শিক্ষাগত যোগ্যতা:</p>
                                <input
                                    {...register("education")}
                                    className={`h-8 border text-black bg-white border-dark/40 px-1 rounded-md focus:outline-none focus:border-primary`}
                                    defaultValue={teacher?.education}
                                    type="text"
                                />
                            </div>



                        </>
                }
                {
                    !isTeacherEditClicked ?
                        teacher?.classes?.map((singleClass, index) => <span className='text-red-500' key={index} >
                            {singleClass} {index !== teacher.classes.length - 1 && ', '}
                        </span>) :
                        
                        <div className='w-full'>
                             <h6 className='text-sm mt-3 mb-1'>শ্রেনিসমূহ:</h6>
                            <div className='flex flex-wrap gap-2'>
                                {
                                    addedClasses?.map((singleClass, index) => (
                                        <div key={index} className='flex items-center gap-2'>
                                            <div className='relative group/sub'>
                                                <input
                                                    defaultValue={singleClass?.value}
                                                    type='text'
                                                    readOnly={singleClass?.value !== ""}
                                                    className={`w-24 inline border text-black bg-white border-dark/40 p-1 rounded-md focus:outline-none focus:border-primary ${singleClass?.value !== "" && "cursor-not-allowed"} ${errors.classes && 'border border-red-500'}`}
                                                    {...register(`classes[${index}]`, { required: true })}
                                                />
                                                {
                                                    singleClass?.value !== "" &&
                                                    <div
                                                        onClick={() => handleClassDelete(singleClass?.value)}
                                                        className='absolute top-0.5 right-0.5 text-xs hidden group-hover/sub:block p-0.5 rounded bg-red-500 text-white duration-300 shadow hover:shadow-lg cursor-pointer'>
                                                        <MdOutlineDelete />
                                                    </div>
                                                }
                                            </div>

                                            {index === addedClasses.length - 1 && (
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
                                maximumWarning && <p className='text-red-500'>Maximum classes field reached</p>
                            }
                        </div>
                }
            </div>

            {
                !isTeacherEditClicked ?
                    <>
                        <div
                            onClick={() => setIsTeacherEditClicked(true)}
                            className='absolute bottom-5 right-14 hidden group-hover/box:block p-1 text-xl rounded text-green-500 duration-300 cursor-pointer'>
                            <FaRegEdit />
                        </div>
                        <div
                            onClick={handleDelete}
                            className='absolute bottom-5 right-5 hidden group-hover/box:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                            <MdOutlineDelete />
                        </div>
                    </> :
                    <div className='flex justify-end gap-3 mt-3'>
                        <input
                            type='submit'
                            className='px-2 bg-green-500 hover:shadow-lg rounded-lg text-white cursor-pointer'
                        />
                        <button onClick={() => {
                            setIsTeacherEditClicked(false)
                            setMaximumWarning(false)
                            setAddedClasses(teacher?.classes?.map((singleClass, index) => ({ id: index, value: singleClass })))
                            reset()
                        }}
                            className='px-2 bg-red-500 hover:shadow-lg rounded-lg text-white'>Cancel</button>
                    </div>
            }

        </form>
    );
};

export default TeacherBox;