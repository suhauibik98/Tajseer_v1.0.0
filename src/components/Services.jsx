import React from "react";
import mar0a from "../images/services/Services-01.png";
import mar0 from "../images/services/Services-02.png";

import mar1a from "../images/services/Services-03.png";
import mar1 from "../images/services/Services-04.png";

import mar2a from "../images/services/Services-05.png";
import mar2 from "../images/services/Services-06.png";

import mar3a from "../images/services/Services-07.png";
import mar3 from "../images/services/Services-08.png";

import mar4a from "../images/services/Services-09.png";
import mar4 from "../images/services/Services-10.png";
import { useInView, animated } from "@react-spring/web";
import { buildInteractionObserverThreshold } from "./threshold";
import ServicesCard from "./ServicesCard";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const ConvertTo = (x) => {
    switch (x) {
      case "mar0":
        return mar0;
      case "mar1":
        return mar1;
      case "mar2":
        return mar2;
      case "mar3":
        return mar3;
      case "mar4":
        return mar4;
      case "mar0a":
        return mar0a;
      case "mar1a":
        return mar1a;
      case "mar2a":
        return mar2a;
      case "mar3a":
        return mar3a;
      case "mar4a":
        return mar4a;

      default:
        return "notFill";
    }
  };
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
      rootMargin: "-1% 0px -5% 0px",
      amount: buildInteractionObserverThreshold(),
    }
  );
  const [ref1, springs1] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
      },
      to: {
        opacity: 1,
        y: 0,
        transition: "0.3s linear",
      },
    }),
    {
      rootMargin: "-1% 0px -4% 0px",
      amount: buildInteractionObserverThreshold(),
    }
  );

  return (
    <section id="Service">
      <div className="relative flex flex-col w-full h-full pt-24 mt-10">
        <animated.div ref={ref1} style={springs1}>
          <div className="flex flex-col justify-center items-center pb-20">
            <p className="font-size-m text-left text-white  text-[20vw] ml-[2%]">
              {t("Services.head")}
            </p>
            <p className=" text-lg md:text-2xl text-white w-[90%] md:w-[70%] m-6 text-center">
              {t("Services.des")}
            </p>
          </div>
        </animated.div>

        <animated.div ref={ref} style={springs}>
          <div className="flex justify-center items-center">
            <div className="flex  flex-wrap justify-center align-middle">
              <ServicesCard
                src={ConvertTo(t("Services.src.img0"))}
                Head={t("Services.cardHead.CONSULTING")}
                Text={t("Services.cardDes.CONSULTING")}
              />
              <ServicesCard
                src={ConvertTo(t("Services.src.img1"))}
                Head={t("Services.cardHead.MULTIMEDIA")}
                Text={t("Services.cardDes.MULTIMEDIA")}
              />
              <ServicesCard
                src={ConvertTo(t("Services.src.img2"))}
                Head={t("Services.cardHead.DEVELOPMENT")}
                Text={t("Services.cardDes.DEVELOPMENT")}
              />
              <ServicesCard
                src={ConvertTo(t("Services.src.img3"))}
                Head={t("Services.cardHead.METHODOLOGY")}
                Text={t("Services.cardDes.METHODOLOGY")}
              />
              <ServicesCard
                src={ConvertTo(t("Services.src.img4"))}
                Head={t("Services.cardHead.ENVIRONMENTS")}
                Text={t("Services.cardDes.ENVIRONMENTS")}
              />
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};
export default Services;
