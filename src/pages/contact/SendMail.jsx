import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SendMail = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6cj9dkq', 'template_oumfitc', form.current, '5scPk13_dW8HI-vmZ')
            .then((result) => {
                e.target.reset()
                Swal.fire(
                    'Message has been Sent!',
                    'Thanks for connecting with us!',
                    'success'
                  )
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <section className='pt-5 pb-20 mt-10'>
            <div className='container'>

                <h2 className='text-3xl md:text-4xl lg:text-5xl mt-10 text-center text-title bg-white/50 w-fit mx-auto px-5 py-3 rounded'>Get in touch with us</h2>
            
                <div className='flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-20 py-10 rounded-lg w-fit mx-auto duration-300'>
                    {/* Map */}
                    <div className="relative mx-auto overflow-hidden">
                        <iframe
                            className="w-72 h-72 md:w-[500px] md:h-[500px] border border-title rounded-md m-4"
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.050217398796!2d90.42702656724347!3d23.861111230619876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5645c06eb7d%3A0xc050a7a243c1154!2zU2hvcG5vam95ZWUgQWNhZGVtaWMgQ2FyZSAoIOCmuOCnjeCmrOCmquCnjeCmqOCmnOCnn-CngCAp!5e0!3m2!1sen!2sbd!4v1700849589365!5m2!1sen!2sbd"
                            style={{ filter: 'contrast(1.1)',  }}
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Mail Form  */}
                    <div className='max-w-sm md:max-w-xl duration-300 mx-auto text-center text-black'>
                        <form ref={form} onSubmit={sendEmail}>
                            <input
                                className='w-full px-6 py-[18px] border border-title outline-none focus:border-primary mb-5'
                                type="text"
                                name="from_name"
                                placeholder="Name:" 
                                required
                            />

                            <input
                                className='w-full px-6 py-[18px] border border-title outline-none focus:border-primary mb-5'
                                type="email"
                                name="from_email"
                                placeholder="Mail:" 
                                required
                            />

                            <textarea
                                className='w-full px-6 py-[18px] border border-title outline-none focus:border-primary mb-5'
                                name="message"
                                rows="6"
                                placeholder='Message:'></textarea>
                            <button type='submit' className='w-fit py-3 px-5 hover:bg-bg hover:text-white text-xl border border-bg bg-white text-bg duration-300'>Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SendMail;