import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FaChevronDown } from "react-icons/fa";
import { useOutsideClick } from "../../hooks.jsx";
import {Helmet} from "react-helmet";
import {registerStatistics} from "../../utils/utils.js";

const LanguageDropdown = ({ currentLanguage, changeLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en", label: "English" },
        { code: "fr", label: "Français" },
        { code: "de", label: "Deutsch" },
        { code: "es", label: "Español" }
    ];

    const currentLanguageLabel =
        languages.find((lang) => lang.code === currentLanguage)?.label || "Language";

    const handleDropdownToggle = () => {
        registerStatistics('language-dropdown-click');

        setIsOpen((prevState) => !prevState);
    };

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        registerStatistics(`language-change-${langCode}`);
        setIsOpen(false); // Close dropdown after language selection
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    const ref = useOutsideClick(handleClickOutside);

    return (
        <div ref={ref} className="custom-dropdown">
            <a
                className="custom-dropdown-btn"
                onClick={handleDropdownToggle}
                aria-expanded={isOpen}>
                <span className="text">{currentLanguageLabel}</span>
                <FaChevronDown className="dropdown-icon" />
            </a>
            <ul className={`dropdown-options ${isOpen ? "open" : ""}`}>
                {languages.map((lang) => (
                    <li
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`dropdown-item ${
                            currentLanguage === lang.code ? "active" : ""
                        }`}>
                        {lang.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return (
            savedTheme === "dark" ||
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const root = document.body;
        if (isDarkTheme) {
            root.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkTheme]);

    const Tabs = [
        { name: t("navbar.home"), link: "#home" },
        { name: t("navbar.aboutMe"), link: "#about" },
        { name: t("navbar.services"), link: "#service" },
        { name: t("navbar.contact"), link: "#contact" }
    ];

    const handleClickOutside = () => {
        setIsMenuOpen(false);
    };

    const ref = useOutsideClick(handleClickOutside);

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{t("navbar.seo.title")}</title>
                <meta name="description" content={t("navbar.seo.description")} />
                <meta name="keywords" content={t("navbar.seo.keywords")} />
                <meta name="author" content={t("navbar.seo.author")} />
            </Helmet>

            <nav className="navbar">
                <div className="navbar-container">
                    {/* Brand */}
                    <div className="navbar-brand">{t("navbar.brand")}</div>

                    {/* Navbar Links */}
                    <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                        {Tabs.map((tab) => (
                            <a
                                key={tab.link}
                                href={tab.link}
                                className="navbar-link"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    registerStatistics(`navbar-click-${tab.name}`);
                                }}>
                                {tab.name}
                            </a>
                        ))}
                    </div>

                    {/* Language Dropdown and Theme Switch */}
                    <div className={`navbar-right ${isMenuOpen ? "mobile-language-theme" : ""}`}>
                        {/* Dark Mode Switch */}
                        <DarkModeSwitch
                            className="theme-switcher"
                            checked={isDarkTheme}
                            onChange={() => {
                                setIsDarkTheme(!isDarkTheme);
                                registerStatistics('theme-change');
                            }}
                            size={24}
                        />

                        {/* Modern Language Dropdown */}
                        <LanguageDropdown
                            currentLanguage={i18n.language}
                            changeLanguage={i18n.changeLanguage}
                        />
                    </div>

                    {/* Hamburger Menu (Mobile Only) */}
                    <div
                        ref={ref}
                        className={`hamburger ${isMenuOpen ? "open" : ""}`}
                        onClick={() => {
                            setIsMenuOpen((prevState) => !prevState);
                            registerStatistics('hamburger-click');
                        }}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
