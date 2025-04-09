import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Tabs = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "About Me",
        link: "#about",
    },
    {
        name: "Services",
        link: "#service",
    },
    {
        name: "Projects",
        link: "#project",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        // Check and load the theme from localStorage
        const savedTheme = localStorage.getItem("theme");
        return (
            savedTheme === "dark" ||
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Apply the theme by adding/removing `light-theme` class to `<body>`
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

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">Christos</div>

                {/* Hamburger Menu for Small Screens */}
                <div
                    className={`hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* Navbar Links */}
                <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                    {Tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.link}
                            className="navbar-link"
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            {tab.name}
                        </a>
                    ))}
                    <DarkModeSwitch
                        style={{ marginLeft: "15px" }}
                        checked={isDarkTheme}
                        onChange={() => setIsDarkTheme(!isDarkTheme)}
                        size={30}
                    />
                </div>

                {/* Connect Button on Larger Screens */}
                <div className="navbar-right">
                    <a
                        className="connect-button"
                        href="https://www.linkedin.com/in/christos-tsopelas-77218911b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Connect Me
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;