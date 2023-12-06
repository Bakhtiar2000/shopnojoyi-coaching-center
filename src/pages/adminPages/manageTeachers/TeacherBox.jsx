import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const TeacherBox = ({ teacher, refetch }) => {
    const [axiosSecure]= useAxios()
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
    return (
        <div className='relative group p-5 rounded-lg w-96 md:w-80 lg:w-96 hover:bg-title/10 hover:shadow-xl duration-300'>
            <img className='w-96 h-[216px] object-cover object-center mx-auto rounded' src={teacher?.img} alt={teacher?.name} />

            <div className='mt-5'>
                <p className='text-2xl text-title mb-3'>{teacher?.name} {teacher?.position && `(${teacher?.position})`}</p>
                <p className='mb-1'>{teacher?.education}</p>
                {
                    teacher?.classes?.map((singleClass, index) => <span className='text-red-500' key={index} >
                        {singleClass} {index !== teacher.classes.length - 1 && ', '}
                    </span>)
                }
            </div>

            <div
                onClick={handleDelete}
                className='absolute bottom-5 right-5 hidden group-hover:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                <MdOutlineDelete />
            </div>

        </div>
    );
};

export default TeacherBox;