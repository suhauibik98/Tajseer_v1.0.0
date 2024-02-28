import React from "react";
import video from "../videos/Gemba66.mp4";
const HomeN = () => {
  
  return (
    <section id="Home">
      <div  className="relative w-full h-full">
        <div className="km"></div>
        {/* <ReadMore></ReadMore> */}
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HomeN;
