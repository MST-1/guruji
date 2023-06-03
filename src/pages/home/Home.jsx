import React from 'react'
import { Footer } from '../../components/Footer.jsx'
import { Navbar } from '../../components/Navbar.jsx'
import AstroCircle from '../astrocircle/astroCircle.js'
import Card from '../card/Card.js'
import Slider from '../Slider/Slider.js'
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider/>
     
      
      <AstroCircle />
     <Card/>

      <Footer />
    </div>
  );
}
