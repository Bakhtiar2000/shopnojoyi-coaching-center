import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

const ContactInfo = () => {
    return (
        <section className="container pt-16">
            <div className="flex justify-center items-center flex-wrap gap-5 md:gap-8 lg:gap-10">

                {/* Address */}
                <div className="w-60 h-72 rounded-lg p-5 duration-300 bg-white border border-title hover:shadow-xl">
                    <div className="p-5 bg-primary/10 rounded-lg w-fit mx-auto mt-5">
                    <BiCurrentLocation className="text-4xl text-dark" />
                    </div>
                    <p className="text-center text-2xl font-semibold mt-5 mb-3">
                    Address
                    </p>
                    <p className="text-center">
                    Dakshinkhan Girls School Road, Dakshinkhan, Dhaka, Bangladesh
                    </p>
                </div>

                {/* Phone number */}
                <div className="w-60 h-72 rounded-lg p-5 duration-300 bg-white border border-title hover:shadow-xl">
                    <div className="p-5 bg-primary/10 rounded-lg w-fit mx-auto mt-5">
                    <BsTelephone className="text-4xl text-dark" />
                    </div>
                    <p className="text-center text-2xl font-semibold mt-5 mb-3">
                    Phone number
                    </p>
                    <p className="text-center">
                    01908-115192
                    </p>
                </div>

                {/* Email address */}
                <div className="w-60 h-72 rounded-lg p-5 duration-300 bg-white border border-title hover:shadow-xl">
                    <div className="p-5 bg-primary/10 rounded-lg w-fit mx-auto mt-5">
                    <AiOutlineMail className="text-4xl text-dark" />
                    </div>
                    <p className="text-center text-2xl font-semibold mt-5 mb-3">
                    Email address
                    </p>
                    <p className="text-center">
                    lshapnojoyee@gmail.com
                    </p>
                </div>
            </div>
      </section>
    );
};

export default ContactInfo;