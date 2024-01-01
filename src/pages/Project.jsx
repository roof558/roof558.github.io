import React from "react";
import portfolioImage from "../components/Image/portfolio_image.png";
import spamClassification from "../components/Image/spam_classifcation.png";
import jobBoardWebsite from "../components/Image/job_board_website.png";
import chiAlpha from "../components/Image/chi_alpha.png"

const Project = () => {
    const projects = [{
        id: 0,
        name: "USA Job Search",
        description: "Full-Stack Web Application using React and MongoDB",
        url: "https://github.com/jameslee0106/JBW",
        image: jobBoardWebsite
    }, {
        id: 1,
        name: "Spam Classification",
        description: "Nureal Network Design Project using TensorFlow library",
        url: "https://github.com/roof558/Spam_Classification",
        image: spamClassification
    }, {
        id: 2,
        name: "Chi Alpha: Christian Fellowship",
        description: "Mobile Application using React Native and MongoDB",
        image: chiAlpha
    }, {
        id: 3,
        name: "Portfolio Page",
        description: "Github of this page",
        url: "https://github.com/roof558/roof558.github.io",
        image: portfolioImage
    }];

    const renderProjects = projects.map(project =>(
        <div key={project.id} className="flex w-50 h-70 mb-2 mx-2 items-center justify-center">
            <div className="border p-6 max-w-xs rounded-md border-black list-none" onClick={() => 
                window.open(project.url, '_blank', 'noreferrer')}>
                <img src={project.image} alt={`Project: ${project.name}`} className="w-full h-40 object-cover" />
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <div className="text-xs">
                    {project.description}
                </div>
            </div>
        </div>)
    );

    return (
        <div className="bg-purple-200 h-screen w-screen text-center" id="project">
            <h1 className="text-5xl pt-12">
                Project Page
            </h1>
            <div className="mt-20 grid grid-cols-2 justify-items-center">{renderProjects}</div>
            
        </div>
    );
};

export default Project;