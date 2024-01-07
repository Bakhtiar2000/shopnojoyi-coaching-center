import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import useLectures from '../../hooks/useLectures';
import Swal from 'sweetalert2';
import { MdOutlineDelete } from 'react-icons/md';

const SingleLecture = ({ playlist, refetch, from }) => {
    const [axiosSecure] = useAxios()
    const [lecturesData] = useLectures()
    const [showInfo, setShowInfo] = useState(false)
    const lectureInfo = lecturesData.filter(lct => lct?.playlist === playlist);
    const renderedLectureInfo = showInfo ? lectureInfo : lectureInfo.slice(0, 2);

    const handleDelete = id => {
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
                    .delete(`/lectures/${id}`)
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
        <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto even:bg-title/10'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl text-title font-semibold mb-6 md:mb-10'>{playlist}</h2>
            <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                {
                    renderedLectureInfo?.map(lecture =>
                        <div key={lecture?._id} className='relative group'>
                            <iframe className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] h-[180px] sm:h-[225px] md:h-[270px] lg:h-[315px] xl:h-[360px] duration-300' src={lecture?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <p className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] duration-300 lg:text-lg font-semibold mt-3 text-title'>{lecture?.title}</p>
                            {
                                from == "manageLectures" &&
                                <div
                                    onClick={() => handleDelete(lecture?._id)}
                                    className='absolute bottom-2 right-2 hidden group-hover:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                                    <MdOutlineDelete />
                                </div>
                            }
                        </div>)
                }
            </div>
            {
                lectureInfo?.length > 2 && !showInfo && <div className='flex justify-center'><button onClick={() => setShowInfo(true)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See more</button></div>
            }
            {
                lectureInfo?.length > 2 && showInfo && <div className='flex justify-center'><button onClick={() => setShowInfo(false)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See less</button></div>
            }
        </div>
    );
};

export default SingleLecture;