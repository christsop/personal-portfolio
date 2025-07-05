import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import {Helmet} from "react-helmet";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{t("footer.seo.title")}</title>
                <meta name="description" content={t("footer.seo.description")} />
                <meta name="keywords" content={t("footer.seo.keywords")} />
                <meta name="author" content={t("footer.seo.author")} />
            </Helmet>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-info">
                            <h3 className="footer-title">{t("footer.title")}</h3>
                            <p className="footer-description">{t("footer.description")}</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-copy">{t("footer.copy", { year: new Date().getFullYear() })}</p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/chris.tsopelas.7/" target="_blank" rel="noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.linkedin.com/in/christos-tsopelas-77218911b/" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/christsop" target="_blank" rel="noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                        <div className="footer-links">
                            <a href="#" className="footer-link">
                                {t("footer.links.privacy")}
                            </a>
                            <a href="#" className="footer-link">
                                {t("footer.links.terms")}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;