import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FaChevronDown } from "react-icons/fa";

const LanguageDropdown = ({ currentLanguage, changeLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en", label: "English" },
        { code: "fr", label: "Français" },
        { code: "de", label: "Deutsch" },
        { code: "es", label: "Español" },
    ];

    const currentLanguageLabel =
        languages.find((lang) => lang.code === currentLanguage)?.label || "Language";

    const handleDropdownToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false); // Close dropdown after language selection
    };

    return (
        <div className="custom-dropdown">
            <a
                className="custom-dropdown-btn"
                onClick={handleDropdownToggle}
                aria-expanded={isOpen}>
                {currentLanguageLabel} <FaChevronDown className="dropdown-icon" />
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
        { name: t("navbar.projects"), link: "#project" },
        { name: t("navbar.contact"), link: "#contact" },
    ];

    return (
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
                            onClick={() => setIsMenuOpen(false)}>
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
                        onChange={() => setIsDarkTheme(!isDarkTheme)}
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
                    className={`hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen((prevState) => !prevState)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;