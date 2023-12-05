import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';

const TeacherBox = ({ teacher }) => {
    const handleDelete = () => {
        const id = teacher?._id
        console.log(id);
    }
    return (
        <div className='relative group p-5 rounded-lg w-96 md:w-80 lg:w-96 hover:bg-title/10 hover:shadow-xl duration-300'>
            <img className='w-96 mx-auto rounded' src={teacher?.img} alt={teacher?.name} />

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