import React, { useState } from "react";
import './Service.css';

const services = [
    {
        id: 1,
        title: "Frontend Development",
        description: "Crafting fast, mobile-first user interfaces using React, Next.js, and modern styling libraries like Tailwind CSS and SCSS.",
        moreInfo: "I specialize in building intuitive, responsive UIs with an emphasis on accessibility and component reusability using frameworks like Next.js and tools like Tailwind, ensuring consistent user experiences across devices."
    },
    {
        id: 2,
        title: "Backend Development",
        description: "Building robust backend systems with Node.js and Express, including authentication, database integration, and RESTful APIs.",
        moreInfo: "I focus on secure, scalable server-side logic using MVC architecture. Implementing role-based access control, JWT-based auth, and REST APIs tied to both SQL and NoSQL data stores."
    },
    {
        id: 3,
        title: "API Design & Integration",
        description: "Designing secure REST APIs and integrating third-party services like Stripe, Firebase, or Contentful.",
        moreInfo: "I develop well-documented and efficient RESTful APIs, and integrate external APIs with seamless frontend communication using Axios and proper error handling."
    },
    {
        id: 4,
        title: "Performance Optimization",
        description: "Improving page speed, Core Web Vitals, and load times using Lighthouse audits, lazy loading, and bundling strategies.",
        moreInfo: "Using dynamic imports, image optimization, code splitting and caching strategies to boost performance for production environments and SEO."
    },
    {
        id: 5,
        title: "Component Libraries & Design Systems",
        description: "Developing scalable component systems using Storybook and atomic design.",
        moreInfo: "I build flexible component libraries that follow design tokens and naming conventions, helping teams build apps faster with visual consistency and reusable code."
    },
    {
        id: 6,
        title: "Testing & Deployment Automation",
        description: "Ensuring code quality with unit/integration tests and automating deployments using CI/CD pipelines.",
        moreInfo: "Experience with GitHub Actions, Vercel CI, and Docker-based deployment. I write test suites using Jest and React Testing Library to ensure app stability before production."
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
                        <div key={service.id} className={`service-card ${expandedId === service.id ? 'expanded' : ''}`}>
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
