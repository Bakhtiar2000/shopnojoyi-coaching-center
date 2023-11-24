import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

const ContactInfo = () => {
    return (
        <section className="container pt-16">
            <div className="flex justify-center items-center flex-wrap gap-5 md:gap-8 lg:gap-10">

                {/* Address */}
                <div className="w-[180px] md:w-60 h-[216px] md:h-72 rounded-lg p-3 md:p-5 duration-300 bg-white border border-title hover:shadow-xl">
                    <div className="p-3 md:p-5 bg-primary/10 rounded-lg w-fit mx-auto mt-3 md:mt-5">
                    <BiCurrentLocation className="text-2xl md:text-4xl duration-300" />
                    </div>
                    <p className="text-center text-xl md:text-2xl duration-300 font-semibold mt-3 md:mt-5 mb-2 md:mb-3">
                    Address
                    </p>
                    <p className="text-center text-sm md:text-base duration-300">
                    Dakshinkhan Girls School Road, Dakshinkhan, Dhaka, Bangladesh
                    </p>
                </div>

                {/* Phone number */}
                <div className="w-[180px] md:w-60 h-[216px] md:h-72 rounded-lg p-3 md:p-5 duration-300 bg-white border border-title hover:shadow-xl">
                    <div className="p-3 md:p-5 bg-primary/10 rounded-lg w-fit mx-auto mt-3 md:mt-5">
                    <BsTelephone className="text-2xl md:text-4xl duration-300" />
                    </div>
                    <p className="text-center text-xl md:text-2xl duration-300 font-semibold mt-3 md:mt-5 mb-2 md:mb-3">
                    Phone number
                    </p>
                    <p className="text-center text-sm md:text-base duration-300">
                    01908-115192
                    </p>
                </div>

                {/* Email address */}
                <div className="w-[180px] md:w-60 h-[216px] md:h-72 rounded-lg p-3 md:p-5 duration-300 bg-white border border-title hover:shadow-xl">
                    <div className="p-3 md:p-5 bg-primary/10 rounded-lg w-fit mx-auto mt-3 md:mt-5">
                    <AiOutlineMail className="text-2xl md:text-4xl duration-300" />
                    </div>
                    <p className="text-center text-xl md:text-2xl duration-300 font-semibold mt-3 md:mt-5 mb-2 md:mb-3">
                    Email address
                    </p>
                    <p className="text-center text-sm md:text-base duration-300">
                    shapnojoyee@gmail.com
                    </p>
                </div>
            </div>
      </section>
    );
};

export default ContactInfo;