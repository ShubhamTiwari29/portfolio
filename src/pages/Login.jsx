import React, { useState, useEffect } from "react";
import { Client, Account } from "appwrite";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    // Initialize the Appwrite client
    const client = new Client();
    const account = new Account(client);

    client
        .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) //Appwrite Endpoint
        .setProject(import.meta.env.VITE_PROJECT_ID); //  Appwrite Project ID

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await account.createEmailPasswordSession(email, password);
            console.log("Login successful!", response);
            navigate("/admin");
        } catch (error) {
            setError(error.message);
        }
    };
    // user login checking
    useEffect(() => {
        const checkUserSession = async () => {
            try {
                // Check if the user is logged in
                const user = await account.get();
                setIsAuthenticated(true);
            } catch (error) {
                console.log('User is not authenticated:', error);
                setIsAuthenticated(false);
                navigate('/login'); // Redirect to login page if not authenticated
            }
        };

        checkUserSession();
    }, [navigate]);

    if (isAuthenticated) {
        navigate('/admin');
    }
    else {

        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">

                <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md w-full animate-fade-up animate-once animate-duration-[1000ms] animate-delay-100 animate-ease-in-out">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password:
                            </label>
                            <input
                                type={showPassword ? "password" : "text"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                            /><div
                                className="absolute inset-y-0 right-0 pr-3 pt-6 flex items-center cursor-pointer"
                                onClick={togglePassword}
                            >
                                {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                        <ul>
                            <li>This login page is designed for admin</li>
                        </ul>

                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
