import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Aboutme from '../AboutMe/Aboutme';
import './Home.css';

export default function Home() {
  return (
    <div className='home-container'>
         <Profile/>
         <Footer/>
         <Aboutme/>
        
    </div>
  )
}
