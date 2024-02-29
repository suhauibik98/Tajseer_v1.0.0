import React from "react";


const ServicesCard = ({ src, Text, Head }) => {
  return (
    <>
      <div className="cardab w-[80%]  sm:w-1/2 lg:w-1/4 m-[2%] " >
        <img src={src} alt=""/>
        <div className="cardab__content">
          <p className="cardab__title text-sm md:text-2xl ">{Head}</p>
          <p className="cardab__description text-xs md:text-base ">{Text}</p>
        </div>
      </div>
    </>
  );
};  

export default ServicesCard;
