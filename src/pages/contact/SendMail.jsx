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
            
                <div className=' p-10 rounded-lg w-fit mx-auto'>

                    {/* Mail Form  */}
                    <div className='max-w-xl mx-auto text-center text-black'>
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