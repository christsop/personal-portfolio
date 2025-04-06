import React from 'react'
import './Navbar.css';
import Contact from "../Contact/Contact.jsx";

const Tabs = [{
    name: 'Home',
    link: '#home'
},{
    name: 'About Me',
    link: '#about'
},{
    name: 'Services',
    link: '#service'
},{
    name: 'Projects',
    link: '#project'
},{
    name: 'Contact',
    link: '#contact'
}];

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">Christos</div>
                <div className="navbar-links">
                    {Tabs.map(tab => <a href={`${tab.link}`} className="navbar-link">{tab.name}</a>)}
                </div>
                <a className="connect-button" href="https://www.linkedin.com/in/christos-tsopelas-77218911b/" target="_blank" >Connect Me</a>
            </div>
        </nav>
    )
}

export default Navbar