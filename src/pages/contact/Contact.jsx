import React from 'react';
import { Helmet } from 'react-helmet';
import ContactInfo from './ContactInfo';
import SendMail from './SendMail';

const Contact = () => {
    return (
        <div className='bg-[url("https://img.freepik.com/premium-vector/simple-pattern-transparent-background-theme-school-learning-education_576736-30.jpg?w=1800")] bg-cover bg-center bg-no-repeat'>
             <div className='bg-bg/5'>
                <Helmet>
                    <title>যোগাযোগ - স্বপ্নজয়ী</title>
                </Helmet>

                <ContactInfo />

                <SendMail />
             </div>
        </div>
    );
};

export default Contact;