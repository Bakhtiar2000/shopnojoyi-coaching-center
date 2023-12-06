import React, { useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const GalleryBox = ({ photo, refetch }) => {
    
    const [axiosSecure]= useAxios()
    const { _id, img, description } = photo
    const [hoveredId, setHoveredId] = useState(null);
    const handleHover = id => {
        setHoveredId(id);
    };

    const handleLeave = () => {
        setHoveredId(null);
    };

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
                    .delete(`/gallery/${_id}`)
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
        <div
            className='relative group mx-auto'
            onMouseEnter={() => handleHover(_id)}
            onMouseLeave={handleLeave}
        >
            <img className={`duration-300 rounded hover:shadow-xl hover:shadow-title/30 ${hoveredId === _id ? 'brightness-50' : ''}`} src={img} alt="" />

            <div className={`absolute bottom-0 text-white duration-300 ease-in-out ${hoveredId === _id ? 'visible' : 'hidden'}`}>
                {hoveredId === _id && <p className='text-xl font-semibold ml-4 mb-4'>{description}</p>}
            </div>

            <div
                onClick={handleDelete}
                className='absolute bottom-2 right-2 hidden group-hover:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                <MdOutlineDelete />
            </div>
        </div>
    );
};

export default GalleryBox;