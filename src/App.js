import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/navBar/index'
import Home from '../src/containers/home/index';
import About from '../src/containers/about/index';
import Resume from '../src/containers/resume/index';
import Skills from './containers/skills/index';
import Portfolio from '../src/containers/portfolio/index';
import Contact from '../src/containers/contact/index';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* particles js*/}

      {/*navbar*/}
      <Navbar/>

      {/* main page content*/}
      <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/about'  element={<About/>}/>
         <Route path='/resume'  element={<Resume/>}/>
         <Route path='/skills'  element={<Skills/>}/>
         <Route path='/portfolio'  element={<Portfolio/>}/>
         <Route path='/contact'  element={<Contact/>}/>

      </Routes>
      
    </div>
  );
}

export default App;