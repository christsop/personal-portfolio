import React from "react";
import './Service.css'

const services = [
    {
        id: 1,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
    },
    {
        id: 2,
        title: "Backend Development",
        description: "Creating basic server-side applications using Node.js and Express.",
    },
    {
        id: 3,
        title: "API Design & Integration",
        description: "Designing RESTful APIs and connecting frontends to backend services. Integration also with SQL and NO-SQL database.",
    }
];
const Service = () => {
    return (
        <div className="services-section" id="service">
            <div className="services-container">
                <h2 className="services-heading">My Services</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <a href="#" className="service-link">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
