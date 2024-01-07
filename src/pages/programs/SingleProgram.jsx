import React, { useState } from 'react';
import usePrograms from '../../hooks/usePrograms';
import ImageComponent from '../../components/ImageComponent';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import { MdOutlineDelete } from 'react-icons/md';

const SingleProgram = ({ program, refetch, from }) => {

    const [programsData] = usePrograms();
    const [axiosSecure] = useAxios()
    const [showInfo, setShowInfo] = useState(false)
    const programInfo = programsData.filter(pgm => pgm?.program === program);
    const renderedProgramInfo = showInfo ? programInfo : programInfo.slice(0, 4);

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
                    .delete(`/programs/${id}`)
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
            <h2 className='text-2xl sm:text-3xl md:text-4xl text-title font-semibold mb-5 md:mb-8'>{program}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 duration-300 md:gap-10'>
                {
                    renderedProgramInfo?.map(program =>
                        <div key={program?._id} className='relative group'>
                            <ImageComponent src={program?.img} hash={program?.hash} width="300px" height="225px" />
                            {
                                from == "managePrograms" &&
                                <div
                                    onClick={()=>handleDelete(program?._id)}
                                    className='absolute bottom-2 right-2 hidden group-hover:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                                    <MdOutlineDelete />
                                </div>
                            }
                        </div>)
                }
            </div>
            {
                programInfo?.length > 4 && !showInfo && <div className='flex justify-center'><button onClick={() => setShowInfo(true)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>Show more</button></div>
            }
            {
                programInfo?.length > 4 && showInfo && <div className='flex justify-center'><button onClick={() => setShowInfo(false)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>Show less</button></div>
            }
        </div>
    );
};

export default SingleProgram;