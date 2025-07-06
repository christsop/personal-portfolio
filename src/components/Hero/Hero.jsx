import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroImage from "../../assets/hero-image.png";
import "./Hero.css";
import { HiDownload } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { getGeoData, registerStatistics } from "../../utils/utils.js";

// const baseUrl = 'http://localhost:4000';
const baseUrl = 'https://my-portfolio-backend-six.vercel.app';

const Hero = () => {
    const { t } = useTranslation();
    const fullText = t("hero.role");
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [clientData, setClientData] = useState();

    const seoTitle = t("hero.seo.title");
    const seoDescription = t("hero.seo.description");
    const seoKeywords = t("hero.seo.keywords");

    useEffect(() => {
        let timeout;

        if (index < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 230);
        } else {
            timeout = setTimeout(() => {
                setDisplayedText("");
                setIndex(0);
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [index, fullText]);

    const fetchGeoDataAndRegisterLoad = async () => {
        const geoData = await getGeoData();
        const userAgent = encodeURIComponent(navigator.userAgent);
        const clientDataToStore = {...geoData, userAgent};
        setClientData(clientDataToStore);
        await registerStatistics(baseUrl, clientDataToStore, 'page-load');
    }

    useEffect(() => {
        fetchGeoDataAndRegisterLoad();
    }, []);

    const handleResumeClick = async () => {
        await registerStatistics(baseUrl, clientData, 'resume-download');
    };

    return (
        <div className="hero">
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta name="keywords" content={seoKeywords} />
                <meta property="og:title" content={t("hero.seo.ogTitle")} />
                <meta property="og:description" content={t("hero.seo.ogDescription")} />
                <meta property="og:image" content={t("hero.seo.ogImage")} />
                <meta property="og:url" content={t("hero.seo.ogUrl")} />
            </Helmet>

            <img src={HeroImage} alt={t("hero.altText")} className="hero-image" />
            <h1 className="hero-title">
                <div>
                    {t("hero.introduction")}{" "}
                    <span className="hero-highlight">{t("hero.name")}, </span>
                </div>
                <span className={`${displayedText ? "" : "height-49"} typewriter-text`}>
                    {displayedText}
                    <span className="cursor">|</span>
                </span>
            </h1>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
            <div className="hero-buttons">
                <a href="#contact" className="hero-button">
                    {t("hero.contactButton")}
                </a>
                <a
                    className="hero-button-secondary"
                    href="/resume.pdf"
                    download
                    onClick={handleResumeClick}
                >
                    {t("hero.resumeButton")} <HiDownload className="download-icon" />
                </a>
            </div>
        </div>
    );
};

export default Hero;
