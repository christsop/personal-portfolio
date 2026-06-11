import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Service.css";
import {Helmet} from "react-helmet";
import {registerStatistics} from "../../utils/utils.js";

const Service = () => {
    const { t } = useTranslation();
    const [expandedId, setExpandedId] = useState(null);
    const cardRefs = useRef([]);

    const toggleReadMore = (id) => {
        registerStatistics(`read-more-${id}`);
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    // Scroll reveal via IntersectionObserver — no extra library needed
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    // Service IDs correspond directly to i18n keys — unchanged
    const services = [
        { id: 1, titleKey: "services.frontend.title", descKey: "services.frontend.description", moreInfoKey: "services.frontend.moreInfo" },
        { id: 2, titleKey: "services.backend.title", descKey: "services.backend.description", moreInfoKey: "services.backend.moreInfo" },
        { id: 3, titleKey: "services.api.title", descKey: "services.api.description", moreInfoKey: "services.api.moreInfo" },
        { id: 4, titleKey: "services.performance.title", descKey: "services.performance.description", moreInfoKey: "services.performance.moreInfo" },
        { id: 5, titleKey: "services.components.title", descKey: "services.components.description", moreInfoKey: "services.components.moreInfo" },
        { id: 6, titleKey: "services.testing.title", descKey: "services.testing.description", moreInfoKey: "services.testing.moreInfo" },
    ];

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{t("services.seo.title")}</title>
                <meta name="description" content={t("services.seo.description")} />
                <meta name="keywords" content={t("services.seo.keywords")} />
                <meta name="author" content={t("services.seo.author")} />
            </Helmet>

            <div className="services-section" id="service">
                <div className="services-container">
                    <h2 className="services-heading">{t("services.title")}</h2>
                    <p className="services-subheading">
                        End-to-end frontend expertise — from architecture to pixel.
                    </p>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="service-card"
                                ref={(el) => (cardRefs.current[index] = el)}
                            >
                                <span className="service-id">0{service.id}</span>
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
        </>
    );
};

export default Service;