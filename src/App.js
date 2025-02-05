import { CssBaseline, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navBar/index";  
import HeroSection from "../src/components/HeroSection"; 
import AboutMe from "../src/containers/about/index";
import Resume from "../src/containers/resume/index";
import Projects from '../src/containers/projects/index'

function App() {
  return (
    <>
    <CssBaseline />
    <Navbar />
    <Container>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Container>
  </>
  );
}

export default App;
