import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Service.css";

const Service = () => {
    const { t } = useTranslation();
    const [expandedId, setExpandedId] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    const services = [
        {
            id: 1,
            title: "services.items.0.title",
            description: "services.items.0.description",
            moreInfo: "services.items.0.moreInfo",
        },
        {
            id: 2,
            title: "services.items.1.title",
            description: "services.items.1.description",
            moreInfo: "services.items.1.moreInfo",
        },
        {
            id: 3,
            title: "services.items.2.title",
            description: "services.items.2.description",
            moreInfo: "services.items.2.moreInfo",
        },
        // Add remaining services translations similarly
    ];

    return (
        <div className="services-section" id="service">
            <div className="services-container">
                <h2 className="services-heading">{t("services.title")}</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <h3 className="service-title">{t(service.title)}</h3>
                            <p className="service-description">{t(service.description)}</p>
                            {expandedId === service.id && (
                                <p className="service-more-info">{t(service.moreInfo)}</p>
                            )}
                            <button className="service-link" onClick={() => toggleReadMore(service.id)}>
                                {expandedId === service.id
                                    ? t("services.showLess")
                                    : t("services.readMore")}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;