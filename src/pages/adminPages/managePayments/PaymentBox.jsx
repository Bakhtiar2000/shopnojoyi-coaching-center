import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from 'react-icons/md';

const PaymentBox = ({ pay, refetch }) => {

    const handleUpdate = () => {
        console.log(pay?._id)
    }

    const handleDelete = () => {
        console.log(pay?._id)
    }
    return (
        <div className='relative group p-5 rounded-lg hover:bg-title/10 hover:shadow-xl duration-300 mb-5'>
            <h4 className='text-xl font-semibold text-title mb-3'>{pay?.division}</h4>
            <img className='w-[520px]' src={pay?.img} alt="routine" />

            <h6 className='text-lg mt-5'>Subjects:</h6>
            <div className='w-full flex flex-wrap gap-3 mt-2'>
                {
                    pay?.subjects?.map((sub, index) => <p className='rounded-full w-fit py-1 px-3 border border-title bg-primary/10' key={index}>{sub}</p>)
                }
            </div>

            <h6 className='text-lg mt-5'>Payment per subject:</h6>
            <div className='mt-2'>
                <p>১ বিষয়: {pay?.payment?.one_sub}</p>
                <p>২ বিষয়: {pay?.payment?.two_sub}</p>
                <p>৩ বিষয়: {pay?.payment?.three_sub}</p>
                <p>৪ বিষয়: {pay?.payment?.four_sub}</p>
                <p>৫ বিষয়: {pay?.payment?.five_sub}</p>
                <p>৬ বিষয়: {pay?.payment?.six_sub}</p>
                <p>৭ বিষয়: {pay?.payment?.seven_sub}</p>
                <p>৮ বিষয়: {pay?.payment?.eight_sub}</p>
            </div>

            {/* <div
                onClick={handleUpdate}
                className='absolute bottom-5 right-14 hidden group-hover:block p-1 text-xl rounded text-green-500 duration-300 shadow hover:shadow-xl cursor-pointer'>
                <FaRegEdit />
            </div> */}
            <div
                onClick={handleDelete}
                className='absolute bottom-5 right-5 hidden group-hover:block p-1 text-xl rounded bg-red-500 text-white duration-300 shadow hover:shadow-xl cursor-pointer'>
                <MdOutlineDelete />
            </div>
        </div>
    );
};

export default PaymentBox;