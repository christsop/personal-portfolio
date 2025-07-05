import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroImage from "../../assets/hero-image.png";
import "./Hero.css";
import { HiDownload } from "react-icons/hi";
import { Helmet } from "react-helmet";

const Hero = () => {
    const { t } = useTranslation();
    const fullText = t("hero.role");
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [geoData, setGeoData] = useState({});

    // SEO Metadata - optional usage if necessary in the React environment
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

    // Fetch country info on mount & send page-load event
    useEffect(() => {
        fetch("https://geolocation-db.com/json/")
            .then((res) => res.json())
            .then((data) => {
                setGeoData(data);
                fetch("https://my-portfolio-backend-six.vercel.app/page-load", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }).catch((err) => {
                    console.error("Failed to send page load data", err);
                });
                // Send page-load event with country & userAgent
                fetch("https://my-portfolio-backend-six.vercel.app/page-load", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        timestamp: new Date().toISOString(),
                        userAgent: navigator.userAgent,
                        country: userCountry,
                    }),
                }).catch((err) => {
                    console.error("Failed to send page load data", err);
                });
            })
            .catch(() => {
                // If geolocation fails, still send page-load event with default country
                fetch("https://my-portfolio-backend-six.vercel.app/page-load", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        timestamp: new Date().toISOString(),
                        userAgent: navigator.userAgent,
                        country: "Unknown",
                    }),
                }).catch((err) => {
                    console.error("Failed to send page load data", err);
                });
            });
    }, []);

    // Function to send resume-click event
    const handleResumeClick = async () => {

        try {
            await fetch("https://my-portfolio-backend-six.vercel.app/resume-click", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(geoData),
            });
        } catch (error) {
            console.error("Failed to send resume click data", error);
        }
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
                <span
                    className={`${displayedText ? "" : "height-49"} typewriter-text`}
                >
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
                >
                    {t("hero.resumeButton")} <HiDownload className="download-icon" />
                </a>
            </div>
        </div>
    );
};

export default Hero;