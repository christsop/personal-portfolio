import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Contact from '../Contact/Contact.jsx';

const Tabs = [
    {
        name: 'Home',
        link: '#home',
    },
    {
        name: 'About Me',
        link: '#about',
    },
    {
        name: 'Services',
        link: '#service',
    },
    {
        name: 'Projects',
        link: '#project',
    },
    {
        name: 'Contact',
        link: '#contact',
    },
];

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        // Check and load the theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    // Apply the theme by adding/removing `light-theme` class to `<body>`
    useEffect(() => {
        const root = document.body;
        if (isDarkTheme) {
            root.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">Christos</div>
                <div className="navbar-links">
                    {Tabs.map((tab) => (
                        <a key={tab.name} href={tab.link} className="navbar-link">
                            {tab.name}
                        </a>
                    ))}
                </div>
                <div className="navbar-right">
                    <a
                        className="connect-button"
                        href="https://www.linkedin.com/in/christos-tsopelas-77218911b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Connect Me
                    </a>
                    {/* Theme Toggle Button */}
                    <button className="theme-toggle" onClick={() => setIsDarkTheme(!isDarkTheme)}>
                        {isDarkTheme ? '☀️ Light' : '🌙 Dark'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;