import React, { useState } from "react";
import './Service.css';

const services = [
    {
        "id": 1,
        "title": "Frontend Development",
        "description": "Crafting fast, responsive, and accessible interfaces using the most modern and popular libraries and frameworks.",
        "moreInfo": "Having a lot of experience with React, Vue, Angular, and many other web frameworks and libraries, I can convert ideas and design mockups into functional web applications following the best practices, ensuring consistent user experiences across platforms."
    },
    {
        "id": 2,
        "title": "Backend Development",
        "description": "Building robust backend systems using JavaScript frameworks like Node and Express.",
        "moreInfo": "I focus on crafting efficient solutions that not only work well but also make sense from both a technical and user perspective. Implementing REST APIs using MVC architecture and integrating them with both SQL and NoSQL databases. Also experienced in JWT-based auth and websocket communication."
    },
    {
        "id": 3,
        "title": "API Design & Integration",
        "description": "Designing secure REST APIs and integrating third-party services like databases and CMS.",
        "moreInfo": "Integrating the APIs with headless CMSs like Contentful and databases like Elasticsearch or Firebase with a main focus on efficiency. Also connecting them with the frontend using Axios and websockets, ensuring security, speed, and proper error handling."
    },
    {
        "id": 4,
        "title": "Performance Optimization",
        "description": "Using Lighthouse reports to improve page speed, SEO, and load times.",
        "moreInfo": "Applying many techniques like dynamic imports, image optimization, file compression, code reusability and splitting, caching, and many more best practices following the trends to boost performance."
    },
    {
        "id": 5,
        "title": "Component Libraries & Design Systems",
        "description": "Using Storybook or similar libraries for building UI components and pages in isolation.",
        "moreInfo": "Over the years, I have come to understand the need of clients to have a component library with all the application’s components, like documentation. What such libraries also solve is the ability to rapidly develop and test UI components in isolation."
    },
    {
        "id": 6,
        "title": "Testing & Deployment Automation",
        "description": "Ensuring code quality with unit/integration tests and automating deployments using CI/CD pipelines.",
        "moreInfo": "Experience with GitHub Actions, Vercel CI, and Docker-based deployment. I cover most of my code with tests using Jest and React Testing Library to ensure app stability."
    }
];


const Service = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedId(prevId => prevId === id ? null : id);
    };

    return (
        <div className="services-section" id="service">
            <div className="services-container">
                <h2 className="services-heading">My Services</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            {expandedId === service.id && (
                                <p className="service-more-info">{service.moreInfo}</p>
                            )}

                            <a className="service-link" onClick={() => toggleReadMore(service.id)}>
                                {expandedId === service.id ? "Show Less" : "Read More"}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
