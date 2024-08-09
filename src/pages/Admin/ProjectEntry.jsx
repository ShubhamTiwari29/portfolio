import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { databases, storage, account } from '../../Appwrite/appwriteConfig';


const ProjectEntry = () => {
    const [formData, setFormData] = useState({
        projectTitle: '',
        projectDescription: '',
        projectLink: '',
        techStack: '',
        image: null
    });

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Are You Want Upload Project Details")
        try {
            // Upload the image to Appwrite Storage
            const fileResponse = await storage.createFile(
                import.meta.env.VITE_APPWRITE_BUCKET_ID, //  Storage Bucket ID
                'unique()', // 'unique()' to generate a unique ID
                formData.image // The file to upload
            );

            // Get the file URL
            const fileUrl = `https://cloud.appwrite.io/v1/storage/buckets/${import.meta.env.VITE_APPWRITE_BUCKET_ID}/files/${fileResponse.$id}/view?project=${import.meta.env.VITE_PROJECT_ID}`;

            // Create a document in the database with the file URL
            const response = await databases.createDocument(
                import.meta.env.VITE_DATABASE_ID, //  Database ID
                import.meta.env.VITE_PROJECT_DETAIL_COLLECTION_ID, //  Collection ID
                'unique()', // Document ID: 'unique()'  generate a unique ID
                {
                    projectTitle: formData.projectTitle,
                    projectDescription: formData.projectDescription,
                    projectLink: formData.projectLink,
                    techStack: formData.techStack,
                    image: fileUrl // Store the file URL in the document
                }
            );

            // Reset form fields after submission
            setFormData({
                projectTitle: '',
                projectDescription: '',
                projectLink: '',
                techStack: '',
                image: null
            });
            alert('Your Project has been uploaded');
            console.log('Document created:', response);
        } catch (error) {
            console.error('Error creating document:', error);
        }
    };

    if (!isAuthenticated) {
        return <div>Loading...</div>; // Show a loading state while checking authentication
    }

    return (
        <>

            <div className='bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex items-center justify-center'>

                <div className='bg-slate-100 p-6 my-4  rounded-lg shadow-lg w-full max-w-md md:max-w-md 2xl:max-w-xl animate-fade-up animate-once animate-duration-[1000ms] animate-delay-100 animate-ease-in-out'>
                    <h1 className='text-2xl text-black font-bold mb-6 text-center'>Submit Your Project</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Project Title:
                            </label>
                            <input
                                type="text"
                                name="projectTitle"
                                value={formData.projectTitle}
                                onChange={handleChange}
                                required
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Link of Project:
                            </label>
                            <input
                                type="url"
                                name="projectLink"
                                value={formData.projectLink}
                                onChange={handleChange}
                                required
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Tech Stack Used in Project:
                            </label>
                            <input
                                type="text"
                                name="techStack"
                                value={formData.techStack}
                                onChange={handleChange}
                                required
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Project Description:
                            </label>
                            <textarea
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                required
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                                rows={5}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Image of Project:
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                            />
                        </div>
                        <button
                            type="submit"
                            className='w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition duration-200 shadow-md shadow-white hover:scale-105   border-black '
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProjectEntry;
