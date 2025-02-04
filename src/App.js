import { CssBaseline, Container } from '@mui/material';
import './App.css';
import Navbar from '../src/components/navBar/index'
import HeroSection from './components/HeroSection';
import AboutMe from '../src/containers/about/index'
import Resume from '../src/containers/resume/index'




function App() {
  return (
    <>
       <CssBaseline/>
        <Navbar/>

        <Container>
           <HeroSection/>
           <AboutMe/>
           <Resume/>
           


        </Container>
     
    </>
    
  );
}

export default App;