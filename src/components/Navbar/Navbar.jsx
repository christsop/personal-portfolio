import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = () => {
    const { t, i18n } = useTranslation(); // Translation hook
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

    // Change language function
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

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
                            onClick={() => setIsMenuOpen(false)}
                        >
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

                    {/* Language Dropdown */}
                    <select
                        className="language-dropdown"
                        onChange={(e) => changeLanguage(e.target.value)}
                        defaultValue={i18n.language}
                    >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
                {/* Hamburger Menu */}
                <div
                    className={`hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;