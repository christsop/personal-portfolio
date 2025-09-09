import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Service from "./components/Service/Service.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";
import { getGeoDataAndStoreGlobaly, registerStatistics } from "./utils/utils.js";

function App() {

    const fetchGeoData = async () => {
        await getGeoDataAndStoreGlobaly();
        registerStatistics('page-load');
    }

    useEffect(() => {
        fetchGeoData();
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <Service />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
