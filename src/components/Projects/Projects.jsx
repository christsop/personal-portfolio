import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import employeeMSImage from "../../assets/employee-ms.png";
import bookMSImage from "../../assets/admin-dashboard.png";

const projects = [
    {
        id: 1,
        nameKey: "projects.items.0.name",
        technologiesKey: "projects.items.0.technologies",
        image: employeeMSImage,
        github: "https://github.com/christsop",
    },
    {
        id: 2,
        nameKey: "projects.items.1.name",
        technologiesKey: "projects.items.1.technologies",
        image: bookMSImage,
        github: "https://github.com/christsop",
    },
    {
        id: 3,
        nameKey: "projects.items.2.name",
        technologiesKey: "projects.items.2.technologies",
        image: employeeMSImage,
        github: "https://github.com/christsop",
    },
];

const Projects = () => {
    const { t } = useTranslation(); // Use i18n translation hook

    return (
        <div className="projects-section" id="project">
            <div className="projects-container">
                <h2 className="projects-heading">{t("projects.title")}</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img
                                src={project.image}
                                alt={t(project.nameKey)}
                                className="project-image"
                            />
                            <h3 className="project-title">{t(project.nameKey)}</h3>
                            <p className="project-tech">{t(project.technologiesKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;