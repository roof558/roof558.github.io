import React from "react";

const AboutMe = () => {
    return (
        <div className="bg-purple-200 h-screen w-screen" id="about">
            <h1 className="text-5xl pt-12 text-center">
                About Me
            </h1>
            <div className="flex pt-6 text-xl text-left list-none ml-72">
                <ul className="text-left list-none mt-20">
                    <li className="mb-2">Name: Dongjoon (Justin) Lee</li>
                    <li className="mb-2">Graudated School: Washington State University</li>
                    <li className="mb-2">Bachelor's Degree: Computer Science</li>
                    <li className="mb-2">Email: roof558@gmail.com</li>
                    <li className="mb-2">Phone: 425-273-8798</li>
                    <li className="mb-2">Github:
                        <a className="text-blue-700 underline ml-2" href="https://github.com/roof558?tab=repositories" target="_blank"  rel="noopener noreferrer">
                            https://github.com/roof558?tab=repositories
                        </a>
                    </li>
                    <li>LinkedIn: 
                        <a className="text-blue-700 underline ml-2" href="https://www.linkedin.com/in/dongjoon-lee-a11bb6161/" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/in/dongjoon-lee-a11bb6161/                        
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default AboutMe;