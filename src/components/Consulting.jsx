import React from "react";
import banner1 from "../images/banner/banner-01.png"
import banner2 from "../images/banner/banner-02.png"
import banner3 from "../images/banner/banner-03.png"
import banner4 from "../images/banner/banner-04.png"
import banner5 from "../images/banner/banner-05.png"
import banner6 from "../images/banner/banner-06.png"
import { Banner } from "./Banner";
import { useTranslation } from "react-i18next";

import { useInView, animated } from "@react-spring/web";
import { buildInteractionObserverThreshold } from "./threshold";
const Consulting = () => {
  const {t,i18n} = useTranslation()
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
      },
      to: {
        opacity: 1,
        y: 0,
        transition: "0.4s linear",
      },
    }),
    {
      rootMargin: "-4% 0px -5% 0px",
      amount: buildInteractionObserverThreshold(),
    }
  );

  const [ref1, springs1] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
        transition: "0.3s linear",
      },
    }),
    { rootMargin: "-1% 0px -4% 0px" }
  );
  const images = [banner1,banner2,banner3].map((image) => ({
    id: Math.random(),
    image,
  }));
  const imagesa = [banner4,banner5,banner6].map((image) => ({
    id: Math.random(),
    image,
  }));
  return (
    <section id="Consulting" className="flex flex-col">
      <animated.div ref={ref1} style={springs1}>
        <div className="flex flex-col justify-center items-center pb-20 pt-20">
          <p className="font-size-m text-white text-[20vw] ml-[2%]">
            {t('Consulting.title')}
          </p>
          <p className="text-sm md:text-2xl text-white w-[90%] md:w-[70%] m-6">
           {t('Consulting.des')}
          </p>
        </div>
      </animated.div>

      <animated.div ref={ref} style={springs}>
        {/* <div className="bg w-full h-[17%] absolute z-50"></div> */}
        <Banner images={i18n.language ==="ar" ? imagesa : images} speed={40000}  />
      </animated.div>
    </section>
  );
};

export default Consulting;
