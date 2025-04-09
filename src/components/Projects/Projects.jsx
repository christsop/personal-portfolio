import React from "react";
import './Projects.css';
import employeeMSImage from "../../assets/employee-ms.png";
import bookMSImage from "../../assets/admin-dashboard.png";

const projects = [
    {
        id: 1,
        name: "Employee MS",
        technologies: "MERN Stack",
        image: employeeMSImage,
        github: "https://github.com/YouafKhan1",
    },
    {
        id: 2,
        name: "Blog App",
        technologies: "MERN Stack",
        image: bookMSImage,
        github: "https://github.com/YouafKhan1",
    },
    {
        id: 3,
        name: "Book MS",
        technologies: "MERN Stack",
        image: employeeMSImage,
        github: "https://github.com/YouafKhan1",
    },
];

const Projects = () => {
    return (
        <div className="projects-section" id="project">
            <div className="projects-container">
                <h2 className="projects-heading">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="project-image"
                            />
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-tech">{project.technologies}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
