import React from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../../Appwrite/appwriteConfig';

const AdminHeader = ({ userName }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await account.deleteSession('current'); // Delete the current session
            navigate('/login'); // Redirect to the login page after logout
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <header className="bg-slate-900 text-white p-4 flex justify-between items-center ">
            <nav className="container md:px-6 mx-auto flex justify-between items-center" >
                <div className="flex space-x-4">
                    <button onClick={() => navigate('/admin')} className="hover:underline">
                        Project Entry
                    </button>
                    <button onClick={() => navigate('/admin/messages')} className="hover:underline">
                        Message
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <span>{userName}</span>
                    <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default AdminHeader;

