import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import HomeN from "../components/HomeN";
import About from "../components/About";
import img from "../images/5551.jpg";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Consulting from "../components/Consulting";
import { useThemeContext } from "../context/themeContext";
const MainPage = () => {
  const { darkMode } = useThemeContext();
const svgRef = useRef()
  const [show, setShow] = useState(false);
  useEffect(() => {

    
    
    
    
    const timer = setTimeout(() => {
      setShow(false);
    }, 6000);
    
    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  
  
  useEffect (()=>{
    
    const handelChange=()=>{
      const scrollTob = window.scrollY;
      if(scrollTob ===0){
        svgRef.current.style.bottom ="-30rem"
        svgRef.current.style.transition ="all 5s ease-in-out"
      }
      else {svgRef.current.style.bottom ="1rem"
      svgRef.current.style.transition ="all 5s ease-in-out"

    }

    }
    window.addEventListener("scroll" , handelChange)
    return ()=> window.removeEventListener("scroll" ,handelChange)
  },[])
  return (
    <>
           {!show && (
        <>
          <div className={ ` ${darkMode ?  "mainbg1" : "mainBg"} ${"flex flex-col justify-between items-center flex-wrap w-screen overflow-x-hidden"}`}>
            <NavBar />
            <HomeN />
            <About />
            <Services />
            <Consulting />
            <Footer />

            <svg ref={svgRef} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#00407E"
                d="M41.6,-58.5C55.1,-47.5,68.1,-36.9,75.7,-22.4C83.4,-8,85.9,10.4,77.7,22.1C69.6,33.8,50.8,39,36.1,50.4C21.4,61.7,10.7,79.4,-2.8,83.2C-16.3,87.1,-32.6,77.2,-42.9,64.4C-53.3,51.6,-57.7,35.9,-65.2,19.6C-72.6,3.3,-83.2,-13.6,-78.9,-25.3C-74.7,-37.1,-55.6,-43.7,-40,-54C-24.4,-64.2,-12.2,-78.1,0.9,-79.4C14.1,-80.7,28.2,-69.4,41.6,-58.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </>
      )}
      {show && (
        <div className="bg-main-start flex justify-center items-center   ">
          <img
            src={img}
            className="absolute imgbg-start inset-0 w-full h-full object-cover"
            alt=""
          />
          <div className="sp-container"></div>
          {/* <p id="head1" class="header">
            ELEARNING COURSES DEVELOPMENT
          </p>
          <p id="head2" class="header">
          simple and awesome all the time
          </p> */}
          <p id="head3" className="header">
            ELEARNING COURSES
          </p>
          <p id="head4" className="header">
            STEM METHODOLOGY
          </p>
          <p id="head5" className="header">
            WELCOME TO TAJSEER
          </p>
        </div>
      )}
    </>
  );
};
export default MainPage;
