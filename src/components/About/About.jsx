import React from "react";
import { useTranslation } from "react-i18next";
import AboutImage from "../../assets/hero-image.png";
import "./About.css";

const About = () => {
    const { t } = useTranslation(); // Use i18n translation hook

    return (
        <div className="about-section" id="about">
            <div className="about-container">
                <h2 className="about-title">{t("about.title")}</h2>
                <div className="about-content">
                    <img src={AboutImage} alt={t("about.altText")} className="about-image" />
                    <div className="about-text">
                        <p className="about-description">
                            {t("about.description")}
                        </p>
                        <div className="skill-list">
                            <div className="skill-item">
                                <label htmlFor="javascript" className="skill-label">{t("about.skills.javascript")}</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-11-12"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <label htmlFor="reactjs" className="skill-label">{t("about.skills.react")}</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-11-12"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <label htmlFor="vue" className="skill-label">{t("about.skills.vue")}</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-10-12"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <label htmlFor="angular" className="skill-label">{t("about.skills.angular")}</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-10-12"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <label htmlFor="nodejs" className="skill-label">{t("about.skills.node")}</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-9-12"></div>
                                </div>
                            </div>
                        </div>
                        <div className="about-stats">
                            <div>
                                <h3 className="stat-number">{t("about.stats.experience.number")}</h3>
                                <p>{t("about.stats.experience.label")}</p>
                            </div>
                            <div>
                                <h3 className="stat-number">{t("about.stats.projects.number")}</h3>
                                <p>{t("about.stats.projects.label")}</p>
                            </div>
                            <div>
                                <h3 className="stat-number">{t("about.stats.companies.number")}</h3>
                                <p>{t("about.stats.companies.label")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;