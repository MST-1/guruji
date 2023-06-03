import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { video1, video2, video3, video4, video5 ,banner } from "../../../assets/imgs/imgExports.js";

import "./section1.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
 

 


import img1 from '../../../assets/casey-horner-4rDCa5hBlCs-unsplash.jpg'
import img2 from '../../../assets/dhru-j-i1e9fGrgILg-unsplash.jpg'
import img3 from '../../../assets/paul-pastourmatzis-ysA6qL8j-OI-unsplash.jpg'
import img4 from '../../../assets/simon-berger-aZjw7xI3QAA-unsplash.jpg'



export const Section_1 = () => {

    const arr=[video1,video2,video3,video4,video5,img1,img3,img2];
  return (
   <div className="container">

<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {arr.map((e)=>{
          return <SwiperSlide>
          <img src={e}  style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height:'390px',
              width:'286px',
            }}/>
        
        </SwiperSlide>
        })}
        
        
      </Swiper>




   </div>
  )
}
