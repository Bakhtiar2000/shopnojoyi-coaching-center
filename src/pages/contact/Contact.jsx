import React from 'react';
import { Helmet } from 'react-helmet';
import ContactInfo from './ContactInfo';
import SendMail from './SendMail';

const Contact = () => {
    return (
        <div>
             <Helmet>
                <title>যোগাযোগ - স্বপ্নজয়ী</title>
            </Helmet>

            <ContactInfo />

            <SendMail />
        </div>
    );
};

export default Contact;