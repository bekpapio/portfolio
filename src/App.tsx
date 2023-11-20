import "./App.css";
import Hero from "./componenets/Hero";
import NavBar from "./componenets/NavBar";
import AboutMe from "./componenets/AboutMe";
import Service from "./componenets/Service";
import Skills from "./componenets/skills";
import Projects from "./componenets/projects";

function App() {
  return (
    <>
      <div className="container space-y-6">
        <NavBar/>
        <Hero />
        <AboutMe/>
        <Service/>
        <Skills/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
