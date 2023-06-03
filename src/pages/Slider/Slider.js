import React from "react";


// import { play } from "../../assets/imgs/imgExports.js";
import { sun } from "../../assets/imgs/imgExports.js";
import { star } from "../../assets/imgs/imgExports.js";
import { Section_1 } from "../home/sections/Section_1.jsx";

const Slider = () => {
  
  return (
    <div style={{backgroundColor:"#FFEFE3" , marginLeft:'80px', marginRight:'80px'}}>
    <img src={sun} className="sun-image"/>
    <h2> <img src={star}/> User Testimonal <img src={star}/></h2>

<Section_1/>
     
    </div>
  );
};

export default Slider;