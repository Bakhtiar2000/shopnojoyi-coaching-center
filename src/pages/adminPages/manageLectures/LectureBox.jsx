import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const LectureBox = ({ lecture, refetch }) => {
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
                    .delete(`/lectures/${lecture?._id}`)
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
        <div className='relative group'>
            <iframe className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] h-[180px] sm:h-[225px] md:h-[270px] lg:h-[315px] xl:h-[360px] duration-300' src={lecture?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <p className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] duration-300 lg:text-lg font-semibold mt-3 text-title'>{lecture?.title}</p>

            <div
                onClick={handleDelete}
                className='absolute bottom-2 right-2 hidden group-hover:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                <MdOutlineDelete />
            </div>
        </div>
    );
};

export default LectureBox;