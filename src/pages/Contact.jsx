import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g4vtlkh', 'template_6b6cr9b', form.current, 'fcvqRVICv2l3Ji8KY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="bg-purple-200 h-screen w-screen text-center pt-12" id="contact">
            <div className="border p-6 mx-auto max-w-md rounded-md border-black">
                <h1 className="text-2xl pb-1">
                    Write a Message to Me
                </h1>
                <p className="pb-10">To roof558@gmail.com</p>
                <form ref={form} onSubmit={sendEmail}>
                <div className="flex-col text-xl">
                    <label>Your Name</label>
                </div>
                <input className="flex-col w-64" type="text" name="user_name" />
                <div className="flex-col text-xl pt-5">
                    <label>Your Email</label>
                </div>
                <input className="flex-col w-64" type="email" name="user_email" />
                <div className="flex-col text-xl pt-5">
                    <label>Message</label>
                </div>
                <textarea className="h-64 w-64 flex-col" name="message" /> 
                <div className="w-40 mx-auto pt-4">
                    <div className="flex flex-col items-center p-4 border border-solid rounded-md bg-blue-500 text-white cursor-pointer">
                        <input type="submit" value="Send" className="appearance-none bg-transparent border-none text-xl" />
                    </div>
                </div>
                </form>
            </div>
            
        </div>            
    );
};

export default Contact;