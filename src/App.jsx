import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Service from "./components/Service/Service.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Projects />
    </>
  )
}

export default App
