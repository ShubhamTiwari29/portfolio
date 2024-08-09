import React, { useEffect, useState } from 'react';
import { databases } from '../../Appwrite/appwriteConfig';

function AdminMessage() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {

                const response = await databases.listDocuments(
                    import.meta.env.VITE_DATABASE_ID,
                    import.meta.env.VITE_MESSAGE_COLLECTION_ID
                );
                setMessages(response.documents);
            } catch (err) {
                setError('Failed to fetch messages: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    if (loading) {
        return <div className="text-white">Loading messages...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
            <div className="mx-auto p-5   rounded-md shadow-2xl container w-full text-white">
                <h2 className="text-2xl font-bold text-center mb-4">Messages</h2>
                <hr className="w-[35%] mx-auto border-solid pb-2 mb-6 border-white font-extrabold" />
                {messages.length === 0 ? (
                    <p className="text-center">No messages Here.</p>
                ) : (
                    <ul className="space-y-4">
                        {messages.map((message) => (
                            <li key={message.$id} className="p-4 border border-gray-300 rounded-md bg-gray-800">
                                <p><strong>Name:</strong> {message.name}</p>
                                <p><strong>Contact Number:</strong> {message.contactNumber}</p>
                                <p><strong>Email:</strong> {message.email}</p>
                                <p><strong>Message:</strong> {message.message}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default AdminMessage;
