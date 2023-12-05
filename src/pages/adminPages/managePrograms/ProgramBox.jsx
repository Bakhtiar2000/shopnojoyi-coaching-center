import React from 'react';
import ImageComponent from '../../../components/ImageComponent';
import { MdOutlineDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const ProgramBox = ({ program, refetch }) => {

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
                    .delete(`/programs/delete/${program?._id}`)
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
            <ImageComponent src={program?.img} hash={program?.hash} width="300px" height="225px" />
            <div
                onClick={handleDelete}
                className='absolute bottom-2 right-2 hidden group-hover:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                <MdOutlineDelete />
            </div>
        </div>
    );
};

export default ProgramBox;