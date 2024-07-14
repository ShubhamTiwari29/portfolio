import React from 'react';

const About = () => {
    return (
        <div className=" mx-auto   bg-gradient-to-r from-slate-900 to-slate-700 text-white">
            <div className=' py-8 px-4 md:container  mx-auto animate-fade-up animate-delay-300 animate-ease-in '>

                <h1 className="text-3xl font-bold pb-3  animate-fade-left animate-delay-300 animate-ease-in text-center">About Me</h1>
                <hr className='w-[28%] mx-auto border-solid pb-2 mb-3 border-white font-extrabold' />

                <div className='xl:bg-gradient-to-r from-slate-900 to-slate-700 md:rounded-md xl:pt-5 xl:pb-7 xl:mb-9 xl:px-7 xl:shadow-xl '>
                    <p className='text-left animate-fade-up animate-delay-300 animate-ease-in text-gray-300  mb-2'>Hello! I'm Shubham Tiwari, a passionate frontend developer with a strong foundation in modern web technologies. I specialize in creating engaging, responsive, and user-friendly web applications. With a keen eye for detail and a commitment to delivering high-quality work, I aim to enhance user experiences through innovative design and efficient code.</p>

                    <h2 className='text-2xl py-3 animate-fade-left animate-delay-300 animate-ease-in'> My Journey</h2>
                    <p className='text-left animate-fade-up animate-delay-300 animate-ease-in text-gray-300 mb-2'>I graduated in 2024 with a B.Tech in Electronics and Communication Engineering, which provided me with a solid technical background and problem-solving skills. During my studies, I discovered my passion for web development and decided to dive deeper into this dynamic field.</p>

                    <h2 className='text-2xl py-3  animate-fade-left animate-delay-300 animate-ease-in'> My Skills</h2>

                    <p className='text-left pb-2 animate-fade-up animate-delay-300 animate-ease-in text-gray-300 mb-2'> <strong>HTML & CSS:</strong> I have a thorough understanding of HTML and CSS, which are the building blocks of web development. I use these technologies to create clean, semantic, and accessible web pages.</p>

                    <p className='text-left pb-2 animate-fade-up animate-delay-300 animate-ease-in text-gray-300 mb-2'> <strong>JavaScript:</strong> JavaScript is my go-to language for adding interactivity and dynamic features to websites. I am proficient in using vanilla JavaScript as well as various libraries and frameworks.</p>

                    <p className='text-left pb-2 animate-fade-up animate-delay-300 animate-ease-in text-gray-300 mb-2'>  <strong>React:</strong> I specialize in React, a powerful JavaScript library for building user interfaces.With React, I create efficient, modular, and maintainable code, ensuring a seamless user experience.</p >

                    <p className='text-left pb-2 animate-fade-up animate-delay-300 animate-ease-in text-gray-300 mb-2'> <strong>Appwrite:</strong> For backend services, I utilize Appwrite, a versatile backend - as - a - service platform.It helps streamline the development process by providing essential backend functionalities, allowing me to focus more on the frontend.</p >
                    <h2 className='text-2xl py-3 animate-fade-left animate-delay-300 animate-ease-in'>My Philosophy</h2>
                    <p className='text-left animate-fade-up animate-delay-300 animate-ease-in text-gray-300 mb-2'>In the world of web development, I believe that the user experience is paramount. My goal is to create websites and applications that are not only visually appealing but also intuitive and easy to navigate. I stay updated with the latest trends and technologies to ensure that my work is modern and up-to-date.</p>

                    <h2 className='text-2xl py-3 animate-fade-left animate-delay-300 animate-ease-in'>My Projects</h2>
                    <p className='text-left animate-fade-up animate-delay-300 animate-ease-in text-gray-300 mb-2'>Throughout my career, I have worked on various projects, ranging from small personal websites to complex web applications. Each project has taught me something new and helped me grow as a developer. I take pride in my ability to adapt to different challenges and find innovative solutions.</p>

                    Let's Connect
                    I am always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out. Let's create something amazing together!
                </div>

            </div>
        </div>
    );
};

export default About;
