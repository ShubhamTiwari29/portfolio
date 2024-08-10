import React from 'react';
import BottomNevigation from '../components/BottomNevigation';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
    const navigate = useNavigate();
    const handleLeftClick = () => {

        navigate('/project')
    };

    const handleRightClick = () => {

        navigate('/about')
    };
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white py-10">
            <div className="max-w-5xl mx-auto animate-fade-up animate-once animate-duration-[1000ms] animate-delay-100 animate-ease-in-out">
                <h1 className="text-3xl font-bold text-center mb-10">My Frontend Skills</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-right animate-once animate-duration-[1000ms] animate-delay-600 animate-ease-in-out">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6">React Development</h2>
                        <p>
                            I excel in building modern, dynamic web applications using the React framework. My expertise includes:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Developing reusable components</li>
                            <li>State management with Redux or Context API</li>
                            <li>Routing with React Router</li>
                            <li>API integration using Axios or Fetch</li>
                            <li>Optimizing performance in React applications</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6">UI/UX Design</h2>
                        <p>
                            I combine creativity and technical skills to design user-friendly interfaces. My design approach includes:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Creating responsive designs with Tailwind CSS</li>
                            <li>Ensuring accessibility and usability</li>
                            <li>Implementing animations and transitions</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6">Version Control & Collaboration</h2>
                        <p>
                            I'm building a strong foundation in version control with Git . My experience includes:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Understanding basic Git commands like <code>git clone</code>, <code>git add</code>, <code>git commit</code>, and <code>git push</code></li>
                            <li>Managing codebases with Git and GitHub</li>



                        </ul>
                    </div>
                    <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6">Project Highlights</h2>
                        <p>
                            I’ve applied my skills across various projects, including:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Creating a responsive personal portfolio website using React</li>
                            <li>Integrating Appwrite backend services for authentication and data management</li>
                            <li>Building responsive e-commerce platforms</li>
                            <li>Using Appwrite as a backend-as-a-service (BaaS) platform</li>
                            <li>Deploying applications using Vercel</li>



                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:hidden pt-4'><BottomNevigation
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
            /></div>
        </div>
    );
}

export default Skills;

