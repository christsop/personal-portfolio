import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Service from "./components/Service/Service.jsx";
import About from "./components/About/About.jsx";
// import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import EventList from "./components/EventsList/EventsList.jsx";
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
      {/*<Projects />*/}
      <Contact />
      <Footer />
    </>
  )
}

export default App
