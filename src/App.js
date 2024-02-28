import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
//import ToggleButton from "react-theme-toggle-button";
// import "./styles.css";
//import "react-theme-toggle-button/dist/index.css";

// import { animateScroll as scroll } from 'react-scroll';

function App() {
  // useEffect(() => {
  //   let requestId;

  //   const handleWheel = (event) => {
  //     event.preventDefault();

  //     const wheelDelta = event.deltaY || event.detail || event.wheelDelta;
  //     const customScrollAmount = 1; // Adjust this value to change the scroll speed
  //     const targetScrollTop = window.pageYOffset + wheelDelta * customScrollAmount;

  //     cancelAnimationFrame(requestId);
  //     animateScroll(targetScrollTop);
  //   };

  //   const animateScroll = (targetScrollTop) => {
  //     const scrollStep = 8; // Adjust this value to change the smoothness
  //     const currentScrollTop = window.pageYOffset;

  //     if (Math.abs(currentScrollTop - targetScrollTop) <= scrollStep) {
  //       window.scrollTo(0, targetScrollTop);
  //       return;
  //     }

  //     if (currentScrollTop < targetScrollTop) {
  //       window.scrollTo(0, currentScrollTop + scrollStep);
  //     } else {
  //       window.scrollTo(0, currentScrollTop - scrollStep);
  //     }

  //     requestId = requestAnimationFrame(() => animateScroll(targetScrollTop));
  //   };

  //   // Add event listener for the wheel event
  //   window.addEventListener('wheel', handleWheel, { passive: false });

  //   // Cleanup function
  //   return () => {
  //     // Remove the event listener when the component unmounts
  //     window.removeEventListener('wheel', handleWheel);
  //     cancelAnimationFrame(requestId);
  //   };
  // }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/EN" element={<MainPage />}></Route>
          <Route path="/AR" element={<jkjh  />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
