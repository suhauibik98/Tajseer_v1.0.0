import React from "react";
import video from "../videos/Tajseer.mp4";
import { LazyLoadComponent } from "react-lazy-load-image-component";
const HomeN = () => {
  return (
    <section id="Home">
      <LazyLoadComponent>
        <div className="relative w-full h-full">
          <div className="km"></div>
          {/* <ReadMore></ReadMore> */}
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </LazyLoadComponent>
    </section>
  );
};

export default HomeN;
