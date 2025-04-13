import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Service.css";

const Service = () => {
    const { t } = useTranslation(); // Access the i18n translation function
    const [expandedId, setExpandedId] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    // Service IDs will now correspond directly to i18n keys
    const services = [
        { id: 1, titleKey: "services.frontend.title", descKey: "services.frontend.description", moreInfoKey: "services.frontend.moreInfo" },
        { id: 2, titleKey: "services.backend.title", descKey: "services.backend.description", moreInfoKey: "services.backend.moreInfo" },
        { id: 3, titleKey: "services.api.title", descKey: "services.api.description", moreInfoKey: "services.api.moreInfo" },
        { id: 4, titleKey: "services.performance.title", descKey: "services.performance.description", moreInfoKey: "services.performance.moreInfo" },
        { id: 5, titleKey: "services.components.title", descKey: "services.components.description", moreInfoKey: "services.components.moreInfo" },
        { id: 6, titleKey: "services.testing.title", descKey: "services.testing.description", moreInfoKey: "services.testing.moreInfo" },
    ];

    return (
        <div className="services-section" id="service">
            <div className="services-container">
                <h2 className="services-heading">{t("services.title")}</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <h3 className="service-title">{t(service.titleKey)}</h3>
                            <p className="service-description">{t(service.descKey)}</p>

                            {expandedId === service.id && (
                                <p className="service-more-info">{t(service.moreInfoKey)}</p>
                            )}

                            <a
                                className="service-link"
                                onClick={() => toggleReadMore(service.id)}
                            >
                                {expandedId === service.id
                                    ? t("services.readLess")
                                    : t("services.readMore")}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;