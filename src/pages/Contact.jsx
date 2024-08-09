import React, { useState } from 'react';
import Social from '../components/Social';
import { databases } from '../Appwrite/appwriteConfig'; // Adjust the import path as needed

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        try {
            // Replace with your Database ID and Collection ID
            const response = await databases.createDocument(
                import.meta.env.VITE_DATABASE_ID, //  Database ID
                import.meta.env.VITE_MESSAGE_COLLECTION_ID, // Collection ID
                'unique()',
                {
                    name: formData.name,
                    contactNumber: formData.contactNumber,
                    email: formData.email,
                    message: formData.message,
                }
            );

            // Reset form after successful submission
            setFormData({
                name: '',
                contactNumber: '',
                email: '',
                message: '',
            });
            setSuccessMessage('Your message has been sent successfully!');
            console.log('Document created:', response);
        } catch (error) {
            setErrorMessage('Error sending message: ' + error.message);
            console.error('Error creating document:', error);
        }
    };

    return (
        <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
            <div className="mx-auto lg:container  py-10 h-auto md:min-h-[70vh] flex flex-col lg:flex-row animate-fade-right animate-once animate-duration-[1500ms] animate-delay-900 animate-ease-in-out">

                {/* Left Side: Contact Details */}
                <div className="md:w-1/2 p-5 my-4 h-auto mx-auto rounded-md items-center shadow-2xl bg-slate-100 text-black animate-fade-right animate-once animate-duration-[1500ms] animate-delay-900 animate-ease-in-out">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Get in Touch</h2>
                    {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="blocktext-sm font-medium text-gray-700">Contact Number:</label>
                            <input
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email ID:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                rows={6}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2  mb-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                {/* Right Side: Contact Form */}
                <div className="md:w-1/2 p-5 my-4 w-full mx-auto rounded-md items-center shadow-2xl bg-gradient-to-r from-slate-900 to-slate-700 text-white animate-fade-left animate-once animate-duration-[1500ms] animate-delay-900 animate-ease-in-out">
                    <div className='lg:mx-10 xl:mx-20'>
                        <h2 className="text-2xl font-bold text-center text-white mb-4">Contact Me</h2>
                        <div className='xl:mt-6'>
                            <p><strong className='text-gray-300'>NAME: </strong> Shubham Tiwari</p>
                            <p><strong className='text-gray-300'>Email id: </strong> shubham29lko@gmail.com</p>
                            <div className='py-4'>
                                <p className='text-xl'>Join me on: </p>
                                <div className='py-3'><Social /></div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Contact;
